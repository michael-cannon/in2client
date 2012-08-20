lib.stdheader.10.2 >

# Headline styling depends on colPos
lib.stdheader.10.2 = CASE
lib.stdheader.10.2 {
	insertData = 1
	key.field = colPos

	# default settings for all colPos
	default = CASE
	default {
		insertData = 1
		key.data = cObj:parentRecordNumber
		# styling vor all headlines
		default = CASE
		default {
			insertData = 1
			key.field = tx_gridelements_columns
			# styling for headlines in all normal columns
			default = TEXT
			default {
				current = 1
				dataWrap = <h2{register:headerStyle}{register:headerClass}>|</h2>
			}
			### styling for headlines in gridelements
			# headlines for gridelement box left (ID of gridelement column)
			100 = TEXT
			100 {
				current = 1
				dataWrap = <h4{register:headerStyle}{register:headerClass}>|</h4>
			}
			#headlines for gridelement box right (ID of gridelement column)
			101 < .100
		}
		# styling only for the first headline in normal columns
		1 = TEXT
		1 {
			current = 1
			dataWrap = <h1{register:headerStyle}{register:headerClass}>|</h1>
		}
	}

	# headlines for main (colPos 0)
	0 = CASE
	0 {
		insertData = 1
		key.data = cObj:parentRecordNumber
		# styling vor all headlines
		default = TEXT
		default {
			current = 1
			dataWrap = <h2{register:headerStyle}{register:headerClass}>|</h2>
		}
		# styling only for the first headline
		1 = TEXT
		1 {
			current = 1
			dataWrap = <h1{register:headerStyle}{register:headerClass}>|</h1>
		}
	}

	# headlines for header (colPos 1)
	1 = CASE
	1 {
		insertData = 1
		key.data = cObj:parentRecordNumber
		# styling vor all headlines
		default = TEXT
		default {
			current = 1
			dataWrap = <h2{register:headerStyle}{register:headerClass}>|</h2>
		}
		# styling only for the first headline
		1 = TEXT
		1 {
			current = 1
			dataWrap = <h1{register:headerStyle}{register:headerClass}>|</h1>
		}
	}

	#headlines for right (colPos 2)
	2 = CASE
	2 {
		insertData = 1
		key.data = cObj:parentRecordNumber
		# styling vor all headlines
		default = TEXT
		default {
			current = 1
			dataWrap = <h5{register:headerStyle}{register:headerClass}>|</h5>
		}
		# styling only for the first headline
		1 = TEXT
		1 {
			current = 1
			dataWrap = <h4{register:headerStyle}{register:headerClass}>|</h4>
		}
	}
}