const essayContainers = document.querySelectorAll('.essay-container');
const essays = document.getElementById('essays');
const notes = document.getElementById('notes');
const all = document.getElementById('all');

document.getElementById('essays').addEventListener('click', function(event) {
    event.preventDefault(); // 阻止链接默认行为
    essays.style.opacity = '1';
    all.style.opacity = '0.3';
    notes.style.opacity = '0.3';
    all.addEventListener('mouseover', function() {
        all.style.opacity = '1';
      });
      
      // 鼠标离开时透明度变回 30%
      all.addEventListener('mouseout', function() {
        all.style.opacity = '0.3';
      });
      notes.addEventListener('mouseover', function() {
        notes.style.opacity = '1';
      });
      
      // 鼠标离开时透明度变回 30%
      notes.addEventListener('mouseout', function() {
        notes.style.opacity = '0.3';
      });

    document.querySelector('.labelEssays').style.display = ''; // 隐藏section-line
    document.querySelector('.labelNotes').style.display = 'none'; // 隐藏section-line
    document.querySelector('.section-line').style.display = 'none'; // 隐藏section-line
    document.querySelector('.notes-container').style.display = 'none'; // 隐藏notes-container
    document.querySelector('.essay-A').style.display = ''; // 隐藏notes-container
    document.querySelector('.essay-B').style.display = ''; // 隐藏notes-container
    document.querySelector('.essay-C').style.display = ''; // 隐藏notes-container
    document.querySelector('.essay-D').style.display = ''; // 隐藏notes-container

});

document.getElementById('notes').addEventListener('click', function(event) {
    event.preventDefault(); // 阻止链接默认行为
    notes.style.opacity = '1';
    all.style.opacity = '0.3';
    essays.style.opacity = '0.3';
    all.addEventListener('mouseover', function() {
        all.style.opacity = '1';
      });
      
      // 鼠标离开时透明度变回 30%
      all.addEventListener('mouseout', function() {
        all.style.opacity = '0.3';
      });
     essays.addEventListener('mouseover', function() {
        essays.style.opacity = '1';
      });
      
      // 鼠标离开时透明度变回 30%
      essays.addEventListener('mouseout', function() {
        essays.style.opacity = '0.3';
      });




    document.querySelector('.section-line').style.display = 'none';
    document.querySelector('.notes-container').style.display = ''; 
    document.querySelector('.labelEssays').style.display = 'none'; 
    document.querySelector('.labelNotes').style.display = ''; 
    document.querySelector('.essay-A').style.display = 'none'; 
    document.querySelector('.essay-B').style.display = 'none'; 
    document.querySelector('.essay-C').style.display = 'none'; 
    document.querySelector('.essay-D').style.display = 'none'; 

});
document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById("searchButton2").addEventListener("click", function(event) {
        event.preventDefault(); // 阻止按钮的默认行为
        filterWorks();
    });

    document.getElementById("essay-id").addEventListener("keypress", function(event) {
        // 检查是否是回车键
        if (event.key === "Enter") {
            event.preventDefault(); // 阻止回车键的默认行为
            filterWorks();
        }
    });
});


function filterWorks() {
    
    const inputText = document.getElementById("essay-id").value.toLowerCase();
    const essaysSelect = document.querySelectorAll(".essay-container");
    const notesSelect = document.querySelectorAll(".notes-container-each");


    essaysSelect.forEach(work => {
        // 检查每个div的id是否包含输入的文本
        if (work.id.toLowerCase().includes(inputText)) {
            work.style.display = ""; // 显示符合条件的div
        } else {
            work.style.display = "none"; // 隐藏不符合条件的div
        
        }
    });
    notesSelect.forEach(work => {
        // 检查每个div的id是否包含输入的文本
        if (work.id.toLowerCase().includes(inputText)) {
            work.style.display = ""; // 显示符合条件的div
        } else {
            work.style.display = "none"; // 隐藏不符合条件的div
        
        }
    });
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
