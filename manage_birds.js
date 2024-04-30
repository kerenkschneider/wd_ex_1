document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.add_bird_container');
    const addImageBtn = document.getElementById('addirdBtn');
    const removeAllImagesBtn = document.getElementById('removeAllBirdsBtn');

    // Function to create a new moving image
    function createMovingImage() {
        const imgNum = `${Math.floor(Math.random() * (10)) + 1}`; 
        //const imgNum = `1`; 
        const randomImage = `assets/birds/bird_${imgNum}.png`; // Construct the image URL
        const movingImage = document.createElement('img');
        movingImage.src = randomImage; // Set image source
        movingImage.alt = 'Moving Image'; 
        movingImage.classList.add('moving-image'); 
        movingImage.style.position = 'fixed'; 
        movingImage.style.top = `${Math.floor(Math.random() * 101)}%`; // 0 and 100%
        movingImage.style.animationDuration = `${Math.floor(Math.random() * 10) + 5}s`; // Random animation duration between 5s and 15s
        container.appendChild(movingImage); 
    }

    // Function to remove all moving images
    function removeAllMovingImages() {
        const movingImages = document.querySelectorAll('.moving-image');
        movingImages.forEach(function(image) {
            image.remove(); 
        });
    }

    // Event listener for the "Add Moving Image" button click
    addImageBtn.addEventListener('click', function() {
        createMovingImage(); 
    });

    // Event listener for the "Remove All Images" button click
    removeAllImagesBtn.addEventListener('click', function() {
        removeAllMovingImages(); 
    });

    window.addEventListener('resize', function() {
        const addButton = document.getElementById('addirdBtn');
        const removeAllBirdsBtn = document.getElementById('removeAllBirdsBtn');
        if (window.innerWidth <= 768) {
            addButton.textContent = '+';
            removeAllBirdsBtn.textContent = '-';
        } else {
            addButton.textContent = 'הוסף ציפור';
            removeAllBirdsBtn.textContent = 'הסר ציפורים';
        }

        
      });
});