DROP DATABASE if EXISTS bamazon;
CREATE DATABASE bamazonDB;
USE bamazon;

CREATE TABLE products
(
    id INT NOT NULL
    auto_increment,
    product_name VARCHAR
    (255) DEFAULT NULL,
    department_name VARCHAR
    (255) DEFAULT NULL,
    price INT DEFAULT 0,
    stock_quantity INT DEFAULT 0,
    PRIMARY KEY
    (item_id)
);

    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES
        ("Laptop Stand", "Electronics", $19.99, 100);

    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES
        ("Rose Gold Earrings", "Jewelry", $49.99, 3);

    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES
        ("Hair Conditioning Mask", "Beauty", $29.95, 30);

    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES
        ("iPhone charger", "Electronics", $39.99, 100);

    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES
        ("Friendship bracelet", "Jewelry", $19.99, 25);

    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES
        ("Silver eyeshadow", "Beauty", $9.99, 10);

    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES
        ("Bluetooth Speaker", "Electronics", $21.24, 50);

    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES
        ("Headphones", "Electronics", $199.99, 10);

    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES
        ("Diffuser", "Beauty", $10.45, 45);

    INSERT INTO products
        (product_name, department_name, price, stock_quantity)
    VALUES
        ("Clay Mask", "Beauty", $18.43, 25);