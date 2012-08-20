config {
	css {
		main = ya/style.css
		# print = print.css
		# extension = extension.css
	}

	template {
		templatesPath = EXT:in2client/Resources/Private/Templates
		file = ya.html
		layoutsPath = EXT:in2client/Resources/Private/Layouts
		partialsPath = EXT:in2client/Resources/Private/Partials
		cssPath = EXT:in2client/Resources/Public/css
		imgPath = EXT:in2client/Resources/Public/img
		jsPath = EXT:in2client/Resources/Public/js
	}
}

[treeLevel = 1,2,3,4,5]
config.template.file = ya_subsite.html
[end]