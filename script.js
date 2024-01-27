const form = document.getElementById("create-task-form");
const modal = document.getElementById("modal");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const taskStatus = form.status.value; //todo ya onprogress ya done

  const taskInfo = {
    title: form.title.value,
    description: form.description.value,
    developer: form.developer.value,
    estimate: form.estimate.value,
  }

  const taskCard = document.createElement("div");
  taskCard.className = "task-card";
  taskCard.title = taskInfo.description;
  taskCard.draggable = true;
  taskCard.addEventListener("dragstart", onDragStart)

  taskCard.innerHTML = `
    <h3>${taskInfo.title}</h3>
      <div>
        <span class="badge">${taskInfo.estimate} Days</span>
        <span class="image">${taskInfo.developer[0].toUpperCase()}</span>
      </div>
    `;

  const taskContainer = document.getElementById(taskStatus);
  taskContainer.appendChild(taskCard);
})

function toggleModal(element){
  modal.classList.toggle("hide-modal");

  element.innerText = modal.classList.contains("hide-modal")?"expand_less":"expand-more";
}





