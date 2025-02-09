let lastWidth = window.innerWidth; // Сохраняем последнюю ширину экрана

function checkScreenWidth() {
  var video = document.getElementsByTagName("video")[0];
  var currentWidth = window.innerWidth;

  // Добавляем атрибут playsinline только при первой загрузке страницы
  if (!video.hasAttribute('playsinline')) {
    video.setAttribute('playsinline', ''); // Добавляем атрибут playsinline
  }

  // Выполняем действия только при переходе через 530px
  if ((lastWidth <= 530 && currentWidth > 530) || (lastWidth > 530 && currentWidth <= 530)) {
    video.pause();
    video.load();
    video.play();
  }

  // Обновляем сохраненную ширину
  lastWidth = currentWidth;
}

// Инициализация функции при загрузке страницы
window.onload = checkScreenWidth;

// Отслеживание изменения размера окна
window.onresize = checkScreenWidth;
