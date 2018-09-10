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
  var rank = document.querySelectorALL("ul.ranked-list.li")
  for (i=0; i<ranks.length; i++){
  ranks[i].innerHTML = parseInt(ranks[i].innerHTML) + n
  }
}

