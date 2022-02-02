var canvas = new fabric.Canvas("Mycanvas");
var block_img_width = 30;
var block_img_height = 30;
var player_x = 10;
var player_y = 10;
var player_object ="";
var block_img_object ="";
function player_update() {
    fabric.Image.fromURL("player.png",function (img) {
        player_object=img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);
        player_object.set({
            top:player_y,left:player_x 
        });
        canvas.add (player_object);
    }) ;
}
function new_image(get_image) {
    fabric.Image.fromURL(get_image,function(img){
      block_img_object=img;
      block_img_object.scaleToWidth(block_img_width);
      block_img_object.scaleToHeight(block_img_height);
      block_img_object.set({top:player_y,left:player_x
    });
    canvas.add(block_img_object);
    } );
}
 window.addEventListener("keydown",my_keydown);
 function my_keydown(e) {
     keypress=e.keyCode;
     console.log(keypress);
     if(e.shiftKey==true&&keypress=="80"){
         console.log("shift and p pressed together")
         block_img_width=block_img_width+10;
         block_img_height=block_img_height+10;
        document.getElementById("Current_width").innerHTML=block_img_width;
        document.getElementById("Current_height").innerHTML=block_img_height;
     }
     if(e.shiftKey==true&&keypress=="77"){
         console.log("shift and m pressed together")
         block_img_width=block_img_width-10;
         block_img_height=block_img_height-10;
         document.getElementById("Current_width").innerHTML=block_img_width;
         document.getElementById("Current_height").innerHTML=block_img_height;
     }
     if(keypress=="67"){
         new_image("hulk_face.png");
         console.log("c is pressed");
     }
     if(keypress=="68"){
        new_image("hulk_left_hand.png");
        console.log("d is pressed");
    }
    if(keypress=="71"){
        new_image("hulk_legs.png");
        console.log("g is pressed");
    }
    if(keypress=="76"){
        new_image("hulk_right_hand.png");
        console.log("l is pressed");
    }
    if(keypress=="82"){
        new_image("hulk_body.png");
        console.log("r is pressed");
    }
    if(keypress=="84"){
        new_image("ironman_body.png");
        console.log("t is pressed");
    }
    if(keypress=="85"){
        new_image("ironman_face.png");
        console.log("u is pressed");
    }
    if(keypress=="87"){
        new_image("ironman_left_hand.png");
        console.log("w is pressed");
    }
    if(keypress=="89"){
        new_image("ironman_legs.png");
        console.log("y is pressed");
    }
    if(keypress=="79"){
        new_image("ironman_right_hand.png")
        console.log("o is pressed")
    }
    if(keypress=="80"){
        new_image("spiderman_body.png")
        console.log("p is pressed")
    }
    if(keypress=="81"){
        new_image("spiderman_face.png")
        console.log("q is pressed")
    }
    if(keypress=="83"){
        new_image("spiderman_left_hand.png")
        console.log("s is pressed")
    }
    if(keypress=="86"){
        new_image("spiderman_legs.png")
        console.log("v is pressed")
    }
    if(keypress=="88"){
        new_image("ironman_right_hand.png")
        console.log("x is pressed")
    }
    if(keypress=="90"){
        new_image("thor_face.png")
        console.log("z is pressed")
    }
    if(keypress=="66"){
        new_image("thor_left_hand.png")
        console.log("b is pressed")
    }
    if(keypress=="65"){
        new_image("thor_right_hand.png")
        console.log("a is pressed")
    }
    if(keypress=="38"){
        up();
        console.log("up arrow is pressed");
    }
    if(keypress=="39"){
        right();
        console.log("right arrow is pressed");
    }
    if(keypress=="40"){
        down();
        console.log("down arrow is pressed");
    }
    if(keypress=="37"){
        left();
        console.log("left arrow is pressed");
    }
 }
 function up() {
    if(player_y>=0) {
        player_y = player_y-block_img_height;
   canvas.remove(player_object);
   player_update();
    }
}
function down() {
    if(player_y<=600) {
        player_y = player_y+block_img_height;
   canvas.remove(player_object);
   player_update();
    }
}
function left() {
    if(player_x>=0) {
        player_x = player_x-block_img_width;
   canvas.remove(player_object);
   player_update();
    }
}
function right() {
    if(player_x<=800) {
        player_x = player_x + block_img_width;
   canvas.remove(player_object);
   player_update();
    }
}