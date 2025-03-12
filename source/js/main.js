// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';
// Находим кнопку

const playButton = document.getElementById("play-button");

// Навешиваем обработчик клика
playButton.addEventListener("click", () => {
  // Создаём iframe
  const iframe = document.createElement("iframe");
  // Указываем ссылку на ваше видео. Параметр autoplay=1 запустит видео сразу
  iframe.src = "https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1";
  iframe.width = "320"; // при необходимости подберите размеры
  iframe.height = "170"; // можно использовать проценты или адаптивные стили
  iframe.frameBorder = "0";
  iframe.allow =
    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
  iframe.allowFullscreen = true;

  // Находим контейнер
  const videoContainer = document.getElementById("video-container");

  // Очищаем содержимое контейнера (удаляем постер, оверлей, кнопку)
  videoContainer.innerHTML = "";

  // Вставляем iframe
  videoContainer.appendChild(iframe);
});

document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".price__tab-item");
  const lists = document.querySelectorAll(".price__abonements-list");

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", function () {
      // Удаляем класс активности у всех табов
      tabs.forEach((item) => item.classList.remove("tab-active"));
      // Добавляем класс активности текущему табу
      tab.classList.add("tab-active");

      // Скрываем все списки абонементов
      lists.forEach((list) =>
        list.classList.remove("price__abonements-list--active")
      );

      // Показываем нужный список. Предполагается, что класс списка соответствует порядковому номеру: --1, --2, --3.
      const targetList = document.querySelector(
        `.price__abonements-list--${index + 1}`
      );
      if (targetList) {
        targetList.classList.add("price__abonements-list--active");
      }
    });
  });
});

//Свайпер

document.addEventListener("DOMContentLoaded", function () {
  // Инициализация слайдера отзывов (список)
  const reviewsSwiper = new Swiper(".reviews__slider", {
    loop: false,
    slidesPerView: 1,
    navigation: {
      nextEl: ".reviews__next",
      prevEl: ".reviews__prev",
    },
    pagination: {
      el: ".reviews__pagination",
      clickable: true,
    },
  });

  // Инициализация слайдера жюри (div)
  const juriSwiper = new Swiper(".juri__slider", {
    loop: true,
    slidesPerView: 1,
    navigation: {
      nextEl: ".juri__next",
      prevEl: ".juri__prev",
    },
    pagination: {
      el: ".juri__pagination",
      clickable: true,
    },
  });
});

// БЛОК ФАК

document.addEventListener("DOMContentLoaded", function () {
  // Функционал табов
  const tabs = document.querySelectorAll(".faq__tab");
  const contents = document.querySelectorAll(".faq__content");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      // Сброс активного состояния для всех табов и контента
      tabs.forEach((t) => t.classList.remove("faq__tab--active"));
      contents.forEach((content) => content.classList.remove("active"));

      // Активируем выбранный таб и его контент
      tab.classList.add("faq__tab--active");
      document.getElementById(tab.dataset.target).classList.add("active");
    });

    // Поддержка клавиатуры для табов (Enter, Space)
    tab.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        tab.click();
      }
    });
  });

  // Функционал аккордеона
  const accordionItems = document.querySelectorAll(".faq__list li");

  accordionItems.forEach((item) => {
    const button = item.querySelector("button");
    const header = item.querySelector("h3");

    // При клике по кнопке
    button.addEventListener("click", () => {
      item.classList.toggle("active");
      const expanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!expanded));
    });

    // Поддержка клавиатуры для заголовка аккордеона
    header.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        button.click();
      }
    });
  });
});
