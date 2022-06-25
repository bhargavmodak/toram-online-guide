// Variables to store the theme preferences
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
const currentTheme = localStorage.getItem("theme");

// Function to set theme as theme
if (prefersDarkScheme.matches && currentTheme == "dark") {
  // Change CSS
  $("html").attr('data-theme', 'dark');
  // Change Background
  $("body").css('background-image', 'url(../images/protruding-squares-dark.svg)');
  // Change toggle icon
  $(".toggle-icon").addClass('fa-sun');
} else {
  // Change CSS
  $("html").attr('data-theme', 'light');
  // Change Background
  $("body").css('background-image', 'url(../images/protruding-squares.svg)');
  // Change toggle icon
  $(".toggle-icon").addClass('fa-moon');
}

// Function to change the theme on toggler click
$(".toggle-icon").click(function () {
  $(".toggle-icon").toggleClass('fa-moon');
  $(".toggle-icon").toggleClass('fa-sun');
  let theme = "light";
  if ($("html").attr('data-theme') == 'dark') {
    $("html").attr('data-theme', 'light');
    $("body").css('background-image', 'url(images/protruding-squares.svg)');
  } else {
    $("html").attr('data-theme', 'dark');
    $("body").css('background-image', 'url(images/protruding-squares-dark.svg)');
    theme = "dark";
  }
  // Saving the theme in local storage
  localStorage.setItem("theme", theme);
});

// Uncheck all checkboxes on page load
$("input[type=checkbox]").each(function () {
  $(this).prop('checked', false);
});


// A function to toggle the sidebar
function toggleSidebar() {
  // For mobile screens
  if ($(".mobile-indicator").css('display') == 'block') {
    if ($(".nav-open").prop('checked')) {
      // Open fully
      $(".sidenav").css('width', '100%');
    } else {
      $(".sidenav").css('width', 0);
    }
  } else {
    // For non mobile screens
    if ($(".nav-open").prop('checked')) {
      // Push the content to the right
      $(".sidenav").css('width', '15rem');
      $(".main, .hero-onfrost").css('width', 'calc(100% - 15rem)');
      $(".main").css('margin-left', '15rem');
    } else {
      $(".sidenav").css('width', 0);
      $(".main, .hero-onfrost").css('width', '100%');
      $(".main").css('margin-left', '0');
    }
  }
}

// Toggle sidebar if button is clicked
$(".nav-btn").click(toggleSidebar);

// Close navbar if link is clicked on a mobile device
$(".sidenav a").click(function () {
  if ($(".mobile-indicator").css('display') == 'none') return;
  $(".nav-open").prop('checked', false);
  toggleSidebar();
});

// Toggle Spoiler
$(".spl-btn").click(function () {
  if ($(this).children($(".spl-open")).prop('checked')) {
    $(this).children(".spoiler-content").slideDown(300);
    $(this).children(".spoiler-head").css('border-radius', '5px 5px 0 0');
    $(this).children(".spoiler-head").children(".fa-chevron-down").css('transform', 'rotate(180deg) translateY(15%)');
  } else {
    $(this).children(".spoiler-content").slideUp(300);
    $(this).children(".spoiler-head").css('border-radius', '5px');
    $(this).children(".spoiler-head").children(".fa-chevron-down").css('transform', 'rotate(0deg) translateY(15%)');
  }
});

// Functions for Tabbed Content
$(".tablinks").click(function () {
  // Make the current tab active
  $(this).addClass("active");
  // Remove active from all other tabs
  $(this).siblings().removeClass("active");

  // Get the list of classes of the tab
  var classList = $(this).attr('class').split(/\s+/);
  console.log(classList);
  $(this).parent().siblings(".tabcontent").fadeOut(0);
  $(this).parent().siblings("." + classList[1]).fadeIn(500);
});

$(".desktop.tablinks").click();
// // Auto Keep on depending on what device is being used.
// if ($(".mobile-indicator").css('display') == 'none') {
//   $(".desktop.tablinks").click();
// } else {
//   $(".mobile.tablinks").click();
// }

// Open images to full screen on click
$(".images-full").click(function () {
  var imgSrc = $(this).attr("src");

  var imgWindow = window.open("", "Image", "");

  imgWindow.document.write("<img src='" + imgSrc + "'width=100%/>");
});