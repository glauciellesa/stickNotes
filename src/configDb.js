const insertStick = (title, stickBody) => {
  const stickDataString = window.localStorage.getItem("stick")
  if (!stickDataString) {
    window.localStorage.setItem("stick", JSON.stringify([])) //JSON.stringify() convert a data array into a string.
  }
  const stickTable = JSON.parse(stickDataString) || []
  stickTable.push({
    title: title,
    body: stickBody,
  })
  window.localStorage.setItem("stick", JSON.stringify(stickTable))
}

const getAllSticks = () => {
  const stickDataString = window.localStorage.getItem("stick")
  const stickTable = JSON.parse(stickDataString) || []
  return stickTable
}

const removeStickByTitle = (title) => {
  const stickDataString = window.localStorage.getItem("stick")
  let stickTable = JSON.parse(stickDataString) // Parse converte a JSON to an array data
  stickTable = stickTable.filter((elem) => {
    return elem.title !== title
  })
  window.localStorage.setItem("stick", JSON.stringify(stickTable))
}

export default { insertStick, getAllSticks, removeStickByTitle }
