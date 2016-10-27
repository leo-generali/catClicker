



function cat(name, image, score){
	this.catName = name;
	this.catImage = image;
	this.catScore = score;
}

//Cats to click
var catOne = new cat('Garbanzo', 'imgs/cat.jpg', 0);
var catTwo = new cat('Bean Cuisine', 'imgs/cat2.jpg', 0);

//Array of the above cats
var catArr = [catOne, catTwo];

var pageCatName = catArr[1].catName;
var elemCatImage = catArr[1].catImage;
var pageCatScore = catArr[1].catScore;

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

var catPicDiv = document.getElementById('catPics'); 
document.body.insertBefore(catScoreElem, catPicDiv);

//Cat Pic
var catImgElem = document.createElement('img');
catImgElem.src = elemCatImage;

catImgElem.addEventListener('click', function(){
	pageCatScore++;
	catScoreElem.innerHTML = pageCatScore;	
});

var catScoreDiv = document.getElementById('catPics'); 
document.body.insertBefore(catImgElem, catScoreDiv);

