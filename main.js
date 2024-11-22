fetch('data.json').then((response) => {
  response.text().then((response) => {
    const data = JSON.parse(response);
    data.forEach(element => {
      document.querySelector(`section[class="score-unit ${element.category.toLowerCase()}"] img`).src = element.icon;
      document.querySelector(`section[class="score-unit ${element.category.toLowerCase()}"] img`).alt = element.category + " icon";
      document.querySelector(`section[class="score-unit ${element.category.toLowerCase()}"] section[class="score-type"]`).innerHTML = element.category;
      document.querySelector(`section[class="score-unit ${element.category.toLowerCase()}"] section[class="score-dividend"]`).innerHTML = element.score;
    });
  });
});
