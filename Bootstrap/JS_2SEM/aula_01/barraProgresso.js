 function animarBarraProgresso()
 {
    //Declarando as variáveise atribuindo os valores através dos elementos da DOM
    var progresso = 0;
    var barra = $(".progress-bar");
    var barraProgresso = $(".progress");

    var intervalo = setInterval(function() {
        if(progresso > 100)
        {
            clearInterval(intervalo);
            barraProgresso.hide();
            document.body.style.backgroundImage = `url("https://i.pinimg.com/originals/d2/e5/8b/d2e58b5a43b7f21bb9f06167e3980224.gif")`
        }
        else{
            progresso ++;
            barra.css("width", progresso + "%");
        }
    },50);
 }