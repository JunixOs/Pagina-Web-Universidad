

CREATE TABLE IF NOT EXISTS Users
( 
    ID int(10) NOT NULL,
    Nombre CHARACTER(25) NULL,
    Apellido CHARACTER(25) NOT NULL,
    Telefono int(11) NOT NULL,
    Email varchar(255) NULL,
    PRIMARY KEY (ID)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

INSERT INTO Users (id,Nombre,Apellido,Telefono,Email)
VALUES
    (1,"Yonel Junior","Ordoñez Silva",934564789,"yonel7@hotmail.com"),
    (2,"Amelia","Mauricio Solorzano",945342345,"mau69@yahho.com");




