"use client";
import React from "react";
import { Card } from "./ui/card";
import { Edit, Trash2 } from "lucide-react";
import { TodoTypes } from "@/types/todo.types";
import { Button } from "./ui/button";
import { deleteTodo, editTodo, toggleTodo } from "@/actions/todo-actions";

interface IProps {
  todo: TodoTypes;
}
const Todo = ({ todo }: IProps) => {
  const handleDeleteTodo = async (id: string) => {
    await deleteTodo(id);
  };

  const handleEditTodo = async (id: string) => {
    const text = "todo edited";
    await editTodo(id, text);
  };

  const handleToggleTodo = async (id: string) => {
    await toggleTodo(id);
  };
  return (
    <Card className="px-2 sm:px-5 mt-5">
      <div className="flex justify-between">
        <h2 className="text-lg font-semibold capitalize">{todo.text}</h2>
        <div className="flex items-center gap-4">
          <Button onClick={() => handleToggleTodo(todo.id)}>
            {todo.done ? "done" : "Undone"}
          </Button>
          <button onClick={() => handleEditTodo(todo.id)}>
            <Edit className="cursor-pointer" />
          </button>
          <button onClick={() => handleDeleteTodo(todo.id)}>
            <Trash2 className="cursor-pointer" color="red" />
          </button>
        </div>
      </div>
    </Card>
  );
};

export default Todo;
