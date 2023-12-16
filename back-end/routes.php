<?php 

require_once 'utils/Router.php';

require_once 'controllers/InfoController.php';
require_once 'controllers/CourceController.php';
require_once 'controllers/ExperienceController.php';
require_once 'controllers/LanguageController.php';
require_once 'controllers/EducationController.php';

Router::get('/grid/info','getInfo');

Router::get('/grid/cources','getCources');

Router::get('/grid/languages','getLanguages');

Router::get('/grid/experience','getExperience');

Router::get('/grid/education','getEducation');


?>