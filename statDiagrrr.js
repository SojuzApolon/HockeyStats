function draw() {
  var canvas = document.getElementById("mThree");
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");
    
    ctx.beginPath();
    ctx.fillStyle="#C3C3D5";
    ctx.moveTo(100,200);
    ctx.arc(100,200,60,0,2*Math.PI,false);
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.fillStyle="#D5C3C1";
    ctx.moveTo(300,200);
    ctx.arc(300,200,90,0,2*Math.PI,false);
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.fillStyle="#C0D4Cc";
    ctx.moveTo(500,200);
    ctx.arc(500,200,40,0,2*Math.PI,false);
    ctx.fill();
    ctx.closePath();
    
    
    ctx.beginPath();
    ctx.fillStyle="#C3C3D5";
    ctx.moveTo(350,600);
    ctx.arc(350,600,200,0,0.6*Math.PI,false);
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.fillStyle="#D5C3c1";
    ctx.moveTo(350,600);
    ctx.arc(350,600,200,0.6*Math.PI,1.6*Math.PI,false);
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.fillStyle="#C0D4CC";
    ctx.moveTo(350,600);
    ctx.arc(350,600,200,1.6*Math.PI,2*Math.PI,false);
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.font="italic 20px serif";
    ctx.fillStyle="#030303";
    ctx.fillText("Vitebsk",50,200);
    ctx.fillText("Orsha",300,200);
    ctx.fillText("Novopolotsk",450,200);
    ctx.fillText("20%",420,500);
    ctx.fillText("30%",420,700);
    ctx.fillText("50%",240,600);
    ctx.font="bold 50px serif";
    ctx.fillText("Total -- 6700",260,900);
    ctx.fillText("Vitebskaya voblast'",100,60);
    ctx.font="bold 80px serif";
    ctx.fillText("Ice Hoccey",150,350);
    ctx.closePath();
  }
  
}