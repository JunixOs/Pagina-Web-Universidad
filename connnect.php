
<?php
define('DB_NAME','demo');
define('DB_PASSWORD','');
define('DB_SERVER','localhost');
define('DB_USERNAME','root');

$link=mysqli_connect('DB_NAME','DB_SERVER','DB_PASSWORD','DB_USERNAME');

if ($link===false){
    die("Error al conectar". mysqli_connect_error());
}
?>