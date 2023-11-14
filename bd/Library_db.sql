CREATE TABLE `Library`.`books` (
  `idbooks` INT NOT NULL AUTO_INCREMENT,
  `título` VARCHAR(45) NOT NULL,
  `autor` VARCHAR(45) NOT NULL,
  `descripción` VARCHAR(1024) NOT NULL,
  `género` VARCHAR(45) NOT NULL,
  `páginas` INT NOT NULL,
  PRIMARY KEY (`idbooks`));

INSERT INTO `Library`.`books` (`idbooks`, `título`, `autor`, `descripción`, `género`, `páginas`) VALUES ('2', 'Tomates verdes fritos', 'Fannie Flagg', 'Evelyn Couch vive una existencia gris. Es una mujer de mediana edad, acomplejada y totalmente frustrada con todo lo que la rodea. Sin embargo, la manera de ver el mundo que tiene una persona puede cambiar cuando menos se lo espera. En una visita al asilo donde reside la madre de su marido, Evelyn conoce a la anciana Ninny Threadgoode, que le empieza a explicar cosas de un pequeño pueblo llamado Whistle Stop, cuya vida giró un tiempo en torno a un café. De pronto, a Evelyn se le abre una luminosa ventana al pasado por la que entra un aire de una frescura desconocida para ella. Remontándose a finales de la década de 1920, Ninny explica historias cuyas protagonistas son Idgie y Ruth, dos espíritus sensibles, alegres y llenos de una admirable energía vital, que saben sobreponerse a las dificultades y saborear el gusto por la vida. Tomates verdes fritos aborda temas tan difíciles como la discriminación de la mujer, el racismo, el lesbianismo, la miseria o el alcoholismo y, a pesar de eso, es una de esas novelas optimistas en las que, como por arte de magia, todo encaja a la perfección y acaban cautivando al lector.', 'Novela', '352');
INSERT INTO `Library`.`books` (`idbooks`, `título`, `autor`, `descripción`, `género`, `páginas`) VALUES ('3', 'Flores en el ático', ' V. C. Andrews', 'Corre el año 1957, y los Dollanganger parecen una familia perfecta que vive sin preocupaciones en su idílica casa de Gladstone, Pensilvania... hasta que la tragedia llama a su puerta. Ocurre el día en que Christopher, el patriarca de la familia, muere en un accidente. Su viuda, Corrine, debe hacer frente al peso de una gran deuda que no puede asumir. Su única opción: regresar a la mansión de sus acaudalados padres en busca de ayuda. Su madre, Olivia Foxworth, la acoge bajo la cruel condición de que los niños se escondan en el desván.\n\nDe esta forma empieza el tormento de los hermanos Dollanganger -Cathy, Chris y los gemelos Carrie y Cory-, víctimas inocentes de pasiones prohibidas y condenados a vivir aislados del mundo.', 'Novela', '480');
INSERT INTO `Library`.`books` (`idbooks`, `título`, `autor`, `descripción`, `género`, `páginas`) VALUES ('1', 'El principito', 'Antoine de Saint-Exupéry', 'La historia se centra en un pequeño príncipe que realiza una travesía por el universo. En este viaje descubre la extraña forma en que los adultos ven la vida y comprende el valor del amor y la amistad.', 'Literaruta infantil', '96');
INSERT INTO `Library`.`books` (`idbooks`, `título`, `autor`, `descripción`, `género`, `páginas`) VALUES ('4', 'La chica del tren', 'Paula Hawkins', 'Rachel toma siempre el tren de las 8.04 h. Cada mañana lo mismo: el mismo paisaje, las mismas casas…y la misma parada en la señal roja. Son solo unos segundos, pero le permiten observar a una pareja desayunando tranquilamente en su terraza. Siente que los conoce y se inventa unos nombres para ellos: Jess y Jason. Su vida es perfecta, no como la suya. Pero un día ve algo. Sucede muy deprisa, pero es suficiente. ¿Y si Jess y Jason no son tan felices como ella cree? ¿Y si nada es lo que parece?\nTú no la conoces. Ella a ti, sí.', 'Suspense', '496');
ALTER TABLE `Library`.`books` 
CHANGE COLUMN `descripción` `descripción` VARCHAR(2024) NOT NULL ;


