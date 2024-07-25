const envelope = document.querySelector('.envelope-wrapper');
envelope.addEventListener('click', () => {
  envelope.classList.toggle('flap');
    
    setTimeout(() => {
      window.location.href = './foryou/index.html'; // replace with your target URL
    }, 5000); // 10 seconds
});

