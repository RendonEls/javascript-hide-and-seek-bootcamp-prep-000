function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.queryselector('#nested .target');
}

function increaseRankBy(n){
  var ranks = document.queryselectorALL ('ul.ranked-list');
  for (let i = 0; i<ranks.length; i++);
  
}

function increaseRankby(n){
  var rank = document.querySelectorALL("ul.ranked-list.li");
  for (var i=0; i<ranks.length; i++){
  ranks[i].innerHTML = parseInt(ranks[i].innerHTML) + n;
  }
}

function deepestChild() {
  var grandNode = document.querySelector('grand-node')
  var deepNode = grandNode.children[0];
  for (var i = 0; !deepNode.children[i]; i){
    deepNode = deepNode.children[0];
  }
 return deepNode; 
}