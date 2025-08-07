"use client";
import React, { useState, useTransition } from "react";
import { Card } from "./ui/card";
import { Edit, LoaderCircle, Trash2 } from "lucide-react";
import { TodoTypes } from "@/types/todo.types";
import { Button } from "./ui/button";
import { deleteTodo, toggleTodo } from "@/actions/todo-actions";
import { TodoModal } from "./todo-modal";

interface IProps {
  todo: TodoTypes;
}
const Todo = ({ todo }: IProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState<TodoTypes | null>(null);
  const [isPending, startTransition] = useTransition();
  const [loading, startDoneTransition] = useTransition();

  const handleDeleteTodo = async (id: string) => {
    startTransition(async () => {
      await deleteTodo(id);
    });
  };

  const handleToggleTodo = async (id: string) => {
    startDoneTransition(async () => {
      await toggleTodo(id);
    });
  };
  return (
    <>
      <TodoModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        selectedTodo={selectedTodo}
      />
      <Card className="px-2 sm:px-5 mt-5">
        <div className="flex justify-between">
          <h2 className="text-lg font-semibold capitalize">{todo.text}</h2>
          <div className="flex items-center gap-4">
            <Button
              disabled={todo.done}
              onClick={() => handleToggleTodo(todo.id)}
            >
              {loading ? (
                <LoaderCircle className="animate-spin" />
              ) : (
                `${todo.done ? "Done" : "New"}`
              )}
            </Button>
            <button
              onClick={() => {
                setSelectedTodo(todo);
                setIsOpen(true);
              }}
            >
              <Edit className="cursor-pointer" />
            </button>
            <button
              disabled={isPending}
              onClick={() => handleDeleteTodo(todo.id)}
            >
              {isPending ? (
                <LoaderCircle className="animate-spin" />
              ) : (
                <Trash2 className="cursor-pointer" color="red" />
              )}
            </button>
          </div>
        </div>
      </Card>
    </>
  );
};

export default Todo;
