document.getElementById("login").onsubmit = function (event) {
  event.preventDefault();
  var email = event.target.elements.email.value;
  var password = event.target.elements.password.value;
  var body = JSON.stringify({
    email: email,
    password: password,
  });

  console.log(email, password);
  fetch("https://pizza.kando-dev.eu/Pizza", {
    method: "POST",
    body: body,
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(function (response) {
      if (!response.ok) {
        return Promise.reject("login hiba!");
      }
      console.log(response.json);
    })
    .then(function (response) {
      return fetch("https://pizza.kando-dev.eu/Pizza");
    })
    .then(function (response) {
      if (!response.ok) {
        return Promise.rejected("Pizza hiba!");
      }
      return response.json();
    })
    .then(function (pizzaPage) {
      state = pizzaPage.data;
      userRender();
    })
    .catch(function (error) {
      console.log(error);
    });
};

function renderPizza() {
  var pizzaHTML = "";
  for (var pizza of state) {
    usersHTML +=
    `<li class="list-group-item">${pizza.name} ${pizza.isGlutenFree}</li>`;
    `<li class="list-group-item"><center><img scr="${pizza.kepURL}" width="300"/></li>`;
  }
  document.getElementById("user-lista-container").innerHTML =
    '<ul "class=list-group">' + pizzaHTML + "</ul>";
}
