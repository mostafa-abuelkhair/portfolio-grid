<?php 

require_once 'utils/Router.php';

require_once 'controllers/InfoController.php';
require_once 'controllers/CourceController.php';
require_once 'controllers/ExperienceController.php';
require_once 'controllers/LanguageController.php';
require_once 'controllers/EducationController.php';
require_once 'controllers/MessageController.php';

Router::get('/info','getInfo');

Router::get('/cources','getCources');

Router::get('/languages','getLanguages');

Router::get('/experience','getExperience');

Router::get('/education','getEducation');

Router::post('/message','sendMessage');

include('index.html');

?>