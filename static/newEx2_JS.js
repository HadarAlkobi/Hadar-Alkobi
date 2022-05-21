const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('div a').forEach(link => {
  if(link.href.includes(`${activePage}`)){
    link.classList.add('active');
    console.log(link);
  }
})

function bigImg(x) {
    x.style.height = "90%";
    x.style.width = "90%";
  }
  
  function normalImg(x) {
    x.style.height = "80%";
    x.style.width = "80%";
  }
