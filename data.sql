CREATE DATABASE feedback_portal;

USE feedback_portal;

-- Admin Login Table
CREATE TABLE admins (
    id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

-- Feedback Table
CREATE TABLE feedbacks (
    id INT PRIMARY KEY AUTO_INCREMENT,
    year VARCHAR(10),
    sem VARCHAR(10),
    date DATE,
    branch VARCHAR(50),
    section VARCHAR(10),
    subject VARCHAR(100),
    ques1 INT,
    remarks TEXT
);

-- Default admin login (password = 1234)
INSERT INTO admins (email, password) VALUES ('admin@example.com', MD5('1234'));
