export const insertDb = (title, stickBody) => {
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
