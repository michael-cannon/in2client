lib.nav.header {
	1 {
		CUR >
		CUR < .ACT

		IFSUB = 1
		IFSUB {
			wrapItemAndSub = <li class="dropdown">|</li>
			stdWrap.wrap = | <b class="caret"></b>
			ATagParams = class="dropdown-toggle" data-toggle="dropdown"
		}

		ACTIFSUB < .IFSUB
		ACTIFSUB {
			wrapItemAndSub = <li class="dropdown active">|</li>
		}

		CURIFSUB < .ACTIFSUB

		SPC = 1
		SPC {
			wrapItemAndSub = <li class="divider-vertical">|</li>
			doNotShowLink = 1
		}
	}

	2 >
	2 < .1
	2 {
		wrap = <ul class="dropdown-menu">|</ul>
		IFSUB >
		ACTIFSUB >
		CURIFSUB >
	}

	3 >
	# 3 < .2
}