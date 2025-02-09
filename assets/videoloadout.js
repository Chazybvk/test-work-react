function checkScreenWidth() {
  var video = document.getElementsByTagName("video")[0];
  
  // Проверка ширины экрана
  if (window.innerWidth <= 530 || window.innerWidth > 530) {
    video.pause();
    video.load();
    video.play();
  }
}

// Инициализация функции при загрузке страницы
window.onload = checkScreenWidth;

// Отслеживание изменения размера окна
window.onresize = checkScreenWidth;
