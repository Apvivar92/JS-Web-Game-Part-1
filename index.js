function newImage(url, left, bottom) {
  let image = document.createElement('img');
  image.src = url;
  image.style.position = 'fixed';
  image.style.left = left + 'px';
  image.style.bottom = bottom + 'px';
  document.body.append(image);
  return image;
}

function newItem(url, left, bottom) {
  let item = newImage(url, left, bottom);
  item.addEventListener('dblclick', function () {
    item.remove();
  });
}

function newBackground(url, height, bottom) {
  let background = document.createElement('img');
  background.src = url;
  background.style.height = height + 'px';
  background.style.bottom = bottom + 'px';
  background.style.position = 'fixed';
  background.style.display = 'flex';
  background.style.flexDirection = 'row';
  background.style.width = '100%';
  document.body.append(background);
}

newBackground('assets/grass.png', 550, 0);
newBackground('assets/sky.png', 449, '');

newImage('assets/green-character.gif', 100, 100);
newImage('assets/pine-tree.png', 450, 200);
newImage('assets/tree.png', 200, 300);
newImage('assets/boulder.png', 1180, 500);
newImage('assets/boulder.png', 1290, 500);
newImage('assets/boulder.png', 1290, 550);
newImage('assets/boulder.png', 1290, 600);
newImage('assets/boulder.png', 1200, 590);
newImage('assets/boulder.png', 1090, 500);
newImage('assets/boulder.png', 1090, 550);
newImage('assets/boulder.png', 1090, 620);
newImage('assets/pillar.png', 1090, 450);
newImage('assets/pillar.png', 1310, 450);
newImage('assets/crate.png', 150, 200);
newImage('assets/well.png', 500, 425);
newImage('assets/red-character.gif', 1200, 400);
newImage('assets/boulder.png', 1000, 450);
newImage('assets/boulder.png', 1400, 450);
newImage('assets/boulder.png', 1400, 520);
newImage('assets/boulder.png', 1400, 600);
newImage('assets/boulder.png', 1400, 660);
newImage('assets/boulder.png', 1300, 680);
newImage('assets/boulder.png', 1200, 680);
newImage('assets/boulder.png', 1100, 680);
newImage('assets/boulder.png', 990, 680);
newImage('assets/boulder.png', 990, 620);
newImage('assets/boulder.png', 990, 500);
newImage('assets/boulder.png', 990, 550);
newImage('assets/log.png', 900, 750);
newImage('assets/boulder.png', 1000, 320);
newImage('assets/boulder.png', 1400, 320);
newImage('assets/boulder.png', 1000, 180);
newImage('assets/boulder.png', 1400, 180);
newImage('assets/boulder.png', 1000, 50);
newImage('assets/boulder.png', 1400, 50);

newItem('assets/sword.png', 500, 405);
newItem('assets/sheild.png', 165, 185);
newItem('assets/staff.png', 600, 100);

for (let i = 0; i <= window.innerHeight; i++) {
  console.log(i);
}

for (let i = 0; i <= window.innerWidth; i++) {
  console.log(i);
}
