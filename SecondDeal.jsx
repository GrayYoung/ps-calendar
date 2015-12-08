(function(artSets) {
	try {
		if(artSets.artLayers.length > 0) {
			for(var i = 0; i < artSets.artLayers.length; i ++) {
					$.writeln(i + ' : ' + artSets.artLayers[ i ].kind);
				if(artSets.artLayers[ i ].kind == LayerKind.TEXT) {
					$.writeln(i);
					artSets.artLayers[ i ].textItem.antiAliasMethod = AntiAlias.STRONG;
				}
			}
		}
		if(artSets.layerSets.length > 0) {
			for(var s = 0; s < artSets.layerSets.length; s++) {
				arguments.callee(artSets.layerSets[ s ]);
			}
		}
	} catch(error) {
		$.writeln(error.file + ' - Line ' + error.line + ' : ' + error);
	}
})(app.activeDocument);