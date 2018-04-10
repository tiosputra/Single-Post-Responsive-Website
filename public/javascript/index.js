/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function toggleNavbar() {
    var x = document.getElementById("myTopnav");
    if (x.className === "nav") {
        x.className += " nav-responsive";
    } else {
        x.className = "nav";
    }
}

$(window).scroll(function() {
    if($(document).scrollTop() > 50) {
        $('.nav').addClass('shrink');
        console.log("Adding class");
    }else {
        $('.nav').removeClass('shrink');
        console.log("Removing class");
    }
})