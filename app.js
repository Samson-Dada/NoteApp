const noteTitle = document.querySelector(".note__title");
const noteList = document.querySelector(".note__list");
const saveButton = document.querySelector("#save__note");
const noteContent = document.querySelector(".note__content");
console.log(noteList);
console.log(noteContent);
function handleSaveNote() {
  if (noteContent.value.length < 4) {
    alert("Please enter at least 10");
    return;
  }
  if (noteTitle.value && noteContent.value) {
    const noteCard = document.createElement("div");
    noteCard.className = "note-card";
    noteCard.innerHTML = ` <h3>${noteTitle.value}</h3>
                <p>${noteContent.value}</p>
                <small>Created: ${new Date().toLocaleString()}</small>`;
    noteList.appendChild(noteCard);
    noteTitle.value = "";
    noteContent.value = "";
  }
}
saveButton.addEventListener("click", handleSaveNote);
