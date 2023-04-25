const dropdown = document.getElementById("service");
const anchorLinks = document.querySelectorAll("[href^='#']");

updateForm = (e) => {
  e.preventDefault();

  const service = e.target.href;

  dropdown.value = service.substring(1);
}

anchorLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    const target = e.target.getAttribute('href');

    document.querySelector(target).scrollIntoView({behavior: 'smooth'});
  })
})

