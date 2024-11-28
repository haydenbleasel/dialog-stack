import { Button } from '@/components/ui/button';
import {
  DialogStack,
  DialogStackBody,
  DialogStackContent,
  DialogStackDescription,
  DialogStackFooter,
  DialogStackHeader,
  DialogStackNext,
  DialogStackOverlay,
  DialogStackPrevious,
  DialogStackTitle,
  DialogStackTrigger,
} from '@/registry/dialog-stack';

export const Demo = () => (
  <div className="not-prose flex aspect-video items-center justify-center rounded-lg border bg-secondary">
    <DialogStack clickable>
      <DialogStackTrigger asChild>
        <Button variant="outline">Show me</Button>
      </DialogStackTrigger>
      <DialogStackOverlay />

      <DialogStackBody>
        <DialogStackContent>
          <DialogStackHeader>
            <DialogStackTitle>Title</DialogStackTitle>
            <DialogStackDescription>Description</DialogStackDescription>
          </DialogStackHeader>
          <p>Content</p>
          <DialogStackFooter>
            <DialogStackNext>Next</DialogStackNext>
          </DialogStackFooter>
        </DialogStackContent>

        <DialogStackContent>
          <DialogStackHeader>
            <DialogStackTitle>Title</DialogStackTitle>
            <DialogStackDescription>Description</DialogStackDescription>
          </DialogStackHeader>
          <p>Content</p>
          <DialogStackFooter>
            <DialogStackPrevious>Previous</DialogStackPrevious>
            <DialogStackNext>Next</DialogStackNext>
          </DialogStackFooter>
        </DialogStackContent>

        <DialogStackContent>
          <DialogStackHeader>
            <DialogStackTitle>Title</DialogStackTitle>
            <DialogStackDescription>Description</DialogStackDescription>
          </DialogStackHeader>
          <p>Content</p>
          <DialogStackFooter>
            <DialogStackPrevious>Previous</DialogStackPrevious>
            <DialogStackNext>Next</DialogStackNext>
          </DialogStackFooter>
        </DialogStackContent>

        <DialogStackContent>
          <DialogStackHeader>
            <DialogStackTitle>Title</DialogStackTitle>
            <DialogStackDescription>Description</DialogStackDescription>
          </DialogStackHeader>
          <p>Content</p>
          <DialogStackFooter>
            <DialogStackPrevious>Previous</DialogStackPrevious>
            <DialogStackNext>Next</DialogStackNext>
          </DialogStackFooter>
        </DialogStackContent>

        <DialogStackContent>
          <DialogStackHeader>
            <DialogStackTitle>Title</DialogStackTitle>
            <DialogStackDescription>Description</DialogStackDescription>
          </DialogStackHeader>
          <p>Content</p>
          <DialogStackFooter>
            <DialogStackPrevious>Previous</DialogStackPrevious>
            <DialogStackNext>Next</DialogStackNext>
          </DialogStackFooter>
        </DialogStackContent>

        <DialogStackContent>
          <DialogStackHeader>
            <DialogStackTitle>Title</DialogStackTitle>
            <DialogStackDescription>Description</DialogStackDescription>
          </DialogStackHeader>
          <p>Content</p>
          <DialogStackFooter>
            <DialogStackPrevious>Previous</DialogStackPrevious>
          </DialogStackFooter>
        </DialogStackContent>
      </DialogStackBody>
    </DialogStack>
  </div>
);
