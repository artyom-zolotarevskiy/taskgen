
  var screenPPI, scrinPPMM, body_padding_mm;
  function resize_tables() {
    console.log('Starting Table scaling...');
    // максимальная ширина таблицы в мм
    const max_table_width = document.body.offsetWidth / scrinPPMM - body_padding_mm * 2;
    //document.getElementsByTagName('body')[0].innerHTML = 'max_table_width=' + max_table_width;
    //document.body.innerHTML = 'body_padding=' +
    //    window.getComputedStyle(document.body, null).getPropertyValue('padding-left');
    //document.body.innerHTML = 'Кол-во пикселей в одном миллиметре на данном экране: ' +
    //  scrinPPMM;
    // находим все таблицы
    const tables = document.getElementsByTagName('mjx-mtable');
    for (const table of tables) {
      let table_width_mm = table.offsetWidth / scrinPPMM;
      if (table_width_mm > max_table_width) {
        console.log(table);
        console.log('Таблица превышает допустимую ширину: ' +
          table_width_mm + ' мм');
        console.log('Рассчитываем коэффициент масштабирования...');
        let scale_factor = 1 / (table_width_mm / max_table_width);
        console.log('Коэффициент масштабирования: ', scale_factor)
        table.style.transform = 'scale(' + scale_factor + ')';
        console.log('Применили масштабирование');
        table.style.marginLeft = '-' +
          (table.offsetWidth * (1 - scale_factor) / 2 + 15) + 'px';
        console.log('Выровнили таблицы по центру');
      }
    }
    window.mathjax_loaded = true;
  }
  window.mathjax_loaded = false;
  window.MathJax = {
    startup: {
      typeset: false,
      pageReady() {
        var typeset_blocks = document.getElementsByClassName("typeset");
        for (var i = 0; i < typeset_blocks.length; i++){
           MathJax.typeset([typeset_blocks[i]]);
           MathJax.startup.input[0].parseOptions.tags.counter = 0;
           MathJax.startup.input[0].parseOptions.tags.allCounter = 0;
           MathJax.startup.input[0].parseOptions.tags.allLabels = {};
        }
      },
      ready: () => {
        MathJax.startup.defaultReady();
        MathJax.startup.promise.then(() => {
          console.log('MathJax initial typesetting complete');
          // кол-во пикселей в одном миллиметре на данном экране
          screenPPI = document.getElementById('ppitest').offsetWidth;
          scrinPPMM = screenPPI / 25.4;
          console.log('Кол-во пикселей в одном миллиметре на данном экране: ' +
            scrinPPMM)
          body_padding_mm = window.getComputedStyle(document.body, null).
          getPropertyValue('padding-left').replace('px', '') / scrinPPMM;
          if (/HeadlessChrome/.test(window.navigator.userAgent)) {
            body_padding_mm += 17.5;
          }
          resize_tables();
        });
      }
    },
    tex: {
      tags: 'ams'
    }
  };
  window.addEventListener('resize', resize_tables, true);
