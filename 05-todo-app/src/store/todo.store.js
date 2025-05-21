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
  console.log(state);
  console.log("InitStore 🥑🥑🥑");
};

const loadStore = () => {
  throw new Error("Not implemented");
};

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
      break;
  }
};

const toggleTodo = (todoId) => {
  
  state.todos = state.todos.map(todo =>{
      if (todo.id === todoId) {
        todo.done = !todo.done;
      }
      return todo;
  })
};

const addTodo = (description) => {
  if (!description) throw new Error("Description is required");
  state.todos.push(new Todo(description));
};

const deleteTodo = (todoId) => {
  state.todos = state.todos.filter((todo) => todo.id !== todoId);
};

const deleteCompleted = () => {
  state.todos = state.todos.filter((todo) => !todo.done);
};

const setFilter = (newFilter = Filters.All) => {
  if (!Object.values(Filters).includes(newFilter)) {
    throw new Error(`Filter ${newFilter} is not valid`);
  }
  state.filter = newFilter;
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
