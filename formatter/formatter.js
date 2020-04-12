sap.ui.define([],
	function() {
		return {
			commaSept: function(oNumber) {
				return oNumber.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
			}
		};
	});