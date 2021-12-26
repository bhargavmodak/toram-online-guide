function sidebar() {
  if ($(".mobile-indicator").css('display') == 'block') {
    if ($(".nav-open").prop('checked')) {
      $(".sidenav").css('width','100%');
    } else {
      $(".sidenav").css('width', 0);
    }
  } else {
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

$(".nav-btn").click(sidebar);

$(".sidenav a").click(function () {
  if ($(".mobile-indicator").css('display') == 'block') {
    $(".nav-open").prop('checked',false);
  }
  sidebar();
});

$(".toggle-icon").click(function () {
  $(".toggle-icon").toggleClass('fa-sun');
  $(".toggle-icon").toggleClass('fa-moon');
  if ($("html").attr('data-theme') == 'dark') {
    $("html").attr('data-theme', 'light');
    $("body").css('background','url(images/protruding-squares.svg)')
  } else {
    $("html").attr('data-theme', 'dark');
    $("body").css('background','url(images/protruding-squares-dark.svg)')
  }
})
