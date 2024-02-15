//progress bar//
window.addEventListener('scroll', function() {
    //console.log('Scrolling...');
});
document.addEventListener("scroll", function() {
    
    var scrollTop = window.scrollY || document.documentElement.scrollTop;
    
    var scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    
    var scrollPercentage = scrollTop / scrollHeight;

    var circumference = 2 * Math.PI * 35; // 圆环的周长
    var strokeVal = scrollPercentage * circumference;
    // console.log(strokeVal);
    // console.log(circumference);
    // 更新进度圆环的填充长度
    var circle = document.querySelector('.progress-ring_circle')
    circle.style.strokeDasharray = `${strokeVal} ${circumference}` ;
    // document.querySelector(".progress-ring_circle").setAttribute("stroke-dasharray", `${strokeVal} ${circumference}`);
});
