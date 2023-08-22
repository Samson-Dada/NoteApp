"use strict";

const noteTitle = document.querySelector(".note__title");
const noteList = document.querySelector(".note__list");
const saveButton = document.querySelector("#save__note");
const noteContent = document.querySelector(".note__content");

//
function handleLoadNotes() {
  const notes = JSON.parse(localStorage.getItem("notes")) || [];
  for (const note of notes) {
    handleCreateNoteCard(note);
  }
}

function handleSaveNotesToLocalStorage(noteData) {
  const notes = JSON.parse(localStorage.getItem("notes")) || [];
  notes.push(noteData);
  localStorage.setItem("notes", JSON.stringify(notes));
}

function handleCreateNoteCard(noteData) {
  const noteCard = document.createElement("div");
  noteCard.className = "note__card";
  noteCard.innerHTML = `
                <h3>${noteData.title}</h3>
                <p>${noteData.content}</p>
                <div class="note__footer">
                <small>Created: ${noteData.date}</small>
            <button type="button" class="delete__note">Del</button>
            </div>`;
  noteList.appendChild(noteCard);
}

function handleSaveNote() {
  if (noteContent.value.length < 4) {
    alert("Please enter at least 10");
    return;
  }

  const noteData = {
    title: noteTitle.value.trim(),
    content: noteContent.value.trim(),
    date: new Date().toLocaleString(),
  };

  handleSaveNotesToLocalStorage(noteData);
  handleCreateNoteCard(noteData);
  noteTitle.value = "";
  noteContent.value = "";
}

window.addEventListener("DOMContentLoaded", () => {
  handleLoadNotes();
  saveButton.addEventListener("click", handleSaveNote);
});
