plugin.tt_news {
	catOrderBy = title ASC
	excludeAlreadyDisplayedNews = 0
	listOrderBy = datetime DESC
	useHRDates = 1

	displayList {
		subheader_stdWrap.crop = 230 | | 1
		subheader_stdWrap.wrap = | &nbsp;
	}

	_LOCAL_LANG {
		default {
		}

		de {
			more = [lesen Sie mehr…]
		}
	}
}