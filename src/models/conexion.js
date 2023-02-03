import sql from 'mssql'; // importamos mssql para poder trabajar la conexion con la base de datos de sql server
const dbSettings = { //TODO: esta variable sirve para almacenar las configuraciones de la base de datos
  user: process.env.UserSQL,
  password: process.env.PasswordSQL,
  server: process.env.ServerSQL,
  database: process.env.DatabaseSQL,
  port: parseInt(process.env.PortSQL),
  options: {
    encrypt: true,
    trustServerCertificate: true,
  }
}
async function getConection() {//TODO: esta funcion sirve para crear una conexion con la base de datos
  const pool = await sql.connect(dbSettings);//TODO: esta funcion sirve para crear un pool de conexiones con la base de datos, permitiendonos hacer consultas a la base de datos
  const result=await pool.request().query('Select 1'); //TODO: esta funcion sirve para crear una peticion a la base de datos
  console.log(result);
}
getConection();//TODO: ejecucion de launcion getConection