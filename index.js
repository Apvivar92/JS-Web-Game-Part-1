let greenCharacter = document.createElement('img');
let pineTree = document.createElement('img');
let shroomTree = document.createElement('img');
let pillar = document.createElement('img');
let crate = document.createElement('img');
let well = document.createElement('img');

function newImage(character, tree, tree2, pillars, box, waterSource) {
  character.src = 'assets/green-character.gif';
  character.style.position = 'fixed';
  character.style.left = '100px';
  character.style.bottom = '100px';
  document.body.append(character);

  tree.src = 'assets/pine-tree.png';
  tree.style.position = 'fixed';
  tree.style.left = '450px';
  tree.style.bottom = '200px';
  document.body.append(tree);

  tree2.src = 'assets/tree.png';
  tree2.style.position = 'fixed';
  tree2.style.left = '200px';
  tree2.style.bottom = '300px';
  document.body.append(tree2);

  pillars.src = 'assets/pillar.png';
  pillars.style.position = 'fixed';
  pillars.style.left = '350px';
  pillars.style.bottom = '100px';
  document.body.append(pillars);

  box.src = 'assets/crate.png';
  box.style.position = 'fixed';
  box.style.left = '150px';
  box.style.bottom = '200px';
  document.body.append(box);

  waterSource.src = 'assets/well.png';
  waterSource.style.position = 'fixed';
  waterSource.style.left = '500px';
  waterSource.style.bottom = '425px';
  document.body.append(waterSource);
}

newImage(greenCharacter, pineTree, shroomTree, pillar, crate, well);
