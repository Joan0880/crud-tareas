// Validación de entradas del formulario.
App.validate = function (data) {
  if (!data.title.trim()) return 'El título es obligatorio.';
  if (data.title.trim().length > 60) return 'El título no puede superar 60 caracteres.';
  if (data.description.length > 200) return 'La descripción no puede superar 200 caracteres.';
  return null;
};
