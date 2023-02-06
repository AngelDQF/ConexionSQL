import { getConection,sql } from "../Config/conexion";//TODO: importamos la funcion getConection del archivo conexion.js
export const getPruebas = async (req, res) => {//TODO: esta funcion sirve para obtener todos los productos de la base de datos
  const pool = await getConection();
  const result = await pool.request().query("select * from vew_OrganizacionTipos");
  res.json(result.recordset);
  console.log(result);
};
export const postPrueba = async(req, res) => {
  const  tipo_Organizacion = req.body.tipo_Organizacion;
  console.log(tipo_Organizacion);
  res.json("new prueba");

  const pool = await getConection();
  await pool.request().input("tipo", sql.NVarChar, tipo_Organizacion).query("Exec prc_CrearOrganizacionTipo @tipo");
};
export const getPrueba = async (req, res) => {
  const {idPrueba}=req.body;
  res.json(idPrueba);
  const pool = await getConection();
  await pool.request().input("id", sql.Int, idPrueba).query("Exec prc_BuscarOrganizacionTipo @id");
}
