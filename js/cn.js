
window.onload=function(){snow(1);}

function snow(id){
 var png_111=Math.floor(Math.random()*5)+5;
 var pos_x=Math.floor(Math.random()*98)+1;
 var step=Math.floor(Math.random()*30)-15;

 var end_x=pos_x+step;
 var img="<img id='snow_" + id + "' style='left:" + pos_x +
 "%; top:-10%; position:fixed;' src='img/111.png' >";
 $("#snow").append(img);
 move_show(id,end_x);
 id++;
 setTimeout("snow("+id+");",1000);
}
function move_show(id,end_x){
 $("#snow_"+id).animate({top:"120%",left:""+end_x+"%"},20000,function(){
  $("#snow_"+id).empty().remove();
 });
}