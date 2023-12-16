<?php
require_once '../db.php';

class Experience{

    public static function getAll(){
        global $conn;
        $sql = "
        SELECT * FROM experience
        ";
        $result = $conn->query($sql);
        $rows = mysqli_fetch_all($result, MYSQLI_ASSOC);

        for($i=0;$i<count($rows);$i++){

            $id = $rows[$i]['id'];

            $sql = "
            SELECT * FROM experience_description
            where job_id=$id";
            $result = $conn->query($sql);
            $rows2 = mysqli_fetch_all($result, MYSQLI_ASSOC);
            
            $rows[$i]['des']=$rows2;
        }

        return json_encode($rows);
    }

}


?>