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

export default function Home() {
  return (
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
  );
}
