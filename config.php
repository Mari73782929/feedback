<?php
$host = "localhost";
$user = "root";  // your MySQL username
$pass = "";      // your MySQL password
$db   = "feedback_portal";

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    die("Database connection failed: " . $conn->connect_error);
}
?>
