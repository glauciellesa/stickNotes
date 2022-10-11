const bntSubmit = document.getElementById("bntSubmit")

bntSubmit.addEventListener("click", (e) => {
  e.preventDefault()

  const titleInput = document.getElementById("new-note-title-input")
  const noteBodyInput = document.getElementById("new-note-body-input")
  const ul = document.getElementById("notes")

  const li = document.createElement("li")
  const titleLi = document.createElement("h2")
  const bodyLi = document.createElement("p")

  const textH2Li = document.createTextNode(titleInput.value)
  const textbodyLi = document.createTextNode(noteBodyInput.value)

  ul.appendChild(li)
  li.appendChild(titleLi)
  titleLi.appendChild(textH2Li)

  li.appendChild(bodyLi)
  bodyLi.appendChild(textbodyLi)
})

export default bntSubmit
