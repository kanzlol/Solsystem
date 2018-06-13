var siteHeight = $(window).height();
var siteWidth = $(window).width();
for(i = 0; i <= 200; i++) {
  $('<div>').addClass('star star_'+i).css({
    top: Math.floor(Math.random()*siteHeight),
    left: Math.floor(Math.random()*siteWidth)
  }).appendTo('.stars');
}

$(function() {

    $('#navbar a').click(function() {

        $('#navbar .active').removeClass('active');
        $(this).addClass('active');

    });

});

$(function() {
	$('#switchbox').change(function() {
		if(this.checked) {
			$('.sun').removeClass('sun').addClass('sun3d');
			$('.mercury').removeClass('mercury').addClass('mercury3d');
			$('.mercuryOrbit').removeClass('mercuryOrbit').addClass('mercuryOrbit3d');
			$('.venus').removeClass('venus').addClass('venus3d');
			$('.venusOrbit').removeClass('venusOrbit').addClass('venusOrbit3d');
			$('.earth').removeClass('earth').addClass('earth3d');
			$('.earthOrbit').removeClass('earthOrbit').addClass('earthOrbit3d');
			$('.moon').removeClass('moon').addClass('moon3d');
			$('.mars').removeClass('mars').addClass('mars3d');
			$('.marsOrbit').removeClass('marsOrbit').addClass('marsOrbit3d');
			$('.jupiter').removeClass('jupiter').addClass('jupiter3d');
			$('.jupiterOrbit').removeClass('jupiterOrbit').addClass('jupiterOrbit3d');
			$('.saturn').removeClass('saturn').addClass('saturn3d');
			$('.saturnOrbit').removeClass('saturnOrbit').addClass('saturnOrbit3d');
			$('.ring').removeClass('ring').addClass('ring3d');
			$('.ring-after').removeClass('ring-after').addClass('ring-after3d');
			$('.uranus').removeClass('uranus').addClass('uranus3d');
			$('.uranusOrbit').removeClass('uranusOrbit').addClass('uranusOrbit3d');
			$('.neptune').removeClass('neptune').addClass('neptune3d');
			$('.neptuneOrbit').removeClass('neptuneOrbit').addClass('neptuneOrbit3d');
		}

		else {
			$('#sun').addClass('sun').removeClass('sun3d');
			$('#mercury').addClass('mercury').removeClass('mercury3d');
			$('#mercuryOrbit').addClass('mercuryOrbit').removeClass('mercuryOrbit3d');
			$('#venus').addClass('venus').removeClass('venus3d');
			$('#venusOrbit').addClass('venusOrbit').removeClass('venusOrbit3d');
			$('#earth').addClass('earth').removeClass('earth3d');
			$('#earthOrbit').addClass('earthOrbit').removeClass('earthOrbit3d');
			$('#moon').addClass('moon').removeClass('moon3d');
			$('#mars').addClass('mars').removeClass('mars3d');
			$('#marsOrbit').addClass('marsOrbit').removeClass('marsOrbit3d');
			$('#jupiter').addClass('jupiter').removeClass('jupiter3d');
			$('#jupiterOrbit').addClass('jupiterOrbit').removeClass('jupiterOrbit3d');
			$('#saturn').addClass('saturn').removeClass('saturn3d');
			$('#saturnOrbit').addClass('saturnOrbit').removeClass('saturnOrbit3d');
			$('#ring').addClass('ring').removeClass('ring3d');
			$('#ring-after').addClass('ring-after').removeClass('ring-after3d');
			$('#uranus').addClass('uranus').removeClass('uranus3d');
			$('#uranusOrbit').addClass('uranusOrbit').removeClass('uranusOrbit3d');
			$('#neptune').addClass('neptune').removeClass('neptune3d');
			$('#neptuneOrbit').addClass('neptuneOrbit').removeClass('neptuneOrbit3d');
		}
	});
});

$('.sunNav').click(function() {
	$('#mercuryInfo, #venusInfo, #earthInfo, #marsInfo, #jupiterInfo, #saturnInfo, #uranusInfo, #neptuneInfo').hide();
	$('#mercuryOrbit, #venusOrbit, #earthOrbit, #marsOrbit, #jupiterOrbit, #saturnOrbit, #uranusOrbit, #neptuneOrbit').css("border", "");
	$('#sunInfo').show();
});

