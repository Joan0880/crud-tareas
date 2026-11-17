// Estado compartido y utilidades. Los demás módulos se enganchan por eventos.
const App = {
  tasks: [],
  editingId: null,
  listeners: {},
  on(evt, fn) { (this.listeners[evt] = this.listeners[evt] || []).push(fn); },
  emit(evt, ...args) { (this.listeners[evt] || []).forEach(fn => fn(...args)); },
  load() {
    try { this.tasks = JSON.parse(localStorage.getItem('tasks') || '[]'); }
    catch (e) { this.tasks = []; }
  },
  save() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
    this.emit('render');
  },
  readForm() {
    return {
      title: document.getElementById('title').value,
      description: document.getElementById('description').value,
      status: document.getElementById('status').value
    };
  },
  resetForm() {
    document.getElementById('task-form').reset();
    document.getElementById('submit-btn').textContent = 'Agregar';
    this.editingId = null;
    this.showError('');
  },
  showError(msg) { document.getElementById('error').textContent = msg; },
  validate(data) { return null; } // se sobrescribe en validation.js
};
