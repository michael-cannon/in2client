<?php

########################################################################
# Extension Manager/Repository config file for ext "in2client".
#
# Auto generated 27-06-2012 11:39
#
# Manual updates:
# Only the data in the array - everything else is removed by next
# writing. "version" and "dependencies" must not be touched!
########################################################################

$EM_CONF[$_EXTKEY] = array(
	'title' => 'in2code Client',
	'description' => 'This extension builds upon in2master with the end items needed for a client specific design and settings.',
	'category' => 'be',
	'author' => 'Michael Cannon',
	'author_email' => 'info@in2code.de',
	'author_company' => 'in2code GmbH',
	'shy' => '',
	'priority' => '',
	'module' => '',
	'state' => 'alpha',
	'internal' => '',
	'uploadfolder' => 0,
	'createDirs' => '',
	'modify_tables' => '',
	'clearCacheOnLoad' => 0,
	'lockType' => '',
	'version' => '0.0.0',
	'constraints' => array(
		'depends' => array(
			'cms' => '',
			'extbase' => '',
			'fluid' => '',
			'in2master' => '',
		),
		'conflicts' => array(
		),
		'suggests' => array(
		),
	),
	'_md5_values_when_last_written' => 'a:105:{s:21:"ExtensionBuilder.json";s:4:"c89f";s:10:"README.txt";s:4:"a34b";s:21:"ext_conf_template.txt";s:4:"74f4";s:12:"ext_icon.gif";s:4:"adb8";s:17:"ext_localconf.php";s:4:"d8f0";s:14:"ext_tables.php";s:4:"475d";s:44:"Configuration/ExtensionBuilder/settings.yaml";s:4:"5d9c";s:39:"Configuration/TSConfig/page.belayout.ts";s:4:"5d38";s:37:"Configuration/TSConfig/page.frames.ts";s:4:"5efc";s:30:"Configuration/TSConfig/page.ts";s:4:"6061";s:29:"Configuration/TSConfig/rte.ts";s:4:"fb0e";s:30:"Configuration/TSConfig/user.ts";s:4:"bc7f";s:38:"Configuration/TypoScript/constants.txt";s:4:"f66f";s:34:"Configuration/TypoScript/setup.txt";s:4:"b892";s:42:"Configuration/TypoScript/content/frames.ts";s:4:"e14f";s:45:"Configuration/TypoScript/content/headlines.ts";s:4:"9490";s:42:"Configuration/TypoScript/content/images.ts";s:4:"c68d";s:46:"Configuration/TypoScript/content/responsive.ts";s:4:"9176";s:44:"Configuration/TypoScript/ext/gridelements.ts";s:4:"bbbd";s:39:"Configuration/TypoScript/page/config.ts";s:4:"5192";s:46:"Configuration/TypoScript/page/fluidtemplate.ts";s:4:"9275";s:41:"Configuration/TypoScript/page/includes.ts";s:4:"ebb5";s:45:"Configuration/TypoScript/viewhelpers/aside.ts";s:4:"1f4f";s:44:"Configuration/TypoScript/viewhelpers/logo.ts";s:4:"e1ff";s:50:"Configuration/TypoScript/viewhelpers/pageheader.ts";s:4:"51cb";s:51:"Configuration/TypoScript/viewhelpers/nav/example.ts";s:4:"ce4b";s:48:"Configuration/TypoScript/viewhelpers/nav/main.ts";s:4:"90aa";s:49:"Configuration/TypoScript/viewhelpers/nav/phone.ts";s:4:"d7be";s:51:"Configuration/TypoScript/viewhelpers/nav/service.ts";s:4:"742d";s:40:"Resources/Private/Language/locallang.xml";s:4:"860d";s:43:"Resources/Private/Language/locallang_db.xml";s:4:"e8fa";s:37:"Resources/Private/Layouts/layout.html";s:4:"7634";s:49:"Resources/Private/Templates/page-1col-header.html";s:4:"ae52";s:42:"Resources/Private/Templates/page-1col.html";s:4:"7a54";s:49:"Resources/Private/Templates/page-2col-header.html";s:4:"c3e9";s:42:"Resources/Private/Templates/page-2col.html";s:4:"e16e";s:26:"Resources/Public/config.rb";s:4:"949b";s:34:"Resources/Public/css/bootstrap.css";s:4:"409f";s:34:"Resources/Public/css/extension.css";s:4:"d41d";s:30:"Resources/Public/css/print.css";s:4:"d41d";s:35:"Resources/Public/css/responsive.css";s:4:"7986";s:30:"Resources/Public/css/style.css";s:4:"d41d";s:51:"Resources/Public/img/glyphicons-halflings-white.png";s:4:"9bbc";s:45:"Resources/Public/img/glyphicons-halflings.png";s:4:"74b8";s:30:"Resources/Public/img/icons.png";s:4:"2a6e";s:33:"Resources/Public/img/relation.gif";s:4:"e615";s:33:"Resources/Public/img/icons/de.png";s:4:"3e2f";s:38:"Resources/Public/img/icons/extlink.png";s:4:"f596";s:39:"Resources/Public/img/icons/facebook.png";s:4:"b8ad";s:33:"Resources/Public/img/icons/gb.png";s:4:"4049";s:38:"Resources/Public/img/icons/intlink.png";s:4:"e5ab";s:38:"Resources/Public/img/icons/magnify.png";s:4:"9025";s:38:"Resources/Public/img/icons/printer.png";s:4:"cfb0";s:34:"Resources/Public/img/icons/rss.png";s:4:"c50e";s:38:"Resources/Public/img/icons/twitter.png";s:4:"e225";s:38:"Resources/Public/img/icons/youtube.png";s:4:"9e09";s:36:"Resources/Public/js/bootstrap.min.js";s:4:"6a03";s:37:"Resources/Public/scss/_accordion.scss";s:4:"f9b7";s:34:"Resources/Public/scss/_alerts.scss";s:4:"faba";s:39:"Resources/Public/scss/_breadcrumbs.scss";s:4:"b41e";s:41:"Resources/Public/scss/_button-groups.scss";s:4:"3252";s:35:"Resources/Public/scss/_buttons.scss";s:4:"4956";s:36:"Resources/Public/scss/_carousel.scss";s:4:"b649";s:33:"Resources/Public/scss/_close.scss";s:4:"fc35";s:32:"Resources/Public/scss/_code.scss";s:4:"ed22";s:48:"Resources/Public/scss/_component-animations.scss";s:4:"0835";s:37:"Resources/Public/scss/_dropdowns.scss";s:4:"cbb9";s:33:"Resources/Public/scss/_forms.scss";s:4:"b387";s:32:"Resources/Public/scss/_grid.scss";s:4:"1b2d";s:37:"Resources/Public/scss/_hero-unit.scss";s:4:"f22b";s:41:"Resources/Public/scss/_labels-badges.scss";s:4:"9711";s:35:"Resources/Public/scss/_layouts.scss";s:4:"b70b";s:34:"Resources/Public/scss/_mixins.scss";s:4:"5a8f";s:34:"Resources/Public/scss/_modals.scss";s:4:"4998";s:34:"Resources/Public/scss/_navbar.scss";s:4:"a33f";s:32:"Resources/Public/scss/_navs.scss";s:4:"4f84";s:35:"Resources/Public/scss/_overall.scss";s:4:"952c";s:33:"Resources/Public/scss/_pager.scss";s:4:"81a3";s:38:"Resources/Public/scss/_pagination.scss";s:4:"df77";s:36:"Resources/Public/scss/_popovers.scss";s:4:"c7f1";s:41:"Resources/Public/scss/_progress-bars.scss";s:4:"5330";s:33:"Resources/Public/scss/_reset.scss";s:4:"0059";s:49:"Resources/Public/scss/_responsive-1200px-min.scss";s:4:"ffe4";s:48:"Resources/Public/scss/_responsive-767px-max.scss";s:4:"cf2b";s:50:"Resources/Public/scss/_responsive-768px-979px.scss";s:4:"6908";s:45:"Resources/Public/scss/_responsive-navbar.scss";s:4:"32ef";s:48:"Resources/Public/scss/_responsive-utilities.scss";s:4:"adb7";s:39:"Resources/Public/scss/_scaffolding.scss";s:4:"74e8";s:36:"Resources/Public/scss/_settings.scss";s:4:"c329";s:35:"Resources/Public/scss/_sprites.scss";s:4:"fc95";s:34:"Resources/Public/scss/_tables.scss";s:4:"64f4";s:38:"Resources/Public/scss/_thumbnails.scss";s:4:"1af1";s:35:"Resources/Public/scss/_tooltip.scss";s:4:"f7a3";s:32:"Resources/Public/scss/_type.scss";s:4:"277d";s:37:"Resources/Public/scss/_utilities.scss";s:4:"1e01";s:37:"Resources/Public/scss/_variables.scss";s:4:"7654";s:33:"Resources/Public/scss/_wells.scss";s:4:"b15a";s:36:"Resources/Public/scss/bootstrap.scss";s:4:"c5d2";s:37:"Resources/Public/scss/responsive.scss";s:4:"20ca";s:32:"Resources/Public/scss/style.scss";s:4:"a6dd";s:41:"Resources/Public/scss/tests/css-tests.css";s:4:"d030";s:42:"Resources/Public/scss/tests/css-tests.html";s:4:"9465";s:38:"Resources/Public/scss/tests/forms.html";s:4:"3945";s:39:"Resources/Public/scss/tests/navbar.html";s:4:"0b72";s:14:"doc/manual.sxw";s:4:"20fb";}',
);

?>