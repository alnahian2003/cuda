window.addEventListener("load", function () {
  // Preloader
  document.querySelector(".preloader").classList.add("opacity-0");
  setTimeout(function () {
    document.querySelector(".preloader").style.display = "none";
  }, 1000);

  // Adding Active Class on Navbar Items

  // Get all buttons with class="btn" inside the container
  var navItems = $(".nav-items li");

  // Loop through the buttons and add the active class to the current/clicked button
  for (var i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("active");

      // If there's no active class
      if (current.length > 0) {
        current[0].className = current[0].className.replace(" active", "");
      }

      // Add the active class to the current/clicked button
      this.className += " active";
    });
  }

  // Functional Sticky Navbar
  window.onscroll = function () {
    myFunction();
  };

  var navbar = document.querySelector("nav");
  var services = document.querySelector("#services");
  var sticky = services.offsetTop;

  function myFunction() {
    if (window.pageYOffset > sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  }

  $(function () {
    // Remove svg.radial-progress .complete inline styling
    $("svg.radial-progress").each(function (index, value) {
      $(this).find($("circle.complete")).removeAttr("style");
    });

    // Activate progress animation on scroll
    $(window)
      .scroll(function () {
        $("svg.radial-progress").each(function (index, value) {
          // If svg.radial-progress is approximately 25% vertically into the window when scrolling from the top or the bottom
          if (
            $(window).scrollTop() >
              $(this).offset().top - $(window).height() * 0.75 &&
            $(window).scrollTop() <
              $(this).offset().top +
                $(this).height() -
                $(window).height() * 0.25
          ) {
            // Get percentage of progress
            percent = $(value).data("percentage");
            // Get radius of the svg's circle.complete
            radius = $(this).find($("circle.complete")).attr("r");
            // Get circumference (2πr)
            circumference = 2 * Math.PI * radius;
            // Get stroke-dashoffset value based on the percentage of the circumference
            strokeDashOffset = circumference - (percent * circumference) / 100;
            // Transition progress for 1.25 seconds
            $(this)
              .find($("circle.complete"))
              .animate({ "stroke-dashoffset": strokeDashOffset }, 1250);
          }
        });
      })
      .trigger("scroll");
  });

  // mixitup functions
  const mixer = mixitup(".portfolio-items");
});

// Mobile Menu

// Navbar Open Function on Mobile Menu
function openNav() {
  $("#myNav").css("width", "100%");
}

// Navbar Close Function on Mobile Menu
function closeNav() {
  $("#myNav").css("width", "0");
}
