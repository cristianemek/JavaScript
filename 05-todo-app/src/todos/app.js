import todoStore from "../store/todo.store";
import html from "./app.html?raw";
import { renderTodos } from "./use-cases";


//selectores css de app.html donde insertamos el custom html
const ElementIds = {
  TodoList: '.todo-list',
  NewTodoInput: '#new-todo-input',
  ClearCompleted: '.clear-completed'
}

/**
 * 
 * @param {String} elementId selector css donde asignar nuestro template html 
 */


export const App = (elementId) => {


  const displayTodos = () =>{
    const todos = todoStore.getTodos( todoStore.getCurrentFilter());
    renderTodos(ElementIds.TodoList,todos);
  }


  //cuando la funcion App() se llama
  (() => {
    const app = document.createElement("div");
    app.innerHTML = html;
    document.querySelector(elementId).append(app);
    displayTodos();
  })();


  //referencias HTML
  const newDescriptionInput = document.querySelector(ElementIds.NewTodoInput);
  const todoListUl = document.querySelector(ElementIds.TodoList);
  const ClearCompleted = document.querySelector(ElementIds.ClearCompleted);


  //Listeners

  newDescriptionInput.addEventListener('keyup', (event) => {
    if (event.keyCode !== 13) return;
    if (event.target.value.trim().length===0) return;

    todoStore.addTodo (event.target.value);
    displayTodos();
    event.target.value='';
  });

  todoListUl.addEventListener('click',(event) =>{
    const element = event.target.closest('[data-id]')
    todoStore.toggleTodo(element.getAttribute('data-id'));
    displayTodos();
  });

  todoListUl.addEventListener('click',(event) =>{
    const isDestroyElement = event.target.className === 'destroy';
    const element = event.target.closest('[data-id]')
    if (!element || !isDestroyElement) return;

    todoStore.deleteTodo(element.getAttribute('data-id'));
    displayTodos();
  });

  ClearCompleted.addEventListener('click',(event) =>{
    todoStore.deleteCompleted();
    displayTodos();
  })


};


