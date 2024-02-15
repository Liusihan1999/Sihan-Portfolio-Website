

//----workpage.search----//

document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById("searchButton").addEventListener("click", function(event) {
        event.preventDefault(); // 阻止按钮的默认行为
        filterWorks();
        
    });

    document.getElementById("workname").addEventListener("keypress", function(event) {
        // 检查是否是回车键
        if (event.key === "Enter") {
            event.preventDefault(); // 阻止回车键的默认行为
            filterWorks();
        }
    });
});


function filterWorks() {
    const inputText = document.getElementById("workname").value.toLowerCase();
    const works = document.querySelectorAll(".work-container-each");

    works.forEach(work => {
        // 检查每个div的id是否包含输入的文本
        if (work.id.toLowerCase().includes(inputText)) {
            work.style.display = ""; // 显示符合条件的div
        } else {
            work.style.display = "none"; // 隐藏不符合条件的div
        
        }
    });
}


//-------------------//

//---------category select----------//
document.querySelectorAll('.work-category').forEach(function(element){
    element.addEventListener('click', function(){
        var category = this.getAttribute('data-category');
        console.log(category);

        document.querySelectorAll('.work-container-each').forEach(function(detailElement){
            if (detailElement.classList.contains(category)) {
                detailElement.style.display = ''; // 如果类名匹配，则显示元素
            } else {
                detailElement.style.display = 'none'; // 否则，隐藏元素
            }
        });
    });
});
//---------------------------------//
//---------back to all----------//

document.getElementById("showAllWorks").addEventListener("click", function() {
    document.querySelectorAll(".work-container-each").forEach(function(element) {
        element.style.display = ""; // 这里设置为""将恢复到CSS中定义的默认显示方式，或者你可以明确设置为"block"，取决于你的布局需求
    });
});
//------------------------------//


