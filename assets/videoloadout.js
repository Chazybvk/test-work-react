function checkScreenWidth() {
  var video = document.getElementsByTagName("video")[0];

  // Перезагружаем видео при любом изменении ширины окна
  video.pause();
  video.load();
  video.play();
}

// Инициализация функции при загрузке страницы
window.onload = checkScreenWidth;

// Отслеживание изменения размера окна
window.onresize = checkScreenWidth;
