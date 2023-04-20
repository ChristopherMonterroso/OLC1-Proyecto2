const myTextarea = document.getElementById('myTextarea');

const editor = CodeMirror.fromTextArea(myTextarea, {
  mode: 'javascript',
  theme: 'default',
  lineNumbers: true,
});
