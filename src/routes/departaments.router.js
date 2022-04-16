const express = require('express')
const routes = express.Router()
const departaments = require('../json/departaments.json')

// http://localhost:3000/api/v1/departaments
routes.get('/', (req, res) => {
  res.json(departaments)
})

/* Municipios de un depto específico en la ruta*/
// http://localhost:3000/api/v1/departaments/5
routes.get('/:departamentId', (req, res) => {
  const { departamentId } = req.params
  const municipalities = departaments.filter((departament) =>
      departament['c_digo_dane_del_departamento'] === departamentId
  )
  res.json(municipalities)

})

// http://localhost:3000/api/v1/departaments/departament/dane
routes.get('/departament/dane', (req,res)=>{
  const departaments = departamentsJSON;
  const resultado = departaments.filter((dep)=>
  dep['c_digo_dane_del_departamento'].length > 15 && dep['c_digo_dane_del_departamento'].length < 20);
  res.json(resultado);
})

// http://localhost:3000/api/v1/departaments/departament/opcional?codigo=41
routes.get('/departament/opcional', (req,res)=>{
  if(req.query.codigo){
    const departaments_municipalities = departamentsJSON.filter(
      (departament)=>
      departament['c_digo_dane_del_departamento'] === req.query.codigo
    )
    res.json(departaments_municipalities);
  } else {
    const departament = departamentsJSON
    res.json(departament);
  }
})

// http://localhost:3000/api/v1/departaments/departament/departamento?

routes.get('/departament/departamento', (req,res)=>{
  if(req.query.codigo){
    const departaments_municipalities = departamentsJSON.filter(
      (departament)=>
      departament['departamento'] === req.query.codigo
    )
    res.json(departaments_municipalities);
  } else {
    const departament = departamentsJSON.filter(
      (departament)=>
      departament['departamento'] === 'Caldas'
    )
    res.json(departament);
  }
})

// http://localhost:3000/api/v1/departaments/Quindío/C
routes.get('/departament/C', (req,res)=>{
  const departaments = departamentsJSON.filter(
    (departament) => departament['departamento'][0] === 'C'
  )
  res.json(departaments);
})

module.exports = routes