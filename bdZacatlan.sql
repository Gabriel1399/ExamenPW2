SET NAMES 'UTF8MB4'; 
DROP DATABASE IF EXISTS bdZacatlan;
CREATE DATABASE IF NOT EXISTS bdZacatlan DEFAULT CHARACTER SET UTF8MB4 ;
USE bdZacatlan;


CREATE TABLE Gerentes (
	id_grt		INTEGER NOT NULL AUTO_INCREMENT,
	nombre		VARCHAR(40) NOT NULL,
	ap_paterno	VARCHAR(20) NOT NULL,
	ap_materno	VARCHAR(20) NOT NULL,
	telefono	VARCHAR(10) NOT NULL,
	PRIMARY KEY(id_grt)
) DEFAULT CHARACTER SET UTF8MB4;

CREATE TABLE Hoteles (
	id_htl 		INTEGER NOT NULL AUTO_INCREMENT,
	nombre 		VARCHAR(40) NOT NULL,
	direccion	VARCHAR(100) NOT NULL,
	telefono		VARCHAR(10) NOT NULL,
	correo		VARCHAR (50) NOT NULL,
	id_grt		INTEGER,
	PRIMARY KEY(id_htl),
	FOREIGN KEY (id_grt) REFERENCES Gerentes (id_grt)
)DEFAULT CHARACTER SET UTF8MB4;

CREATE TABLE Habitaciones (
	id_hbt 			INTEGER NOT NULL AUTO_INCREMENT,
	piso 				VARCHAR(10) NOT NULL,
	nombre			VARCHAR(30) NOT NULL,
	refrigerador 	BOOLEAN NOT NULL,
	id_htl			INTEGER,
	PRIMARY KEY(id_hbt),
	FOREIGN KEY (id_htl) REFERENCES Hoteles (id_htl)
)DEFAULT CHARACTER SET UTF8MB4;

DELETE FROM Hoteles;
DELETE FROM Habitaciones;
DELETE FROM Gerentes;

alter table Gerentes auto_increment=1;
alter table Hoteles auto_increment=1;
alter table Habitaciones auto_increment=1;

INSERT INTO Gerentes(nombre,ap_paterno,ap_materno,telefono) VALUES('Gerente1','AP1','AM1','1111111111');
INSERT INTO Gerentes(nombre,ap_paterno,ap_materno,telefono) VALUES('Gerente2','AP2','AM2','2222222222');
INSERT INTO Gerentes(nombre,ap_paterno,ap_materno,telefono) VALUES('Gerente3','AP3','AM3','3333333333');
INSERT INTO Gerentes(nombre,ap_paterno,ap_materno,telefono) VALUES('Gerente4','AP4','AM4','4444444444');
INSERT INTO Gerentes(nombre,ap_paterno,ap_materno,telefono) VALUES('Gerente5','AP5','AM5','5555555555');
INSERT INTO Gerentes(nombre,ap_paterno,ap_materno,telefono) VALUES('Gerente6','AP6','AM6','6666666666');
INSERT INTO Gerentes(nombre,ap_paterno,ap_materno,telefono) VALUES('Gerente7','AP7','AM7','7777777777');
INSERT INTO Gerentes(nombre,ap_paterno,ap_materno,telefono) VALUES('Gerente8','AP8','AM8','8888888888');
INSERT INTO Gerentes(nombre,ap_paterno,ap_materno,telefono) VALUES('Gerente9','AP9','AM9','9999999999');
INSERT INTO Gerentes(nombre,ap_paterno,ap_materno,telefono) VALUES('Gerente10','AP10','AM10','1010101010');

INSERT INTO Hoteles(nombre,direccion,telefono,correo,id_grt) VALUES('Hotel1','Direccion1','1111111111','hotel1@gmail.com',1);
INSERT INTO Hoteles(nombre,direccion,telefono,correo,id_grt) VALUES('Hotel2','Direccion2','2222222222','hotel2@gmail.com',2);
INSERT INTO Hoteles(nombre,direccion,telefono,correo,id_grt) VALUES('Hotel3','Direccion3','3333333333','hotel3@gmail.com',3);
INSERT INTO Hoteles(nombre,direccion,telefono,correo,id_grt) VALUES('Hotel4','Direccion4','4444444444','hotel4@gmail.com',4);
INSERT INTO Hoteles(nombre,direccion,telefono,correo,id_grt) VALUES('Hotel5','Direccion5','5555555555','hotel5@gmail.com',5);

INSERT INTO Habitaciones(piso,nombre,refrigerador,id_htl) VALUES('P1','Habitacion1',TRUE,1);
INSERT INTO Habitaciones(piso,nombre,refrigerador,id_htl) VALUES('P2','Habitacion2',TRUE,1);
INSERT INTO Habitaciones(piso,nombre,refrigerador,id_htl) VALUES('P3','Habitacion3',TRUE,2);
INSERT INTO Habitaciones(piso,nombre,refrigerador,id_htl) VALUES('P4','Habitacion4',FALSE,2);
INSERT INTO Habitaciones(piso,nombre,refrigerador,id_htl) VALUES('P5','Habitacion5',FALSE,3);
INSERT INTO Habitaciones(piso,nombre,refrigerador,id_htl) VALUES('P6','Habitacion6',FALSE,3);
