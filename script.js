const textArea = document.getElementById('textArea');
const charCount = document.getElementById('charCount');

textArea.addEventListener('input', function() {
  const textLength = textArea.value.length;
  charCount.textContent = `Caracteres: ${textLength}`;

  if (textLength >= 0 && textLength <= 10) {
    document.body.style.backgroundColor = 'black';
  } else if (textLength >= 11 && textLength <= 20) {
    document.body.style.backgroundColor = 'red';
  } else if (textLength >= 21 && textLength <= 30) {
    document.body.style.backgroundColor = 'yellow';
  } else {
    document.body.style.backgroundColor = 'green';
  }
});
