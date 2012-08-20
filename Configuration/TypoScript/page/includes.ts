page {

	headerData {
		10 = TEXT
		10.value (
			<!--[if lt IE 9]>
				<link rel="stylesheet" type="text/css" href="typo3conf/ext/in2client/Resources/Public/css/ya/ie8.css" media="all">
				<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js" type="text/javascript"></script>
			<![endif]-->
		)
	}

	includeCSS {
		print >
		# extension >
		# prettify = {$config.template.jsPath}/google-code-prettify/prettify.css
	}

	# load libraries
	includeJSlibs {
	}

	# load custom code or JS using libraries
	includeJS {
	}

	includeJSFooterlibs {
		# jquery >
		jqueryUi >
		# includes the JS for Bootstrap
		# prettify = {$config.template.jsPath}/google-code-prettify/prettify.js
        transition = {$config.template.jsPath}/bootstrap-transition.js
        # alert = {$config.template.jsPath}/bootstrap-alert.js
        # modal = {$config.template.jsPath}/bootstrap-modal.js
        dropdown = {$config.template.jsPath}/bootstrap-dropdown.js
        # scrollspy = {$config.template.jsPath}/bootstrap-scrollspy.js
        # tab = {$config.template.jsPath}/bootstrap-tab.js
        # tooltip = {$config.template.jsPath}/bootstrap-tooltip.js
        # popover = {$config.template.jsPath}/bootstrap-popover.js
        # button = {$config.template.jsPath}/bootstrap-button.js
        collapse = {$config.template.jsPath}/bootstrap-collapse.js
        # carousel = {$config.template.jsPath}/bootstrap-carousel.js
        # typeahead = {$config.template.jsPath}/bootstrap-typeahead.js
        newsticker = {$config.template.jsPath}/jquery.webticker.js
	}

	includeJSFooter {
		# includes own custom effects JS
		effects = {$config.template.jsPath}/effects.js

		# html5shim >
	}
}