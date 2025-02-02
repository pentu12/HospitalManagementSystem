<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "blood_bank";

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Handle Blood Donation
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['donate'])) {
    $name = $_POST['name'];
    $blood_type = $_POST['blood_type'];
    $contact = $_POST['contact'];

    $sql = "INSERT INTO donors (name, blood_type, contact) VALUES ('$name', '$blood_type', '$contact')";
    $conn->query($sql);
}

// Handle Blood Request
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['request'])) {
    $name = $_POST['name'];
    $blood_type = $_POST['blood_type'];
    $contact = $_POST['contact'];

    $sql = "INSERT INTO requests (name, blood_type, contact) VALUES ('$name', '$blood_type', '$contact')";
    $conn->query($sql);
}

// Fetch Donors
$donors_result = $conn->query("SELECT * FROM donors");
?>
