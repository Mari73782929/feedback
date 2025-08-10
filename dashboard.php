<?php
session_start();
require 'config.php';

if (!isset($_SESSION['admin'])) {
    header("Location: admin_login.html");
    exit();
}

$result = $conn->query("SELECT * FROM feedbacks ORDER BY id DESC");
?>
<!DOCTYPE html>
<html>
<head>
<title>Admin Dashboard</title>
<link rel="stylesheet" href="style.css">
</head>
<body>
<h1>Welcome, <?php echo $_SESSION['admin']; ?></h1>
<a href="logout.php">Logout</a>
<table border="1" cellpadding="5">
<tr>
<th>Year</th><th>Sem</th><th>Date</th><th>Branch</th><th>Section</th><th>Subject</th><th>Q1</th><th>Remarks</th>
</tr>
<?php while($row = $result->fetch_assoc()): ?>
<tr>
<td><?= $row['year'] ?></td>
<td><?= $row['sem'] ?></td>
<td><?= $row['date'] ?></td>
<td><?= $row['branch'] ?></td>
<td><?= $row['section'] ?></td>
<td><?= $row['subject'] ?></td>
<td><?= $row['ques1'] ?></td>
<td><?= $row['remarks'] ?></td>
</tr>
<?php endwhile; ?>
</table>
</body>
</html>
