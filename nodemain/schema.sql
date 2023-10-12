CREATE DATABASE GYM;
use GYM;
CREATE TABLE GYMDATA(
    id integer PRIMARY KEY AUTO_INCREMENT,
    title varchar(255) NOT NULL,
    contents TEXT NOT NULL,
    created TIMESTAMP NOT NULL DEFAULT NOW());
INSERT INTO GYMDATA(title,contents) VALUES('My First Note','Install MySQL'),
('My Second Note','Install MySQL2');