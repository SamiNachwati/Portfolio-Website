const typewriterText = document.getElementById('typewriter-text');
const text = " Sami Nachwati";

let index = 0;

function typeWriter() {
  if (index < text.length) {
    typewriterText.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 100); 
  }
}

typeWriter();





document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth'
      });
    });
});