document.addEventListener('DOMContentLoaded', () => {
  // Smooth Scroll para links da navegação
  const navLinks = document.querySelectorAll('.main-nav a[href^="#"]');
  
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Manipulação de cliques nos links do rodapé (Aviso de demonstração)
  const repoLink = document.getElementById('repoLink');
  const docsLink = document.getElementById('docsLink');

  [repoLink, docsLink].forEach(element => {
    if (element) {
      element.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Este é um link de demonstração para o seu projeto escolar.');
      });
    }
  });
});
