// Language switcher functionality
const esFlag = document.getElementById('es-flag');
const ukFlag = document.getElementById('uk-flag');
let currentLanguage = 'en';
function toggleLanguage(language) {
    if (language === 'es') {
        console.log('Switched to Spanish');
    } else {
        console.log('Switched to English');
    }
    currentLanguage = language;
    updateActiveFlag();
}



function updateActiveFlag() {
    if (currentLanguage === 'es') {
		document.getElementById('spVer').style.display ='block';
		document.getElementById('enVer').style.display ='none';
		document.getElementById('spVerA').style.display ='block';
		document.getElementById('enVerA').style.display ='none';
		document.getElementById('spVerC').style.display ='block';
		document.getElementById('enVerC').style.display ='none';
		document.getElementById('spVerPF').style.display ='block';
		document.getElementById('enVerPF').style.display ='none';
		document.getElementById('spVerPT').style.display ='block';
		document.getElementById('enVerPT').style.display ='none';
		document.getElementById('spVerPM').style.display ='block';
		document.getElementById('enVerPM').style.display ='none';
		document.getElementById('spVerPP').style.display ='block';
		document.getElementById('enVerPP').style.display ='none';
        esFlag.style.width = '45px';
		ukFlag.style.width = '40px';
    } else {
		document.getElementById('enVer').style.display ='block';
		document.getElementById('spVer').style.display ='none';
		document.getElementById('enVerA').style.display ='block';
		document.getElementById('spVerA').style.display ='none';
		document.getElementById('enVerC').style.display ='block';
		document.getElementById('spVerC').style.display ='none';
		document.getElementById('enVerPF').style.display ='block';
		document.getElementById('spVerPF').style.display ='none';
		document.getElementById('enVerPT').style.display ='block';
		document.getElementById('spVerPT').style.display ='none';
		document.getElementById('enVerPM').style.display ='block';
		document.getElementById('spVerPM').style.display ='none';
		document.getElementById('spVerPP').style.display ='none';
		document.getElementById('enVerPP').style.display ='block';
        ukFlag.style.width = '45px';
		esFlag.style.width = '40px'
    }
}

// Event listeners for flag clicks
esFlag.addEventListener('click', () => toggleLanguage('es'));
ukFlag.addEventListener('click', () => toggleLanguage('en'));

// Set an initial active flag
updateActiveFlag();


const floatingImage = document.getElementById('floating-image');
const currentDate = new Date();
console.log (currentDate.getFullYear());
document.getElementById("currentYear").textContent = currentDate.getFullYear() + ' Benjamin Escamilla Rivas';

const imageContainer = document.getElementById('imageContainer');
const images = ['assets/status.png', 'assets/theme1.png', 'assets/theme2.png', 'assets/timeline.png']; // Replace with your image URLs
let currentImageIndex = 0;

function changeImage() {
	currentImageIndex = (currentImageIndex + 1) % images.length;
	const imageUrl = images[currentImageIndex];
	const imageElement = imageContainer.querySelector('img');
 
	setTimeout(() => {
		imageElement.src = imageUrl;
		// Apply a fade-in effect after changing the image
		imageElement.style.opacity = 1;
	}, 1000); // Delay the image change to allow for the fade-out effect
}

// Change the image every 5 seconds (5000 milliseconds)
setInterval(changeImage, 5000);

const imageContainerTwo = document.getElementById('imageContainerTwo');
const imagesTwo = ['assets/graficos.png', 'assets/menu.png', 'assets/inventario.png', 'assets/clases.png']; // Replace with your image URLs
let currentImageIndexTwo = 0;

function changeImageTwo() {
	currentImageIndexTwo = (currentImageIndexTwo + 1) % images.length;
	const imageUrlTwo = imagesTwo[currentImageIndexTwo];
	const imageElementTwo = imageContainerTwo.querySelector('img');
 
	setTimeout(() => {
		imageElementTwo.src = imageUrlTwo;
		// Apply a fade-in effect after changing the image
		imageElementTwo.style.opacity = 1;
	}, 1000); // Delay the image change to allow for the fade-out effect
}

setInterval(changeImageTwo, 5000);



window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const imageHeight = floatingImage.clientHeight;
    const windowHeight = window.innerHeight;
    const containerHeight = container.clientHeight;

    
    const maxScrollPosition = containerHeight - windowHeight;
    let newPosition = scrollY + windowHeight / 2 - imageHeight / 2;
    newPosition = Math.min(newPosition, maxScrollPosition);
    floatingImage.style.top = `${newPosition}px`;
});

