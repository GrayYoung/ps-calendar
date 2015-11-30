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
	gan : [ '甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸' ],
	zhi : [ '子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥' ],
	solarTerms : [ {
		0 : '小寒'
	}, {
		21208 : '大寒'
	}, {
		42467 : '立春'
	}, {
		63836 : '雨水'
	}, {
		85337 : '惊蛰'
	}, {
		107014 : '春分'
	}, {
		128867 : '清明'
	}, {
		150921 : '谷雨'
	}, {
		173149 : '立夏'
	}, {
		195551 : '小满'
	}, {
		218072 : '芒种'
	}, {
		240693 : '夏至'
	}, {
		263343 : '小暑'
	}, {
		285989 : '大暑'
	}, {
		308563 : '立秋'
	}, {
		331033 : '处暑'
	}, {
		353350 : '白露'
	}, {
		375494 : '秋分'
	}, {
		397447 : '寒露'
	}, {
		419210 : '霜降'
	}, {
		440795 : '立冬'
	}, {
		462224 : '小雪'
	}, {
		483532 : '大雪'
	}, {
		504758 : '冬至'
	} ],
	traditionalFestivals : {
		LC_0101 : '春节',
		LC_0115 : '元宵节',
		LC_0505 : '端午节',
		LC_0707 : '七夕情人节',
		LC_0715 : '中元节',
		LC_0815 : '中秋节',
		LC_0909 : '重阳节',
		LC_1208 : '腊八节',
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
		SC_0701 : '建党节 香港回归纪念',
		SC_0801 : '建军节',
		SC_0909 : '毛主席逝世纪念',
		SC_0910 : '教师节',
		SC_0928 : '孔子诞辰',
		SC_1001 : '国庆节',
		SC_1006 : '老人节',
		SC_1024 : '联合国日',
		SC_1112 : '孙中山诞辰',
		SC_1220 : '澳门回归纪念',
		SC_1225 : '圣诞节',
		SC_1226 : '毛主席诞辰'
	},
	getLunarYear : function() {
		
	},
	getLunarDate : function(m, d) {
		var nStr1 = new Array('日', '正', '二', '三', '四', '五', '六', '七', '八', '九', '十');
		var nStr2 = new Array('初', '十', '廿', '卅', '　');
		var lunarDate;

		if (m > 10) {
			lunarDate = '十' + nStr1[m - 10]
		} else {
			lunarDate = nStr1[m]
		}
		lunarDate += '月'
		switch (d) {
			case 10:
				lunarDate += '初十';
				break;
			case 20:
				lunarDate += '二十';
				break;
			case 30:
				lunarDate += '三十';
				break;
			default:
				lunarDate += nStr2[Math.floor(d / 10)];
				lunarDate += nStr1[d];
		}

		return lunarDate;
	}
};

