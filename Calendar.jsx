
#include "./node_modules/@marchingy/lunar/lib/index.js"
#include "Shape.jsx"

/**
 * Calendar Object
 */
var Calendar = {
	traditionalFestivals : {
		LC_0101 : '春节',
		LC_0115 : '元宵',
		LC_0505 : '端午',
		LC_0707 : '七夕',
		LC_0715 : '中元',
		LC_0815 : '中秋',
		LC_0909 : '重阳',
		LC_1208 : '腊八',
		LC_1224 : '小年',
		LC_0100 : '除夕'
	},
	additionalFestivals : {
		SC_0101 : '元旦',
		SC_0214 : '情人节',
		SC_0308 : '妇女节',
		SC_0312 : '植树节',
		SC_0315 : '消费者权益日',
		SC_0401 : '愚人节',
		SC_0501 : '劳动节',
		SC_0504 : '青年节',
		SC_0512 : '护士节',
		SC_0601 : '儿童节',
		SC_0701 : [ '建党节', '香港回归' ],
		SC_0801 : '建军节',
		SC_0909 : '毛主席逝世',
		SC_0910 : '教师节',
		SC_0928 : '孔子诞辰',
		SC_1001 : '国庆节',
		SC_1006 : '老人节',
		SC_1024 : '联合国日',
		SC_1112 : '孙中山诞辰',
		SC_1220 : '澳门回归',
		SC_1225 : '圣诞节',
		SC_1226 : '毛主席诞辰'
	}
};

/**
 * For Testing

var td = Calendar.getLunarDate(new Date(2015, 9, 21));

for(var v in td) {
	if(td[ v ] instanceof Array) {
		$.writeln(v + ' - ' + td[ v ]);
	} else if(typeof td[ v ] === 'object') {
		$.writeln(v);
		for(var n in td[ v ]) {
			$.writeln(n + ' - ' + td[ v ][ n ]);
		}
	} else {
		$.writeln(v + ' - ' + td[ v ]);
	}
}
 */

/**
 * Calendar Configuration
 */
