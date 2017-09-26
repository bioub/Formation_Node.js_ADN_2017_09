// Module IIFE
// Immediately Invoked Function Expression
(function (global) {
  'use strict';
  
  const todoForm = document.querySelector('.todo-form');
  const todoList = document.querySelector('.todo-list');
  
  todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
  
    const value = e.target.todo.value;
  
    createRow(todoList, value);
  });
}(window));

