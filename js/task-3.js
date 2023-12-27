const input = document.querySelector("#name-input");
const title = document.querySelector("#name-output");

input.addEventListener("input", (event) => {
  if (
    event.currentTarget.value === "" ||
    event.currentTarget.value.trim() === ""
  ) {
    title.textContent = "Anonymous";
  } else {
    title.textContent = event.currentTarget.value.trim();
  }
});
