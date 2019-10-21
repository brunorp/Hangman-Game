let randomNumber = Math.floor(Math.random() * 11);
let word;
let gamePlace = document.getElementById("letters");
let countWLetters = 0;
let countLetters = 0;
let countWin = 0;
let vetor = new Array();
let boolWrongLetters = false;
let y = 0;
let source;

function randomWord(n){
	switch(n){
		case 0:
			word = 'Mario';
			source = './img/mri.png'
		break;
		
		case 1:
			word =  'Princess Peach';
			source = './img/peach.png'
		break;

		case 2:
			word = 'Toad';
			source = './img/toad.png'
		break;

		case 3:
			word =  'Yoshi';
			source = './img/yoshi.png'
		break;

		case 4:
			word =  'Luigi';
			source = './img/luigi.png'
		break;

		case 5:
			word =  'King Boo';
			source = './img/boo.png'
		break;

		case 6:
			word =  'Baby Luigi';
			source = './img/bluigi.png'
		break;

		case 7:
			word =  'Baby Mario';
			source = './img/bmario.png'
		break;

		case 8:
			word = 'Bowser';
			source = './img/bowser.png'
		break;

		case 9:
			word = 'Koopa Troopa';
			source = './img/kt.png'
		break;

		case 10:
			word = 'Goomba';
			source = './img/goomba.png'
		break;
	}
}

randomWord(randomNumber);
console.log(word);

for(let i=0; i<word.length; i++){
	if(word[i] == " ")
    	countWin++;
}

for(let i=0; i<word.length; i++){
	if(word[i] == ' '){
		gamePlace.append("\n");
	}else {
		gamePlace.append("_");
	}
}

String.prototype.replaceAt=function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);
}

addEventListener('keypress', function(e){
  if (e.keyCode == 13) {
  	let letterPressed = document.getElementById("inputLetter").value.toUpperCase();
  	let wLetters = document.getElementById("wLetters");
  	document.getElementById("inputLetter").value = '';
  	for(let i=0; i<vetor.length; i++){
    	if(vetor[i] == letterPressed){
    		boolWrongLetters = true;
  		}
    }
    for(let i=0; i<word.length; i++){
    	if(gamePlace.innerHTML[i] == letterPressed)
    		countWin--;
    	if(word[i].toUpperCase() == letterPressed){
    		gamePlace.innerHTML = gamePlace.innerHTML.replaceAt(i, letterPressed);
    		countLetters = 0;
    		countWin++;
    		if(countWin == word.length){
    			alert("YOU WIN!");
    			document.getElementById("inputLetter").disabled = true;
    			document.getElementById("imgDir").src=source;
    			document.getElementById("imgEsq").src=source;
    		}
    	}else if(word[i].toUpperCase() != letterPressed){
    		countLetters++;
    		if(countLetters == word.length && !boolWrongLetters){
    			wLetters.innerHTML += wLetters.innerHTML = letterPressed;
    			countWLetters++;
    			countLetters = 0;
    			vetor.push(letterPressed);
    			if(countWLetters == 6){
    				alert("Game over!");
    				document.getElementById("inputLetter").disabled = true;
    				gamePlace.innerHTML = word;
    			} else if(countWLetters == 4){
    				for(let x=0; x<gamePlace.innerHTML.length; x++){
    					if(gamePlace.innerHTML[x] == "\n"){
    						y--;
    					}
    					if(gamePlace.innerHTML[x] == "_"){
							document.getElementById("dica").innerHTML = `Tip: the ${y+1} letter is "${word[x].toUpperCase()}"`;
    					}
    					y++;
    				}
    			}
    		}else if(boolWrongLetters && countLetters == word.length){
    			boolWrongLetters = false;
    		}
    		if(word.length == i+1){
    			countLetters = 0;
    		}
    	}
    }
  }
});
