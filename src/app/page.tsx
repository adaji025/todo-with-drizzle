import { getTodos } from "@/actions/todo-actions";
import AddTodo from "@/components/add-todo";
import Todo from "@/components/todo";

export default async function Home() {
  const todos = await getTodos();

  return (
    <div className="container mx-auto px-5">
      <div className="my-10 flex justify-between items-center">
        <h1 className="text-2xl font-black">Todos</h1>
        <AddTodo />
      </div>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
}
