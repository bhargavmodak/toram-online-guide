const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
const currentTheme = localStorage.getItem("theme");

// Function to set theme as theme
if (prefersDarkScheme.matches && currentTheme == "dark") {
  $("html").attr('data-theme', 'dark');
  $("body").css('background','url(images/protruding-squares-dark.svg)');
} else {
  $("html").attr('data-theme', 'light');
  $("body").css('background','url(images/protruding-squares.svg)');
}

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

$(".nav-btn").click(toggleSidebar);

$(".sidenav a").click(function () {
  // Close navbar if link is clicked on a mobile device
  if ($(".mobile-indicator").css('display') == 'block') {
    $(".nav-open").prop('checked',false);
  }
  toggleSidebar();
});

// Changing the theme
$(".toggle-icon").click(function () {
  $(".toggle-icon").toggleClass('fa-sun');
  $(".toggle-icon").toggleClass('fa-moon');
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
