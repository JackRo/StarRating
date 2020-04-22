/**
 * StarRating JS
 *
 * @author zhuochangjing
 * @since 2020/4/21
 */

/**
 * StarRating
 * @param starRatingDivContainerId {string} StarRating Container div id
 * @constructor
 */
var StarRating = function (starRatingDivContainerId) {
    var starRatingDivContainer;

    var rate = 0;

    this.initRate = function () {
        starRatingDivContainer = document.getElementById(starRatingDivContainerId);
        starRatingDivContainer.addEventListener("click", function (event) {
            var e = event || window.event;
            var target = e.target || e.srcElement;
            if (target.nodeName.toLowerCase() === "span") {
                var cls = target.className;
                if (cls.includes("unchecked")) {
                    target.classList.remove("unchecked");
                    target.classList.add("checked");
                    rate += 1;
                    var previousElement = target.previousElementSibling;
                    while (previousElement !== null) {
                        if (previousElement.classList.contains("unchecked")) {
                            previousElement.classList.remove("unchecked");
                            previousElement.classList.add("checked");
                            rate += 1;
                        }
                        previousElement = previousElement.previousElementSibling;
                    }
                } else {
                    var nextElement = target.nextElementSibling;
                    while (nextElement !== null) {
                        if (nextElement.classList.contains("checked")) {
                            nextElement.classList.remove("checked");
                            nextElement.classList.add("unchecked");
                            rate -= 1;
                        }
                        nextElement = nextElement.nextElementSibling;
                    }
                }
            }
        });
    };

    /**
     * Get Rate
     * @return {number}
     */
    this.getRate = function () {
        return rate;
    };

    /**
     * Set Rate
     * @param starRate {number}
     */
    this.setRate = function (starRate) {
        var starRatingItemList = starRatingDivContainer.children;
        var len = starRatingItemList.length;
        if (starRate > len) {
            throw new Error(
                "starRate out range of starRatingDivContainer's rating items"
            );
        }
        rate = starRate;
        for (var i = 0; i < len; i++) {
            var starRatingItem = starRatingItemList[i];
            if (i < starRate) {
                starRatingItem.classList.remove("unchecked");
                starRatingItem.classList.add("checked");
            } else {
                starRatingItem.classList.remove("checked");
                starRatingItem.classList.add("unchecked");
            }
        }
    };
};
