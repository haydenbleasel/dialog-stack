import { DialogHeader } from '@/components/ui/dialog';
import {
  DialogStack,
  DialogStackBody,
  DialogStackContent,
  DialogStackDescription,
  DialogStackFooter,
  DialogStackNext,
  DialogStackOverlay,
  DialogStackPrevious,
  DialogStackTitle,
  DialogStackTrigger,
} from '@/registry/dialog-stack';

const Home = () => (
  <>
    <header className="flex justify-center items-center py-12">
      <h1 className="max-w-2xl text-center font-bold text-3xl leading-tight tracking-[-0.06em] md:text-6xl lg:leading-[1.1]">
        Beautiful stacked dialogs for shadcn/ui
      </h1>
    </header>
    <div className="bg-secondary">
      <DialogStack clickable>
        <DialogStackTrigger>Open</DialogStackTrigger>
        <DialogStackOverlay />

        <DialogStackBody>
          <DialogStackContent>
            <DialogHeader>
              <DialogStackTitle>Title</DialogStackTitle>
              <DialogStackDescription>Description</DialogStackDescription>
            </DialogHeader>
            <p>Content</p>
            <DialogStackFooter>
              <DialogStackNext>Next</DialogStackNext>
            </DialogStackFooter>
          </DialogStackContent>

          <DialogStackContent>
            <DialogHeader>
              <DialogStackTitle>Title</DialogStackTitle>
              <DialogStackDescription>Description</DialogStackDescription>
            </DialogHeader>
            <p>Content</p>
            <DialogStackFooter>
              <DialogStackPrevious>Previous</DialogStackPrevious>
              <DialogStackNext>Next</DialogStackNext>
            </DialogStackFooter>
          </DialogStackContent>

          <DialogStackContent>
            <DialogHeader>
              <DialogStackTitle>Title</DialogStackTitle>
              <DialogStackDescription>Description</DialogStackDescription>
            </DialogHeader>
            <p>Content</p>
            <DialogStackFooter>
              <DialogStackPrevious>Previous</DialogStackPrevious>
              <DialogStackNext>Next</DialogStackNext>
            </DialogStackFooter>
          </DialogStackContent>

          <DialogStackContent>
            <DialogHeader>
              <DialogStackTitle>Title</DialogStackTitle>
              <DialogStackDescription>Description</DialogStackDescription>
            </DialogHeader>
            <p>Content</p>
            <DialogStackFooter>
              <DialogStackPrevious>Previous</DialogStackPrevious>
              <DialogStackNext>Next</DialogStackNext>
            </DialogStackFooter>
          </DialogStackContent>

          <DialogStackContent>
            <DialogHeader>
              <DialogStackTitle>Title</DialogStackTitle>
              <DialogStackDescription>Description</DialogStackDescription>
            </DialogHeader>
            <p>Content</p>
            <DialogStackFooter>
              <DialogStackPrevious>Previous</DialogStackPrevious>
              <DialogStackNext>Next</DialogStackNext>
            </DialogStackFooter>
          </DialogStackContent>

          <DialogStackContent>
            <DialogHeader>
              <DialogStackTitle>Title</DialogStackTitle>
              <DialogStackDescription>Description</DialogStackDescription>
            </DialogHeader>
            <p>Content</p>
            <DialogStackFooter>
              <DialogStackPrevious>Previous</DialogStackPrevious>
            </DialogStackFooter>
          </DialogStackContent>
        </DialogStackBody>
      </DialogStack>
    </div>
  </>
);

export default Home;
