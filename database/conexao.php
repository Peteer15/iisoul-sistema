<?php

$servername = "iisoul-cadastro-db-1";
$username = "root";
$password = "root";
$db = "public";

// Create connection
$conexao = new mysqli($servername, $username, $password, $db);

 //Check connection
if ($conexao->connect_error) {
    die("Connection failed: " . $conexao->connect_error);
}

return $conexao;
?>  