/**
 * Calendar Object
 */
var Calendar = {
	months : [ {
		EN : 'January',
		CHS :  '一月'
	},  {
		EN : 'February',
		CHS :  '二月'
	}, {
		EN : 'March',
		CHS :  '三月'
	}, {
		EN : 'April',
		CHS :  '四月'
	}, {
		EN : 'May',
		CHS :  '五月'
	}, {
		EN : 'June',
		CHS :  '六月'
	}, {
		EN : 'July',
		CHS :  '七月'
	}, {
		EN : 'August',
		CHS :  '八月'
	}, {
		EN : 'September',
		CHS :  '九月'
	}, {
		EN : 'October',
		CHS :  '十月'
	}, {
		EN : 'November',
		CHS :  '十一月'
	}, {
		EN : 'December',
		CHS :  '十二月'
	} ],
	daysOfWeek : [ {
		EN : 'Sunday',
		CHS : '星期日'
	}, {
		EN : 'Monday',
		CHS : '星期一'
	}, {
		EN : 'Tuesday',
		CHS : '星期二'
	}, {
		EN : 'Wednesday',
		CHS : '星期三'
	}, {
		EN : 'Thursday',
		CHS : '星期四'
	}, {
		EN : 'Friday',
		CHS : '星期五'
	}, {
		EN : 'Saturday',
		CHS : '星期六'
	} ],
	zodiacs : [ '鼠', '牛', '虎', '兔', '龙', '蛇', '马', '羊', '猴', '鸡', '狗', '猪' ],
	tenCelestialStems : [ '甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸' ],
	twelveBranches : [ '子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥' ],
	solarTerms : [ {
		NO : 0,
		description : '小寒'
	}, {
		NO : 21208,
		description : '大寒'
	}, {
		NO : 42467,
		description : '立春'
	}, {
		NO : 63836,
		description : '雨水'
	}, {
		NO : 85337,
		description : '惊蛰'
	}, {
		NO : 107014,
		description : '春分'
	}, {
		NO : 128867,
		description : '清明'
	}, {
		NO : 150921,
		description : '谷雨'
	}, {
		NO : 173149,
		description : '立夏'
	}, {
		NO : 195551,
		description : '小满'
	}, {
		NO : 218072,
		description : '芒种'
	}, {
		NO : 240693,
		description : '夏至'
	}, {
		NO : 263343,
		description : '小暑'
	}, {
		NO : 285989,
		description : '大暑'
	}, {
		NO : 308563,
		description : '立秋'
	}, {
		NO : 331033,
		description : '处暑'
	}, {
		NO : 353350,
		description : '白露'
	}, {
		NO : 375494,
		description : '秋分'
	}, {
		NO : 397447,
		description : '寒露'
	}, {
		NO : 419210,
		description : '霜降'
	}, {
		NO : 440795,
		description : '立冬'
	}, {
		NO : 462224,
		description : '小雪'
	}, {
		NO : 483532,
		description : '大雪'
	}, {
		NO : 504758,
		description : '冬至'
	} ],
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
	},
	lunarHash : [ 0x04bd8, 0x04ae0, 0x0a570, 0x054d5, 0x0d260, 0x0d950, 0x16554, 0x056a0, 0x09ad0, 0x055d2, 0x04ae0, 0x0a5b6, 0x0a4d0, 0x0d250, 0x1d255, 0x0b540, 0x0d6a0, 0x0ada2, 0x095b0, 0x14977, 0x04970, 0x0a4b0, 0x0b4b5, 0x06a50, 0x06d40, 0x1ab54, 0x02b60, 0x09570, 0x052f2, 0x04970, 0x06566, 0x0d4a0, 0x0ea50, 0x06e95, 0x05ad0, 0x02b60, 0x186e3, 0x092e0, 0x1c8d7, 0x0c950, 0x0d4a0, 0x1d8a6, 0x0b550, 0x056a0, 0x1a5b4, 0x025d0, 0x092d0, 0x0d2b2, 0x0a950, 0x0b557, 0x06ca0, 0x0b550,
		0x15355, 0x04da0, 0x0a5d0, 0x14573, 0x052d0, 0x0a9a8, 0x0e950, 0x06aa0, 0x0aea6, 0x0ab50, 0x04b60, 0x0aae4, 0x0a570, 0x05260, 0x0f263, 0x0d950, 0x05b57, 0x056a0, 0x096d0, 0x04dd5, 0x04ad0, 0x0a4d0, 0x0d4d4, 0x0d250, 0x0d558, 0x0b540, 0x0b5a0, 0x195a6, 0x095b0, 0x049b0, 0x0a974, 0x0a4b0, 0x0b27a, 0x06a50, 0x06d40, 0x0af46, 0x0ab60, 0x09570, 0x04af5, 0x04970, 0x064b0, 0x074a3, 0x0ea50, 0x06b58, 0x055c0, 0x0ab60, 0x096d5, 0x092e0, 0x0c960, 0x0d954, 0x0d4a0, 0x0da50, 0x07552, 0x056a0,
		0x0abb7, 0x025d0, 0x092d0, 0x0cab5, 0x0a950, 0x0b4a0, 0x0baa4, 0x0ad50, 0x055d9, 0x04ba0, 0x0a5b0, 0x15176, 0x052b0, 0x0a930, 0x07954, 0x06aa0, 0x0ad50, 0x05b52, 0x04b60, 0x0a6e6, 0x0a4e0, 0x0d260, 0x0ea65, 0x0d530, 0x05aa0, 0x076a3, 0x096d0, 0x04bd7, 0x04ad0, 0x0a4d0, 0x1d0b6, 0x0d250, 0x0d520, 0x0dd45, 0x0b5a0, 0x056d0, 0x055b2, 0x049b0, 0x0a577, 0x0a4b0, 0x0aa50, 0x1b255, 0x06d20, 0x0ada0 ],
	getNumberOfDarsOfLunarYear : function(year) {
		var i, sum = 348;

		for (i = 0x8000; i > 0x8; i >>= 1) {
			sum += (this.lunarHash[year - 1900] & i) ? 1 : 0;
		}

		return (sum + this.getNumberOfEveryMonth(year, this.getLeapMonth(year)))
	},
	getLeapMonth : function(year) {
		return this.lunarHash[year - 1900] & 0xf;
	},
	getNumberOfEveryMonth : function(year, month) {
		if(month === 0) {
			return month;
		}
		if (this.getLeapMonth(year) === month) {
			// Get number of leap month in the lunar calendar.
			return (this.lunarHash[year - 1900] & 0x10000) ? 30 : 29;
		}

		return (this.lunarHash[year - 1900] & (0x10000 >> month)) ? 30 : 29;
	},
	getSexagenarySycle : function(index) {
		return this.tenCelestialStems[ index % this.tenCelestialStems.length ] + this.twelveBranches[ index % this.twelveBranches.length ];
	},
	getLunarDate : function(theDate) {
		var lunarDate = {
			year : theDate.getFullYear(),
			month : theDate.getMonth() + 1,
			day : theDate.getDate(),
			lunarYear : {
				NO : null,
				description : ''
			},
			lunarMonth : {
				NO : null,
				description : '',
				alt : ''
			},
			lunarDay : {
				NO : null,
				description : '',
				alt : ''
			},
			festivals : new Array(),
			isLeap : false
		};
		var solarTerms = this.solarTerms;
		var firstChars = new Array('日', '正', '二', '三', '四', '五', '六', '七', '八', '九', '十');
		var secondChars = new Array('初', '十', '廿', '卅', '　');
		var baseDate = new Date(1900, 0, 31);
		var offset;
		var i, leap = 0, temp = 0;

		var intoDoubleDigit = function(number) {
			if(typeof number === 'number') {
				return number < 10 ? '0' + number.toString() : number;
			} else {
				throw new Error('The argument is not a valid number.');
			}

			return 0;
		};

		offset = parseInt((theDate - baseDate) / 86400000);
		lunarDate.cyclicalDay = offset + 40;
		lunarDate.cyclicalMonth = 14;

		for(i = 1900; i < 2050 && offset > 0; i++) {
			temp = this.getNumberOfDarsOfLunarYear(i);
			offset -= temp;
			lunarDate.cyclicalMonth += 12;
		}
		if (offset < 0) {
			offset += temp;
			i--;
			lunarDate.cyclicalMonth -= 12;
		}

		lunarDate.lunarYear.NO = i;
		lunarDate.cyclicalYear = i - 1864;
		leap = this.getLeapMonth(lunarDate.lunarYear.NO);

		for (i = 1; i < 13 && offset > 0; i++) {
			if (leap > 0 && i == (leap + 1) && lunarDate.isLeap == false) {
				--i;
				lunarDate.isLeap = true;
				temp = this.getNumberOfEveryMonth(lunarDate.lunarYear.NO, leap);
			} else {
				temp = this.getNumberOfEveryMonth(lunarDate.lunarYear.NO, i);
			}
			if (lunarDate.isLeap == true && i == (leap + 1)) {
				lunarDate.isLeap = false;
			}
			offset -= temp;
			if (lunarDate.isLeap == false) {
				lunarDate.cyclicalMonth++;
			}
		}

		if (offset == 0 && leap > 0 && i == leap + 1) {
			if (lunarDate.isLeap) {
				lunarDate.isLeap = false;
			} else {
				lunarDate.isLeap = true;
				--i;
				--lunarDate.cyclicalMonth;
			}
		}
		if (offset < 0) {
			offset += temp;
			--i;
			--lunarDate.cyclicalMonth;
		}
		lunarDate.lunarMonth.NO = i;
		lunarDate.lunarDay.NO = offset + 1;

		lunarDate.zodiac = this.zodiacs[ (lunarDate.year - 4) % this.zodiacs.length ];
		lunarDate.lunarYear.description = this.getSexagenarySycle(lunarDate.year - 1900 + 36);
		lunarDate.lunarMonth.description = this.getSexagenarySycle(lunarDate.cyclicalMonth);
		if (lunarDate.lunarMonth.NO > 10) {
			lunarDate.lunarMonth.alt = '十' + firstChars[ lunarDate.lunarMonth.NO - 10 ];
		} else {
			lunarDate.lunarMonth.alt = firstChars[ lunarDate.lunarMonth.NO ];
		}
		lunarDate.lunarDay.description = this.getSexagenarySycle(lunarDate.cyclicalDay++);
		switch (lunarDate.lunarDay.NO) {
			case 10:
				lunarDate.lunarDay.alt = '初十';
				break;
			case 20:
				lunarDate.lunarDay.alt = '二十';
				break;
			case 30:
				lunarDate.lunarDay.alt = '三十';
				break;
			default:
				lunarDate.lunarDay.alt = secondChars[ Math.floor(lunarDate.lunarDay.NO / 10) ] + firstChars[ lunarDate.lunarDay.NO % 10 ];
		}

		if(this.additionalFestivals[ 'SC_' + intoDoubleDigit(lunarDate.month) + intoDoubleDigit(lunarDate.day) ]) {
			//lunarDate.festivals.unshift(this.additionalFestivals[ 'SC_' + intoDoubleDigit(lunarDate.month) + intoDoubleDigit(lunarDate.day) ]);
		}
		(function(dataNums) {
			var solarTerm = solarTerms[ dataNums[ 0 ] % solarTerms.length ];

			try {
				if(dataNums.length === 0) {
					return;
				}
				if (new Date((31556925974.7 * (lunarDate.year - 1900) + solarTerm.NO * 60000) + Date.UTC(1900, 0, 6, 2, 5)).getUTCDate() == lunarDate.day && solarTerm.description) {
					lunarDate.festivals.unshift(solarTerm.description);
				}
				dataNums.shift();
				arguments.callee(dataNums);
			} catch(error) {
				$.writeln(error);
			}
		})(new Array( theDate.getMonth() * 2 + 1, theDate.getMonth() * 2 ));
		if(this.traditionalFestivals[ 'LC_' + intoDoubleDigit(lunarDate.lunarMonth.NO) + intoDoubleDigit(lunarDate.lunarDay.NO) ]) {
			lunarDate.festivals.unshift(this.traditionalFestivals[ 'LC_' + intoDoubleDigit(lunarDate.lunarMonth.NO) + intoDoubleDigit(lunarDate.lunarDay.NO) ]);
		}

		return lunarDate;
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
	backgrounds : 'E:\Images\BGS'
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
var startDate = new Date(calendarData.year, 0);
var lineNum = 0, tempLunarDate, position, moves = {
	top : config.padding * 1.5,
	right : calendarData.dimension.width -  config.padding - config.tableWidth,
	bottom : calendarData.dimension.height -  config.padding - config.tableHeight,
	left : config.padding
};
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
	//background = tempLayerSets.month.artLayers.add();
	tempLayers.title = tempLayerSets.month.artLayers.add();
	tempLayers.title.kind = LayerKind.TEXT;
	tempLayers.title.textItem.font = 'TimesNewRomanPS-BoldMT';
	tempLayers.title.textItem.size = 16;
	tempLayers.title.textItem.contents = Calendar.months[ m ][ config.language ];
	tempLayers.title.translate(moves[ position[ 0 ] ] - parseFloat(tempLayers.title.bounds[ 0 ]), moves[ position[ 1 ] ] - parseFloat(tempLayers.title.bounds[ 1 ]));
	//background.name = 'Background';
	try {
		//background.applyStyle('White Overlay');
	} catch(error) {
		$.writeln(error);
	}

	tempLayerSets.week = tempLayerSets.month.layerSets.add();
	tempLayerSets.week .name = 'Week Header';
	for(var w in Calendar.daysOfWeek) {
		tempLayers.day = tempLayerSets.week .artLayers.add();
		tempLayers.day.kind = LayerKind.TEXT;
		tempLayers.day.textItem.font = 'TimesNewRomanPS-BoldMT';
		tempLayers.day.textItem.size = 12;
		tempLayers.day.textItem.contents = Calendar.daysOfWeek[ w ].EN.charAt(0).toUpperCase();
		tempLayers.day.translate(moves[ position[ 0 ] ] + w * config.gap - parseFloat(tempLayers.day.bounds[ 0 ]), moves[ position[ 1 ] ] + config.gap - parseFloat(tempLayers.day.bounds[ 1 ]));
	}
	tempLayerSets.dayTable = tempLayerSets.month.layerSets.add();
	tempLayerSets.dayTable.name = 'Day Table';
	for(var i = startDate.getDate(); startDate.getMonth() == m; startDate.setDate(++i)) {
		tempLunarDate = Calendar.getLunarDate(startDate);

		tempLayerSets.day = tempLayerSets.dayTable.layerSets.add();
		tempLayerSets.day.name = startDate.toDateString();
		tempLayers.date = tempLayerSets.day.artLayers.add();	
		tempLunarDay = tempLayerSets.day.artLayers.add();

		tempLunarDay.kind = tempLayers.date.kind = LayerKind.TEXT;

		tempLayers.date.textItem.font = config.font;
		tempLayers.date.textItem.size = 12;
		tempLayers.date.textItem.contents = i;
		tempLayers.date.translate(moves[ position[ 0 ] ] + startDate.getDay() * config.gap - parseFloat(tempLayers.date.bounds[ 0 ]), moves[ position[ 1 ] ] + config.gap * 1.8 + lineNum - parseFloat(tempLayers.date.bounds[ 1 ]));

		tempLunarDay.textItem.font = 'AdobeHeitiStd-Regular';
		tempLunarDay.textItem.size = 6; 
		tempLunarDay.textItem.contents = tempLunarDate.festivals[ 0 ] || tempLunarDate.lunarDay.alt;
		tempLunarDay.translate(moves[ position[ 0 ] ] + startDate.getDay() * config.gap - parseFloat(tempLunarDay.bounds[ 0 ]), moves[ position[ 1 ] ] + config.gap * 2.2 + lineNum - parseFloat(tempLunarDay.bounds[ 1 ]));
		
		if(startDate.getDay() == 6) {
			lineNum += config.gap;
		}
	}
	tempLayerSets.month.visible = (m == Calendar.months.length - 1);
	lineNum = 0;
	if(m == 0) {
		break;
	}
}
lineNum = null, tempLunarDate = null, position = null, moves = null;
tempLayerSets = null, tempLayers = null;

app.activeDocument.saveAs(new File(config.savePath + calendarData.DOM_Name() + '.psd'), new PhotoshopSaveOptions(), false, Extension.LOWERCASE);
app.preferences.rulerUnits = originalUnits.ruler;
//app.preferences.typeUnits = originalUnits.type;