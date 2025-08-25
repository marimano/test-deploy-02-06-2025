console.log('Hello console');

fetch('/api/todo-list')
  .then(resp => resp.json())
  .then(list => {
    const listEl = document.createElement('ul');
    const todoItemEls = list.map(item => {
      const itemEl = document.createElement('li');
      itemEl.textContent = item.text;
      return itemEl;
    });
    listEl.append(...todoItemEls);
    document.body.append(listEl);
  });