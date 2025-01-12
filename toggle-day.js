document.addEventListener("DOMContentLoaded", function() {
      const toggleDay = document.querySelector(".toggle-day");

      toggleDay.addEventListener("mouseover", function() {
        const randomRotation = (Math.random() * 6 - 3).toFixed(2); 
        toggleDay.style.transform = `scale(1.1) rotate(${randomRotation}deg)`;
        toggleDay.style.opacity = '0.8';
      });

      toggleDay.addEventListener("mouseout", function() {
        toggleDay.style.transform = 'scale(1)';
        toggleDay.style.opacity = '1';
      });
    });

document.querySelector('.toggle-day').addEventListener('click', function() {
      window.location.href = 'https://europemc-map-night.pages.dev';
    });
