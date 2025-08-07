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
import { addTodo, editTodo } from "@/actions/todo-actions";

import { useEffect, useState, useTransition } from "react";
import { TodoTypes } from "@/types/todo.types";

interface IProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedTodo?: TodoTypes | null;
}
export function TodoModal({ isOpen, setIsOpen, selectedTodo }: IProps) {
  const [isPending, startTransition] = useTransition();
  const [todo, setTodo] = useState("");

  console.log(selectedTodo);

  const handleAddTodo = async () => {
    startTransition(async () => {
      const id = Math.floor(1000 * Math.random() * 9000);

      await addTodo(id.toString(), todo).then(() => {
        setIsOpen(false);
      });
    });
  };

  const handleEditTodo = async () => {
    startTransition(async () => {
      if (selectedTodo)
        await editTodo(selectedTodo?.id, todo).then(() => {
          setIsOpen(false);
        });
    });
  };

  useEffect(() => {
    if (selectedTodo) setTodo(selectedTodo.text);
  }, [selectedTodo]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <form action={handleAddTodo}>
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
              <Input
                id="name-1"
                name="name"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
              />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button
              onClick={() => {
                selectedTodo ? handleEditTodo() : handleAddTodo();
              }}
              type="submit"
              disabled={isPending}
            >
              {isPending
                ? "Saving..."
                : `${selectedTodo ? "Save Changes" : "Add Todo"}`}
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
