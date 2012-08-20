//TODO set the correct image dimensions

styles.content.imgtext.maxW = 970
tt_content.image.20.maxW = 970


# den Originalcode kopieren, um ihn wieder einsetzen zu können.
temp.ttcontent.image < tt_content.image

# Fallunterscheidung nach Spalte, zu der das Inhaltselement gehört
tt_content.image = CASE
tt_content.image {
	# margins between images and text
	20.colSpace = 20
	20.rowSpace = 20
	20.textMargin = 20
	# field for colPos
	key.field = colPos
	# default = alle nicht aufgeführten colPos
	default < temp.ttcontent.image
	# Maximale Bildbreite, normaler Fall in Pixeln
	default.20.maxW = 970
	# Maximale Bildbreite bei Text im Bild einstellen
	default.20.maxWInText = 333
	# Main 3col + Main 2col // Breite abhängig vom Backendlayout
	0 < .default
	0.20.maxW.cObject = CASE
	0.20.maxW.cObject {
		key.data = page:backend_layout
		key.ifEmpty.data = levelfield:-2, backend_layout_next_level, slide
		# 3col BE-Layout
		2 = TEXT
		2.value = 553
		# 2col BE-Layout
		3 = TEXT
		3.value = 809
	}
	0.20.maxWInText = 333
	# Right 3col
	2 < .default
	2.20.maxW = 212
	2.20.maxWInText = 333
	# Slider Startpage
	3 < .default
	3.20.maxW = 970
	3.20.maxWInText = 333
}

# Analog für Text mit Bild
temp.ttcontent.textpic < tt_content.textpic.20
tt_content.textpic.20 = CASE
tt_content.textpic.20 {
	key.field = colPos
	0 < temp.tt_content.textpic
	2 < temp.ttcontent.textpic
	3 < temp.ttcontent.textpic
	default < temp.ttcontent.textpic
	# Einstellung für Bild oben/unten
	default.maxW = 960
	# Main 3col + Main 2col // Breite abhängig vom Backendlayout
	0 < .default
	0.maxW.cObject = CASE
	0.maxW.cObject {
		key.data = page:backend_layout
		key.ifEmpty.data = levelfield:-2, backend_layout_next_level, slide
		# 3col BE-Layout
		2 = TEXT
		2.value = 553
		# 2col BE-Layout
		3 = TEXT
		3.value = 809
	}
	# Right 3col
	2 < .default
	2.maxW = 212
	# Slider Startpage
	3 < .default
	3.maxW = 960
	# Einstellung für Bild im/neben Text
	default.maxWInText = 460
	# Main 3col + Main 2col // Breite abhängig vom Backendlayout
	0.maxWInText = 265
	0.maxWInText.cObject = CASE
	0.maxWInText.cObject {
		key.data = page:backend_layout
		key.ifEmpty.data = levelfield:-2, backend_layout_next_level, slide
		# 3col BE-Layout
		2 = TEXT
		2.value = 265
		# 2col BE-Layout
		3 = TEXT
		3.value = 380
	}
	# Right 3col
	2.maxWInText = 80
	# Slider Startpage
	3.maxWInText = 400
}
