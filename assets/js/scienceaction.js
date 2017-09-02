;(function($){
	"use strict";
	
	// youtube
	var fnResizeMedia = function() {
		$("div.movie").each(function(i, el){
			$("iframe", el).each(function(j, iframe){
				var w = $(el).width();
				var h = w * 0.5625;
				$(iframe).width(w);
				$(iframe).height(h);
			})
		})
	};
	
	
	
	
	// --
	fnResizeMedia();
	$(window).resize(fnResizeMedia);

	
})(jQuery);
