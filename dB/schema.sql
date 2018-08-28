DROP DATABASE IF EXISTS recipe_box;

CREATE DATABASE recipe_box;

\connect recipe_box;

CREATE TABLE recipes (
    id SERIAL PRIMARY KEY,
    boxName varchar(40),
    title varchar(100) NOT NULL,
    link text NOT NULL,
    hasShopingList boolean NOT NULL,
    shoppingList text
);


insert into recipes (boxName, title, link, hasShopingList) 
values ('soups', 'french onion soup', 'https://www.simplyrecipes.com/recipes/french_onion_soup/', false);

insert into recipes (boxName, title, link, hasShopingList) 
values ('desserts', 'lemon cheesecake', 'https://www.tasteofhome.com/recipes/lemon-dream-cheesecake/', false);

insert into recipes (boxName, title, link, hasShopingList) 
values ('salads', 'ceasar salad', 'https://www.bonappetit.com/recipe/classic-caesar-salad', false);

insert into recipes (boxName, title, link, hasShopingList) 
values ('gluten-free', 'sandwich bread', 'https://www.kingarthurflour.com/recipes/gluten-free-sandwich-bread-recipe', false);
