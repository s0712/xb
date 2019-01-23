// function a(x, y) {
// 	// l = $('#main').offset().left;
// 	// w = $('#main').width();
// 	$('#lx').css('right', x + 'px');
// 	$('#lx').css('bottom', y + 'px');
// }
// function b() {
// 	h = $(window).height();
// 	t = $(document).scrollTop();
// 	// if (t > h) {
// 	// 	$('#gotop').fadeIn('slow');
// 	// } else {
// 	// 	$('#gotop').fadeOut('slow');
// 	// }
// }
// $(document).ready(function(e) {
// 	a(50, 50); //#lx的div距浏览器底部和页面内容区域右侧的距离
// 	b();
// 	// $('#gotop').click(function() {
// 	// 	$(document).scrollTop(0);
// 	// });
// });
// $(window).resize(function() {
// 	a(10, 10); //#lx的div距浏览器底部和页面内容区域右侧的距离
// });

// $(window).scroll(function(e) {
// 	b();
// });

$(document).ready(function() {
	$('#lx .t').hover(
		function() {
			console.log($(this));
			$(this).addClass('t_hover');
		},
		function() {
			$(this).removeClass('t_hover');
		}
	);
	$('#lx .b').hover(
		function() {
			console.log($(this));
			$(this).addClass('b_hover');
		},
		function() {
			$(this).removeClass('b_hover');
		}
	);
});
