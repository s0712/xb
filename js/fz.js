$(window).resize(function() // 绑定到窗口的这个事件中
{
	let designSize = 1920; // 设计图尺寸
	let html = document.documentElement;
	let wW = html.clientWidth; // 窗口宽度
	let rem = wW * 100 / designSize;
	html.style.fontSize = rem + 'px';
	// console.log(rem, wW, html.style.fontSize);
});
