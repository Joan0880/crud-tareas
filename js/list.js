// READ: lista las tareas y avisa a otros módulos para añadir acciones por fila.
App.on('render', () => {
  const body = document.getElementById('task-body');
  body.innerHTML = '';
  if (!App.tasks.length) {
    body.innerHTML = '<tr><td colspan="4">No hay tareas registradas.</td></tr>';
    return;
  }
  App.tasks.forEach(task => {
    const tr = document.createElement('tr');
    [task.title, task.description, task.status].forEach(value => {
      const td = document.createElement('td');
      td.textContent = value;
      tr.appendChild(td);
    });
    const actions = document.createElement('td');
    tr.appendChild(actions);
    App.emit('row', task, actions);
    body.appendChild(tr);
  });
});
