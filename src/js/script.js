import { createStick } from "./createStick.js"
import db from "./configDb.js"

window.addEventListener("DOMContentLoaded", () => {
  const sticks = db.getAllSticks()
  sticks.forEach((stick) => {
    console.log(stick)
    createStick(stick.title, stick.body)
  })
})

const bntSubmit = document.getElementById("bntSubmit")

bntSubmit.addEventListener("click", (e) => {
  e.preventDefault()
  const title = document.getElementById("new-note-title-input")
  const titleInput = title.value
  const noteBody = document.getElementById("new-note-body-input")
  const noteBodyInput = noteBody.value

  if (db.insertStick(titleInput, noteBodyInput)) {
    createStick(titleInput, noteBodyInput)
  } else {
    alert("Title already exist!")
  }
  title.value = ""
  noteBody.value = ""
})

export default bntSubmit