var calendarData = {
	dimension : {
		width : 8,
		height : 6,
		unit : 'INCHES',
		resolution : 300
	},
	year : 2016,
	DOM_Name : function() {
		return 'Calendar-' + calendarData.year;
	},
	backgrounds : new Folder('E://Images/BGS').getFiles(function() {
		if(arguments[ 0 ] && arguments[ 0 ] instanceof File && arguments[ 0 ].displayName.match(/\.(pdf|ai|jpg|jpeg|png|bmp|'gif|tif|psb|psd)$/i)) {
			return true;
		}
		$.writeln(arguments[ 0 ].displayName + ' is not a image.');

		return false;
	})
};
//== To Get postScriptName Of Font - app.activeDocument.activeLayer.textItem.font
var config = {
	font : 'TimesNewRomanPSMT',
	language : 'EN',
	gap : 0.35,
	padding: 0.5,
	tableWidth : 2.26,
	tableHeight : 2.25,
	positions : [ 'right bottom', 'right bottom', 'right bottom', 'right bottom', 'right bottom', 'right bottom', 'right bottom', 'right bottom', 'right bottom', 'right bottom', 'right bottom', 'right bottom'  ],
	savePath : '~/Desktop/'
};
var originalUnits = {
	ruler : app.preferences.rulerUnits,
	type : app.preferences.typeUnits
}
config.targetFolder = new Folder(config.savePath);

app.displayDialogs = DialogModes.NO;
app.preferences.rulerUnits = Units[ calendarData.dimension.unit ];
app.preferences.gridSize = GridSize.MEDIUM;
//app.preferences.typeUnits = TypeUnits[ calendarData.dimension.unit ];
while(app.documents.length) {
	app.activeDocument.close(SaveOptions.SAVECHANGES)
}
app.activeDocument = app.documents.add(calendarData.dimension.width, calendarData.dimension.height, calendarData.dimension.resolution, calendarData.DOM_Name());
app.activeDocument.guides.add(Direction.VERTICAL, 0.5);
app.activeDocument.guides.add(Direction.VERTICAL, calendarData.dimension.width - 0.5);
app.activeDocument.guides.add(Direction.HORIZONTAL, 1);
app.activeDocument.guides.add(Direction.HORIZONTAL, calendarData.dimension.height - 0.5);

/**
 * Initialize Document
 */
(function() {
	const startDate = new ChineseDate(calendarData.year, 0);
	var moves = {
		top : config.padding * 1.5,
		right : calendarData.dimension.width -  config.padding - config.tableWidth,
		bottom : calendarData.dimension.height -  config.padding - config.tableHeight,
		left : config.padding
	};
	var tempLunarDate, position;
	var lineNum = 0, bgWidth = 0, bgHeight = 0, zoomRatio = 100, layerSetStyleSupported = true;
	//== Photoshop LayerSets or Layers
	var tempLayerSets = {
		month : null,
		week : null,
		day : null,
		dayTable : null,
		background : null
	};
	var tempLayers = {
		title : null,
		day : null,
		date : null,
		lunarDate : null
	};

	for(var m in Calendar.months) {
		position = config.positions[ m ].split(' ');
		if(position instanceof Array) {
			if(position[ 0 ] !== 'left' && position[ 0 ] !== 'right') {
				position[ 0 ]  = 'left';
			}
			if(position[ 1 ] !== 'top' && position[ 1 ] !== 'bottom') {
				position[ 1 ]  = 'top';
			}
		} else if(typeof position === 'string') {
			if(position === 'left' || position === 'right') {
				position  = [ position, 'top' ];
			} else if(position === 'top' || position === 'bottom') {
				position  = [ 'left', position ];
			} else {
				position = [ 'left', 'top' ];
			}
		} else {
			position = [ 'left', 'top' ];
		}

		tempLayerSets.month = app.activeDocument.layerSets.add();
		tempLayerSets.month.name = Calendar.months[ m ].EN;

		if(calendarData.backgrounds[ m ]) {
			PlaceFile(calendarData.backgrounds[ m ]);
			background = app.activeDocument.activeLayer;
			background.move(tempLayerSets.month, ElementPlacement.PLACEATEND);
			background.resize(100, 100);
			bgWidth = background.bounds[2] - background.bounds[0], bgHeight = background.bounds[3] - background.bounds[1];
			if(bgWidth / bgHeight > calendarData.dimension.width / calendarData.dimension.height) {
				zoomRatio = 100 * (calendarData.dimension.height / bgHeight);
				$.writeln('475: ' + zoomRatio);
			} else {
				zoomRatio = 100 * (calendarData.dimension.width / bgWidth);
			}
			background.resize(zoomRatio, zoomRatio, AnchorPosition.MIDDLECENTER);
			background.translate(-background.bounds[0], 0)
		} else {
			background = tempLayerSets.month.artLayers.add();
		}
		background.name = 'Background';

		tempLayers.title = tempLayerSets.month.artLayers.add();
		tempLayers.title.kind = LayerKind.TEXT;
		tempLayers.title.textItem.antiAliasMethod = AntiAlias.STRONG;
		tempLayers.title.textItem.font = 'TimesNewRomanPS-BoldMT';
		tempLayers.title.textItem.size = 16;
		tempLayers.title.textItem.contents = Calendar.months[ m ][ config.language ];
		tempLayers.title.translate(moves[ position[ 0 ] ] - parseFloat((tempLayers.title.boundsNoEffects || tempLayers.title.bounds)[ 0 ]), moves[ position[ 1 ] ] - parseFloat((tempLayers.title.boundsNoEffects || tempLayers.title.bounds)[ 1 ]));
		tempLayers.title.applyStyle('White Glow');

		tempLayerSets.week = tempLayerSets.month.layerSets.add();
		tempLayerSets.week .name = 'Week Header';
		if(layerSetStyleSupported) {
			try {
				tempLayerSets.week.applyStyle('White Glow');
			} catch(error) {
				$.writeln(error.line + ' : ' + error);
				layerSetStyleSupported = false;
			}
		}
		for(var w in Calendar.daysOfWeek) {
			tempLayers.day = tempLayerSets.week .artLayers.add();
			tempLayers.day.name = Calendar.daysOfWeek[ w ].EN;
			tempLayers.day.kind = LayerKind.TEXT;
			tempLayers.day.textItem.antiAliasMethod = AntiAlias.STRONG;
			tempLayers.day.textItem.font = 'TimesNewRomanPS-BoldMT';
			tempLayers.day.textItem.size = 12;
			tempLayers.day.textItem.contents = Calendar.daysOfWeek[ w ].EN.charAt(0).toUpperCase();
			tempLayers.day.translate(moves[ position[ 0 ] ] + w * config.gap - parseFloat((tempLayers.day.boundsNoEffects || tempLayers.day.bounds)[ 0 ]), moves[ position[ 1 ] ] + config.gap - parseFloat((tempLayers.day.boundsNoEffects || tempLayers.day.bounds)[ 1 ]));
			if(!layerSetStyleSupported) {
				tempLayers.day.applyStyle('White Glow');
			}
		}

		tempLayerSets.dayTable = tempLayerSets.month.layerSets.add();
		tempLayerSets.dayTable.name = 'Day Table';
		if(layerSetStyleSupported) {
			try {
				tempLayerSets.dayTable.applyStyle('White Glow');
			} catch(error) {
				$.writeln(error.file + ' - Line ' + error.line + ' : ' + error);
			}
		}
		for(var i = startDate.getDate(); startDate.getMonth() == m; startDate.setDate(++i)) {
			tempLunarDate = Calendar.getLunarDate(startDate);

			tempLayerSets.day = tempLayerSets.dayTable.layerSets.add();
			tempLayerSets.day.name = startDate.toDateString();
			tempLayers.date = tempLayerSets.day.artLayers.add();	
			tempLayers.lunarDate = tempLayerSets.day.artLayers.add();

			tempLayers.lunarDate.kind = tempLayers.date.kind = LayerKind.TEXT;

			tempLayers.date.textItem.antiAliasMethod = AntiAlias.STRONG;
			tempLayers.date.textItem.font = config.font;
			tempLayers.date.textItem.size = 12;
			tempLayers.date.textItem.contents = i;
			tempLayers.date.translate(moves[ position[ 0 ] ] + startDate.getDay() * config.gap - parseFloat((tempLayers.date.boundsNoEffects || tempLayers.date.bounds)[ 0 ]), moves[ position[ 1 ] ] + config.gap * 1.8 + lineNum - parseFloat((tempLayers.date.boundsNoEffects || tempLayers.date.bounds)[ 1 ]));

			tempLayers.lunarDate.textItem.antiAliasMethod = AntiAlias.STRONG;
			tempLayers.lunarDate.textItem.font = 'AdobeHeitiStd-Regular';
			tempLayers.lunarDate.textItem.size = 6; 
			tempLayers.lunarDate.textItem.contents = tempLunarDate.festivals[ 0 ] || tempLunarDate.lunarDay.alt;
			tempLayers.lunarDate.translate(moves[ position[ 0 ] ] + startDate.getDay() * config.gap - parseFloat((tempLayers.lunarDate.boundsNoEffects || tempLayers.lunarDate.bounds)[ 0 ]), moves[ position[ 1 ] ] + config.gap * 2.2 + lineNum - parseFloat((tempLayers.lunarDate.boundsNoEffects || tempLayers.lunarDate.bounds)[ 1 ]));

			if(!layerSetStyleSupported) {
				tempLayers.date.applyStyle('White Glow');
				tempLayers.lunarDate.applyStyle('White Glow');
			}
			if(startDate.getDay() == 6) {
				lineNum += config.gap;
			}
		}
		tempLayerSets.month.visible = (m == Calendar.months.length - 1);
		lineNum = 0;
		if(m == 1) {
			//break;
		}
	}

	startDate = null, moves = null, tempLunarDate = null, position = null;
	lineNum = null, bgWidth = null, bgHeight = null, zoomRatio = null, layerSetStyleSupported = null;
	tempLayerSets = null, tempLayers = null;
})();

app.activeDocument.saveAs(new File(config.savePath + calendarData.DOM_Name() + '.psd'), new PhotoshopSaveOptions(), false, Extension.LOWERCASE);
app.preferences.rulerUnits = originalUnits.ruler;
//app.preferences.typeUnits = originalUnits.type;

function PlaceFile(nFile) {
   var actionDesc = new ActionDescriptor(), actionDescB = new ActionDescriptor();
  
   actionDesc.putPath(app.stringIDToTypeID('null'), nFile);
   actionDesc.putEnumerated(app.charIDToTypeID('FTcs'), app.charIDToTypeID('QCSt'), app.charIDToTypeID('Qcsa') );  
   actionDescB.putUnitDouble(app.charIDToTypeID('Hrzn'), app.charIDToTypeID('#Pxl'), 0.000000);
   actionDescB.putUnitDouble(app.charIDToTypeID('Vrtc'), app.charIDToTypeID('#Pxl'), 0.000000);
   actionDesc.putObject(app.charIDToTypeID('Ofst'), app.charIDToTypeID('Ofst'), actionDescB);
   executeAction(app.charIDToTypeID('Plc '), actionDesc, DialogModes.NO);
}