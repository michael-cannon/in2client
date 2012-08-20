#
# Configuration for gridelements
#

# showing headlines for gridelements
tt_content.gridelements_pi1.10 =< lib.stdheader

# gridelement for 2column linkboxes
tt_content.gridelements_pi1.20.10.setup {
	# ID of gridelement
	1 < temp.gridelements.defaultGridSetup
	1 {
    	wrap = <div class="col2 row">|</div>
    	columns {
    		# colPos ID
    		100 < .default
			100.wrap = <div class="left span6">|</div>
			101 < .default
			101.wrap = <div class="right span4">|</div>
    	}
    }
}
