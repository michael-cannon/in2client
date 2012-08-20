# This builds upon in2master's like file
# <INCLUDE_TYPOSCRIPT: source="FILE:EXT:in2master/Configuration/TSConfig/rte.ts">

#RTE {
#	default {
#		showButtons = bold, link, unorderedlist, removeformat, formatblock, chMode, undo, redo
#		toolbarOrder = bold, link, unorderedlist, removeformat, formatblock, chMode, undo, redo
#		buttons.toggleborders.setOnTableCreation
#		hidePStyleItems = h1,h2,h5,h6,address,pre,div
#		enableWordClean = 1
#		enableWordClean.HTMLparser < RTE.default.proc.entryHTMLparser_db
#		classesAnchor = btn, btn-success, icon-thumbs-up
#		classesAnchor.default {
#			page = internal-link
#			url = external-link-new-window
#			file = icon-download
#			mail = icon-envelope
#		}
#	}
#}
