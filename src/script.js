import { createStick } from "./createStick.js"

const bntSubmit = document.getElementById("bntSubmit")

bntSubmit.addEventListener("click", (e) => {
  const title = document.getElementById("new-note-title-input")
  const titleInput = title.value
  const noteBody = document.getElementById("new-note-body-input")
  const noteBodyInput = noteBody.value
  createStick(titleInput, noteBodyInput)
  e.preventDefault()
  title.value = ""
  noteBody.value = ""
})

export default bntSubmit
