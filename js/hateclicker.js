var score = 0;

function hateclick() {
    const hatecount = document.getElementById("ccookie");
    score++;
    if(score >= 500) {
        score = score + 1;
        hatecount.innerHTML = score + '  ' + "<br> <br>" + "YAY DOUBLE SCORE CUZ U TOO GOOD";
    } else {
    hatecount.innerHTML = score;
}
}