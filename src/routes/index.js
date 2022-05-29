const router = require('express').Router();
const path = require('path');
const mysql = require('mysql');

// Connection details
const Connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "agenda"
})


router.get('/', (req, res) => {
  res.render('pages/index');
});

router.get('/list', (req, res) => {
  Connection.query('SELECT * FROM alumnos',(error,rows) => {
    if(error) throw error;
    if(!error){
      console.log(rows);
      console.log(rows.length);
      res.render('pages/list',{rows});
    }
  })
});

router.get('/adduser', (req, res) => {
  res.render('pages/adduser');
});

const agregarAlumno = (nombre,apellido,grado,idsalon) =>{
  const sql = `INSERT INTO alumnos(nombre,apellido,grado,idsalon) VALUES("${nombre}","${apellido}","${grado}","${idsalon}")`
  Connection.query(sql,function(error,result,filed){
    if(error) throw error
    console.log(result)
  })
}

router.post('/agregarAlumno', (req,res) =>{
  let nombre = req.body.nombre;
  let apellido = req.body.apellido;
  let grado = req.body.grado;
  let idsalon = req.body.idsalon;
  agregarAlumno(nombre,apellido,grado,idsalon);
  res.redirect('/list');
});



module.exports = router;
