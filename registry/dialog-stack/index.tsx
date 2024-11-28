'use client';

import { cn } from '@/lib/utils';
import React, { createContext, useContext, useState } from 'react';

type DialogStackContextType = {
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  totalDialogs: number;
  setTotalDialogs: React.Dispatch<React.SetStateAction<number>>;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  clickable: boolean;
};

const DialogStackContext = createContext<DialogStackContextType>({
  activeIndex: 0,
  setActiveIndex: () => {},
  totalDialogs: 0,
  setTotalDialogs: () => {},
  isOpen: false,
  setIsOpen: () => {},
  clickable: false,
});

type DialogStackChildProps = {
  index?: number;
};

export const DialogStack = ({
  children,
  className,
  open = false,
  clickable = false,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  open?: boolean;
  clickable?: boolean;
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(open);

  return (
    <DialogStackContext.Provider
      value={{
        activeIndex,
        setActiveIndex,
        totalDialogs: 0,
        setTotalDialogs: () => {},
        isOpen,
        setIsOpen,
        clickable,
      }}
    >
      <div className={className} {...props}>
        {children}
      </div>
    </DialogStackContext.Provider>
  );
};

export const DialogStackTrigger = ({
  children,
  className,
  onClick,
  asChild,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { asChild?: boolean }) => {
  const context = useContext(DialogStackContext);

  if (!context) {
    throw new Error('DialogStackTrigger must be used within a DialogStack');
  }

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    context.setIsOpen(true);
    onClick?.(e);
  };

  if (asChild && children) {
    return React.cloneElement(children as React.ReactElement, {
      onClick: handleClick,
      className: cn(
        className,
        (children as React.ReactElement).props.className
      ),
      ...props,
    });
  }

  return (
    <button
      onClick={handleClick}
      className={cn(
        'inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium text-sm',
        'ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2',
        'focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
        'bg-primary text-primary-foreground hover:bg-primary/90',
        'h-10 px-4 py-2',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export const DialogStackOverlay = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  const context = useContext(DialogStackContext);

  if (!context) {
    throw new Error('DialogStackOverlay must be used within a DialogStack');
  }

  if (!context.isOpen) {
    return null;
  }

  return (
    // biome-ignore lint/nursery/noStaticElementInteractions: "This is a clickable overlay"
    <div
      className={cn(
        'fixed inset-0 z-50 bg-black/80',
        'data-[state=closed]:animate-out data-[state=open]:animate-in',
        'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
        className
      )}
      onClick={() => context.setIsOpen(false)}
      {...props}
    />
  );
};

export const DialogStackBody = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  children:
    | React.ReactElement<DialogStackChildProps>[]
    | React.ReactElement<DialogStackChildProps>;
}) => {
  const context = useContext(DialogStackContext);
  const [totalDialogs, setTotalDialogs] = useState(
    React.Children.count(children)
  );

  if (!context) {
    throw new Error('DialogStackBody must be used within a DialogStack');
  }

  if (!context.isOpen) {
    return null;
  }

  return (
    <DialogStackContext.Provider
      value={{
        ...context,
        totalDialogs,
        setTotalDialogs,
      }}
    >
      <div
        className={cn(
          'fixed inset-0 z-50 mx-auto flex w-full max-w-lg flex-col items-center justify-center',
          className
        )}
        {...props}
      >
        <div className="relative flex w-full flex-col items-center justify-center">
          {React.Children.map(children, (child, index) =>
            React.isValidElement(child)
              ? React.cloneElement(child, { index })
              : child
          )}
        </div>
      </div>
    </DialogStackContext.Provider>
  );
};

export const DialogStackContent = ({
  children,
  className,
  index = 0,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { index?: number }) => {
  const context = useContext(DialogStackContext);

  if (!context) {
    throw new Error('DialogStackContent must be used within a DialogStack');
  }

  if (!context.isOpen) {
    return null;
  }

  const handleClick = () => {
    if (context.clickable && context.activeIndex !== index) {
      context.setActiveIndex(index ?? 0);
    }
  };

  const distanceFromActive = index - context.activeIndex;
  const translateY =
    distanceFromActive < 0
      ? `-${Math.abs(distanceFromActive) * 10}px`
      : `${Math.abs(distanceFromActive) * 10}px`;

  return (
    // biome-ignore lint/nursery/noStaticElementInteractions: "This is a clickable dialog"
    <div
      onClick={handleClick}
      className={cn(
        'h-auto w-full rounded-lg border bg-background p-6 shadow-lg transition-all duration-300',

        className
      )}
      style={{
        top: 0,
        transform: `translateY(${translateY})`,
        width: `calc(100% - ${Math.abs(distanceFromActive) * 10}px)`,
        zIndex: 50 - Math.abs(context.activeIndex - (index ?? 0)),
        position: distanceFromActive ? 'absolute' : 'relative',
        opacity: distanceFromActive > 0 ? 0 : 1,
        cursor:
          context.clickable && context.activeIndex !== index
            ? 'pointer'
            : 'default',
      }}
      {...props}
    >
      <div
        className={cn(
          'h-full w-full transition-all duration-300',
          context.activeIndex !== index &&
            'pointer-events-none select-none opacity-0'
        )}
      >
        {children}
      </div>
    </div>
  );
};

export const DialogStackTitle = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h2
    className={cn(
      'font-semibold text-lg leading-none tracking-tight',
      className
    )}
    {...props}
  >
    {children}
  </h2>
);

export const DialogStackDescription = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p className={cn('text-muted-foreground text-sm', className)} {...props}>
    {children}
  </p>
);

export const DialogStackFooter = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn('flex items-center justify-end space-x-2 pt-4', className)}
    {...props}
  >
    {children}
  </div>
);

export const DialogStackNext = ({
  children,
  className,
  asChild,
  ...props
}: {
  asChild?: boolean;
} & React.HTMLAttributes<HTMLButtonElement>) => {
  const context = useContext(DialogStackContext);

  if (!context) {
    throw new Error('DialogStackNext must be used within a DialogStack');
  }

  const handleNext = () => {
    if (context.activeIndex < context.totalDialogs - 1) {
      context.setActiveIndex(context.activeIndex + 1);
    }
  };

  if (asChild && children) {
    return React.cloneElement(children as React.ReactElement, {
      onClick: handleNext,
      className: cn(
        className,
        (children as React.ReactElement).props.className
      ),
      ...props,
    });
  }

  return (
    <button
      type="button"
      onClick={handleNext}
      className={cn(
        'inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
        className
      )}
      disabled={context.activeIndex >= context.totalDialogs - 1}
      {...props}
    >
      {children || 'Next'}
    </button>
  );
};

export const DialogStackPrevious = ({
  children,
  className,
  asChild,
  ...props
}: {
  children?: React.ReactNode;
  className?: string;
  asChild?: boolean;
} & React.HTMLAttributes<HTMLButtonElement>) => {
  const context = useContext(DialogStackContext);

  if (!context) {
    throw new Error('DialogStackPrevious must be used within a DialogStack');
  }

  const handlePrevious = () => {
    if (context.activeIndex > 0) {
      context.setActiveIndex(context.activeIndex - 1);
    }
  };

  if (asChild && children) {
    return React.cloneElement(children as React.ReactElement, {
      onClick: handlePrevious,
      className: cn(
        className,
        (children as React.ReactElement).props.className
      ),
      ...props,
    });
  }

  return (
    <button
      type="button"
      onClick={handlePrevious}
      className={cn(
        'inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
        className
      )}
      disabled={context.activeIndex <= 0}
      {...props}
    >
      {children || 'Previous'}
    </button>
  );
};
