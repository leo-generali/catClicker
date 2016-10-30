//Cat clicker - Udacity

function Cat(name, image, score){
	this.catName = name;
	this.catImage = image;
	this.catScore = score;
}

//Cats to click
var catOne = new Cat('Garbanzo', 'imgs/cat.jpg', 0);
var catTwo = new Cat('Bean Cuisine', 'imgs/cat2.jpg', 0);

//Array of the above cats
var catArr = [catOne, catTwo];

for(var i = 0; i < catArr.length; i++){

	var pageCatName = catArr[i].catName;
	var elemCatImage = catArr[i].catImage;
	var pageCatScore = catArr[i].catScore;

	console.log(pageCatScore);

	//Cat Name
	var catNameElem = document.createElement('h2'); 
	var newCatName = document.createTextNode(pageCatName); 
	catNameElem.appendChild(newCatName);

	var catNameDiv = document.getElementById('catPics'); 
	document.body.insertBefore(catNameElem, catNameDiv);

	//Cat Score
	var catScoreElem = document.createElement('h2'); 
	var newCatScore = document.createTextNode(pageCatScore); 
	catScoreElem.appendChild(newCatScore);
	catScoreElem.setAttribute('id', i);

	var catPicDiv = document.getElementById('catPics'); 
	document.body.insertBefore(catScoreElem, catPicDiv);

	//Cat Pic
	var catImgElem = document.createElement('img');
	catImgElem.src = elemCatImage;

	catImgElem.addEventListener('click', (function(x){
  		return function() {
   			var myElem = document.getElementById(x);
			myElem.innerHTML++;
  		}
	})(i));

	var catScoreDiv = document.getElementById('catPics'); 
	document.body.insertBefore(catImgElem, catScoreDiv);
}