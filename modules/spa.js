export const spa = () => {
  const navlinks = Array.from(document.querySelectorAll('.nav-link'));
  const content = Array.from(document.querySelectorAll('.spa'));

  navlinks.forEach((n) => {
    n.addEventListener('click', () => {
      const index = navlinks.indexOf(n);

      content.forEach((element) => {
        if (index === content.indexOf(element)) {
          element.classList.remove('d-none');
        } else {
          element.classList.add('d-none');
        }
      });
    });
  });
};

export default spa;