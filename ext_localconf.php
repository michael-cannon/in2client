<?php
if ( ! defined('TYPO3_MODE') ) {
	die ('Access denied.');
}

// add settings from ext_conf_template.txt
$confArr	= unserialize( $GLOBALS['TYPO3_CONF_VARS']['EXT']['extConf']['in2client'] );

if ( 1 == $confArr['enableMinimizedRTE'] ) {
	t3lib_extMgm::addPageTSConfig('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:in2client/Configuration/TSConfig/rte.ts">');
}

if ( 1 == $confArr['enableDefaultPageTSconfig'] ) {
	t3lib_extMgm::addPageTSConfig('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:in2client/Configuration/TSConfig/page.ts">');
}

if ( 1 == $confArr['enableDefaultUserTSconfig'] ) {
	t3lib_extMgm::addUserTSConfig('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:in2client/Configuration/TSConfig/user.ts">');
}

?>