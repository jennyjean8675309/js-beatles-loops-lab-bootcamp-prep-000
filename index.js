// add solution here
function theBeatlesPlay(musicians, instruments){
  var beatlesArray = [];
  for (var n = 0; n <= 3; musicians[n++]){
    beatlesArray.push(`${musicians[n]} plays ${instruments[n]}`);
  } return beatlesArray;
}

function johnLennonFacts(facts){
  let i = 0;
  var factsArray = [];
  while (i < facts.length){
    factsArray.push(`${facts[i]}!!!`);
    i++;
  } return factsArray;
}

//Because the last index(3) is one less than the length(4), using (i < facts.length) works as the condition.




