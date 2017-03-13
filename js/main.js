$(document).ready(init);

var currentSection = null;

function init()
{
	currentSection = $('#saludo');
	$('#btn-saludo').click(onClickBtnSaludo);
	$('#btn-nombres').click(onClickBtnNombre);

	TweenMax.from($('#saludo h1'), 1, {marginBottom:'0px', ease:Elastic.easeOut});
}

function onClickBtnSaludo() {
	gotoSection('nombres');
}

function onClickBtnNombre() {
	gotoSection('juego');
}

function gotoSection(_identificadorDeSeccion)
{
	currentSection.removeClass('visible');
	var nextSection = $('#'+_identificadorDeSeccion);

	nextSection.addClass('visible');

	TweenMax.from(nextSection, 1.5, {scale:0.2, opacity:0, ease:Elastic.easeOut});
	currentSection = nextSection;
}
/*-------Section juego-----*/
    /*--------Nuevo Juego------*/
        /*----Login new play----*/
        /*--End--Login new play----*/
        $("#btn-nombres").click(function(){
            $.post("http://test-ta.herokuapp.com/games",
            {
                "player1": $('#player1').val(),
                "player2": $('#player2').val()
            },
            function(data, status){
                alert("Data: " + data + "\nStatus: " + status);
            });
        });  
    /*------END--Nuevo Juego------*/


/*-----End--Section juego-----*/