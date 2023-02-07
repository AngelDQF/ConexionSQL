import { getConection, sql, queries } from "../models";//TODO: importamos la funcion getConection del archivo conexion.js
export const getPruebas = async (req, res) => {//TODO: esta funcion sirve para obtener todos los productos de la base de datos
  console.log(queries.queryGetPruebas);
  const pool = await getConection();
  const result = await pool.query(queries.queryGetPruebas);
  console.log(result);
};
export const postPrueba = async (req, res) => {

  const { OrgTipo } = req.body;
  res.json("new prueba");
  console.log(OrgTipo);
  try {
    const pool = await getConection();
    await pool.request().input("tipo", sql.NVarChar, OrgTipo).query(queries.queryPostPrueba);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  };
};
export const getPrueba = async (req, res) => {
  const { idPrueba } = req.body;
  res.json(idPrueba);
  try {
    const pool = await getConection();
    await pool.request().input("id", sql.Int, idPrueba).query("Exec prc_BuscarOrganizacionTipo @id");

  } catch (error) {
    res.status(500);
    res.send(error.message);
  }

}
