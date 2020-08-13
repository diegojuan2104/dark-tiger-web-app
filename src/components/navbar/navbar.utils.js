import $ from "jquery";

$(function () {
    $(".toggle").on("click", function(){
        if($(".item").hasClass("active")){
            $(".item").removeClass("active")
            $(".deploy").removeClass("active")
        }else{
            $(".item").addClass("active")
            $(".deploy").addClass("active")
        }
    })
    console.log("ready!");
});