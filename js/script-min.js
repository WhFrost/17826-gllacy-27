var myMap=document.getElementById("map__canvas");myMap&&ymaps.ready(function(){myMap=new ymaps.Map("map__canvas",{center:[59.938655,30.323143],zoom:17},{searchControlProvider:"yandex#search"}),MyIconContentLayout=ymaps.templateLayoutFactory.createClass('<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'),myPlacemark=new ymaps.Placemark(myMap.getCenter(),{hintContent:"ул. Большая Конюшенная, 19/8",balloonContent:"ул. Большая Конюшенная, 19/8"},{iconLayout:"default#image",iconImageHref:"img/pin.svg",iconImageSize:[80,140],iconImageOffset:[-40,-140]}),myMap.geoObjects.add(myPlacemark)});var button=document.querySelector(".button-feedback"),modal=document.querySelector(".feedback"),overlay=document.querySelector(".feedback-overlay"),close=modal.querySelector(".modal-close"),form=modal.querySelector("form"),login=modal.querySelector("[name=name]"),email=modal.querySelector("[name=email]"),message=modal.querySelector("[name=about]"),isStorageSupport=!0,storage="";try{storage=localStorage.getItem("login")}catch(e){isStorageSupport=!1}button.addEventListener("click",function(e){e.preventDefault(),modal.classList.add("feedback-modal-show"),overlay.classList.add("feedback-overlay-show"),storage?(login.value=storage,email.focus()):login.focus()}),close.addEventListener("click",function(e){e.preventDefault(),modal.classList.remove("feedback-modal-show"),modal.classList.remove("feedback-overlay-error"),overlay.classList.remove("feedback-overlay-show")}),form.addEventListener("submit",function(e){login.value&&email.value&&message.value?isStorageSupport&&localStorage.setItem("login",login.value):(e.preventDefault(),modal.classList.remove("feedback-modal-error"),modal.offsetWidth=modal.offsetWidth,modal.classList.add("feedback-modal-error"))}),window.addEventListener("keydown",function(e){27===e.keyCode&&(e.preventDefault(),modal.classList.contains("feedback-modal-show")&&(modal.classList.remove("feedback-modal-show"),modal.classList.remove("feedback-modal-error"),overlay.classList.remove("feedback-overlay-show")))}),overlay.addEventListener("click",function(){modal.classList.contains("feedback-modal-show")&&(modal.classList.remove("feedback-modal-show"),modal.classList.remove("feedback-modal-error"),overlay.classList.remove("feedback-overlay-show"))});
