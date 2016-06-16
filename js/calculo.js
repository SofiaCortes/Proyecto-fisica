
    function updateTextInput(val) {
        document.getElementById('textInput').value=val+"º";
    }
    

    function myFunction() {
        var x = document.getElementById("mySelect1").value;
        var y = document.getElementById("mySelect2").value;
        var ang = document.getElementById("textInput").value;
        var z = parseFloat(x)+parseFloat(y)+ parseInt(ang);
        document.getElementById("Resultado").innerHTML = z+"º" ;
    }


    function cambioColor1() {
        if (document.getElementById("mySelect1").value = 1.330)
        {
            ctx.fillStyle="#ff2fff";

        }
    }

    function cambioColor2() {
        if (document.getElementById("mySelect1").value = 1.330)
        {
            ctx.fillStyle="#4785f4";
        }
    }
    
    
    
    
