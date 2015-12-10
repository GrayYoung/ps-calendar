﻿var Shape = {
	vector : {
		create : function() {
			var doc = app.activeDocument;
			var subPath = new SubPathInfo();
			var points = [];

			for (var i = 0; i < arguments.length; i++) {
				points[i] = new PathPointInfo;
				points[i].kind = PointKind.SMOOTHPOINT;
				points[i].anchor = arguments[i];
				points[i].leftDirection = [ arguments[i][0] + 50, arguments[i][0] + 50 ];
				points[i].rightDirection = [ arguments[i][0] + 50, arguments[i][0] + 50 ];
			}

			subPath.closed = true;
			subPath.operation = ShapeOperation.SHAPEADD;
			subPath.entireSubPath = points;
			var myPathItem = doc.pathItems.add("myPath", [subPath]);

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
		createCycle : function(r, cPosition) {
			var subPath = new SubPathInfo();
			var points = new Array(new PathPointInfo, new PathPointInfo, new PathPointInfo, new PathPointInfo);
			var roundPathLayer;
			var directionDistance = 0;

			if(!(cPosition instanceof Array)) {
				cPosition = [r, r];
			}
			if(typeof r !== 'number') {
				r = 10;
			}
			if(typeof cPosition[0] !== 'number') {
				cPosition[1] = r;
			}
			if(typeof cPosition[1] !== 'number') {
				cPosition[1] = r;
			}
			directionDistance = r / Math.tan(Math.PI / (180 / 61));

			points[0].kind = PointKind.SMOOTHPOINT;
			points[0].anchor = [cPosition[0], cPosition[1] - r];
			points[0].leftDirection = [cPosition[0] + directionDistance, cPosition[1] - r];
			points[0].rightDirection = [cPosition[0] - directionDistance, cPosition[1] - r];

			points[1].kind = PointKind.SMOOTHPOINT;
			points[1].anchor = [cPosition[0] + r, cPosition[1]];
			points[1].leftDirection = [cPosition[0] + r, cPosition[1] + directionDistance];
			points[1].rightDirection = [cPosition[0] + r, cPosition[1] - directionDistance];

			points[2].kind = PointKind.SMOOTHPOINT;
			points[2].anchor = [cPosition[0], cPosition[1] + r];
			points[2].leftDirection = [cPosition[0] - directionDistance, cPosition[1] + r];
			points[2].rightDirection = [cPosition[0] + directionDistance, cPosition[1] + r];

			points[3].kind = PointKind.SMOOTHPOINT;
			points[3].anchor = [cPosition[0] - r, cPosition[1]];
			points[3].leftDirection = [cPosition[0] - r, cPosition[1] - directionDistance];
			points[3].rightDirection = [cPosition[0] - r, cPosition[1] + directionDistance];

			subPath.closed = true;
			subPath.operation = ShapeOperation.SHAPEADD;
			subPath.entireSubPath = points;
			roundPathLayer = app.activeDocument.pathItems.add('roundPath', [subPath]);

			var desc88 = new ActionDescriptor();
			var desc89 = new ActionDescriptor();
			var desc90 = new ActionDescriptor();
			var desc91 = new ActionDescriptor();
			var ref60 = new ActionReference();

			ref60.putClass(stringIDToTypeID('contentLayer'));
			desc88.putReference(charIDToTypeID('null'), ref60);

			desc91.putDouble(charIDToTypeID('Rd  '), 0.000000);
			desc91.putDouble(charIDToTypeID('Grn '), 0.000000);
			desc91.putDouble(charIDToTypeID('Bl  '), 0.000000);
			desc90.putObject(charIDToTypeID('Clr '), charIDToTypeID('RGBC'), desc91);
			desc89.putObject(charIDToTypeID('Type'), stringIDToTypeID('solidColorLayer'), desc90);
			desc88.putObject(charIDToTypeID('Usng'), stringIDToTypeID('contentLayer'), desc89);

			executeAction(charIDToTypeID('Mk  '), desc88, DialogModes.NO);
			roundPathLayer.remove();
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

			line = app.activeDocument.pathItems.add('Line', [spi]);
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

//drawLine([100,100], [200,200]);

Shape.vector.createCycle(50);
