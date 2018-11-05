IF DATABASE EXISTS DROP bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
    item_id INT(5) AUTO_INCRIMENT NOT NULL,
    product_id VARCHAR(30) NOT NULL,
    department_name VARCHAR(30) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    stock_quantity INT(5),
    PRIMARY KEY(item_id)
);

INSERT INTO products(item_id, product_id, department_name, price, stock_quantity) values ('0', 'Bacon', "meats", "$7.45", "250"), ("1", "Cheese", "dairy", "$4.50", "250"), ("2", "Doritos", "snacks", "$3.99", "250"), ("3", "Sausage", "meats", "$9.99", "250"), ("4", "Jacket", "apparel", "$24.99", "100"), ("5", "Milk", "dairy", "$4.99", "350"), ("6", "Umbrella", "apparel", "$19.99", "250"), ("7", "Super Smash Bros.", "games", "$59.99", "450"), ("8", "Nintendo Switch", "games", "$299.99", "50"), ("9", "Diamond Ring", "jewelry", "$999.99", "30");