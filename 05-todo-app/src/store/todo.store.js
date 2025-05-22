import { Todo } from "../todos/models/todo.model";

const Filters = {
  All: "all",
  Completed: "Completed",
  Pending: "Pending",
};

const state = {
  todos: [
    new Todo("Pieda del alma"),
    new Todo("Pieda del infinito"),
    new Todo("Pieda del tiempo"),
    new Todo("Pieda del poder"),
    new Todo("Pieda de la realidad"),

  ],
  filter: Filters.All,
};

const initStore = () => {
  loadStore();
  console.log("InitStore 🥑🥑🥑");
};

const loadStore = () => {
  if(!localStorage.getItem('state')) return;
  const {todos,filter=Filters.All} = JSON.parse(localStorage.getItem('state'));
  state.todos = todos;
  state.filter= filter;
  
};

const saveStateToLocalStorage = () =>{
  localStorage.setItem('state',JSON.stringify(state));
}


const getTodos = (filter = Filters.All) => {
  switch (filter) {
    case Filters.All:
      return [...state.todos];
    case Filters.Completed:
      return state.todos.filter((todo) => todo.done);
    case Filters.Pending:
      return state.todos.filter((todo) => !todo.done);
    default:
      throw new Error(`Option ${filter} is not valid`);
  }
};

const toggleTodo = (todoId) => {
  
  state.todos = state.todos.map(todo =>{
      if (todo.id === todoId) {
        todo.done = !todo.done;
      }
      return todo;
  })
  saveStateToLocalStorage();
};

const addTodo = (description) => {
  if (!description) throw new Error("Description is required");
  state.todos.push(new Todo(description));
  saveStateToLocalStorage();
};

const deleteTodo = (todoId) => {
  state.todos = state.todos.filter((todo) => todo.id !== todoId);
  saveStateToLocalStorage();
};

const deleteCompleted = () => {
  state.todos = state.todos.filter((todo) => !todo.done);
  saveStateToLocalStorage();
};

const setFilter = (newFilter = Filters.All) => {
  if (!Object.values(Filters).includes(newFilter)) {
    throw new Error(`Filter ${newFilter} is not valid`);
  }
  state.filter = newFilter;
  saveStateToLocalStorage();
};

const getCurrentFilter = () => {
  return state.filter;
};

export default {
  addTodo,
  deleteCompleted,
  deleteTodo,
  getCurrentFilter,
  getTodos,
  initStore,
  loadStore,
  setFilter,
  toggleTodo,
};
