<?php
require_once '../db.php';

class Cource{

    public static function getAll(){
        global $conn;
        $sql = "SELECT * FROM cource";
        $result = $conn->query($sql);
        $rows = mysqli_fetch_all($result, MYSQLI_ASSOC);
        return json_encode($rows);
    }

}


?>