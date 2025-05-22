import todoStore, { Filters } from "../store/todo.store";
import html from "./app.html?raw";
import { renderTodos,renderPending } from "./use-cases";


//selectores css de app.html donde insertamos el custom html
const ElementIds = {
  TodoList: '.todo-list',
  NewTodoInput: '#new-todo-input',
  ClearCompleted: '.clear-completed',
  TodoFilters: '.filtro',
  PendingCount:'#pending-count',
}

/**
 * 
 * @param {String} elementId selector css donde asignar nuestro template html 
 */


export const App = (elementId) => {


  const displayTodos = () =>{
    const todos = todoStore.getTodos( todoStore.getCurrentFilter());
    renderTodos(ElementIds.TodoList,todos);
    updatePendingCount();
  }

  const updatePendingCount = () =>{
    renderPending(ElementIds.PendingCount);
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
  const clearCompleted = document.querySelector(ElementIds.ClearCompleted);
  const filtersUl = document.querySelectorAll(ElementIds.TodoFilters);


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

  clearCompleted.addEventListener('click',(event) =>{
    todoStore.deleteCompleted();
    displayTodos();
  });

  filtersUl.forEach( element =>{
    
    element.addEventListener('click', (element) =>{
      filtersUl.forEach(el=> el.classList.remove('selected'));
      element.target.classList.add('selected');

      switch (element.target.text) {
        case 'Todos':
          todoStore.setFilter(Filters.All);
          break;
        case 'Pendientes':
          todoStore.setFilter(Filters.Pending);
          break;
        case 'Completados':
          todoStore.setFilter(Filters.Completed);
          break;
      
        default:
          break;
      }
      
      displayTodos();


    });

  });


};


