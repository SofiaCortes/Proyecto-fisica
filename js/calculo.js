
    function updateTextInput(val) {
        document.getElementById('textInput').value=val+"º";
    }

    function n1Update(n1) {
        document.getElementById("n1Input").value = n1 ;
    }

    function n2Update(n2) {
        document.getElementById("n2Input").value = n2 ;
    }


    function myFunction() {
        var x = document.getElementById("mySelect1").value;
        var y = document.getElementById("mySelect2").value;
        var ang = document.getElementById("textInput").value;
        var z = (parseFloat(x)/parseFloat(y))* parseInt(ang);
        z = z.toFixed(2);
        document.getElementById("Resultado").innerHTML = z+"º" ;

        dibujaMedio();
        dibujaRayo(document.getElementById("textInput").value, document.getElementById("textInput").value);
    }



