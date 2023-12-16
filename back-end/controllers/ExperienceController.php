<?php

require_once '../models/Experience.php';

function getExperience() {

    echo Experience::getAll();
    
}

?>