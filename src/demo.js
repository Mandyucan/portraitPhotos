var timer = setTimeout(function () {
	$('.wrapper').removeClass('init');
},100);
$('.items').on('click',function () {
	$(this).addClass('active');
	$('.wrapper').addClass('wrapper-active');//找标识
})

$('.disc').on('click',function (e) {
	e.stopPropagation();
	$('.active').removeClass('active');
	$('.wrapper-active').removeClass('wrapper-active');
})


