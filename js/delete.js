// DELETE: botón "Eliminar" por fila con confirmación.
App.on('row', (task, actions) => {
  const btn = document.createElement('button');
  btn.textContent = 'Eliminar';
  btn.addEventListener('click', () => {
    if (!confirm('¿Eliminar la tarea "' + task.title + '"?')) return;
    App.tasks = App.tasks.filter(t => t.id !== task.id);
    App.save();
  });
  actions.appendChild(btn);
});
