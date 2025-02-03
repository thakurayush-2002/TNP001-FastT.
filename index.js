
var arr=["https://www.pngall.com/wp-content/uploads/2018/04/Cricket-Insect-PNG-Image.png","https://www.pngall.com/wp-content/uploads/2018/04/Cricket-Insect-Free-PNG-Image.png","https://www.pngall.com/wp-content/uploads/2018/04/Cricket-Insect-PNG-Pic.png","https://www.pngall.com/wp-content/uploads/2018/04/Cricket-Insect.png","https://www.pngall.com/wp-content/uploads/2018/04/Cricket-Insect-PNG-Picture.png"];
const btn =document.querySelector("button");




btn.addEventListener("click",function(){
    var newArr=Math.floor(Math.random()*arr.length)
    var X=Math.random()*95;
    var Y=Math.random()*90;
    var rot=Math.random()*360;
    var scale=Math.random()*3;

var img=document.createElement("img")
img.setAttribute ("src",arr[newArr]);
img.style.height="120px";
img.style.position="absolute"
img.style.left= X + "%";
img.style.top= Y + "%";
img.style.rotate=rot +"deg";
img.style.scale=scale;
document.body.appendChild(img)

})
