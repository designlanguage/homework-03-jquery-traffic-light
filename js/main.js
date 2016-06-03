$('#stopButton').click(switchRed);

$('#slowButton').click(switchYellow);

$('#goButton').click(switchGreen);


function switchRed() {
  $('div.bulb').css('backgroundColor','black');
  $('#stopLight').css('backgroundColor','red');
}

function switchYellow() {
  $('div.bulb').css('backgroundColor','black');
  $('#slowLight').css('backgroundColor','yellow');
}

function switchGreen() {
  $('div.bulb').css('backgroundColor','black');
  $('#goLight').css('backgroundColor','green');
}