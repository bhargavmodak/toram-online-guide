const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
const currentTheme = localStorage.getItem("theme");

// Function to set theme as theme
if (prefersDarkScheme.matches && currentTheme == "dark") {
  $("html").attr('data-theme', 'dark');
  $("body").css('background','url(images/protruding-squares-dark.svg)');
  $(".toggle-icon").addClass('fa-sun');
} else {
  $("html").attr('data-theme', 'light');
  $("body").css('background','url(images/protruding-squares.svg)');
  $(".toggle-icon").addClass('fa-moon');
}

// Changing the theme
$(".toggle-icon").click(function () {
  $(".toggle-icon").toggleClass('fa-moon');
  $(".toggle-icon").toggleClass('fa-sun');
  let theme = "light";
  if ($("html").attr('data-theme') == 'dark') {
    $("html").attr('data-theme', 'light');
    $("body").css('background','url(images/protruding-squares.svg)');
  } else {
    $("html").attr('data-theme', 'dark');
    $("body").css('background','url(images/protruding-squares-dark.svg)');
    theme = "dark";
  }
  localStorage.setItem("theme", theme);
})


// A function to toggle the sidebar
function toggleSidebar() {
  // For mobile screens
  if ($(".mobile-indicator").css('display') == 'block') {
    if ($(".nav-open").prop('checked')) {
      $(".sidenav").css('width','100%');
    } else {
      $(".sidenav").css('width', 0);
    }
  } else {
    // For non mobile screens
    if ($(".nav-open").prop('checked')) {
      $(".sidenav").css('width','15rem');
      $(".main, .hero-onfrost").css('width','calc(100% - 15rem)');
      $(".main").css('margin-left','15rem');
    } else {
      $(".sidenav").css('width', 0);
      $(".main, .hero-onfrost").css('width','100%');
      $(".main").css('margin-left','0');
    }
  }
}

// Toggle sidebar if button is clicked
$(".nav-btn").click(toggleSidebar);

// Close navbar if link is clicked on a mobile device
$(".sidenav a").click(function () {
  if ($(".mobile-indicator").css('display') == 'none') return;
  $(".nav-open").prop('checked',false);
  toggleSidebar();
});

// Toggle Spoiler
$(".spl-btn").click(function () {
  if ($(this).children($(".spl-open")).prop('checked')) {
    $(this).children(".spoiler-content").slideDown(500);
    $(this).children(".spoiler-head").css('border-radius','5px 5px 0 0');
    $(this).children(".spoiler-head").children(".fa-chevron-down").css('transform','rotate(180deg) translateY(15%)');
  } else {
    $(this).children(".spoiler-content").slideUp(500);
    $(this).children(".spoiler-head").css('border-radius','5px');
    $(this).children(".spoiler-head").children(".fa-chevron-down").css('transform','rotate(0deg) translateY(15%)');
  }
})