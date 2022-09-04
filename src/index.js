// import { init } from './js/chistes-page'
// import { init } from './js/usuarios-page'
// init()

import * as CRUD from './js/crud-provider'

CRUD.getUsuario(3).then(console.log)

CRUD.crearUsuario({
  name: 'Sergio',
  job: 'Programador',
}).then(console.log)
