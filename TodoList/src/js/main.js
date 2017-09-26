
'use strict';

const createRow = require('./functions').createRow;

const todoForm = document.querySelector('.todo-form');
const todoList = document.querySelector('.todo-list');

todoForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const value = e.target.todo.value;

  createRow(todoList, value);
});


