
    function updateTextInput(val) {
        document.getElementById('textInput').value=val+"º";
    }

    function n1Update(n1) {
        if(n1 == -1){
            document.getElementById("n1Input").disabled = false;   //Nos habilita ingresar nuevo índice
            ingreseIndice();                                       
            alert1();
        }else{
            borrarIngreseIndice();
            document.getElementById("n1Input").disabled = true;
            document.getElementById("n1Input").value = n1 ;
        }
    }

    function n2Update(n2) {
        if(n2 == -1){
            document.getElementById("n2Input").disabled = false;
            ingreseIndice();
            alert1();
        }else{
            borrarIngreseIndice();
            document.getElementById("n2Input").disabled = true;
            document.getElementById("n2Input").value = n2;
        }
    }
    

    function myFunction() {
        var x = document.getElementById("n1Input").value;
        var y = document.getElementById("n2Input").value;
        var ang = document.getElementById("textInput").value;
        var z = (parseFloat(x)/parseFloat(y))* parseInt(ang);
        z = z.toFixed(2);
        document.getElementById("Resultado").innerHTML = z+"º" ;

        dibujaMedio();
        dibujaRayo(document.getElementById("textInput").value, document.getElementById("textInput").value);
    }

    function ingreseIndice() {
        document.getElementById('ingreseIndice').value="Ingrese nuevo índice";
    }

    function borrarIngreseIndice() {
        document.getElementById('ingreseIndice').value="";
    }
    
    function alert1() {
        alert("Ingrese un número de índice de refraccíon positivo! (Recomendado: entre 1 y 10) ");
    }
