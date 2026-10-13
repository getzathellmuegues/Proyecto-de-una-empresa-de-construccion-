const projectForm = document.querySelector("#project-form");
const projectList = document.querySelector("#project-list");
const formMessage = document.querySelector("#form-message");

projectForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const nameInput = document.querySelector("#project-name");
  const locationInput = document.querySelector("#project-location");
  const projectName = nameInput.value.trim();
  const projectLocation = locationInput.value.trim();

  if (!projectName || !projectLocation) {
    formMessage.textContent = "Completa los dos campos para agregar la obra.";
    return;
  }

  const card = document.createElement("article");
  card.className = "project-card";

  const visual = document.createElement("div");
  visual.className = "project-visual visual-one";
  const tag = document.createElement("span");
  tag.textContent = "NUEVA OBRA";
  visual.appendChild(tag);

  const info = document.createElement("div");
  info.className = "project-info";
  const status = document.createElement("span");
  status.className = "status";
  status.textContent = "Registrada en esta sesión";
  const title = document.createElement("h3");
  title.textContent = projectName;
  const location = document.createElement("p");
  location.textContent = `Obra de construcción · ${projectLocation}`;

  info.append(status, title, location);
  card.append(visual, info);
  projectList.prepend(card);

  formMessage.textContent = "Obra agregada. Recuerda: todavía no se guarda en una base de datos.";
  projectForm.reset();
  nameInput.focus();
});
