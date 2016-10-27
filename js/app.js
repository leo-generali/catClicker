var cats = [{
    'name': 'Cat1',
    'pic': 'https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426',
    'count': 0,
    'id': 0
}, {
    'name': 'Cat2',
    'pic': 'https://lh3.ggpht.com/kixazxoJ2ufl3ACj2I85Xsy-Rfog97BM75ZiLaX02KgeYramAEqlEHqPC3rKqdQj4C1VFnXXryadFs1J9A=s0#w=640&h=496',
    'count': 0,
    'id': 1
}];
var container = document.createElement('div');
for (var i = 0; i < cats.length; i++) {
    // create cat name
    var catName = document.createElement('h2');
    catName.innerHTML = cats[i].name;
    container.appendChild(catName);
    // create pic
    var catImg = document.createElement('img');
    catImg.src = cats[i].pic;
    container.appendChild(catImg);
    // create count
    var catCount = document.createElement('p');
    catCount.innerHTML = cats[i].count;
    container.appendChild(catCount);
    catImg.addEventListener('click', (function(currentCount) {
        return function() {
            catCount.innerHTML = currentCount++;
            console.log(currentCount);
            
        };
    })(catCount, cats[i].count));
}
document.body.appendChild(container);