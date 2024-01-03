(function () {
	var api;
	var extName = "esc-blur-polyfill";
	htmx.defineExtension(extName, {
		init: function (apiRef) {
			api = apiRef;
		},
		onEvent: function (name, evt) {
			if (api.getAttributeValue(evt.detail.elt, "hx-ext") === extName) {
				if (evt.detail && evt.detail.triggeringEvent) {
					var esc = evt.detail.triggeringEvent.sourceCapabilities === null;
					evt.detail.path = evt.detail.path + "&esc=" + esc;
				}
			}
		},
	});
})();