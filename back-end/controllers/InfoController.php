<?php

require_once '../models/Info.php';

function getInfo() {

    echo Info::getAll();
    
}

?>