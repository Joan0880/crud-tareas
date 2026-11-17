// UPDATE: botón "Editar" por fila y guardado de cambios.
App.on('row', (task, actions) => {
  const btn = document.createElement('button');
  btn.textContent = 'Editar';
  btn.addEventListener('click', () => {
    App.editingId = task.id;
    document.getElementById('title').value = task.title;
    document.getElementById('description').value = task.description;
    document.getElementById('status').value = task.status;
    document.getElementById('submit-btn').textContent = 'Guardar cambios';
  });
  actions.appendChild(btn);
});

document.getElementById('task-form').addEventListener('submit', e => {
  e.preventDefault();
  if (App.editingId === null) return;
  const data = App.readForm();
  const error = App.validate(data);
  if (error) { App.showError(error); return; }
  const task = App.tasks.find(t => t.id === App.editingId);
  if (task) Object.assign(task, data, { title: data.title.trim() });
  App.save();
  App.resetForm();
});
