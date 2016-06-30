function dibujaMedio() {

    <!-- Medio 1 -->
    var c = document.getElementById("myCanvas");

    c.width = c.width; // Forma rapida de limpiar el canvas


    var ctx = c.getContext("2d");
    ctx.beginPath();
    if(document.getElementById("mySelect1").value==1)
        ctx.fillStyle = "#fffff1";
    else if(document.getElementById("mySelect1").value==1.330)
        ctx.fillStyle = "#00f9ff";
    else if(document.getElementById("mySelect1").value==1.47)
        ctx.fillStyle = "#f6f66c";
    else if(document.getElementById("mySelect1").value==1.492)
        ctx.fillStyle = "#50b5d2";
    else{
        var grd=ctx.createLinearGradient(0,0,550,0);
        grd.addColorStop(0,"grey");
        grd.addColorStop(1,"white");
        ctx.fillStyle = grd;
    }
    ctx.fillRect(0, 0, 550, 200);

    <!-- Medio 2 -->
    ctx.beginPath();
    if(document.getElementById("mySelect2").value==1)
        ctx.fillStyle = "#fffff1";
    else if(document.getElementById("mySelect2").value==1.330)
        ctx.fillStyle = "#00f9ff";
    else if(document.getElementById("mySelect2").value==1.47)
        ctx.fillStyle = "#f6f66c";
    else if(document.getElementById("mySelect2").value==1.492)
        ctx.fillStyle = "#50b5d2";
    else {
        var grd = ctx.createLinearGradient(0, 0, 550, 0);
        grd.addColorStop(0, "white");
        grd.addColorStop(1, "grey");
        ctx.fillStyle = grd;
    }
    ctx.fillRect(0, 200, 550, 400);


    <!-- Linea entre medios -->
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#000000';
    ctx.moveTo(0,200);
    ctx.lineTo(550,200);
    ctx.stroke();

    <!-- Linea Normal -->
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.setLineDash([5, 10]);
    ctx.strokeStyle = '#8b8b8b';
    ctx.moveTo(275,0);
    ctx.lineTo(275,400);
    ctx.stroke();

    dibujaTexto();
}

function dibujaRayo(n1, n2) {
    var n1= parseInt(document.getElementById("textInput").value);
    var n2= parseInt(document.getElementById("Resultado").innerHTML); // Valores en grados, los pasamos a radianes

    n1 = n1*Math.PI /180;
    n2 = n2*Math.PI /180;

    <!-- Rayo Incidente -->
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.setLineDash([5, 0]);

    ctx.moveTo(275, 200);
  
    ctx.lineTo(275 - 200 * Math.tan(n1), 0);

    ctx.strokeStyle = '#663399';
    ctx.stroke();




    <!-- Rayo Refractado -->
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.setLineDash([5, 0]);
    ctx.moveTo(275, 200);
    if (n2*180/Math.PI>90) {
        ctx.lineTo(275+200 * Math.tan(n1), 0);
        ctx.strokeStyle = '#663399';
        ctx.stroke();
        anguloCritico();
    }
    else{
        ctx.lineTo(275+200 * Math.tan(n2), 400);
        ctx.strokeStyle = '#663399';
        ctx.stroke();
    }


    dibujaTexto();

}

function dibujaTexto() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.font = "20px Arial";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";

    <!-- texto "n1" -->
    ctx.fillText("n1", 20, 190);

    <!-- texto "n2" -->
    ctx.fillText("n2", 20, 225);


    <!-- Ley de Snell -->
    ctx.fillText("Ley de Snell:", 410, 70);
    ctx.fillText("n1 sen1 = n2 sen2", 410, 120);



    <!-- texto "normal" -->
    ctx.rotate(90*Math.PI/180);
    ctx.font = "13px Arial";
    ctx.fillStyle = "gray";
    ctx.fillText("Normal", 30, -280);
    ctx.rotate(-180*Math.PI/180);                   // Rotamos el texto para que acompañe linea normal
    ctx.fillText("Normal", -370, 270);
    ctx.rotate(90*Math.PI/180);
}

function anguloCritico() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.font = "20px Arial";
    ctx.fillStyle = "red";
    ctx.textAlign = "center";

    ctx.fillText("Has sobrepasado el angulo crítico!", 270, 300);

    ctx.font = "12px Arial";
    ctx.fillStyle = "purple";
    var x = document.getElementById("n1Input").value;
    var y = document.getElementById("n2Input").value;
    var s = 90*y/x;
    s = s.toFixed(2);
    ctx.fillText("Angulo Crítico: "+s+"º", 410, 370);
}

