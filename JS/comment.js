$(document).ready(function($) {
	var goodComnt = '';
	var goodComntBody = '';
	var normalComntStart = ['该生思想要求上进,', '该生政治上积极要求上进,', '该生诚实守信,', '该生诚实守信,'];
	var normalcomnt1 = ["热爱集体,", "成绩优良,", "勤奋诚实,", "善于思考,", "作风踏实,", "认真负责,", "刻苦努力,", "尊敬师长,", "活动积极,"];
	var normalcomnt2 = ["能吃苦耐劳,", "生活中能应严格要求自己,", "遵守学校各项规章制度,", "能较好的完成交给的各项任务,"];
	var normalcomnt3 = ["人际关系融洽,", "待人真诚,", "待人热情,", "为人踏实,", "乐于助人,", "为人诚恳,", "为人正直,", "善于与同学沟通,", "关心同学,"];
	var normalcomnt4 = ["学习态度端正,", "学习刻苦认真,", "学习刻苦认真,", "学习勤奋,"];
	var normalcomnt5 = ["工作踏实负责,", "工作认真负责,", "有一定的工作能力,", "工作积极主动,"];
	var normalcomnt6 = ["团队意识及协作精神强,", "富有团队协作精神及创新能力,", "具一定的团队协作精神及创新能力,"];
	var normalComntEnd = ['是一名全面发展的合格大学生。', '是一名合格的大学生。', '是一名品学兼优的合格大学生。', '积极参加各项文体活动、较注重自己各方面素质的培养。'];
	var normalComntArr = [normalcomnt1, normalcomnt2, normalcomnt3, normalcomnt4, normalcomnt5, normalcomnt6];

	var normalComntBody = '';
	var normalComnt = '';
	var goodComntStart = ["该生学习认真努力,", "该生思想积极要求上进,", "该同学为人谦虚,", "该生学习刻苦勤奋,"];
	var goodComnt1 = ["为人随和,", "有爱心,", "思想进步,", "朴实诚信,", "待人礼貌,", "乐观向上,", "有进取心,", "学习优等,", "认真学习,", "团结友爱,", "勤奋诚实,", "为人踏实,", "乐于助人,", "尊敬老师,", "勇于进,取,不怕挫折,", "思想积极上进,", "工作积极主动,", "能吃苦耐劳,", "与同学友爱团结,", "与同学相处融洽 知识面广,"];
	var goodComnt2 = ["学习认真刻苦勤奋,", "诚信待人 工作积极负责,", "兴趣爱好广泛,", "心理素质好,"]; 
	var goodComnt3 = ["有较强的动手能力和创新能力,", "有较强的团队精神,", "富有团队协作精神及创新能力,", "有良好的领导组织及沟通协作精神,", "有良好的心理素质和应变能力,", "有较强的公共和创新意识,"]; 
	var goodComnt4 = ["动手能力和应用能力较强,", "积极参加社会活动和社会实践,", "积极参加院系的各类活动 有一定的组织和协调能力,", "平时积极参加校内外的各项活动和暑期社会实践,"];
	var goodComnt5 = ["在平时专业学习,上,有较强的动手和应用能力,", "能熟练掌握计算机办公系统的操作和制作网页,", "能出色的完成交给的各项任务,", "做好宿舍清洁卫生工作,", "遵守各项制度,"];
	var goodComntEnd = ["积极参加各种社会活动和社会实践。", "是一个极具发展潜力、复合型的优秀人才。", "该同学能刻苦学习钻研。", "提高自身各方面素质，是一名全面发展的优秀大学生。"];
	var goodComntArr = [goodComnt1, goodComnt2, goodComnt3, goodComnt4, goodComnt5];


	function ranDom(arr) {
		return arr[Math.floor(Math.random()*arr.length)];
	}

	function ranArr(arr) {
		return arr.sort(function () {
			return Math.random() - 0.5;
		});
	}

	$("#good").click(function(event) {
		goodComnt = '';
		goodComntBody = '';
		goodComntArr = ranArr(goodComntArr);
		for (var i = 0; i < goodComntArr.length; i++) {
			goodComntBody += ranDom(goodComntArr[i]);
		}
		goodComnt = ranDom(goodComntStart) + goodComntBody + ranDom(goodComntEnd);
		$(".panel-body").text(goodComnt);	
	});	
	$("#normal").click(function() {
		normalComnt = '';
		normalComntBody = '';
		normalComntArr = ranArr(normalComntArr);
		for (var i = 0; i < normalComntArr.length; i++) {
			normalComntBody += ranDom(normalComntArr[i]);
		}
		normalComnt = ranDom(normalComntStart) + normalComntBody + ranDom(normalComntEnd);
		$(".panel-body").text(normalComnt);	
	});	
});