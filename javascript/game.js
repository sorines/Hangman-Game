


window.onload = function(){
// this is what the first page should look like when you click on it
var welcomePic= ("images/empty-couch.jpg");
var word;
var guess; //this is the guess
var guesses= []; //this is going to store the letters picked
var wins; //will count the user's wins
var loss; //will count the user's losses
var abc =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u",
"v","w","x","y","z"];

var winsSection = document.getElementById("wins");
var lossSection = document.getElementById("loss");

  // create alphabet ul
  var buttons = function () {
    myButtons = document.getElementById('buttons');
    letters = document.createElement('ul');

    for (var i = 0; i < abc.length; i++) {
      letters.id = 'abc';
      list = document.createElement('li');
      list.id = 'abc';
      list.innerHTML = abc[i];
      check();
      myButtons.appendChild(letters);
      letters.appendChild(list);
    }
  }

 
  
    // Create guesses ul
     result = function () {
      wordHolder = document.getElementById('blanksFromAnswer');
      correct = document.createElement('ul');
  
      for (var i = 0; i < word.length; i++) {
        correct.setAttribute('id', 'my-word');
        guess = document.createElement('li');
        guess.setAttribute('class', 'guess');
        if (word[i] === "-") {
          guess.innerHTML = "-";
          space = 1;
        } else {
          guess.innerHTML = "_";
        }
  
        guesses.push(guess);
        wordHolder.appendChild(correct);
        correct.appendChild(guess);
      }
    }
    
    // Show  guessesRemaining
     comments = function () {
      guessRemaining.innerHTML =  +  guessesRemaining ;
      if ( guessesRemaining < 1) {
        showguessesRemaining.innerHTML = "Game Over";
      }
      for (var i = 0; i < geusses.length; i++) {
        if (counter + space === geusses.length) {
          showguessesRemaining.innerHTML = "You Win!" + randomNumber  ;
        }
      }
    }

    check = function () {
      list.onclick = function () {
        var guess = (this.innerHTML);
        this.setAttribute("class", "active");
        this.onclick = null;
        for (var i = 0; i < word.length; i++) {
          if (word[i] === guess) {
            guesses[i].innerHTML = guess;
            counter += 1;
          } 
        }
        var j = (word.indexOf(guess));
        if (j === -1) {
           guessesRemaining -= 1;
          comments();
          animate();
        } else {
          comments();
        }
      }
    }
    
      
    // Play
    play = function () {
      answers = ["Ben", "Carol" ,"Amy", "Chick", "Duck","Dr Green","Emily","Emma"
        ,"Frank JR", "Chandler", "David", "Joey", "Monica", "Phoebe","Rachel","Ross"
        ,"Gunther","Jack","Janice","Jill","Judy","Mike","Nora","Richard"
        ,"Sandra","Susan","Ugly Naked Guy","Ursula"
      ];
      var allImages = ["images/Ben-geller.jpg","images/carol-willick.jpg","images/amy-green.jpg",
      "images/chick-duck.jpg","images/dr-green.jpg","images/emily-waltham.jpg","images/emma-geller-green.jpg",
      "images/frank-jr.jpg","images/friends-chandler.jpg","images/friends-david.jpg", "images/friends-joey.jpg",
      "images/friends-monica.jpg","images/friends-phoebe.jpg","images/friends-rachel.jpg","images/friends-ross.jpg",
      "images/gunther-.jpg","images/jack-geller.jpg","images/janice.jpg","images/jill-green.jpg",
      "images/judy-geller.jpg","images/mike-hannigan.jpg","images/nora-tyler-bing.jpg","images/richard-burke.JPG",
      "images/sandra-green.jpg","images/susan-bunch.jpg","images/ugly_naked_guy.jpg","images/ursula-buffay.jpg",
        ]
      randomAnswer = answers[Math.floor(Math.random() * answers.length)];
      word = randomAnswer[Math.floor(Math.random() * randomAnswer.length)];
      word = word.replace(/\s/g, "-");
      console.log(word);
      buttons();
  
      geusses = [ ];
      guessesRemaining = 10;
      counter = 0;
      space = 0;
      result();
      answers( );
      check();
  
  
    play();
      }
 
  }
  


//array/objects



//all the gd pictures i need








// all the winning gifs
var myPicture = new Array( "images/apartment-win.gif","images/fat-monica.gif",
"images/rachel-phoebe-jumping.gif","images/the-routine.gif",);

function choosePic() {
  var randomNum = Math.floor(Math.random() * myPicture.length);
  document.getElementById("myPicture").src = myPicture[randomNum];
}

//all the loser gifs
var myLoss = new Array("images/Pivot.gif", "images/beach-hole.gif", "images/danger.gif",
"images/dino-noise.gif","images/not-a-word.gif","images/pacman.gif","images/fu-ross.webp",
"images/face.gif",);

//this will have all the questions
