# This builds upon in2master's like file
# <INCLUDE_TYPOSCRIPT: source="FILE:EXT:in2master/Configuration/TSConfig/page.ts">

# optionals
# <INCLUDE_TYPOSCRIPT: source="FILE:EXT:in2client/Configuration/TSConfig/belayout.ts">
# <INCLUDE_TYPOSCRIPT: source="FILE:EXT:in2client/Configuration/TSConfig/frames.ts">
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:in2client/Configuration/TSConfig/tt_news.ts">

mod {
	SHARED {
		# show all columns in TYPO3 backend
		colPos_list = 0,1,2,3
	}
}

TCEFORM {
	pages {
		subtitle.disabled = 0
	}

	tt_content {
		header_layout {
			addItems.200 = Grau Bausteinkopfes
		}

		spaceBefore.disabled = 0

		section_frame {
			removeItems = 1,5,6,10,11,12,20,21
			addItems {
				100 = Unterste Element
				110 = Zweites Element Unterste

				200 = Hidden Phone
				205 = Visible Phone

				210 = Hidden Tablet
				215 = Visible Tablet

				220 = Hidden Desktop
				225 = Visible Desktop

				230 = Hidden Large Desktop
				235 = Visible Large Desktop
			}
		}
	}
}
