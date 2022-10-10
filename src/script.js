const bntSubmit = document.getElementById("bntSubmit")

bntSubmit.addEventListener("click", (e) => {
  e.preventDefault()
  const titleInput = document.getElementById("new-note-title-input")
  const titleValue = titleInput.value

  const noteBodyInput = document.getElementById("new-note-body-input")
  const noteBodyValue = noteBodyInput.value

  const ul = document.getElementById("notes")
  const li = document.createElement("li")
  const titleLi = document.createElement("h2")
  const bodyLi = document.createElement("p")
  const textH2Li = document.createTextNode(titleValue)
  const textbodyLi = document.createTextNode(noteBodyValue)

  ul.appendChild(li)
  li.appendChild(titleLi)
  titleLi.appendChild(textH2Li)

  li.appendChild(bodyLi)
  bodyLi.appendChild(textbodyLi)
})

export default bntSubmit
