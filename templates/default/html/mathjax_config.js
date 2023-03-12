
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
          window.mathjax_loaded = true;
        });
      }
    },
    tex: {
      tags: 'ams'
    }
  };
