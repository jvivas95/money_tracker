<?php

header(("Access-Control-Allow-Origin: *"));
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: POST");

// DB connection
require_once __DIR__ . './../config/db.php';

// Get data from body
$data = json_decode(file_get_contents("php://input", true), true);

if (!isset($data['username']) || !isset($data['password']) || !isset($data['email'])) {
    http_response_code(400);
    echo json_encode(["message" => "Invalid input"]);
    exit();
}

// Dates on variables
$username = htmlspecialchars(strip_tags(($data->username)));
$password = password_hash($data->password, PASSWORD_DEFAULT);
$email = htmlspecialchars(strip_tags(($data->email)));

// Prepare SQL statement
$stmt = $conn->prepare("INSERT INTO usuarios (username, password, email) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $username, $password, $email);

// Frontend response
if($stmt->execute()){
    http_response_code(201);
    echo json_encode(["message" => "Usuario registrado correctamente"]);
}
else{
    http_response_code(500);
    echo json_encode(["message" => "Error al registrar al usuario"]);
}
