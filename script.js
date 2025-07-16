document.getElementById('resumeForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const summary = document.getElementById('summary').value;

  const output = `
    <h2>${name}</h2>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Summary:</strong> ${summary}</p>
  `;

  document.getElementById('output').innerHTML = output;
});
