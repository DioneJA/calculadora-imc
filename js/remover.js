var table = document.querySelector("table");

table.addEventListener("dblclick",function(event){

    event.target.parentNode.classList.add("remove");
    setTimeout(function(){
        event.target.parentNode.remove();
    },250);

})