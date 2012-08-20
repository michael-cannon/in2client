# [globalVar = TSFE : beUserLogin > 0] || [IP = {$config.devIp}]
# page.10 >
# page.10 = FLUIDTEMPLATE
# page.10 {
# 	file.cObject = CASE
# 	file.cObject {
# 		key {
# 			field = backend_layout
# 			ifEmpty.data = levelfield:-2, backend_layout_next_level, slide
# 		}
# 
#   		default = TEXT
# 		default.value = {$config.template.templatesPath}/page-1col.html
# 
# 		# Ziffer ist die ID des Backendlayout
# 		# Numeric index is the ID of the backend layout
#   		1 = TEXT
# 		1.value = {$config.template.templatesPath}/page-1col.html
# 
#   		2 = TEXT
# 		2.value = {$config.template.templatesPath}/page-1col-header.html
# 
#   		3 = TEXT
# 		3.value = {$config.template.templatesPath}/page-2col-header.html
# 
#   		4 = TEXT
# 		4.value = {$config.template.templatesPath}/page-2col.html
#  	}
# 
# 	layoutRootPath = {$config.template.layoutsPath}
# 	partialRootPath = {$config.template.partialsPath}
# }
# [end]

# page {
# 	# adding PID to body tag
#  	bodyTag >
#  
#  	bodyTagCObject = TEXT
#  	bodyTagCObject {
#  		field = uid
#  		wrap = <body class="pid|">
#  	}
# }