function showSkills() {
  const display = document.getElementById("display-area");
  display.innerHTML = `
    <h2>Skills</h2>
    <ul>
      <li>HTML & CSS</li>
      <li>JavaScript</li>
      <li>Responsive Design</li>
      <li>UI/UX Basics</li>
      <li>Git & GitHub</li>
    </ul>
  `;
}

function showProjects() {
  const display = document.getElementById("display-area");
  display.innerHTML = `
    <h2>Projects</h2>
    <ul>
      <li>Modern Portfolio Website</li>
      <li>To-Do App with Local Storage</li>
      <li>Interactive UI Components</li>
    </ul>
  `;
}