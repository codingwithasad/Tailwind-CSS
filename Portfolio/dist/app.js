function changeColor(id) {

    const liElements = document.querySelectorAll('.li');
    liElements.forEach(function (liElement) {
        liElement.style.color = "#fff";
    });

    const clickedElement = document.getElementById(id);
    clickedElement.style.color = "#7b8cff";

}


// hamburger

const hamburger = document.querySelector('.hamburger2');
const ul = document.querySelector('.ul');
const aTags = document.querySelectorAll('.ul a');
const checkbox = document.querySelector('.hamburger2 input[type="checkbox"]');

hamburger.addEventListener('click', (event) => {
    if (event.target.tagName !== 'INPUT') {
        ul.classList.toggle('top-[0%]');
    }
});

// Add event listeners to each <a> tag within the .ul element
aTags.forEach((aTag) => {
    aTag.addEventListener('click', () => {
        ul.classList.remove('top-[0%]');
        document.body.classList.remove('overflow-hidden');
        checkbox.checked = false; // Reset the checkbox state
    });
});


// AOS Animation

document.addEventListener("DOMContentLoaded", function() {
    // Select all elements with the data-aos attribute
    var aosElements = document.querySelectorAll("[data-aos]");
    
    // Loop through each element
    aosElements.forEach(function(element) {
      // Check if the element has already been animated
      if (!element.classList.contains("aos-animate")) {
        // If not, trigger AOS animation
        new AOS.init({ 
          easing: 'ease-in', // Easing option
          once: true // Only animate once
        }).refresh();
        // Add class to mark element as animated
        element.classList.add("aos-animate");
      }
    });
  });
  
  