<?php
require_once '../db.php';

class Education{

    public static function getAll(){
        global $conn;
        $sql = "SELECT * FROM education";
        $result = $conn->query($sql);
        $rows = mysqli_fetch_all($result, MYSQLI_ASSOC);
        return json_encode($rows);
    }

}


?>