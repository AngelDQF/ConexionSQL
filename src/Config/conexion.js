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
export async function getConection() {//TODO: esta funcion sirve para crear una conexion con la base de datos
  try {
    const pool = await sql.connect(dbSettings);//TODO: esta funcion sirve para crear un pool de conexiones con la base de datos, permitiendonos hacer consultas a la base de datos
    return pool; //TODO: retornamos el pool de conexiones
  } catch (error) {
    console.log(error);
  }
}
//getConection();//TODO: ejecucion de launcion getConection
export {sql};