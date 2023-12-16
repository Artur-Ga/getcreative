const festivalStatus = "start"; // Начало фестиваля = start / Конец фестиваля = end

const minImages = 12; // Минимальное количество фотографий на странице
const maxImages = 120; // Количество фотографий в папке photos

if (festivalStatus == "start") {
    document.getElementById("main-header1").innerHTML = "Фестиваль по креативному программированию и робототехнике"; // Заголовок 1 страницы во время фестиваля
    document.getElementById("main-header2").innerHTML = "Старт регионального фестиваля педагогических практик технической и естественно-научной направленностей"; // Заголовок 2 страницы во время фестиваля
    document.getElementById("position-1").href = "positions/Положение_ Фестиваль GetCreative_26-28.04.23.docx"; // Путь к положению 1
    document.getElementById("position-2").href = "positions/Положение_Медиафестиваль_2023.docx"; // Путь к положению 2
    document.getElementById("position-3").href = "positions/Положение_Педагогический интенсив 2023.doc"; // Путь к положению 3
    document.getElementById("reg-btn").href = 'https://ya.ru/'; // Ссылка на форму регистрации

    document.getElementById("info-btn-1").href = "positions/Положение_ Фестиваль GetCreative_26-28.04.23.docx"; // Путь к положению 1
    document.getElementById("info-btn-2").href = "positions/Положение_Медиафестиваль_2023.docx"; // Путь к положению 2
    document.getElementById("info-btn-3").href = "positions/Положение_Педагогический интенсив 2023.doc"; // Путь к положению 3
    document.getElementById("reg-btn-2").href = 'https://ya.ru/'; // Ссылка на форму регистрации

    document.getElementById("downl-btn").href = "positions/Программа GetCreative.doc"; // Путь к программе
}

if (festivalStatus == "end") {
    document.getElementById("main-header1").innerHTML = "Фестиваль по креативному программированию и робототехнике";  // Заголовок 1 страницы, если фестиваль завершен
    document.getElementById("main-header2").innerHTML = "В этом году завершен!";  // Заголовок 2 страницы, если фестиваль завершен
    document.getElementById("position-1").style = 'opacity: 0.5';
    document.getElementById("position-2").style = 'opacity: 0.5';
    document.getElementById("position-3").style = 'opacity: 0.5';
    document.getElementById("reg-btn").style = 'opacity: 0.5; cursor: default';

    document.getElementById("info-text-1").style = 'opacity: 0.5';
    document.getElementById("info-text-2").style = 'opacity: 0.5';
    document.getElementById("info-text-3").style = 'opacity: 0.5';
    document.getElementById("info-btn-1").style = 'opacity: 0.5; cursor: default';
    document.getElementById("info-btn-2").style = 'opacity: 0.5; cursor: default';
    document.getElementById("info-btn-3").style = 'opacity: 0.5; cursor: default';
    document.getElementById("reg-btn-2").style = 'opacity: 0.5; cursor: default';

    document.getElementById("schedule-text-1").style = 'opacity: 0.5';
    document.getElementById("schedule-text-2").style = 'opacity: 0.5';
    document.getElementById("schedule-text-3").style = 'opacity: 0.5';
    document.getElementById("downl-btn").style = 'opacity: 0.5; cursor: default';
}

function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add('fadeIn-animation-show');
      }
    });
}

function onEntry2(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add('slide-animation-show');
      }
    });
}

function onEntry3(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add('slide-animation-2-show');
      }
    });
}
  
let option = { threshold: [0.07] };

let observer = new IntersectionObserver(onEntry, option);
let fadeIn = document.querySelectorAll('.fadeIn-animation');
for (let elm of fadeIn) {
    observer.observe(elm);
}

let observer2 = new IntersectionObserver(onEntry2, option);
let slide = document.querySelectorAll('.slide-animation');
for (let elm of slide) {
    observer2.observe(elm);
}

let observer3 = new IntersectionObserver(onEntry3, option);
let slide2 = document.querySelectorAll('.slide-animation-2');
for (let elm of slide2) {
    observer3.observe(elm);
}

let imageArray = [];
let showMoreImages = 0;

function lessImages() {
    document.getElementById("img-container").innerHTML = "";

    number = 0;

    while (number < (minImages)) { 
        number++;
        imageArray[number] = "photos/" + (number) + ".jpg";
        document.getElementById("img-container").innerHTML += '<div class="small-container" id="gallery-window-'+number+'" onclick="openWindow('+number+')"><img src="'+imageArray[number]+'"></div>';
    }
}

lessImages()

function openWindow(num){
    document.getElementById("gallery-container").style.animation = 'fadeIn 1.2s both ease';

    document.getElementById("gallery-window").innerHTML = "";
    document.getElementById("left-container").innerHTML = "";
    document.getElementById("right-container").innerHTML = "";

    document.getElementById("gallery-window").innerHTML += '<img src="photos/'+num+'.jpg" class="gallery-window-img">';
    
    if ((num - 1) == 0) { document.getElementById("left-container").innerHTML += '<img src="images/arrow-left.png" class="arrow-left-disabled">'; }
    else { document.getElementById("left-container").innerHTML += '<img src="images/arrow-left.png" class="arrow-left" onclick="prevImage('+num+')">'; }

    if (showMoreImages == 1) { 
        if ((num) == maxImages) { document.getElementById("right-container").innerHTML += '<img src="images/arrow-right.png" class="arrow-right-disabled">'; }
        else { document.getElementById("right-container").innerHTML += '<img src="images/arrow-right.png" class="arrow-right" onclick="nextImage('+num+')">'; }
    }
    else {
        if ((num) == minImages) { document.getElementById("right-container").innerHTML += '<img src="images/arrow-right.png" class="arrow-right-disabled">'; }
        else { document.getElementById("right-container").innerHTML += '<img src="images/arrow-right.png" class="arrow-right" onclick="nextImage('+num+')">'; }
    }
}

function nextImage(num){
    openWindow(num + 1);
}

function prevImage(num){
    openWindow(num - 1);
}

function moreImages() {
    number = minImages

    if (showMoreImages == 0) { 
    
        while (number < (maxImages)) { 
            number++;
            imageArray[number] = "photos/" + (number) + ".jpg";
            document.getElementById("img-container").innerHTML += '<div class="small-container" id="gallery-window-'+number+'" onclick="openWindow('+number+')"><img src="'+imageArray[number]+'"></div>';
        }

        document.getElementById("gal-btn").innerHTML = 'Меньше фотографий';

        showMoreImages = 1;

        return
    }

    if (showMoreImages == 1) { 
        lessImages()

        document.getElementById("gal-btn").innerHTML = "Больше фотографий";
        document.getElementById("gal-btn").href = "#gallery";

        showMoreImages = 0;
    }
}

function closeWindow() {
    document.getElementById("gallery-container").style.animation = 'fadeOut 0.7s both ease';
}

document.addEventListener( "keydown" , (event) => {
    const key = event.key;
    if (key == "Escape") {
        closeWindow()
    }
});

