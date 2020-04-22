/**
 * index.js
 *
 * @author zhuochangjing
 * @since 2020/4/22
 */

var starRating = new StarRating("div_StarRating");
starRating.initRate();

function getRating() {
    alert(starRating.getRate());
}

function setRating() {
    starRating.setRate(Number(document.getElementById("input_Rate").value));
}