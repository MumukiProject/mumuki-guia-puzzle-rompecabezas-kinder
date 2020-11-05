//la pieza de abajo fija

Muzzle.basic(1, 2, 'https://raw.githubusercontent.com/MumukiProject/mumuki-guia-puzzle-rompecabezas-kinder/master/assets/torta1-01_1604600157195.svg').then(canvas => {
          canvas.shuffle(0.4);
          canvas.puzzle.pieces.filter(it => !it.metadata.left).forEach(it => it.translate(400, 0))
          canvas.puzzle.pieces[0].relocateTo(50, 10)
          canvas.puzzle.pieces[1].relocateTo(50, 180)
        });