INSERT INTO `Library`.`books` (`idbooks`, `título`, `autor`, `descripción`, `género`, `páginas`) VALUES ('2', 'Tomates verdes fritos', 'Fannie Flagg', 'Evelyn Couch vive una existencia gris. Es una mujer de mediana edad, acomplejada y totalmente frustrada con todo lo que la rodea. Sin embargo, la manera de ver el mundo que tiene una persona puede cambiar cuando menos se lo espera. En una visita al asilo donde reside la madre de su marido, Evelyn conoce a la anciana Ninny Threadgoode, que le empieza a explicar cosas de un pequeño pueblo llamado Whistle Stop, cuya vida giró un tiempo en torno a un café. De pronto, a Evelyn se le abre una luminosa ventana al pasado por la que entra un aire de una frescura desconocida para ella. Remontándose a finales de la década de 1920, Ninny explica historias cuyas protagonistas son Idgie y Ruth, dos espíritus sensibles, alegres y llenos de una admirable energía vital, que saben sobreponerse a las dificultades y saborear el gusto por la vida. Tomates verdes fritos aborda temas tan difíciles como la discriminación de la mujer, el racismo, el lesbianismo, la miseria o el alcoholismo y, a pesar de eso, es una de esas novelas optimistas en las que, como por arte de magia, todo encaja a la perfección y acaban cautivando al lector.', 'Novela', '352');
INSERT INTO `Library`.`books` (`idbooks`, `título`, `autor`, `descripción`, `género`, `páginas`) VALUES ('3', 'Flores en el ático', ' V. C. Andrews', 'Corre el año 1957, y los Dollanganger parecen una familia perfecta que vive sin preocupaciones en su idílica casa de Gladstone, Pensilvania... hasta que la tragedia llama a su puerta. Ocurre el día en que Christopher, el patriarca de la familia, muere en un accidente. Su viuda, Corrine, debe hacer frente al peso de una gran deuda que no puede asumir. Su única opción: regresar a la mansión de sus acaudalados padres en busca de ayuda. Su madre, Olivia Foxworth, la acoge bajo la cruel condición de que los niños se escondan en el desván.\n\nDe esta forma empieza el tormento de los hermanos Dollanganger -Cathy, Chris y los gemelos Carrie y Cory-, víctimas inocentes de pasiones prohibidas y condenados a vivir aislados del mundo.', 'Novela', '480');
INSERT INTO `Library`.`books` (`idbooks`, `título`, `autor`, `descripción`, `género`, `páginas`) VALUES ('1', 'El principito', 'Antoine de Saint-Exupéry', 'La historia se centra en un pequeño príncipe que realiza una travesía por el universo. En este viaje descubre la extraña forma en que los adultos ven la vida y comprende el valor del amor y la amistad.', 'Literaruta infantil', '96');
INSERT INTO `Library`.`books` (`idbooks`, `título`, `autor`, `descripción`, `género`, `páginas`) VALUES ('4', 'La chica del tren', 'Paula Hawkins', 'Rachel toma siempre el tren de las 8.04 h. Cada mañana lo mismo: el mismo paisaje, las mismas casas…y la misma parada en la señal roja. Son solo unos segundos, pero le permiten observar a una pareja desayunando tranquilamente en su terraza. Siente que los conoce y se inventa unos nombres para ellos: Jess y Jason. Su vida es perfecta, no como la suya. Pero un día ve algo. Sucede muy deprisa, pero es suficiente. ¿Y si Jess y Jason no son tan felices como ella cree? ¿Y si nada es lo que parece?\nTú no la conoces. Ella a ti, sí.', 'Suspense', '496');