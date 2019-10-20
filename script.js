$(document).ready(() => {


var counter = 0;

function hoverImg() {
    var images = ['PortfolioImages/correctAns.png', 'PortfolioImages/incorrectAns.png', 'PortfolioImages/question1.png', 'PortfolioImages/question2.png', 'PortfolioImages/startScreen.png', 'PortfolioImages/startScreen.png'];
    $('.proj').attr("src", images[counter]);
    counter++;
    if (counter ==5) {
        counter=0;
    };
};

$('.proj').mouseover(function(){
    hoverImg();
});

}); 