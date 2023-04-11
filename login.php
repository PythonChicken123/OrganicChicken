<?php
// Get the request body
$request_body = file_get_contents('php://input');
$data = json_decode($request_body, true);

// Get the username and password from the request data
$username = $data['username'];
$password = $data['password'];

// Perform the login logic
// This is a basic example, you should implement proper validation and authentication here
if ($username === 'username' && $password === 'password') {
    $response = array('success' => true, 'message' => 'Login successful');
} else {
    $response = array('success' => false, 'message' => 'Invalid username or password');
}

// Return the JSON response
header('Content-Type: application/json');
echo json_encode($response);
