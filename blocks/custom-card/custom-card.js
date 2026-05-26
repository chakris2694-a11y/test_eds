export default function decorate(block) {
  // Clear block
  block.innerHTML = "";

  // Wrapper
  const wrapper = document.createElement("div");
  wrapper.className = "custom-card-wrapper";

  // Image (top of card)
  const img = document.createElement("img");
  img.className = "card-image";
  img.src = ""; // replace with your base64 or file path
  wrapper.appendChild(img);

  // Brand text
  const brandText = document.createElement("div");
  brandText.className = "card-content";
  brandText.textContent = "Hello world content"; // or your brand message
  wrapper.appendChild(brandText);

  // Dropdown
  const select = document.createElement("select");
  select.className = "card-dropdown";
  ["Option A", "Option B", "Option C"].forEach(opt => {
    const option = document.createElement("option");
    option.value = opt;
    option.textContent = opt;
    select.appendChild(option);
  });
  wrapper.appendChild(select);

  // Footer (already OOTB)
  const footerDiv = document.createElement("div");
  footerDiv.className = "card-footer";
  footerDiv.textContent = "Footer text";
  wrapper.appendChild(footerDiv);

  // Dropdown behavior
  select.addEventListener("change", (e) => {
    brandText.textContent = `Selected: ${e.target.value}`;
  });

  // Append wrapper back
  block.appendChild(wrapper);
}
