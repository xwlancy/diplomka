// $(document).ready(function (){
//     $(".modal-close").click(function () {
//     $(".modal-canvas").remove();
//     });
//     });

document.addEventListener("DOMContentLoaded", function() {
    var modalCloseButtons = document.querySelectorAll(".modal-close");
    modalCloseButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            var modalCanvas = document.querySelector(".modal-canvas");
            if (modalCanvas) {
                modalCanvas.parentNode.removeChild(modalCanvas);
            }
        });
    });
});



    