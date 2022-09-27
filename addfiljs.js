var image;
var ima;
var imag;
var image1;
var ima1;
var ima2;
var can2 = document.getElementById("can2");
var can1 = document.getElementById("can1");
function upload(){
  var up1 =document.getElementById("up");
  image = new SimpleImage(up1);
  ima = new SimpleImage(up1);
  imag = new SimpleImage(up1);
  image1 = new SimpleImage(up1);
  ima1 = new SimpleImage(up1);
  ima2 = new SimpleImage(up1);
  image.drawTo(can1);
}
function makegrey(){
  for(var pixel of ima.values()){
    var avg = (pixel.getRed()+pixel.getBlue()+pixel.getGreen())/3;
    pixel.setRed(avg);
    pixel.setBlue(avg);
    pixel.setGreen(avg);
  }
  ima.drawTo(can2);
}
function makered(){
  for(var pix of imag.values()){
    pix.setRed(255);
  }
  imag.drawTo(can2); 
}
function makergb(){
  for(var pix of image1.values()){
    var x = pix.getX();
    var y = pix.getY();
      if(x<image1.getWidth()/3) {
          pix.setRed(255);
        }
      if(image1.getWidth()*(2/3)>x&&x>image1.getWidth()/3){
            pix.setBlue(255);
        }
      if(x>image1.getWidth()*(2/3)) {
            pix.setGreen(255);
        }    
  }
 image1.drawTo(can2);
}
function doreset(){
  var ctx2 = can2.getContext("2d");
  ctx2.clearRect(0,0,10000,8000);
}
function dor(){
  for(var pix of image.values()){
      var avg = (pix.getRed()+pix.getBlue()+pix.getGreen())/3;
    if(avg<128){
      pix.setRed(2*avg);
      pix.setBlue(0);
      pix.setGreen(0);
    }
    if(avg>=128){
      pix.setRed(255);
      pix.setBlue(2*avg-255);
      pix.setGreen(2*avg-255);
    }
  }
  image.drawTo(can2);
}
function makerb(){
  for(var pix of ima1.values()){
    var avg = (pix.getRed()+pix.getBlue()+pix.getGreen())/3;
    var h = ima1.getHeight();
    var y = pix.getY();
    if (y<h/7){
       if(avg<128){
        pix.setRed(2*avg);
        pix.setBlue(0);
        pix.setGreen(0);
       }
       if(avg>=128){
         pix.setRed(255);
         pix.setBlue(2*avg-255);
         pix.setGreen(2*avg-255);
      }
    }
    if(h/7<y&&y<2*h/7){
      if(avg<128){
        pix.setRed(2*avg);
        pix.setBlue(0);
        pix.setGreen(0.8*avg);
      }
     if(avg>=128){
        pix.setRed(255);
        pix.setGreen(1.2*avg-51);
        pix.setBlue(2*avg-255);
      }
    }
    if(y>2*h/7&&y<3*h/7){
           if(avg<128){
        pix.setRed(2*avg);
        pix.setBlue(0);
        pix.setGreen(2*avg);
      }
     if(avg>=128){
        pix.setRed(255);
        pix.setGreen(255);
        pix.setBlue(2*avg-255);
      }
    }
     if(y<4*h/7&&y>3*h/7){
           if(avg<128){
        pix.setRed(0);
        pix.setBlue(0);
        pix.setGreen(2*avg);
      }
     if(avg>=128){
        pix.setRed(2*avg-255);
        pix.setGreen(255);
        pix.setBlue(2*avg-255);
      }
    }
    if(y<5*h/7&&y>4*h/7){
           if(avg<128){
        pix.setRed(0);
        pix.setBlue(2*avg);
        pix.setGreen(0);
      }
     if(avg>=128){
        pix.setRed(2*avg-255);
        pix.setBlue(255);
        pix.setGreen(2*avg-255);
      }
    }
    if(y<6*h/7&&y>5*h/7){
           if(avg<128){
        pix.setRed(0.8*avg);
        pix.setBlue(2*avg);
        pix.setGreen(0);
      }
     if(avg>=128){
        pix.setRed(1.2*avg-51);
        pix.setBlue(255);
        pix.setGreen(2*avg-255);
      }
    }
    if(y>6*h/7){
           if(avg<128){
        pix.setRed(1.6*avg);
        pix.setBlue(1.6*avg);
        pix.setGreen(0);
      }
     if(avg>=128){
        pix.setRed(.4*avg+153);
        pix.setBlue(.4*avg+153);
        pix.setGreen(2*avg-255);
      }
    }
  }
  ima1.drawTo(can2);
}
function makeb(){
  var w = ima2.getWidth();
  var h = ima2.getHeight();
  var out = new SimpleImage(w,h);
  for(var pix of ima2.values()){
    var r = Math.random();
    var r1 = Math.floor(Math.random()*70)+1;
    var r2 = Math.floor(Math.random()*70)+1;
    var x = pix.getX();
    var y = pix.getY();
    if(r<0.5){
      var c = ima2.getPixel(x,y);
      out.setPixel(x,y,c);
    }
    if(r>=0.5){
      var nx = x-r1;
      var ny = y-r2;
         if(nx>0&&ny>0){
              var b = ima2.getPixel(nx,ny);
              out.setPixel(x,y,b);
         }
         if(nx<0&&ny<0){
              var b1 = ima2.getPixel(r1,r2);
              out.setPixel(x,y,b1);
         }
         if(nx<0&&ny>0){
              var b2 = ima2.getPixel(r1,ny);
              out.setPixel(x,y,b2);
         }
          if(nx>0&&ny<0){
              var b3 = ima2.getPixel(nx,r2);
              out.setPixel(x,y,b3);
         }
    }
  }
  out.drawTo(can2);
}