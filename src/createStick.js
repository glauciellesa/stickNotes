import { insertDb } from "./configDb.js"

export const createStick = (title, stickBody) => {
  const colorStick = 4
  const ul = document.getElementById("notes")
  if (ul.childElementCount === 0) {
    document.getElementById("no-notes").style.visibility = "hidden"
  }

  const li = document.createElement("li")
  const titleLi = document.createElement("h2")
  const bodyLi = document.createElement("p")
  const xButton = document.createElement("button")

  li.classList.add("listNotes")
  li.classList.add(`listNotes-${ul.childElementCount % colorStick}`)
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
