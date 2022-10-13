import db from "./configDb.js"

export const createStick = (title, stickBody) => {
  const colorStick = 4
  const ul = document.getElementById("notes")
  if (ul.childElementCount === 0) {
    document.getElementById("no-notes").style.visibility = "hidden"
  }

  const li = document.createElement("li")
  const titleLi = document.createElement("h2")
  const bodyLi = document.createElement("p")
  const deleteStick = document.createElement("button")

  li.classList.add("listNotes")
  li.classList.add(`listNotes-${ul.childElementCount % colorStick}`)
  deleteStick.classList.add("delete")

  const xText = document.createTextNode("X")
  const textH2Li = document.createTextNode(title)
  const textbodyLi = document.createTextNode(stickBody)

  if (!!title && !!stickBody) {
    ul.appendChild(li)
    li.appendChild(titleLi)
    titleLi.appendChild(textH2Li)
    deleteStick.appendChild(xText)

    li.appendChild(bodyLi)
    li.appendChild(deleteStick)
    bodyLi.appendChild(textbodyLi)
  } else {
    alert("Both Title and body of the note must be provided")
    return
  }

  deleteStick.addEventListener("click", () => {
    if (confirm(`Are you sure to delete the '${title}' note?`)) {
      ul.removeChild(li)
      db.removeStick(title)
    }
  })
}
