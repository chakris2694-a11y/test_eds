export default function decorate(block) {
  block.innerHTML = `
    <div class="announcement-container">
      <h2>Welcome to EDS</h2>
      <p>This is my custom announcement block.</p>
    </div>
  `;
}