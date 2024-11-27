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
  const [totalDialogs, setTotalDialogs] = useState(
    React.Children.count(children)
  );
  const [isOpen, setIsOpen] = useState(open);

  return (
    <DialogStackContext.Provider
      value={{
        activeIndex,
        setActiveIndex,
        totalDialogs,
        setTotalDialogs,
        isOpen,
        setIsOpen,
        clickable,
      }}
    >
      <div className={cn('dialog-stack', className)} {...props}>
        {children}
      </div>
    </DialogStackContext.Provider>
  );
};

export const DialogStackTrigger = (
  {
    children,
    className,
    onClick,
    ...props
  }: React.ButtonHTMLAttributes<HTMLButtonElement>,
  ref: React.Ref<HTMLButtonElement>
) => {
  const context = useContext(DialogStackContext);

  if (!context) {
    throw new Error('DialogStackTrigger must be used within a DialogStack');
  }

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    context.setIsOpen(true);
    onClick?.(e);
  };

  return (
    <button
      ref={ref}
      onClick={handleClick}
      className={cn(
        'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium',
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

export const DialogStackOverlay = (
  { className, ...props }: React.HTMLAttributes<HTMLDivElement>,
  ref: React.Ref<HTMLDivElement>
) => {
  const context = useContext(DialogStackContext);

  if (!context) {
    throw new Error('DialogStackOverlay must be used within a DialogStack');
  }

  if (!context.isOpen) return null;

  return (
    <div
      ref={ref}
      className={cn(
        'fixed inset-0 z-50 bg-black/80',
        'data-[state=open]:animate-in data-[state=closed]:animate-out',
        'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
        className
      )}
      {...props}
    />
  );
};

export const DialogStackBody = (
  { children, className, ...props }: React.HTMLAttributes<HTMLDivElement>,
  ref: React.Ref<HTMLDivElement>
) => {
  const context = useContext(DialogStackContext);

  if (!context) {
    throw new Error('DialogStackBody must be used within a DialogStack');
  }

  if (!context.isOpen) return null;

  const childrenArray = React.Children.toArray(children);

  return (
    <div
      ref={ref}
      className={cn(
        'fixed inset-0 z-50 w-full flex flex-col justify-center items-center',
        className
      )}
      {...props}
    >
      {childrenArray.map((child, index) => {
        const distanceFromActive = index - context.activeIndex;
        const scale = 1 - Math.abs(distanceFromActive) * 0.1;
        const translateY =
          distanceFromActive < 0
            ? `${Math.abs(distanceFromActive) * 20}px`
            : `-${Math.abs(distanceFromActive) * 20}px`;

        return React.cloneElement(child as React.ReactElement, {
          key: `dialog-${index}`,
          index,
          style: {
            transform: `scale(${scale}) translateY(${translateY})`,
            width: '100%',
            maxWidth: 'lg',
            zIndex: 50 - Math.abs(context.activeIndex - (index ?? 0)),
          },
        });
      })}
    </div>
  );
};

export const DialogStackContent = (
  {
    children,
    className,
    index,
    ...props
  }: React.HTMLAttributes<HTMLDivElement> & { index?: number },
  ref: React.Ref<HTMLDivElement>
) => {
  const context = useContext(DialogStackContext);

  if (!context) {
    throw new Error('DialogStackContent must be used within a DialogStack');
  }

  if (!context.isOpen) return null;

  const handleClick = () => {
    if (context.clickable && context.activeIndex !== index) {
      context.setActiveIndex(index ?? 0);
    }
  };

  return (
    <div
      ref={ref}
      onClick={handleClick}
      className={cn(
        'w-full max-w-lg bg-background p-6 shadow-lg rounded-lg border h-auto transition-all',
        context.activeIndex === index
          ? 'max-h-none z-50 scale-100'
          : 'max-h-4 overflow-hidden',
        context.clickable && context.activeIndex !== index
          ? 'cursor-pointer'
          : '',
        className
      )}
      {...props}
    >
      {context.activeIndex === index ? children : null}
    </div>
  );
};

export const DialogStackTitle = (
  { children, className, ...props }: React.HTMLAttributes<HTMLHeadingElement>,
  ref: React.Ref<HTMLHeadingElement>
) => {
  return (
    <h2
      ref={ref}
      className={cn(
        'text-lg font-semibold leading-none tracking-tight',
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
};

export const DialogStackDescription = (
  { children, className, ...props }: React.HTMLAttributes<HTMLParagraphElement>,
  ref: React.Ref<HTMLParagraphElement>
) => {
  return (
    <p
      ref={ref}
      className={cn('text-sm text-muted-foreground', className)}
      {...props}
    >
      {children}
    </p>
  );
};

export const DialogStackFooter = (
  { children, className, ...props }: React.HTMLAttributes<HTMLDivElement>,
  ref: React.Ref<HTMLDivElement>
) => {
  return (
    <div
      ref={ref}
      className={cn('flex items-center justify-end space-x-2 pt-4', className)}
      {...props}
    >
      {children}
    </div>
  );
};

export const DialogStackNext = ({
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
        'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
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
        'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
        className
      )}
      disabled={context.activeIndex <= 0}
      {...props}
    >
      {children || 'Previous'}
    </button>
  );
};
