document.addEventListener('DOMContentLoaded', () => {
  const preloader = document.getElementById('preloader');
  const root = document.getElementById('root');

  // Получаем все изображения и видео внутри #root
  const images = root.querySelectorAll('img');
  const videos = root.querySelectorAll('video');

  let loadedCount = 0;
  const totalResources = images.length + videos.length;

  // Функция, которая вызывается при загрузке каждого ресурса
  const onResourceLoad = () => {
    loadedCount++;
    if (loadedCount === totalResources) {
      hidePreloader(preloader); // Все ресурсы загружены
    }
  };

  // Отслеживаем загрузку изображений
  images.forEach((img) => {
    if (img.complete) {
      onResourceLoad(); // Если изображение уже загружено
    } else {
      img.addEventListener('load', onResourceLoad);
      img.addEventListener('error', onResourceLoad); // На случай ошибки
    }
  });

  // Отслеживаем загрузку видео
  videos.forEach((video) => {
    if (video.readyState >= 3) { // 3 = HAVE_FUTURE_DATA, 4 = HAVE_ENOUGH_DATA
      onResourceLoad(); // Если видео уже загружено
    } else {
      video.addEventListener('canplaythrough', onResourceLoad);
      video.addEventListener('error', onResourceLoad); // На случай ошибки
    }
  });

  // Если ресурсов нет, сразу скрываем прелоадер
  if (totalResources === 0) {
    hidePreloader(preloader);
  }

  // На случай, если что-то пошло не так, скрываем прелоадер через 5 секунд
  setTimeout(() => {
    hidePreloader(preloader);
  }, 5000); // Максимальное время ожидания (5 секунд)
});

function hidePreloader(preloader) {
  preloader.style.opacity = '0'; // Плавное исчезновение
  setTimeout(() => {
    preloader.style.display = 'none'; // Полное скрытие
  }, 300); // Задержка для плавного исчезновения
}
