lib.phone.nav.main < lib.nav.default
lib.phone.nav.main {
	1 {
		wrap >
		stdWrap.dataWrap = <ul class="nav nav-pills nav-stacked" id="menu-{register:count_HMENU}">|</ul>

		CUR >
		CUR < .ACT

		IFSUB = 1
		IFSUB {
			doNotLinkIt = 1
			subst_elementUid = 1
			wrapItemAndSub = <li class="accordion-group">|</ul></li>
			before.wrap = <a data-toggle="collapse" data-parent="#menu-{register:count_HMENU}"|
			before.insertData = 1
			linkWrap = data-target=".element-{elementUid}">|<b class="caret"></b></a><ul class="collapse element-{elementUid}">
		}

		ACTIFSUB < .IFSUB
		ACTIFSUB {
			wrapItemAndSub = <li class="accordion-group active">|</ul></li>
			linkWrap = data-target=".element-{elementUid}">|<b class="caret"></b></a><ul class="in collapse element-{elementUid}">
		}

		CURIFSUB < .ACTIFSUB
	}

	2 >
	2 < .1
	2 {
		wrap >
		stdWrap.dataWrap >
		IFSUB >
		ACTIFSUB >
		CURIFSUB >
	}

	3 >
}
