window.addEventListener("load", function() {
    // Получаем video и source элементы
    const video = document.getElementsByTagName("video")[0];
    const source = document.getElementsByTagName("source")[0];

    // Устанавливаем атрибут playsinline для корректного отображения на iPhone
    video.setAttribute("playsinline", "true");

    // Функция для изменения src в зависимости от ширины окна
    function updateSource() {
        // Плавно скрываем видео
        video.style.transition = "opacity 0.5s ease-in-out";
        video.style.opacity = "0";

        // Меняем src в зависимости от ширины окна
        if (window.innerWidth <= 530) {
            source.setAttribute("src", "./stock-video-mobile.mp4");
        } else {
            source.setAttribute("src", "./stock-video.mp4");
        }

        // Перезагружаем видео, чтобы оно подхватило новый источник
        video.load();

        // После загрузки видео, плавно показываем его снова
        video.oncanplay = function() {
            // Ожидаем, пока видео будет готово к воспроизведению
            video.style.transition = "opacity 0.5s ease-in-out";
            video.style.opacity = "1"; // Видео снова становится видимым
        };
    }

    // Флаг для отслеживания времени между событиями resize
    let resizeTimeout;

    // Функция для обработки изменения размера окна с задержкой
    function handleResize() {
        // Если resize уже был запланирован, отменяем его
        if (resizeTimeout) {
            clearTimeout(resizeTimeout);
        }

        // Планируем выполнение функции updateSource через 1 секунду (1000 миллисекунд)
        resizeTimeout = setTimeout(updateSource, 1000);
    }

    // Изменяем src при загрузке страницы
    updateSource();

    // Изменяем src при изменении размера окна с задержкой
    window.addEventListener("resize", handleResize);
});
