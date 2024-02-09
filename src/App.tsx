import { useEffect, useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";

function App() {

  let fruits: string[] = ["Bananas", "Orange", "Grapes"];
  console.log("Fruits ", fruits);

  type Person = {
    name: string;
    age: number;
  };
  let people: Person[] = [];
  let person2: Person = {
    name: "Joseph",
    age: 23,
  };
  let person1: Person = {
    name: "Alex",
    age: 26,
  };
  people.push(person1);
  people.push(person2);

  type Task = {
    title: string;
    description: string;
    completed: boolean;
  };
  
  let tasks: Task[] = [];
  
  let task1: Task = {
    title: "Conquer TypeScript",
    description: "Master the art of TypeScript sorcery",
    completed: false,
  };
  
  let task2: Task = {
    title: "Vanquish Bugs",
    description: "Embark on a bug-slaying adventure",
    completed: true,
  };
  
  let task3: Task = {
    title: "Build React Realms",
    description: "Construct kingdoms with the power of React",
    completed: false,
  };
  
  tasks.push(task1);
  tasks.push(task2);
  tasks.push(task3);
  
  console.log("Tasks ", tasks);
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;
