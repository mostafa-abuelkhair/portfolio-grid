<?php

require_once '../models/Education.php';

function getEducation() {

    echo Education::getAll();
    
}

?>