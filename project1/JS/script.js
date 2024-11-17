window.addEventListener('scroll', () => {
  const textElements = document.querySelectorAll('.icon_text');
  textElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('show');
    }
  });
});

window.addEventListener('scroll', () => {
  const textElements = document.querySelectorAll('.study_icon');
  textElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if(rect.top < window.innerHeight - 100) {
      el.classList.add('show')
    }
  })
})

window.addEventListener('scroll', () => {
  const textElements = document.querySelectorAll('.box');
  textElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if(rect.top < window.innerHeight - 100) {
      el.classList.add('show')
    }
  })
})
