temp.nav.top < lib.nav.top
lib.nav.top >
lib.nav.top = COA
lib.nav.top {
	10 < temp.nav.top

	20 = TEXT
	20 {
		value (
			<form class="navbar-search pull-right">
				<label for="s">Suche:</label>
				<input type="text" name="s" class="search-query" />
				<input type="submit" value="Einsenden" />
			</form>
		)
	}
}