<?php

require_once '../models/Course.php';

function getCourses() {

    echo Course::getAll();
    
}

?>