const todolist = [{
  nameoftask : '',
  dueDate: ''
}];

changeTodoList();

function changeTodoList(){
  let todoHTML = ''

todolist.forEach((todoObject, index) => {
  
  const {nameoftask, dueDate} = todoObject;
  const html = `<div>${nameoftask}</div>
  <div> ${dueDate}</div>
  <button  class = "delete-button js-delete-todo">Delete</button>`
  todoHTML += html; 

});



document.querySelector('.js-todo-list')
.innerHTML = todoHTML;

document.querySelectorAll('.js-delete-todo')
  .forEach((deletebutton, index) => {
    deletebutton.addEventListener('click',() =>{
      todolist.splice(index, 1);
      changeTodoList();
    });
  });

}

document.querySelector('.js-add-todo')
  .addEventListener('click', () => {
    addTodo();
  })



function addTodo() {
  const InputElement = document.querySelector('.js-name-input');
  const nameoftask = InputElement.value;

  const dateInputElement = document.querySelector('.js-duedate-input');
  const dueDate = dateInputElement.value;
  

  todolist.push({
    nameoftask ,
    dueDate
  });
  

  InputElement.value = '';
  changeTodoList();
};