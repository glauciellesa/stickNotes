const checkStickExist = document.addEventListener("load", () => {
  document.getElementById("no-notes")
})

const createStick = (title, stickBody) => {
  const ul = document.getElementById("notes")

  const li = document.createElement("li")
  const titleLi = document.createElement("h2")
  const bodyLi = document.createElement("p")
  const xButton = document.createElement("button")

  li.classList.add("listNotes")
  li.classList.add(`listNotes-${ul.childElementCount % 4}`)
  xButton.classList.add("bntDelete")

  const xText = document.createTextNode("X")
  const textH2Li = document.createTextNode(title)
  const textbodyLi = document.createTextNode(stickBody)

  if (title && stickBody) {
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

  xButton.addEventListener("click", () => {
    ul.removeChild(li)
  })

  insertDb(title, stickBody)
}

const insertDb = (title, stickBody) => {
  const stickString = window.localStorage.getItem("stick")
  if (!stickString) {
    window.localStorage.setItem("stick", JSON.stringify([]))
  }
  const stickTable = JSON.parse(stickString) || []
  stickTable.push({
    title: title,
    body: stickBody,
  })
  window.localStorage.setItem("stick", JSON.stringify(stickTable))
}

const bntSubmit = document.getElementById("bntSubmit")

bntSubmit.addEventListener("click", (e) => {
  const titleInput = document.getElementById("new-note-title-input").value
  const noteBodyInput = document.getElementById("new-note-body-input").value
  createStick(titleInput, noteBodyInput)
  e.preventDefault()
})

export default bntSubmit