var lunarInfo = new Array(0x04bd8, 0x04ae0, 0x0a570, 0x054d5, 0x0d260, 0x0d950, 0x16554, 0x056a0, 0x09ad0, 0x055d2, 0x04ae0, 0x0a5b6, 0x0a4d0, 0x0d250, 0x1d255, 0x0b540, 0x0d6a0, 0x0ada2, 0x095b0, 0x14977, 0x04970, 0x0a4b0, 0x0b4b5, 0x06a50, 0x06d40, 0x1ab54, 0x02b60, 0x09570, 0x052f2, 0x04970, 0x06566, 0x0d4a0, 0x0ea50, 0x06e95, 0x05ad0, 0x02b60, 0x186e3, 0x092e0, 0x1c8d7, 0x0c950, 0x0d4a0, 0x1d8a6, 0x0b550, 0x056a0, 0x1a5b4, 0x025d0, 0x092d0, 0x0d2b2, 0x0a950, 0x0b557, 0x06ca0, 0x0b550,
	0x15355, 0x04da0, 0x0a5d0, 0x14573, 0x052d0, 0x0a9a8, 0x0e950, 0x06aa0, 0x0aea6, 0x0ab50, 0x04b60, 0x0aae4, 0x0a570, 0x05260, 0x0f263, 0x0d950, 0x05b57, 0x056a0, 0x096d0, 0x04dd5, 0x04ad0, 0x0a4d0, 0x0d4d4, 0x0d250, 0x0d558, 0x0b540, 0x0b5a0, 0x195a6, 0x095b0, 0x049b0, 0x0a974, 0x0a4b0, 0x0b27a, 0x06a50, 0x06d40, 0x0af46, 0x0ab60, 0x09570, 0x04af5, 0x04970, 0x064b0, 0x074a3, 0x0ea50, 0x06b58, 0x055c0, 0x0ab60, 0x096d5, 0x092e0, 0x0c960, 0x0d954, 0x0d4a0, 0x0da50, 0x07552, 0x056a0,
	0x0abb7, 0x025d0, 0x092d0, 0x0cab5, 0x0a950, 0x0b4a0, 0x0baa4, 0x0ad50, 0x055d9, 0x04ba0, 0x0a5b0, 0x15176, 0x052b0, 0x0a930, 0x07954, 0x06aa0, 0x0ad50, 0x05b52, 0x04b60, 0x0a6e6, 0x0a4e0, 0x0d260, 0x0ea65, 0x0d530, 0x05aa0, 0x076a3, 0x096d0, 0x04bd7, 0x04ad0, 0x0a4d0, 0x1d0b6, 0x0d250, 0x0d520, 0x0dd45, 0x0b5a0, 0x056d0, 0x055b2, 0x049b0, 0x0a577, 0x0a4b0, 0x0aa50, 0x1b255, 0x06d20, 0x0ada0);

var now = new Date();
var SY = now.getYear() + 1900;

var SM = now.getMonth();
var SD = now.getDate();

function cyclical(num) {
	return (Calendar.gan[num] + Calendar.zhi[num])
} // ==== 传入 offset 传回干支, 0=甲子
// ==== 传回农历 y年的总天数
function lYearDays(y) {
	var i, sum = 348
	for (i = 0x8000; i > 0x8; i >>= 1)
		sum += (lunarInfo[y - 1900] & i) ? 1 : 0
	return (sum + leapDays(y))
}

// ==== 传回农历 y年闰月的天数
function leapDays(y) {
	if (leapMonth(y))
		return ((lunarInfo[y - 1900] & 0x10000) ? 30 : 29)
	else
		return (0)
}

// ==== 传回农历 y年闰哪个月 1-12 , 没闰传回 0
function leapMonth(y) {
	return (lunarInfo[y - 1900] & 0xf)
}

// ====================================== 传回农历 y年m月的总天数
function monthDays(y, m) {
	return ((lunarInfo[y - 1900] & (0x10000 >> m)) ? 30 : 29)
}

// ==== 算出农历, 传入日期物件, 传回农历日期物件
// 该物件属性有 .year .month .day .isLeap .yearCyl .dayCyl .monCyl
function Lunar(objDate) {
	var i, leap = 0, temp = 0;
	var baseDate = new Date(1900, 0, 31);
	var offset = (objDate - baseDate) / 86400000;

	this.dayCyl = offset + 40
	this.monCyl = 14

	for(i = 1900; i < 2050 && offset > 0; i++) {
		temp = lYearDays(i);
		offset -= temp;
		this.monCyl += 12;
	}
	if (offset < 0) {
		offset += temp;
		i--;
		this.monCyl -= 12;
	}

	this.year = i;
	this.yearCyl = i - 1864;

	leap = leapMonth(i); // 闰哪个月
	this.isLeap = false;

	for (i = 1; i < 13 && offset > 0; i++) {
		// 闰月
		if (leap > 0 && i == (leap + 1) && this.isLeap == false) {
			--i;
			this.isLeap = true;
			temp = leapDays(this.year);
		} else {
			temp = monthDays(this.year, i);
		}

		// 解除闰月
		if (this.isLeap == true && i == (leap + 1))
			this.isLeap = false;

		offset -= temp;
		if (this.isLeap == false)
			this.monCyl++;
	}

	if (offset == 0 && leap > 0 && i == leap + 1)
		if (this.isLeap) {
			this.isLeap = false;
		} else {
			this.isLeap = true;
			--i;
			--this.monCyl;
		}

	if (offset < 0) {
		offset += temp;
		--i;
		--this.monCyl;
	}

	this.month = i
	this.day = offset + 1
}

