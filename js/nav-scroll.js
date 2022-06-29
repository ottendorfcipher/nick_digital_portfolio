window.onscroll = function() {
    var navBorderRadius = document.getElementById('navbar1');
    if ( window.pageYOffset < 140) {
        navBorderRadius.classList.add("container-border-radius");
    } else {
      navBorderRadius.classList.remove("container-border-radius");
    }
}