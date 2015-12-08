var Shape = {
	vector : {
		create : function() {
			var doc = app.activeDocument;
			var lineSubPathArray = new SubPathInfo();
			var lineArray = [];

			for (var i = 0; i < arguments.length; i++) {
				lineArray[i] = new PathPointInfo;
				lineArray[i].kind = PointKind.SMOOTHPOINT;
				lineArray[i].anchor = arguments[i];
				lineArray[i].leftDirection = [ arguments[i][0] + 50, arguments[i][0] + 50 ];
				lineArray[i].rightDirection = [ arguments[i][0] + 50, arguments[i][0] + 50 ];
			}

			lineSubPathArray.closed = true;
			lineSubPathArray.operation = ShapeOperation.SHAPEADD;
			lineSubPathArray.entireSubPath = lineArray;
			var myPathItem = doc.pathItems.add("myPath", [lineSubPathArray]);

			var desc88 = new ActionDescriptor();
			var desc89 = new ActionDescriptor();
			var desc90 = new ActionDescriptor();
			var desc91 = new ActionDescriptor();
			var ref60 = new ActionReference();
			var id481 = charIDToTypeID("RGBC");

			ref60.putClass(stringIDToTypeID("contentLayer"));
			desc88.putReference(charIDToTypeID("null"), ref60);

			desc91.putDouble(charIDToTypeID("Rd  "), 0.000000); // R
			desc91.putDouble(charIDToTypeID("Grn "), 0.000000); // G
			desc91.putDouble(charIDToTypeID("Bl  "), 0.000000); // B
			desc90.putObject(charIDToTypeID("Clr "), id481, desc91);
			desc89.putObject(charIDToTypeID("Type"), stringIDToTypeID("solidColorLayer"), desc90);
			desc88.putObject(charIDToTypeID("Usng"), stringIDToTypeID("contentLayer"), desc89);

			executeAction(charIDToTypeID("Mk  "), desc88, DialogModes.NO);
			myPathItem.remove();
		},
		createCycle : function(size, cPosition) {
			var doc = app.activeDocument;
			var lineSubPathArray = new SubPathInfo();
			var lineArray = new Array(new PathPointInfo, new PathPointInfo, new PathPointInfo, new PathPointInfo);

			if(!(cPosition instanceof Array)) {
				cPosition = [size / 2, size / 2];
			}
			if(typeof size !== 'number') {
				size = 10;
			}
			if(typeof cPosition[0] !== 'number') {
				cPosition[1] = size / 2;
			}
			if(typeof cPosition[1] !== 'number') {
				cPosition[1] = size / 2;
			}
			lineArray[0].kind = PointKind.SMOOTHPOINT;
			lineArray[0].anchor = [cPosition[0], cPosition[1] - size / 2];
			lineArray[0].leftDirection = [cPosition[0] + size / 4, cPosition[1] - size / 2];
			lineArray[0].rightDirection = [cPosition[0] - size / 4, cPosition[1] - size / 2];

			lineArray[1].kind = PointKind.SMOOTHPOINT;
			lineArray[1].anchor = [cPosition[0] + size / 2, cPosition[1]];
			lineArray[1].leftDirection = [cPosition[0] + size / 2, cPosition[1] + size / 4];
			lineArray[1].rightDirection = [cPosition[0] + size / 2, cPosition[1] - size / 4];

			lineArray[2].kind = PointKind.SMOOTHPOINT;
			lineArray[2].anchor = [cPosition[0], cPosition[1] + size / 2];
			lineArray[2].leftDirection = [cPosition[0] - size / 4, cPosition[1] + size / 2];
			lineArray[2].rightDirection = [cPosition[0] + size / 4, cPosition[1] + size / 2];

			lineArray[3].kind = PointKind.SMOOTHPOINT;
			lineArray[3].anchor = [cPosition[0] - size / 2, cPosition[1]];
			lineArray[3].leftDirection = [cPosition[0] - size / 2, cPosition[1] - size / 4];
			lineArray[3].rightDirection = [cPosition[0] - size / 2, cPosition[1] + size / 4];

			lineSubPathArray.closed = true;
			lineSubPathArray.operation = ShapeOperation.SHAPEADD;
			lineSubPathArray.entireSubPath = lineArray;
			var myPathItem = doc.pathItems.add("myPath", [lineSubPathArray]);

			var desc88 = new ActionDescriptor();
			var desc89 = new ActionDescriptor();
			var desc90 = new ActionDescriptor();
			var desc91 = new ActionDescriptor();
			var ref60 = new ActionReference();
			var id481 = charIDToTypeID("RGBC");

			ref60.putClass(stringIDToTypeID("contentLayer"));
			desc88.putReference(charIDToTypeID("null"), ref60);

			desc91.putDouble(charIDToTypeID("Rd  "), 0.000000); // R
			desc91.putDouble(charIDToTypeID("Grn "), 0.000000); // G
			desc91.putDouble(charIDToTypeID("Bl  "), 0.000000); // B
			desc90.putObject(charIDToTypeID("Clr "), id481, desc91);
			desc89.putObject(charIDToTypeID("Type"), stringIDToTypeID("solidColorLayer"), desc90);
			desc88.putObject(charIDToTypeID("Usng"), stringIDToTypeID("contentLayer"), desc89);

			executeAction(charIDToTypeID("Mk  "), desc88, DialogModes.NO);
			myPathItem.remove();
		}
	},
	selection : {
		drawLine : function(doc, start, stop) {
			var startPoint = new PathPointInfo();
			var stopPoint = new PathPointInfo();
			var spi = new SubPathInfo();
			var line;

			startPoint.anchor = start;
			startPoint.leftDirection = start;
			startPoint.rightDirection = start;
			startPoint.kind = PointKind.CORNERPOINT;
			stopPoint.anchor = stop;
			stopPoint.leftDirection = stop;
			stopPoint.rightDirection = stop;
			stopPoint.kind = PointKind.CORNERPOINT;

			spi.closed = false;
			spi.operation = ShapeOperation.SHAPEXOR;
			spi.entireSubPath = [startPoint, stopPoint];

			line = doc.pathItems.add("Line", [spi]);
			line.strokePath(ToolType.PENCIL);
			line.remove();
		},
		drawCycle : function() {
			var desc3 = new ActionDescriptor();
			var desc4 = new ActionDescriptor();
			var ref1 = new ActionReference();

			ref1.putProperty(charIDToTypeID("Chnl"), charIDToTypeID("fsel"));
			desc3.putReference(charIDToTypeID("null"), ref1 );
			desc4.putUnitDouble(charIDToTypeID("Top "), charIDToTypeID("#Pxl"), 110.000000 );
			desc4.putUnitDouble(charIDToTypeID("Left"), charIDToTypeID("#Pxl"), 110.000000 );
			desc4.putUnitDouble(charIDToTypeID("Btom"), charIDToTypeID("#Pxl"), 402.000000 );
			desc4.putUnitDouble(charIDToTypeID("Rght"), charIDToTypeID("#Pxl"), 402.000000 );
			desc3.putObject(charIDToTypeID("T   "), charIDToTypeID("Elps"), desc4 );
			executeAction(charIDToTypeID("setd"), desc3, DialogModes.NO );
		}
	}
};

// X,Y
// Put the coordinates in clockwise order
//DrawShape([200, 200], [300, 300], [200, 400], [100, 300]);

//drawLine(app.activeDocument, [100,100], [200,200]);

Shape.vector.createCycle(200);
