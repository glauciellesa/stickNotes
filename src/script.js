import { createStick } from "./createStick.js"
import db from "./configDb.js"

window.addEventListener("DOMContentLoaded", () => {
  const sticks = db.getAllSticks()
  sticks.forEach((stick) => {
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
  createStick(titleInput, noteBodyInput)
  db.insertStick(titleInput, noteBodyInput)

  title.value = ""
  noteBody.value = ""
})

export default bntSubmit
