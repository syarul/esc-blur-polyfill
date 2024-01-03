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
                    var url = new URL('http://0.0.0.0:1337/' + evt.detail.path);
                    url.searchParams.set("esc", esc);
                    evt.detail.path = url.toString().slice(20);
				}
			}
		},
	});
})();