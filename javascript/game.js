


window.onload = choosePic;
var welcomePic= ("images/empty-couch.jpg");

var myPix = new Array("images/Ben-geller.jpg", "images/carol-willick.jpg","images/amy-green.jpg", 
"images/chick-duck.jpg","images/dr-green.jpg","images/emily-waltham.jpg","images/emma-geller-green.jpg",
"images/frank-jr.jpg","images/friends-chandler.jpg","images/friends-david.jpg", "images/friends-joey.jpg",
"images/friends-monica.jpg","images/friends-phoebe.jpg","images/friends-rachel.jpg","images/friends-ross.jpg",
"images/gunther-.jpg","images/jack-geller.jpg","images/janice.jpg","images/jill-green.jpg","images/judy-geller.jpg",
"images/mike-hannigan.jpg","images/nora-tyler-bing.jpg","images/richard-burke.JPG","images/sandra-green.jpg",
"images/susan-bunch.jpg","images/ugly_naked_guy.jpg","images/ursula-buffay.jpg",








);
var myWin = new Array( "images/apartment-win.gif","images/fat-monica.gif",
"images/rachel-phoebe-jumping.gif","images/the-routine.gif",
);

var myLoss = new Array("images/Pivot.gif", "images/beach-hole.gif", "images/danger.gif",
"images/dino-noise.gif","images/not-a-word.gif","images/pacman.gif","images/fu-ross.webp",


);




 
function choosePic() {
     var randomNum = Math.floor(Math.random() * myPix.length);
     document.getElementById("myPicture").src = myPix[randomNum];
}
