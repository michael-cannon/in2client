lib.phone.nav.footer < lib.nav.footer
lib.phone.nav.footer {
	special.value = {$phone.nav.footer.pages}

	1 {
		NO {
			stdWrap.cObject = TEXT
			stdWrap.cObject.field = subtitle // title
		}
		CUR.stdWrap.cObject < .NO.stdWrap.cObject
		ACT.stdWrap.cObject < .NO.stdWrap.cObject
	}
}
