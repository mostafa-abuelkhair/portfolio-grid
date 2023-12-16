<?php

require_once '../models/Cource.php';

function getCources() {

    echo Cource::getAll();
    
}

?>