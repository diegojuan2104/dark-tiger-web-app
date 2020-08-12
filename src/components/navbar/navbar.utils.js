import $ from "jquery";

$(function () {
    $(".toggle").on("click", function(){
        if($(".item").hasClass("active")){
            $(".item").removeClass("active")
        }else{
            $(".item").addClass("active")
        }
    })
    console.log("ready!");
});