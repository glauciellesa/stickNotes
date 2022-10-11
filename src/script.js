const bntSubmit = document.getElementById("bntSubmit")

bntSubmit.addEventListener("click", (e) => {
  e.preventDefault()

  const titleInput = document.getElementById("new-note-title-input").value
  const noteBodyInput = document.getElementById("new-note-body-input").value
  const ul = document.getElementById("notes")

  const li = document.createElement("li")
  const titleLi = document.createElement("h2")
  const bodyLi = document.createElement("p")
  const xButton = document.createElement("button")

  li.classList.add("listNotes")
  xButton.classList.add("bntDelete")

  const xText = document.createTextNode("X")
  const textH2Li = document.createTextNode(titleInput)
  const textbodyLi = document.createTextNode(noteBodyInput)

  if (titleInput && noteBodyInput) {
    ul.appendChild(li)
    li.appendChild(titleLi)
    titleLi.appendChild(textH2Li)
    xButton.appendChild(xText)

    li.appendChild(bodyLi)
    li.appendChild(xButton)
    bodyLi.appendChild(textbodyLi)
  } else {
    alert("Both Title and body of the note must be provided")
    return
  }
})

export default bntSubmit
