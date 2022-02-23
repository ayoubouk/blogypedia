$("document").ready(function(){
    $(".scrollbtn").hide();
    $(".hover-img").delay(500).animate({top:0},2000);

    $(".scrollbtn").click(()=>{
    $("html,body").animate({
        scrollTop:0
    },2200)});
    
    
    var test=0;
    $(window).scroll(function(){
          var offset=$(".home").offset().top;
        if($(this).scrollTop()>offset){
        $(".scrollbtn").fadeIn(300);
        console.log(offset,test);
        if(test==0){
        $(".card-transition").fadeOut(1000).fadeIn().css({"visibility":"visible"}).animate({"top":"100px"},2000).animate({"top":"0px"},1000);

        test++;
        }
    }
        else 
        $(".scrollbtn").hide();

    })
});




//    reload

var loader = document.querySelector(".loader")

window.addEventListener("load", vanish);

function vanish() {
  loader.classList.add("disppear");
}
