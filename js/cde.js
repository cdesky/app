$(function ()
{
	$('.searchBtn').tap(function ()//搜索按钮
	{
		$('.searchBox').show();
	});

	$('.nav a').tap(function ()//导航的切换
	{
		var _index=$(this).index();
		$(this).addClass('current').siblings().removeClass('current');
		$('.indexCon .con').eq(_index).show().siblings().hide();
	});

	$('.block').tap(function ()//显示模式 块状
	{
		$('.con ul').addClass('blockMode').removeClass('listMode');
	});
	$('.list').tap(function ()//显示模式 列表
	{
		$('.con ul').addClass('listMode').removeClass('blockMode');
	});

	$('.fenlei').tap(function ()//分类的左侧滑动栏
	{
		$('.sidebar').addClass('tranShow').removeClass('tranHide');
	})
	$('.hide').tap(function ()//分类的关闭按钮
	{
		$('.sidebar').addClass('tranHide').removeClass('tranShow');
	});
	$('.samebase label').click(function ()//单击尺寸、颜色为选中的状态
	{
		$(this).addClass('checked').siblings().removeClass('checked');
	});
	$('.navMenu a').click(function ()//导航的切换
	{
		var _index=$(this).index();
		$(this).addClass('current').siblings().removeClass('current');
		$('.baobei div').eq(_index).show().siblings().hide();
	});
});

//屏蔽 空格 和 非数字 的输入
function regNum(obj)
{
	var e=arguments.callee.caller.arguments[0] || window.event, //判断键盘事件
		currKey = e.which||e.keyCode,   //获取键盘值
	    total = parseInt($('.kuc').text()),
	    tval = obj.value;
	if(currKey==32 || isNaN(obj.value))
	{
		obj.value=1;
	}
	if(obj.value > total)
	{
		obj.value=1;
		$('.not_big').show();
	}
	setTimeout(function (){$('.not_big').hide()},3500);
}
//增加
function add()
{
	var proInput = $('#buyNum').val(),
		parInt = parseInt(proInput)+1;
		$('#buyNum').val(parInt);
}

//减少
function down()
{
	var proInput = $('#buyNum').val(),
	    parInt = parseInt(proInput)-1;
	if(parInt < 2)
	{
		$('#buyNum').val(1);
	}
	else
	{
		$('#buyNum').val(parInt);
	}
}