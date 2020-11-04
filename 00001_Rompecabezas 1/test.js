//la pieza de abajo fija

Muzzle.basic(1, 2, 'https://raw.githubusercontent.com/MumukiProject/mumuki-guia-puzzle-rompecabezas-kinder/master/assets/torta1-01_1600269798453.png').then(canvas => {
          canvas.shuffle(0.4);
          canvas.puzzle.pieces.filter(it => !it.metadata.left).forEach(it => it.translate(400, 0))
          canvas.puzzle.pieces[0].relocateTo(100, 60)
          canvas.puzzle.pieces[1].relocateTo(100, 120)
        });