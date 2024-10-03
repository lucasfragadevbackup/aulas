document.addEventListener("DOMContentLoaded", function () {
    const addTaskBtn = document.getElementById('add-task-btn');
    const newTaskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');
  
    // ADICIONAR NOVA TAREFA
    addTaskBtn.addEventListener('click', function () {
      const taskText = newTaskInput.value.trim();
      if (taskText === '') return;
  
      const li = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
  
      const span = document.createElement('span');
      span.textContent = taskText;
  
      const removeBtn = document.createElement('button');
      removeBtn.textContent = 'Remover';
  
      li.appendChild(checkbox);
      li.appendChild(span);
      li.appendChild(removeBtn);
  
      taskList.appendChild(li);
      newTaskInput.value = ''; // PARA LIMPAR O INPUT
  
      // MARCAR A TAREFA CONCLUÍDA
      checkbox.addEventListener('change', function () {
        if (checkbox.checked) {
          li.classList.add('completed');
        } else {
          li.classList.remove('completed');
        }
      });
  
      // REMOVER A TAREFA
      removeBtn.addEventListener('click', function () {
        taskList.removeChild(li);
      });
    });
  
    // PERMITIR USAR O "ENTER"
    newTaskInput.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        addTaskBtn.click();
      }
    });
  });
  
