import { createRow } from './functions';
import format from 'date-fns/format';
// import moment from 'moment';

const todoForm = document.querySelector('.todo-form');
const todoList = document.querySelector('.todo-list');
const horloge = document.querySelector('.horloge');

todoForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const value = e.target.todo.value;

  createRow(todoList, value);
});

const updateDate = () => {
  horloge.innerText = format(new Date(), 'HH:mm:ss');
  // horloge.innerText = moment().format('HH:mm:ss');
};

updateDate();
setInterval(updateDate, 1000);