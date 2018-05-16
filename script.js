var siteWidth = $(window).width();
for (i = 0; i <= 1000; i++) {
  var start = $('<div>')
  .addClass('star star_'+i)
  .css({
    top: Math.floor(Math.random()*10000),
    left: Math.floor(Math.random()*siteWidth)
  })
  .appendTo('.stars');
}

$('.sun').click(function() {
	$('#mercuryInfo, #venusInfo, #earthInfo, #marsInfo, #jupiterInfo, #saturnInfo, #uranusInfo, #neptuneInfo').hide();
	$('#mercuryOrbit, #venusOrbit, #earthOrbit, #marsOrbit, #jupiterOrbit, #saturnOrbit, #uranusOrbit, #neptuneOrbit').css("border", "");
	$('#sunInfo').show();
});

$('.mercury').click(function() {
	$('#sunInfo, #venusInfo, #earthInfo, #marsInfo, #jupiterInfo, #saturnInfo, #uranusInfo, #neptuneInfo').hide();
	$('#venusOrbit, #earthOrbit, #marsOrbit, #jupiterOrbit, #saturnOrbit, #uranusOrbit, #neptuneOrbit').css("border", "");
	$('#mercuryInfo').show();
	$('#mercuryOrbit').css("border", "0.5px solid");
});

$('.venus').click(function() {
	$('#sunInfo, #mercuryInfo, #earthInfo, #marsInfo, #jupiterInfo, #saturnInfo, #uranusInfo, #neptuneInfo').hide();
	$('#mercuryOrbit, #earthOrbit, #marsOrbit, #jupiterOrbit, #saturnOrbit, #uranusOrbit, #neptuneOrbit').css("border", "");
	$('#venusInfo').show();
	$('#venusOrbit').css("border", "0.5px solid");
});

$('.earth').click(function() {
	$('#sunInfo, #mercuryInfo, #venusInfo, #marsInfo, #jupiterInfo, #saturnInfo, #uranusInfo, #neptuneInfo').hide();
	$('#mercuryOrbit, #venusOrbit, #marsOrbit, #jupiterOrbit, #saturnOrbit, #uranusOrbit, #neptuneOrbit').css("border", "");
	$('#earthInfo').show();
	$('#earthOrbit').css("border", "1px solid");
});

$('.mars').click(function() {
	$('#sunInfo, #mercuryInfo, #venusInfo, #earthInfo, #jupiterInfo, #saturnInfo, #uranusInfo, #neptuneInfo').hide();
	$('#mercuryOrbit, #venusOrbit, #earthOrbit, #jupiterOrbit, #saturnOrbit, #uranusOrbit, #neptuneOrbit').css("border", "");
	$('#marsInfo').show();
	$('#marsOrbit').css("border", "1px solid");
});

$('.jupiter').click(function() {
	$('#sunInfo, #mercuryInfo, #venusInfo, #earthInfo, #marsInfo, #saturnInfo, #uranusInfo, #neptuneInfo').hide();
	$('#mercuryOrbit, #venusOrbit, #earthOrbit, #marsOrbit, #saturnOrbit, #uranusOrbit, #neptuneOrbit').css("border", "");
	$('#jupiterInfo').show();
	$('#jupiterOrbit').css("border", "1px solid");
});

$('.saturn').click(function() {
	$('#sunInfo, #mercuryInfo, #venusInfo, #earthInfo, #marsInfo, #jupiterInfo, #uranusInfo, #neptuneInfo').hide();
	$('#mercuryOrbit, #venusOrbit, #earthOrbit, #marsOrbit, #jupiterOrbit, #uranusOrbit, #neptuneOrbit').css("border", "");
	$('#saturnInfo').show();
	$('#saturnOrbit').css("border", "1px solid");
});

$('.uranus').click(function() {
	$('#sunInfo, #mercuryInfo, #venusInfo, #earthInfo, #marsInfo, #jupiterInfo, #saturnInfo, #neptuneInfo').hide();
	$('#mercuryOrbit, #venusOrbit, #earthOrbit, #marsOrbit, #jupiterOrbit, #saturnOrbit, #neptuneOrbit').css("border", "");
	$('#uranusInfo').show();
	$('#uranusOrbit').css("border", "1px solid");
});

$('.neptune').click(function() {
	$('#sunInfo, #mercuryInfo, #venusInfo, #earthInfo, #marsInfo, #jupiterInfo, #saturnInfo, #uranusInfo').hide();
	$('#mercuryOrbit, #venusOrbit, #earthOrbit, #marsOrbit, #jupiterOrbit, #saturnOrbit, #uranusOrbit').css("border", "");
	$('#neptuneInfo').show();
	$('#neptuneOrbit').css("border", "0.4px solid");
});