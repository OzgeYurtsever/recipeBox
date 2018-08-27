DROP DATABASE IF EXISTS recipe_box;

CREATE DATABASE recipe_box;

\connect recipe_box;

CREATE TABLE recipes (
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title text NOT NULL,
    link text NOT NULL,
    hasShopingList boolean NOT NULL,
);