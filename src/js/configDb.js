const insertStick = (title, stickBody) => {
  const stickDataString = window.localStorage.getItem("stick") //Vai verificar se no meu localStorage já existe stick
  if (!stickDataString) {
    //caso não exista eu vou criar já passando para uma forma que pode ser storaged
    window.localStorage.setItem("stick", JSON.stringify([])) //JSON.stringify() convert a data array into a string.
  } //uma vez existente ou criada vou pegar essas informações e converter para um array que o JS possa manipular
  const stickTable = JSON.parse(stickDataString) || [] //criada essa esta ou poder adicionar novos elementos a esse storage
  const hasTitle = stickTable.find((stick) => stick.title === title)
  console.log(hasTitle)
  if (hasTitle === undefined) {
    stickTable.push({
      title: title,
      body: stickBody,
    }) //uma vez adicionado novos elementos preciso converter meu array para um json novamente
    window.localStorage.setItem("stick", JSON.stringify(stickTable))
    return true
  } else {
    return false
  }
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
