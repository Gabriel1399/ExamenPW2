//const express=require('express');
import express from "express";
import db from "./config/db.js";

const app = express();

//conexion de base de datos
db.authenticate()
    .then(() => console.log("Conexion Exitosa"))
    .catch(error => console.log(error));

//definiendo el puerto
const port = process.env.PORT || 1800;

//definiendo pug para plantillas
app.set("view engine", "pug");

//middleware
app.use((req, res, next) => {
    const ano = new Date();
    res.locals.tiempo = " " + ano.getFullYear();
    return next();
});


app.listen(port, () => {
    console.log('Servidor iniciado en el puerto ' + port);
});