plugin.tt_news {
	catOrderBy = title ASC
	excludeAlreadyDisplayedNews = 0
	listOrderBy = datetime DESC
	useHRDates = 1

	displayList {
		subheader_stdWrap.crop = 120 | ... | 1
		subheader_stdWrap.wrap = | &nbsp;

		image {
			#file.maxW = 35
			#file.maxH = 25
			file.width = 100c
			file.height = 70c
		}
	}

	_LOCAL_LANG {
		default {
			more = [read more]
		}

		de {
			more = [lesen Sie mehr]
		}
	}
}