function dibujaMedio() {

    //m1
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
    ctx.fillRect(0, 0, 550, 200);

    //m2
    ctx.beginPath();
    if(document.getElementById("mySelect2").value==1)
        ctx.fillStyle = "#fffff1";
    else if(document.getElementById("mySelect2").value==1.330)
        ctx.fillStyle = "#00f9ff";
    else if(document.getElementById("mySelect2").value==1.47)
        ctx.fillStyle = "#f6f66c";
    else if(document.getElementById("mySelect2").value==1.492)
        ctx.fillStyle = "#50b5d2";
    ctx.fillRect(0, 200, 550, 400);


    //Linea del medio
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#000000';
    ctx.moveTo(0,200);
    ctx.lineTo(550,200);
    ctx.stroke();

    //Linea Normal
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.setLineDash([5, 10]);
    ctx.strokeStyle = '#000000';
    ctx.moveTo(275,0);
    ctx.lineTo(275,400);
    ctx.stroke();
}

function dibujaRayo(n1, n2) {
    var n1= parseInt(document.getElementById("textInput").value);
    var n2= parseInt(document.getElementById("Resultado").innerHTML); // Valores en grados, los paso a radianes

    n1 = n1*Math.PI /180;
    n2 = n2*Math.PI /180;

    //Rayo Incidente
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.moveTo(275, 200);
    ctx.lineTo(0, 200 - 275 * Math.tan(n1));
    ctx.strokeStyle = '#663399';
    ctx.stroke();


    //Rayo Refractado
    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.moveTo(275, 200);  // Ver como sería el angulo con n1 y n2
    ctx.lineTo(550, 200+275 * Math.tan(n2));
    ctx.strokeStyle = '#663399';
    ctx.stroke();
}
