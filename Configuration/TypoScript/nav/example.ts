# This builds upon in2master's like file
# <INCLUDE_TYPOSCRIPT: source="FILE:EXT:in2master/Configuration/TypoScript/menu/default/setup.txt">

lib.menu.example < lib.menu.default
lib.menu.example {
	entryLevel = 0

	1 {
		expAll = 0

		NO {
			wrapItemAndSub = <li>|</li>
		}
		
		# First clear the ATagParams setting of the ACT state because we are working with a copy of the object 'menu'
		# After that we add our modified configuration for menu.secondlevel
		ACT {
			ATagParams >
			wrapItemAndSub = <li class="active">|</li>
		}

		CUR {
			ATagParams >
			wrapItemAndSub = <li class="selected">|</li>
		}

	}
	
	# Copy the configuration of the first level of this menu to level 2 and 3
	2 < .1
	3 < .1
	4 < .1
}