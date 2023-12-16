<?php

require_once '../models/Language.php';

function getLanguages() {

    echo Language::getAll();
    
}

?>