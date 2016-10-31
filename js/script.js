//Cat clicker - Udacity

function Cat(name, image, score){
	this.catName = name;
	this.catImage = image;
	this.catScore = score;
}

//Cats to click
var catOne = new Cat('Garbanzo', 'imgs/cat.jpg', 0);
var catTwo = new Cat('Bean Cuisine', 'imgs/cat2.jpg', 0);
var catThree = new Cat('Toulouse', 'imgs/cat3.jpg', 0);
var catFour = new Cat('Minnie', 'imgs/cat4.jpg', 0);
var catFive = new Cat('Robert', 'imgs/cat5.jpg', 0);

//Array of the above cats
var catArr = [catOne, catTwo, catThree, catFour, catFive];

//Cat List
var catList = document.getElementById('catNames');

for(var i = 0; i < catArr.length; i++){

	var pageCatName = catArr[i].catName;
	var elemCatImage = catArr[i].catImage;
	var pageCatScore = catArr[i].catScore;

	var catNameId = 'name' + i;
	var catScoreId = 'score' + i;
	var catPicId = 'pic' + i;


	console.log(pageCatScore);

	//Cat List
	var catNameListElem = document.createElement('li'); 
	var newCatNameListItem = document.createTextNode(pageCatName); 
	catNameListElem.appendChild(newCatNameListItem);
	catList.appendChild(catNameListElem);
	catNameListElem.addEventListener('click', (function(tempCatNum){
  		return function() {
  			for(var x = 0; x < catArr.length; x++){
  				if(x !== tempCatNum){
  					document.getElementById('name' + x).style.display = 'none';
  					document.getElementById('score' + x).style.display = 'none';
  					document.getElementById('pic' + x).style.display = 'none';
  				}else{
  					document.getElementById('name' + x).style.display = '';
  					document.getElementById('score' + x).style.display = '';
  					document.getElementById('pic' + x).style.display = '';
  				}
  			}
  		}
	})(i));

	//Cat Name
	var catNameElem = document.createElement('h2'); 
	var newCatName = document.createTextNode(pageCatName); 
	catNameElem.appendChild(newCatName);
	catNameElem.setAttribute('id', catNameId);

	var catNameDiv = document.getElementById('catPics'); 
	document.body.insertBefore(catNameElem, catNameDiv);


	//Cat Score
	var catScoreElem = document.createElement('h2'); 
	var newCatScore = document.createTextNode(pageCatScore); 
	catScoreElem.appendChild(newCatScore);
	catScoreElem.setAttribute('id', catScoreId);

	var catPicDiv = document.getElementById('catPics'); 
	document.body.insertBefore(catScoreElem, catPicDiv);

	//Cat Pic
	var catImgElem = document.createElement('img');
	catImgElem.src = elemCatImage;
	catImgElem.setAttribute('id', catPicId);

	catImgElem.addEventListener('click', (function(x){
  		return function() {
   			var myElem = document.getElementById('score' + x);
   			console.log(myElem);
			myElem.innerHTML++;
  		}
	})(i));

	var catScoreDiv = document.getElementById('catPics'); 
	document.body.insertBefore(catImgElem, catScoreDiv);
}

for(var i = 1; i < catArr.length; i++){
	document.getElementById('name' + i).style.display = 'none';
	document.getElementById('score' + i).style.display = 'none';
	document.getElementById('pic' + i).style.display = 'none';
}