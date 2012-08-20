lib.nav.footer {
	1 {

		NO {
			subst_elementUid = 1
			wrapItemAndSub >
			linkWrap = <li class="element-{elementUid}">|</li>
		}

		ACT {
			subst_elementUid = 1
			wrapItemAndSub >
			linkWrap = <li class="active element-{elementUid}">|</li>
		}

		CUR {
			subst_elementUid = 1
			wrapItemAndSub >
			linkWrap = <li class="selected element-{elementUid}">|</li>
		}
	}
}