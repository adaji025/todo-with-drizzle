"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { TodoModal } from "./todo-modal";

const AddTodo = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button className="btn btn-primary" onClick={() => setIsOpen(true)}>
        Add Todo
      </Button>
      <TodoModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default AddTodo;
