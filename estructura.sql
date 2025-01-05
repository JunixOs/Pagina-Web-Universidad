
CREATE TABLE IF NOT EXISTS Users
( 
    ID INT PRIMARY KEY NOT NULL,
    Nombre CHARACTER(25) NULL,
    Apellido CHARACTER(25) NOT NULL,
    Telefono INT NOT NULL,
    Email varchar(255) NULL
)

INSERT INTO Users (id,Nombre,Apellido,Telefono,Email)
VALUES
    (1,"Yonel Junior","Ordoñez Silva",934564789,"yonel7@hotmail.com"),
    (2,"Amelia","Mauricio Solorzano",945342345,"mau69@yahho.com");


