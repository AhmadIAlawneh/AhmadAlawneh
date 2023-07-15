const sliderContainer = document.querySelector('.slider-container');
        const slider = document.querySelector('.slider');
        const slides = document.querySelectorAll('.slide');
        const slideWidth = 100; // Width of each slide
        const slideMargin = 10; // Margin between slides
        const visibleSlides = 5; // Number of visible slides
        let currentSlide = 0;
        let cloneFirstSlide = false;

        if (visibleSlides >= slides.length) {
            cloneFirstSlide = true;
        }

        if (cloneFirstSlide) {
            const firstSlideClone = slides[0].cloneNode(true);
            slider.appendChild(firstSlideClone);
        }

        slider.style.width = `${(slideWidth + slideMargin) * slides.length}px`;

        function updateSlider() {
            slider.style.transform = `translateX(-${(slideWidth + slideMargin) * currentSlide}px)`;
        }

        function slideNext() {
            currentSlide++;
            if (currentSlide > slides.length - visibleSlides) {
                currentSlide = 0;
            }
            updateSlider();
        }

        const nextArrow = document.querySelector('.slider-arrow.next');

        nextArrow.addEventListener('click', slideNext);

        document.addEventListener("DOMContentLoaded", function() {
            const recipeCards = document.querySelectorAll(".card");
            const cardIndices = generateRandomIndices(recipeCards.length, 8); 
            // Hide all cards
            recipeCards.forEach((card) => {
                card.style.display = "none";
            });
            // Display the randomly selected cards
            for (let i = 0; i < cardIndices.length; i++) {
                const cardIndex = cardIndices[i];
                recipeCards[cardIndex].style.display = "block";
            }});
        function generateRandomIndices(maxRange, count) {
            const indices = [];
            for (let i = 0; i < count; i++) {
                let randomIndex;
                do {
                randomIndex = Math.floor(Math.random() * maxRange);
            } while (indices.includes(randomIndex));
                indices.push(randomIndex);
            }
            return indices;
            }