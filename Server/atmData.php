<?php
    header('Access-Control-Allow-Origin: *');
    // POST
    if (isset($_POST['accounts'])) {
        $accounts = $_POST['accounts'];
        file_put_contents("accounts.txt", $accounts);
        $response = array('status' => 'OK', 'message' => 'POST: OK');
    // GET
    } else {
        $accounts = file_get_contents("accounts.txt");
        $response = array('status' => 'OK', 'message' => 'GET: OK', 'accounts' => $accounts);
    }
    echo json_encode($response);
?>
