"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { TodoModal } from "./todo-modal";
import { addTodo } from "@/actions/todo-actions";

const AddTodo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleAddTodo = async() => {
    const id = Math.floor(1000 * Math.random() * 9000)
    const text = `Todo ${id}` 
    await addTodo(id.toString(), text)
  }
  return (
    <div>
      <Button className="btn btn-primary" onClick={handleAddTodo}>
        Add Todo
      </Button>
      <TodoModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default AddTodo;
