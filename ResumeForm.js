import React, { useState } from "react";

function ResumeForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [summary, setSummary] = useState("");

  return (
    <div>
      <form>
        <label>Name: <input type="text" value={name} onChange={(e) => setName(e.target.value)} /></label><br/>
        <label>Email: <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /></label><br/>
        <label>Summary: <textarea value={summary} onChange={(e) => setSummary(e.target.value)} /></label>
      </form>
      <hr />
      <div>
        <h2>Preview:</h2>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Summary:</strong> {summary}</p>
      </div>
    </div>
  );
}

export default ResumeForm;
