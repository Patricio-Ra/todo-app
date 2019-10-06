'use strict'

const todos = document.querySelectorAll('p');

const filterPs = function (ps, query) {
  ps.forEach(p => {
    if (p.textContent.toLowerCase().includes(query)) {
      p.remove();
    };
  });
};

filterPs(todos, 'the');