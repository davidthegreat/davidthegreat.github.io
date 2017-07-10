var app = angular.module('personal_website_app', []);

app.controller('PersonalWebsiteController', function($scope, $window) {
  // $scope.smallWidth = true;
  // $scope.resize = function() {
  //   console.log($window.innerWidth);
  //   if ($window.innerWidth < 600) {
  //     $scope.img_is_active1 = true;
  //   } else {
  //     $scope.img_is_active1 = false;
  //   }
  // }
  // $scope.resize();
  // $window.onResize = resize;
  // console.log($window.innerWidth);
  // $scope.img_is_active = false;
  // console.log('yes it is i think');
  // console.log($scope.img_is_active);
  // if ($scope.img_is_active) {
  //   console.log('yes it is');
  // }
});
// var app = angular.module('personal_website_app', []);
//
// app.controller('PersonalWebsiteController', function($scope) {
//   $scope.img_is_active = false;
//   console.log('yes it is i think');
//   console.log($scope.img_is_active);
//   if ($scope.img_is_active) {
//     console.log('yes it is');
//   }
// });

var menuIcon = document.getElementById("menuIcon");
var header = document.getElementById("header");
var mainNav = document.getElementById("main-nav");
var menuIcon = document.getElementById("menuIcon");
var allNavAs = document.getElementById("main-nav").getElementsByTagName("a");
var clickedBars = false;

function getPosition() {
    if (window.innerWidth < 800) {
        if (!clickedBars) {
            mainNav.classList.add("hide");
            clickedBars = false;
        } else {
            mainNav.classList.remove("hide");
            clickedBars = true;
        }
        if (window.pageYOffset > 50) {
            header.classList.add("orange")
        } else {
            header.classList.remove("orange");
        }
    } else {
        mainNav.classList.remove("hide");
        if (window.pageYOffset > 50) {
            header.classList.add("orange")
        } else {
            header.classList.remove("orange");
        }
    }
}

menuIcon.addEventListener("click", function() {
    if (clickedBars) {
        menuIcon.classList.add("fa-bars");
        menuIcon.classList.remove("fa-times");
        mainNav.classList.add("hide");
        clickedBars = false;
    } else {
        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-times");
        mainNav.classList.remove("hide");
        clickedBars = true;
    }
});

window.onload = getPosition;
window.onresize = getPosition;
window.onscroll = getPosition;


$(document).ready(function() {

    //  SMOOTH SCROLLING

    $("a[href^='#']").on("click", function(e) {
        e.preventDefault();
        var hash = this.hash;
        $("html, body").animate({
            scrollTop: $(hash).offset().top
        }, 900, function() {
            window.location.hash = hash;
        });
    });

    //  ONE PAGE NAV
    $('#main-nav').onePageNav({
        currentClass: 'active',
        changeHash: false,
        scrollSpeed: 750,
        scrollThreshold: 0.5,
        filter: '',
        easing: 'swing'
    });

    //  FUNCTIONAL CONTACT FORM
    $(".contact-form #btn-send").on("click", function(event) {
        event.preventDefault();
        var name = $("#name").val();
        var email = $("#email").val();
        var subject = $("#subject").val();
        var message = $("#message").val();
        var form = new Array({"name": name, "email": email, "subject": subject, "message": message});

        $.ajax({
            type: "POST",
            url: "contact.php",
            data: ({"action": "contact", "form": form})
        }).done(function(data) {
            $("#connect .result").html(data);

        $(".contact-form")[0].reset();
        });
    });

    // ANIMATIONS FROM THIS PT. BELOW

    $(".js-wp-1").waypoint(function(direction) {
        $(".js-wp-1").addClass("animated fadeInLeft");
    }, {
        // how soon it happens
        // lower percent takes longer
        // higher percent is quicker
        offset: "60%"
    });

    $(".js-wp-2").waypoint(function(direction) {
        $(".js-wp-2").addClass("animated fadeInRight");
    }, {
        offset: "60%"
    });

    $(".js-wp-3").waypoint(function(direction) {
        $(".js-wp-3").addClass("animated fadeInUp");
    }, {
        offset: "40%"
    });

    $(".js-wp-4").waypoint(function(direction) {
        $(".js-wp-4").addClass("animated bounceIn");
    }, {
        offset: "80%"
    });

    $(".js-wp-5").waypoint(function(direction) {
        $(".js-wp-5").addClass("animated zoomIn");
    }, {
        offset: "80%"
    });

    $(".js-wp-6").waypoint(function(direction) {
        $(".js-wp-6").addClass("animated slideInUp");
    }, {
        offset: "85%"
    });

});
