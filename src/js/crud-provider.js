const urlCRUD = 'https://reqres.in/api/users' //Quitar "/número"

const getUsuario = async (id) => {
  const resp = await fetch(`${urlCRUD}/${id}`)
  const { data } = await resp.json()

  return data
}

export { getUsuario }
