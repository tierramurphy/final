var santa= $('#Santa');
function startMoving() {
    santa.css('left' ,-475);
    var imgWidth= santa.width();
    var screenWidth = $(window).width();
    var amount = screenWidth - (parseFloat(santa.css("left") ) || 0);
    console.log(amount);
    if (amount <=0 ) {
        santa.css("left", -imgWidth);
        amount = (screenWidth + imgWidth) +1000;
    }
    else{
        santa.css("left", -475);
    }
    var moveRate = 100;  
    var time = amount * 1000 / moveRate;
    santa.stop(true)
        santa.animate({left: "+=" + amount}, time, "linear", function(){
            startMoving()
        })
}

$(document).ready(function() {
    startMoving(santa);
    $(window).resize(function() {
        $(".mover").each(function() {
            startMoving(this);
        });
    });
});
