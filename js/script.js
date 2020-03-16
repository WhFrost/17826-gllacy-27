var myMap = document.getElementById("map__canvas");

if (myMap) {

  ymaps.ready(function () {
    myMap = new ymaps.Map('map__canvas', {
      center: [59.938655, 30.323143],
      zoom: 17
    }, {
        searchControlProvider: 'yandex#search'
      }),

      // Создаём макет содержимого.
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      ),

      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
        hintContent: 'ул. Большая Конюшенная, 19/8',
        balloonContent: 'ул. Большая Конюшенная, 19/8'
      }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#image',
          // Своё изображение иконки метки.
          iconImageHref: 'img/pin.svg',
          // Размеры метки.
          iconImageSize: [80, 140],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [-40, -140]
        }),

    myMap.geoObjects
      .add(myPlacemark)
  });
}


var button = document.querySelector(".button-feedback");
var modal = document.querySelector(".feedback");
var overlay = document.querySelector(".feedback-overlay");
var close = modal.querySelector(".modal-close");
var form = modal.querySelector("form");
var login = modal.querySelector("[name=user]");
var email = modal.querySelector("[name=email]");
var message = modal.querySelector("[name=text]");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

button.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.add("feedback-modal-show");
  overlay.classList.add("feedback-overlay-show");

  if (storage) {
    login.value = storage;
    email.focus();
  } else {
    login.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.remove("feedback-modal-show");
  overlay.classList.remove("feedback-overlay-show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modal.classList.contains("feedback-modal-show")) {
      modal.classList.remove("feedback-modal-show");
      overlay.classList.remove("feedback-overlay-show");
    }
  }
});

overlay.addEventListener("click", function() {
  if (modal.classList.contains("feedback-modal-show")) {
      modal.classList.remove("feedback-modal-show");
      overlay.classList.remove("feedback-overlay-show");
  }
});