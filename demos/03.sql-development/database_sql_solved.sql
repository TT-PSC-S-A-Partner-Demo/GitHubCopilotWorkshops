--table for users, with following fields, age, ldap name, name, surname, email, PESEL, phone number
CREATE TABLE users (
    id INT IDENTITY  PRIMARY KEY,
    age INT,
    ldap_name VARCHAR(255),
    name VARCHAR(255),
    surname VARCHAR(255),
    email VARCHAR(255),
    PESEL VARCHAR(11),
    phone_number VARCHAR(9)
);

-- select all users which are older than 18
SELECT * FROM users WHERE age > 18;

-- create table address with fields: id, street, city, postal code, address type
CREATE TABLE address (
    id INT IDENTITY  PRIMARY KEY,
    street VARCHAR(255),
    city VARCHAR(255),
    postal_code VARCHAR(6),
    address_type VARCHAR(255)
);

-- create table user_address with fields: user_id, address_id
CREATE TABLE user_address (
    user_id INT,
    address_id INT,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (address_id) REFERENCES address(id)
);

-- create index on table users
CREATE INDEX idx_users ON users (age);


-- insert 10 rows to table users
INSERT INTO users (age, ldap_name, name, surname, email, PESEL, phone_number) VALUES (20, 'ldap1', 'name1', 'surname1', 'email1', '12345678901', '123456789');
INSERT INTO users (age, ldap_name, name, surname, email, PESEL, phone_number) VALUES (21, 'ldap2', 'name2', 'surname2', 'email2', '23456789012', '234567890');
INSERT INTO users (age, ldap_name, name, surname, email, PESEL, phone_number) VALUES (22, 'ldap3', 'name3', 'surname3', 'email3', '34567890123', '345678901');
INSERT INTO users (age, ldap_name, name, surname, email, PESEL, phone_number) VALUES (23, 'ldap4', 'name4', 'surname4', 'email4', '45678901234', '456789012');
INSERT INTO users (age, ldap_name, name, surname, email, PESEL, phone_number) VALUES (24, 'ldap5', 'name5', 'surname5', 'email5', '56789012345', '567890123');
INSERT INTO users (age, ldap_name, name, surname, email, PESEL, phone_number) VALUES (25, 'ldap6', 'name6', 'surname6', 'email6', '67890123456', '678901234');
INSERT INTO users (age, ldap_name, name, surname, email, PESEL, phone_number) VALUES (26, 'ldap7', 'name7', 'surname7', 'email7', '78901234567', '789012345');
INSERT INTO users (age, ldap_name, name, surname, email, PESEL, phone_number) VALUES (27, 'ldap8', 'name8', 'surname8', 'email8', '89012345678', '890123456');
INSERT INTO users (age, ldap_name, name, surname, email, PESEL, phone_number) VALUES (28, 'ldap9', 'name9', 'surname9', 'email9', '90123456789', '901234567');
INSERT INTO users (age, ldap_name, name, surname, email, PESEL, phone_number) VALUES (29, 'ldap10', 'name10', 'surname10', 'email10', '01234567890', '012345678');



-- select user with all his addresses using join users with address, print address street, city, postal code, focus on join
SELECT users.name, address.street, address.city, address.postal_code FROM users JOIN user_address ON users.id = user_address.user_id JOIN address ON user_address.address_id = address.id;


-- write command to show capabilities of select join and from, use methods to max() count() sum() avg() and group by
SELECT users.name, COUNT(users.age) FROM users GROUP BY users.name;

-- write command to show capabilities of select join and from, use methods to max() count() sum() avg() and group by
SELECT users.name, SUM(users.age) FROM users GROUP BY users.name;

-- write command to show capabilities of select join and from, use methods to max() count() sum() avg() and group by
SELECT users.name, AVG(users.age) FROM users GROUP BY users.name;

-- write command to show capabilities of select join and from, use methods to max() count() sum() avg() and group by
SELECT users.name, MIN(users.age) FROM users GROUP BY users.name;