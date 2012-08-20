lib.nav.sub = HMENU
lib.nav.sub {
	entryLevel = 1
	wrap = <ul id="menu_sub">|</ul>

	1 = TMENU
	1 {
		NO = 1
		NO.allWrap = <li>|</li>

		ACT < .NO
		ACT.allWrap = <li class="act">|</li>
	}
}