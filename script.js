function myFunction() {
    var moreText = document.getElementById("more");

    if (moreText.style.display === "inline") {
        moreText.style.display = "none";
    } else {
        moreText.style.display = "inline";
    }
}