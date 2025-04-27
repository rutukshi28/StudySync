const questions = document.querySelectorAll('.faq-question');

questions.forEach((question) => {
  question.addEventListener('click', () => {
    const parent = question.parentElement;
    parent.classList.toggle('active');
  });
});
