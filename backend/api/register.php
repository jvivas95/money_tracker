<?php

header(("Access-Control-Allow-Origin: *"));
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: POST");

// DB connection
require_once __DIR__ . './../config/db.php';

// Get data from body
$data = json_decode(file_get_contents("php://input"));