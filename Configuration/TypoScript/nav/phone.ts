lib.nav.phone = HMENU
lib.nav.phone {

	wrap = <nav id="navmain-phone" class="span12" role="navigation">|</nav>

	special = directory
	special.value = {$nav.home}

	1 = TMENU
	1 {
		wrap = <ul class="clearfix">|</ul>
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
	2 < .1
	2 {
		wrap = <ul class="navmain2nd">|</ul>
		NO.wrapItemAndSub = <li>|</li> |*||*| <li class="last">|</li>
	}


}