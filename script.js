document.getElementById('resumeForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const summary = document.getElementById('summary').value;
  const education = document.getElementById('education').value;
  const experience = document.getElementById('experience').value;
  const skills = document.getElementById('skills').value;

  const outputHTML = `
    <div id="resume">
      <h2>${name}</h2>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Summary:</strong> ${summary}</p>
      <p><strong>Education:</strong> ${education}</p>
      <p><strong>Experience:</strong> ${experience}</p>
      <p><strong>Skills:</strong> ${skills}</p>
    </div>
  `;

  document.getElementById('output').innerHTML = outputHTML;
});

function downloadPDF() {
  const resume = document.getElementById('resume');
  if (resume) {
    html2pdf().from(resume).save('resume.pdf');
  } else {
    alert("Please generate the resume first!");
  }
}
