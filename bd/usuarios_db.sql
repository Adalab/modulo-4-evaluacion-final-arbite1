CREATE TABLE `Library`.`usuarios_db` (
  `idusuarios_db` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(45) NULL,
  `nombre` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idusuarios_db`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE);


INSERT INTO `Library`.`usuarios_db`(email,nombre, password) VALUES ("ari@example.es", "ari" ,"api");