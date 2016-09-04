<canvas width="600" height="200"></canvas>
<script>
  var cx = document.querySelector("canvas").getContext("2d");
  function trapezoid(leftBottomX, leftTopX, rightTopX, rightBottomX, topY, bottomY){
    cx.beginPath();
    cx.moveTo(leftBottomX, bottomY);
    cx.lineTo(leftTopX, topY);
    cx.lineTo(rightTopX, topY);
    cx.lineTo(rightBottomX, bottomY);
    cx.lineTo(leftBottomX, bottomY);
    cx.stroke();
  }
  trapezoid(20,40,80,100,10,50);
  
  function romb(length, centerX, centerY){
    cx.save();
    cx.rotate(-Math.PI/4.0);
    cx.fillRect(centerX - length/2, centerY + length/2, length, length);
    cx.restore();
  }
  cx.fillStyle = "red";
  romb(50, 80, 80);
  
  function zigzag(leftX, topY, width, height, segments){
    var segHeight = height / segments;
    var rightX = leftX + width;
    cx.beginPath();
    cx.moveTo(leftX, topY);
    for(var i=0;i<segments;i++){
      topY += segHeight;
      if(i%2 == 0){
        cx.lineTo(rightX, topY);
      }
      else{
        cx.lineTo(leftX, topY);
      }
    }
    cx.stroke();
  }
  zigzag(200, 0, 70, 70, 12);
  
  function spiral(centerX, centerY, radius, angle, segments){
    var radiusDelta = radius/segments;
    var angleDelta = angle/segments;
    var currentRadius = radiusDelta;
    var currentAngle = angleDelta;
    var currentX = centerX;
    var currentY = centerY;
    cx.beginPath();
    cx.moveTo(centerX, centerY); 
    while (currentRadius < radius){
      var prevX = currentX;
      var prevY = currentY;
      currentX += Math.cos(Math.PI * (currentAngle/180))*currentRadius;
      currentY += Math.sin(Math.PI * (currentAngle/180))*currentRadius;
      cx.lineTo(currentX, currentY);
      currentRadius += radiusDelta;
      currentAngle += angleDelta;
    }
    cx.stroke();
  }
  spiral(340, 40, 10, 1080, 100);
</script>
