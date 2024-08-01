// // const containerEl = document.querySelector(".container");

// // const careers = ["YouTuber", "Web Developer", "Freelancer", "Instructor"];

// // let careerIndex = 0;

// // let characterIndex = 0;

// // updateText();

// // function updateText() {
// //   characterIndex++;
// //   containerEl.innerHTML = `
// //     <h1>I am ${careers[careerIndex].slice(0, 1) === "I" ? "an" : "a"} ${careers[
// //     careerIndex
// //   ].slice(0, characterIndex)}</h1>
// //     `;

// //   if (characterIndex === careers[careerIndex].length) {
// //     careerIndex++;
// //     characterIndex = 0;
// //   }

// //   if (careerIndex === careers.length) {
// //     careerIndex = 0;
// //   }
// //   setTimeout(updateText, 400);
// // }


// // // THÊM CODE MỚI

// Tạo style element
const style = document.createElement('style');
document.head.appendChild(style);

// Tạo container
const container = document.querySelector('.container');

// Tạo hiệu ứng sao
const starsContainer = document.createElement('div');
starsContainer.classList.add('stars');
container.appendChild(starsContainer);

for (let i = 0; i < 200; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.animationDelay = `${Math.random() * 5}s`;
    starsContainer.appendChild(star);
}

// Tạo các hành tinh
const planetColors = ['#ff4500', '#ffa500', '#00ff00', '#1e90ff'];
for (let i = 0; i < 4; i++) {
    const planet = document.createElement('div');
    planet.classList.add('planet');
    planet.style.width = `${20 + i * 10}px`;
    planet.style.height = `${20 + i * 10}px`;
    planet.style.background = planetColors[i];
    planet.style.left = '50%';
    planet.style.top = '50%';
    planet.style.animationDuration = `${20 + i * 5}s`;
    container.appendChild(planet);
}

// Thay đổi phần tạo hiệu ứng gõ chữ và xử lý Text Area
const textEffect = document.createElement('div');
textEffect.classList.add('text-effect');
container.appendChild(textEffect);

let careers = ["YouTuber", "Web Developer", "Freelancer", "Freelancer"];
let careerIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentText = careers[careerIndex];
    
    // Xóa nội dung cũ
    while (textEffect.firstChild) {
        textEffect.removeChild(textEffect.firstChild);
    }
    
    // Thêm nội dung mới
    const textNode = document.createTextNode(currentText.substring(0, charIndex));
    textEffect.appendChild(textNode);
    
    // Thêm con trỏ
    const cursor = document.createElement('span');
    cursor.classList.add('cursor');
    cursor.textContent = '|';
    textEffect.appendChild(cursor);

    if (!isDeleting && charIndex < currentText.length) {
        charIndex++;
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
    } else {
        isDeleting = !isDeleting;
        if (!isDeleting) {
            careerIndex = (careerIndex + 1) % careers.length;
        }
    }
    
    const typingSpeed = isDeleting ? 50 : 150;
    setTimeout(typeEffect, typingSpeed);
}

typeEffect();

// Tạo text area
const textArea = document.createElement('textarea');
textArea.placeholder = 'Hãy nhập những thứ bạn muốn nhập...';
container.appendChild(textArea);



// Xử lý sự kiện nhập liệu vào text area
textArea.addEventListener('input', function() {
    const newCareers = this.value.split(',').map(career => career.trim()).filter(career => career !== '');
    if (newCareers.length > 0) {
        careers = newCareers;
        careerIndex = 0;
        charIndex = 0;
        isDeleting = false;
    }
});




