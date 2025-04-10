document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    handleToDo(event.target['new-task-description'].value);
    form.reset()
})
});

const handleToDo = (todo) => {
  let li = document.createElement('li')
  let btn = document.createElement('Button')
  btn.addEventListener('click', deleteToDo)
  btn.textContent = 'x'
  li.textContent = `${todo} `
  li.appendChild(btn)
  // console.log(li);
  document.getElementById('tasks').appendChild(li)
}

const deleteToDo = (event) => {
  event.target.parentNode.remove()
}