$('.mercuryNav').click(function() {
	$('#sunInfo, #venusInfo, #earthInfo, #marsInfo, #jupiterInfo, #saturnInfo, #uranusInfo, #neptuneInfo').hide();
	$('#venusOrbit, #earthOrbit, #marsOrbit, #jupiterOrbit, #saturnOrbit, #uranusOrbit, #neptuneOrbit').css("border", "");
	$('#mercuryInfo').show();
	$('#mercuryOrbit').css("border", "0.5px solid");
});

$('.venusNav').click(function() {
	$('#sunInfo, #mercuryInfo, #earthInfo, #marsInfo, #jupiterInfo, #saturnInfo, #uranusInfo, #neptuneInfo').hide();
	$('#mercuryOrbit, #earthOrbit, #marsOrbit, #jupiterOrbit, #saturnOrbit, #uranusOrbit, #neptuneOrbit').css("border", "");
	$('#venusInfo').show();
	$('#venusOrbit').css("border", "0.5px solid");
});

$('.earthNav').click(function() {
	$('#sunInfo, #mercuryInfo, #venusInfo, #marsInfo, #jupiterInfo, #saturnInfo, #uranusInfo, #neptuneInfo').hide();
	$('#mercuryOrbit, #venusOrbit, #marsOrbit, #jupiterOrbit, #saturnOrbit, #uranusOrbit, #neptuneOrbit').css("border", "");
	$('#earthInfo').show();
	$('#earthOrbit').css("border", "1px solid");
});

$('.marsNav').click(function() {
	$('#sunInfo, #mercuryInfo, #venusInfo, #earthInfo, #jupiterInfo, #saturnInfo, #uranusInfo, #neptuneInfo').hide();
	$('#mercuryOrbit, #venusOrbit, #earthOrbit, #jupiterOrbit, #saturnOrbit, #uranusOrbit, #neptuneOrbit').css("border", "");
	$('#marsInfo').show();
	$('#marsOrbit').css("border", "1px solid");
});

$('.jupiterNav').click(function() {
	$('#sunInfo, #mercuryInfo, #venusInfo, #earthInfo, #marsInfo, #saturnInfo, #uranusInfo, #neptuneInfo').hide();
	$('#mercuryOrbit, #venusOrbit, #earthOrbit, #marsOrbit, #saturnOrbit, #uranusOrbit, #neptuneOrbit').css("border", "");
	$('#jupiterInfo').show();
	$('#jupiterOrbit').css("border", "1px solid");
});

$('.saturnNav').click(function() {
	$('#sunInfo, #mercuryInfo, #venusInfo, #earthInfo, #marsInfo, #jupiterInfo, #uranusInfo, #neptuneInfo').hide();
	$('#mercuryOrbit, #venusOrbit, #earthOrbit, #marsOrbit, #jupiterOrbit, #uranusOrbit, #neptuneOrbit').css("border", "");
	$('#saturnInfo').show();
	$('#saturnOrbit').css("border", "0.2px solid");
});

$('.uranusNav').click(function() {
	$('#sunInfo, #mercuryInfo, #venusInfo, #earthInfo, #marsInfo, #jupiterInfo, #saturnInfo, #neptuneInfo').hide();
	$('#mercuryOrbit, #venusOrbit, #earthOrbit, #marsOrbit, #jupiterOrbit, #saturnOrbit, #neptuneOrbit').css("border", "");
	$('#uranusInfo').show();
	$('#uranusOrbit').css("border", "0.2px solid");
});

$('.neptuneNav').click(function() {
	$('#sunInfo, #mercuryInfo, #venusInfo, #earthInfo, #marsInfo, #jupiterInfo, #saturnInfo, #uranusInfo').hide();
	$('#mercuryOrbit, #venusOrbit, #earthOrbit, #marsOrbit, #jupiterOrbit, #saturnOrbit, #uranusOrbit').css("border", "");
	$('#neptuneInfo').show();
	$('#neptuneOrbit').css("border", "0.4px solid");
});