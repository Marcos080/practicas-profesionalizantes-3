USE paises;

DROP TABLE IF EXISTS country;

CREATE TABLE country (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  capital VARCHAR(100),
  language VARCHAR(100),
  area INT,
  population INT
);

INSERT INTO country (name, capital, language, area, population) VALUES
('Argentina', 'Buenos Aires', 'Spanish', 2780400, 47000000),
('Brasil', 'Brasilia', 'Portuguese', 8515767, 215000000);

DELIMITER //

CREATE PROCEDURE country_create(
  IN p_name VARCHAR(100),
  IN p_capital VARCHAR(100),
  IN p_language VARCHAR(100),
  IN p_area INT,
  IN p_population INT
)
BEGIN
  INSERT INTO country (name, capital, language, area, population)
  VALUES (p_name, p_capital, p_language, p_area, p_population);
END //

CREATE PROCEDURE country_update(
  IN p_id INT,
  IN p_name VARCHAR(100),
  IN p_capital VARCHAR(100),
  IN p_language VARCHAR(100),
  IN p_area INT,
  IN p_population INT
)
BEGIN
  UPDATE country
  SET name = p_name,
      capital = p_capital,
      language = p_language,
      area = p_area,
      population = p_population
  WHERE id = p_id;
END //

CREATE PROCEDURE country_delete(
  IN p_id INT
)
BEGIN
  DELETE FROM country WHERE id = p_id;
END //

DELIMITER ;
