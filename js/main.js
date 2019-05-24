$(function() {
	$('#table-of-contents a').smoothScroll()
	$( '.outline-2' ).searchable({
		selector      : 'li',
		childSelector : 'a',
		searchField   : '#search',
		// striped       : true,
		// oddRow        : { 'background-color': '#f5f5f5' },
		// evenRow       : { 'background-color': '#fff' },
		hide          : function( elem ) {
			elem.fadeOut(100);
		},
		show          : function( elem ) {
			elem.fadeIn(100);
		},
		// searchType    : 'fuzzy',
		onSearchActive : function( elem, term ) {
			elem.show();
		},
		// onSearchEmpty: function( elem ) {
		// 	elem.hide();
		// },
		// onSearchFocus: function() {
		// 	$( '#feedback' ).show().text( 'Type to search.' );
		// },
		// onSearchBlur: function() {
		// 	$( '#feedback' ).hide();
		// },
		// clearOnLoad: true
	});
});
