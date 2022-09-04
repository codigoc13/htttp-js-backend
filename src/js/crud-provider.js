const urlCRUD = 'https://reqres.in/api/users' //Quitar "/número"

const getUsuario = async (id) => {
  const resp = await fetch(`${urlCRUD}/${id}`)
  const { data } = await resp.json()

  return data
}

const crearUsuario = async (usuario) => {
  const resp = await fetch(urlCRUD, {
    method: 'POST',
    body: JSON.stringify(usuario),
    // Los headers son información extra que el backend puede solicitar
    headers: {
      'Content-type': 'application/json',
    },
  })

  // console.log(await resp.json())
  return await resp.json()
}

const actualizarUsuario = async (id, usuario) => {
  const resp = await fetch(`${urlCRUD}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(usuario),
    headers: {
      'Content-type': 'application/json',
    },
  })
  return await resp.json()
}

const eliminarUsuario = async (id) => {
  const resp = await fetch(`${urlCRUD}/${id}`, {
    method: 'DELETE',
  })
  return resp.ok ? 'Borrado' : 'No se pudo eliminar'
}

export { getUsuario, crearUsuario, actualizarUsuario, eliminarUsuario }
