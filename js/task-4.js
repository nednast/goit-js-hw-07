// <form class="login-form">
//   <label>
//     Email
//     <input type="email" name="email" />
//   </label>
//   <label>
//     Password
//     <input type="password" name="password" />
//   </label>
//   <button type="submit">Login</button>
// </form>

const form = document.querySelector(".login-form");

form.addEventListener("submit", handlerSubm);
function handlerSubm(event) {
  event.preventDefault();
  const emailTarg = form.elements.email.value.trim();
  const passwordTarg = form.elements.password.value.trim();
  if (emailTarg === "" || passwordTarg === "") {
    alert("All form fields must be filled in");
  } else {
    const info = {
      email: emailTarg,
      password: passwordTarg,
    };
    console.log(info);
    form.reset();
  }
}
