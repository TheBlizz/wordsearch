function sample(arr){
  return arr.length? 
    arr[Math.floor(Math.random() * arr.length)]: 
    undefined;
}

function wordList(arr){
  return arr;
}
var humans = [
  {
    names: ["Popular U.S. Cities"],
    words: ["LosAngeles", "SanDiego"]
  },

  {
    names: ["Summer Words"],
    words: ["Beach", "Waves"]
  }
];

var group = sample(humans);
container.innerHTML = [
  "Name: " + sample(group.names),
  "Words: " + wordList(group.words)].join("<br>");
