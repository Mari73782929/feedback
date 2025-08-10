<?php
require 'config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $year    = $_POST['year'];
    $sem     = $_POST['sem'];
    $date    = $_POST['date'];
    $branch  = $_POST['branch'];
    $section = $_POST['section'];
    $subject = $_POST['subject'];
    $ques1   = $_POST['ques1'];
    $remarks = $_POST['remarks'];

    $stmt = $conn->prepare("INSERT INTO feedbacks (year, sem, date, branch, section, subject, ques1, remarks) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssssssis", $year, $sem, $date, $branch, $section, $subject, $ques1, $remarks);

    if ($stmt->execute()) {
        echo "<script>alert('Feedback Submitted!'); window.location='index.html';</script>";
    } else {
        echo "Error: " . $stmt->error;
    }
}
?>
