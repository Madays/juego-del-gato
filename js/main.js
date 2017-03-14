/**
 * Created by gerson on 10/03/17.
 */
$(document).ready(init);

var currentSection = null;

function init()
{
	currentSection = $('#saludo');
	$('#btn-saludo').click(onClickBtnSaludo);
	$('#btn-nombres').click(onClickBtnNombre);
    $('#btn-nombres').click(onClickBtnJuego);

	TweenMax.from($('#saludo h1'), 1, {marginBottom:'0px', ease:Elastic.easeOut});
    
    
}

function onClickBtnSaludo() {
	gotoSection('nombres');
    
}

function onClickBtnNombre() {
	gotoSection('juego');
}
function onClickBtnJuego() {
	gotoSection('juego');
    var jugador1=document.getElementById("jugador1");
    var jugador2=document.getElementById("jugador2");
    localStorage.setItem('nombre_1',jugador1.value);
    localStorage.setItem('nombre_2',jugador2.value);
    caremoco();
}
function onClickBtnNombre() {
	gotoSection('juego');
}

function gotoSection(_identificadorDeSeccion)
{
	currentSection.removeClass('visible');
	var nextSection = $('#'+_identificadorDeSeccion);

	nextSection.addClass('visible');

	//TweenMax.from(nextSection, 1.5, {scale:0.2, opacity:0, ease:Elastic.easeOut});
	currentSection = nextSection;
}
/*-------<section id="nombres">--------*/
/*$('#btn-nombres').click(function(){
    jQuery.ajax({
        url: 'https://test-ta.herokuapp.com/games',
        type:'post',
        'game': {
            'winner_player': 'Mad',
            'loser_player': 'playrLuser',
            'number_of_turns_to_win': '3'
          }
    }).done(
        function(resp)
        {
            alert(resp);
        }
    );
});*/
var request = new XMLHttpRequest();

request.open('POST', 'https://test-ta.herokuapp.com/games');

request.setRequestHeader('Content-Type', 'application/json');

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    console.log('Status:', this.status);
    console.log('Headers:', this.getAllResponseHeaders());
    console.log('Body:', this.responseText);
  }
};

var body = {
  'game': {
    'winner_player': 'Emmanuel',
    'loser_player': 'Irene',
    'number_of_turns_to_win': '3'
  }
};

request.send(JSON.stringify(body));
/*-----End--<section id="nombres">-------*/