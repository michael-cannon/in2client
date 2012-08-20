lib.nav.service = HMENU
lib.nav.service {

	special = directory
	special.value = {$nav.service}

	1 = TMENU
	1 {
		wrap = <ul id="navservice" class="clearfix">|</ul>
		expAll = 0
		noBlur = 1
		NO = 1
		NO {
			ATagTitle.field = subtitle // title
			wrapItemAndSub = <li>|</li> |*||*| <li class="last">|</li>
			ATagParams = target="_blank"
			ATagParams.if {
				value.field = doktype
				equals = 3
			}
		}
		ACT < .NO
		ACT.wrapItemAndSub = <li class="act">|</li>
	}
}