$.writeln(solarDay1());

function solarDay1() {
	var sDObj = new Date(SY, SM, SD);
	var lDObj = new Lunar(sDObj);
	var tt = cyclical(lDObj.monCyl) + '月 ' + cyclical(lDObj.dayCyl++) + '日';
	return (tt);
}

function solarDay2() {
	var sDObj = new Date(SY, SM, SD);
	var lDObj = new Lunar(sDObj);
	var tt = cyclical(SY - 1900 + 36) + '年【' + Animals[(SY - 4)] + '】' + cDay(lDObj.month, lDObj.day);
	return (tt);
}

function solarDay3() {
	var lFtv = new Array()
	var sFtv = new Array()

	var sDObj = new Date(SY, SM, SD);
	var lDObj = new Lunar(sDObj);
	var lDPOS = new Array(3)
	var festival = '', solarTerms = '', solarFestival = '', lunarFestival = '', tmp1, tmp2;
	// 农历节日
	for (i in lFtv)
		if (lFtv[i].match(/^(d{2})(.{2})([s*])(.+)$/)) {
			tmp1 = Number(RegExp.$1) - lDObj.month
			tmp2 = Number(RegExp.$2) - lDObj.day
			if (tmp1 == 0 && tmp2 == 0)
				lunarFestival = RegExp.$4
		}
	// 国历节日
	for (i in sFtv)
		if (sFtv[i].match(/^(d{2})(d{2})([s*])(.+)$/)) {
			tmp1 = Number(RegExp.$1) - (SM + 1)
			tmp2 = Number(RegExp.$2) - SD
			if (tmp1 == 0 && tmp2 == 0)
				solarFestival = RegExp.$4
		}
	// 节气
	tmp1 = new Date((31556925974.7 * (SY - 1900) + sTermInfo[SM * 2 + 1] * 60000) + Date.UTC(1900, 0, 6, 2, 5))
	tmp2 = tmp1.getUTCDate()
	if (tmp2 == SD)
		solarTerms = solarTerm[SM * 2 + 1]
	tmp1 = new Date((31556925974.7 * (SY - 1900) + sTermInfo[SM * 2] * 60000) + Date.UTC(1900, 0, 6, 2, 5))
	tmp2 = tmp1.getUTCDate()
	if (tmp2 == SD)
		solarTerms = solarTerm[SM * 2]

	if (solarTerms == '' && solarFestival == '' && lunarFestival == '')
		festival = '';
	else
		festival = solarTerms + ' ' + solarFestival + ' ' + lunarFestival;

	return (festival);
}

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
	backgrounds : []
};
var config = {
	language : 'EN',
	savePath : '~/Desktop/'
};
var originalUnits = {
	ruler : app.preferences.rulerUnits,
	type :app.preferences.typeUnits
}

app.preferences.rulerUnits = Units[ calendarData.dimension.unit ];
//app.preferences.typeUnits = TypeUnits[ calendarData.dimension.unit ];
while (app.documents.length) {
	app.activeDocument.close()
}
app.activeDocument = app.documents.add(calendarData.dimension.width, calendarData.dimension.height, calendarData.dimension.resolution, calendarData.DOM_Name());

/**
 * Initialize Document
 */
var ls, title, background;

for(var m in Calendar.months) {
	ls = app.activeDocument.layerSets.add();
	background = ls.artLayers.add();
	title = ls.artLayers.add();

	ls.name = Calendar.months[ m ].EN;
	title.kind = LayerKind.TEXT;
	title.textItem.font = 'Arial';
	title.textItem.size = 16;
	title.textItem.contents = Calendar.months[ m ][ config.language ];
	background.name = 'Background';
	background.applyStyle('Puzzle (Image)');
}
ls = null, title = null, background = null;

app.activeDocument.saveAs(new File(config.savePath + calendarData.DOM_Name() + '.psd'), new PhotoshopSaveOptions(), false, Extension.LOWERCASE);
app.preferences.rulerUnits = originalUnits.ruler;
//app.preferences.typeUnits = originalUnits.type;