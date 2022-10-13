const insertStick = (title, stickBody) => {
  let stickItens = []
  const stickDataString = window.localStorage.getItem("stick")
  if (!stickDataString) {
    window.localStorage.setItem("stick", JSON.stringify(stickItens)) //JSON.stringify() convert a data array into a string.
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

const removeStick = () => {
  const stickDataString = window.localStorage.getItem("stick")
  const stickTable = JSON.parse(stickDataString) || []
  return stickTable
}

export default { insertStick, getAllSticks, removeStick }
