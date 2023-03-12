
  var screenPPI, scrinPPMM, body_padding_mm;
  function resize_tables() {
    console.log('Starting Table scaling...');
    // максимальная ширина таблицы в мм
    const max_table_width = document.body.offsetWidth / scrinPPMM - body_padding_mm * 2;
    // находим все таблицы
    const tables = document.getElementsByTagName('mjx-mtable');
    for (const table of tables) {
      let table_width_mm = table.offsetWidth / scrinPPMM;
      if (table_width_mm > max_table_width) {
        let scale_factor = 1 / (table_width_mm / max_table_width);
        table.style.transform = 'scale(' + scale_factor + ')';
        table.style.marginLeft = '-' +
          (table.offsetWidth * (1 - scale_factor) / 2 + 15) + 'px';
      }
    }
    window.mathjax_loaded = true;
    console.log('Scaling of tables is completed!');
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
          console.log('Number of pixels in one millimeter on this screen: ' +
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
