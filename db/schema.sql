DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers(
	id INT AUTO_INCREMENT NOT NULL,
	burger_name VARCHAR(200) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	time_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

	PRIMARY KEY(id)
);