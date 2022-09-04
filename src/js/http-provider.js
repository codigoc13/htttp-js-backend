const jokeUrl = 'https://api.chucknorris.io/jokes/random'
const urlUsuarios = 'https://reqres.in/api/users?page=2'

// cloudinary
const cloudPreset = 'o5vsc7gv'
const cloudURL = 'https://api.cloudinary.com/v1_1/dk0npadcr/upload'

const obtenerChiste = async () => {
  try {
    const resp = await fetch(jokeUrl)
    if (!resp.ok) throw `No se pudo realizar la petición`
    const { icon_url, id, value } = await resp.json()
    return { icon_url, id, value }
  } catch (error) {
    throw error
  }
}

const obtenerUsuarios = async () => {
  const resp = await fetch(urlUsuarios)
  const { data: usuarios } = await resp.json()

  return usuarios
}

// archivoASubir es de tipo File
const subirImagen = async (archivoASubir) => {
  const formData = new FormData()
  formData.append('upload_preset', cloudPreset)
  formData.append('file', archivoASubir)

  try {
    const resp = await fetch(cloudURL, {
      method: 'POST',
      body: formData,
    })
    if (resp.ok) {
      const cloudResp = await resp.json()
      // console.log(cloudResp)
      return cloudResp.secure_url
    } else {
      throw await resp.json()
    }
  } catch (error) {
    throw error
  }
}

export { obtenerChiste, obtenerUsuarios, subirImagen }
