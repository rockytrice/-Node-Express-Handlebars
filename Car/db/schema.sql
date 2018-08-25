CREATE DATABASE cars_db;
USE cars_db;

CREATE TABLE cars
(
	id int NOT NULL AUTO_INCREMENT,
	car_name varchar(255) NOT NULL,
	purchased BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
