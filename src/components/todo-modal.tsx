import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { addTodo } from "@/actions/todo-actions";

import SubmitForm from "./submit-form";

interface IProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export function TodoModal({ isOpen, setIsOpen }: IProps) {
  

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <form
        action={async (formData) => {
          await addTodo(formData);
          
          setIsOpen(false);
        }}
      >
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Todo</DialogTitle>
            <DialogDescription>
              Fill in to add to your list of Todo
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name-1">Description</Label>
              <Input id="name-1" name="name" />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <SubmitForm />
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
