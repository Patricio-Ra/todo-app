'use strict'

const todos = document.querySelectorAll('p');

const filterPs = function (ps, query) {
  ps.forEach(p => {
    if (p.innerText.toLowerCase().includes(query)) {
      p.remove();
    };
  });
};

filterPs(todos, 'the');