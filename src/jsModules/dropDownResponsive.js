const dropDown = () => {
  const menuButton = document.querySelector('.menu-toggle');
  const listItems = document.querySelectorAll('ul li.nav-li-drop');
  const mediaWidth = window.matchMedia('(max-width: 981px');
  const nav = document.querySelector('nav');

  const toggleNavClass = () => {
    listItems.forEach(node => node.classList.remove('active'));
    nav.classList.toggle('active');
  };

  const toggleLiClass = event => {
    listItems.forEach(node => {
      if (event.target === node || event.target.parentNode === node) {
        node.classList.toggle('active');
      } else {
        node.classList.remove('active');
      }
    });
  };

  listItems.forEach(item =>
    item.addEventListener('click', toggleLiClass, false)
  );
  menuButton.addEventListener('click', toggleNavClass);
  mediaWidth.addListener(() => {
    nav.classList.remove('active');
  });
};

export default dropDown;
