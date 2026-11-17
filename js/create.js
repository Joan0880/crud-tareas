// CREATE: agrega una tarea nueva cuando no se está editando.
document.getElementById('task-form').addEventListener('submit', e => {
  e.preventDefault();
  if (App.editingId !== null) return;
  const data = App.readForm();
  const error = App.validate(data);
  if (error) { App.showError(error); return; }
  App.tasks.push({ id: Date.now(), ...data, title: data.title.trim() });
  App.save();
  App.resetForm();
});
