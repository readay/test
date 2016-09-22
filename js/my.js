window.onload = function () {
    var canvas = document.querySelectorAll('canvas');
    var ctx1 = canvas[0].getContext("2d");
    var ctx2 = canvas[1].getContext("2d");
    var ctx3 = canvas[2].getContext("2d");
    var ctx4 = canvas[3].getContext("2d");
    
    ctx1.fillStyle = "#fff";
    ctx2.fillStyle = "#fff";
    ctx3.fillStyle = "#fff";
    ctx4.fillStyle = "#fff";
    
    
    var data = [40,25,31,21,2,5,48,60,15,18,55,60,12]
    for (var i = 0; i < data.length; i++) {
        num = 5*i;
        ctx1.fillRect(num, 0, 4, data[i]);    
    } 

    var data = [20,55,30,21,23,52,18,40,35,18,25,10,42]
    for (var i = 0; i < data.length; i++) {
        num = 5*i;
        ctx2.fillRect(num, 0, 4, data[i]);    
    }

    var data = [10,25,30,11,33,28,8,20,45,18,25,10,12]
    for (var i = 0; i < data.length; i++) {
        num = 5*i;
        if (i == 5 ) {
            ctx3.fillRect(num, -8, 4, data[i]);
        }else if(i == 6){
            ctx3.fillRect(num, 12, 4, data[i]);
        }else{
            ctx3.fillRect(num, 20, 4, data[i]);
        }           
    }

    var data = [14,5,10,11,13,20,18,20,15,28,5,10,22]
    for (var i = 0; i < data.length; i++) {
        num = 5*i;
        if (i == 5) {
           ctx4.fillRect(num, 0, 4, data[i]); 
        }else if (i == 6) {
            ctx4.fillRect(num, 2, 4, data[i]);
        }else{
            ctx4.fillRect(num, 20, 4, data[i]);
        }          
    }
    for (var i = 0; i < canvas.length; i++) {
         canvas[i].style.transform = 'rotate(180deg)'
     } 

    var datar1 = [8, 24, 36, 15, 18, 28, 12, 34, 16, 2];
    var datar2 = [5, 25, 14, 33, 12, 40, 8, 12, 25, 3];
    var datar3 = [8, 14, 26, 5, 18, 28, 30, 15, 25, 4];
    var datar4 = [6, 12, 6, 15, 24, 12, 13, 34, 16, 3];
    var datar5 = [8, 14, 16, 9, 18, 18, 22, 34, 10, 2];
    var datar6 = [18, 34, 26, 25, 14, 35, 12, 40, 16, 6];
    var ctx5 = canvas[4].getContext("2d");
    var ctx6 = canvas[5].getContext("2d");
    var ctx7 = canvas[6].getContext("2d");
    var ctx8 = canvas[7].getContext("2d");
    var ctx9 = canvas[8].getContext("2d");
    var ctx10 = canvas[9].getContext("2d");
    stroke(datar1, ctx5);
    stroke(datar2, ctx6);
    stroke(datar3, ctx7);
    stroke(datar4, ctx8);
    stroke(datar5, ctx9);
    stroke(datar6, ctx10);

    function stroke(data, ctx){
        ctx.beginPath();
        ctx.fillStyle = "#33B533";
        ctx.strokeStyle = "#fff";
        ctx.lineTo(0, 0);
        for (var i = 0; i < data.length; i++) {
            var nume = 9*i
            ctx.lineTo(nume, data[i]);
        }
        ctx.lineTo(80, 0);
        ctx.stroke(); 
        ctx.closePath();
        ctx.fill();
    }

    round(1.66*Math.PI, canvas[10], "#FFE186");
    round(0, canvas[11], "#7FD17F");
    round(null, canvas[12], null);
    round(0.1*Math.PI, canvas[13], "#CF7FD3");
    round(null, canvas[14], null);
    round(null, canvas[15], null);
    function round(start,canvas,color){
    var ctx11 = canvas.getContext("2d");
    ctx11.beginPath();
    ctx11.lineWidth = 12;
    ctx11.strokeStyle = "#FFF";
    ctx11.arc(60,60,52,0,2*Math.PI,false);
    ctx11.stroke();
    ctx11.closePath();
    
    ctx11.beginPath();
    ctx11.lineWidth = 12;
    ctx11.strokeStyle = color;
    ctx11.arc(60,60,52,start,0.5*Math.PI);
    ctx11.stroke();
    ctx11.closePath();
    }     
}; 