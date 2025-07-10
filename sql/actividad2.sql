USE paises;

DROP TABLE IF EXISTS city;

CREATE TABLE city (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  population INT,
  area INT,
  postal_code VARCHAR(20),
  is_coastal BOOLEAN,
  id_country INT,
  FOREIGN KEY (id_country) REFERENCES country(id)
);

INSERT INTO city (name, population, area, postal_code, is_coastal, id_country)
VALUES 
  ('Buenos Aires', 3000000, 203, 'C1000', TRUE, 1),
  ('Córdoba', 1400000, 576, 'X5000', FALSE, 1),
  ('Río de Janeiro', 6700000, 1200, '20000', TRUE, 2);

DELIMITER //

CREATE PROCEDURE city_create(
  IN p_name VARCHAR(100),
  IN p_population INT,
  IN p_area INT,
  IN p_postal_code VARCHAR(20),
  IN p_is_coastal BOOLEAN,
  IN p_id_country INT
)
BEGIN
  INSERT INTO city (name, population, area, postal_code, is_coastal, id_country)
  VALUES (p_name, p_population, p_area, p_postal_code, p_is_coastal, p_id_country);
END //

CREATE PROCEDURE city_update(
  IN p_id INT,
  IN p_name VARCHAR(100),
  IN p_population INT,
  IN p_area INT,
  IN p_postal_code VARCHAR(20),
  IN p_is_coastal BOOLEAN,
  IN p_id_country INT
)
BEGIN
  UPDATE city
  SET name = p_name,
      population = p_population,
      area = p_area,
      postal_code = p_postal_code,
      is_coastal = p_is_coastal,
      id_country = p_id_country
  WHERE id = p_id;
END //

CREATE PROCEDURE city_delete(
  IN p_id INT
)
BEGIN
  DELETE FROM city WHERE id = p_id;
END //

CREATE PROCEDURE get_country_with_most_populated_city()
BEGIN
  SELECT c.name
  FROM country c
  JOIN city ci ON ci.id_country = c.id
  ORDER BY ci.population DESC
  LIMIT 1;
END //

CREATE PROCEDURE get_countries_with_large_coastal_cities()
BEGIN
  SELECT DISTINCT c.name
  FROM country c
  JOIN city ci ON ci.id_country = c.id
  WHERE ci.is_coastal = TRUE AND ci.population > 1000000;
END //

CREATE PROCEDURE get_city_with_highest_density()
BEGIN
  SELECT 
    c.name AS country_name,
    ci.name AS city_name,
    (ci.population / ci.area) AS density
  FROM country c
  JOIN city ci ON ci.id_country = c.id
  WHERE ci.area > 0
  ORDER BY density DESC
  LIMIT 1;
END //

DELIMITER ;
