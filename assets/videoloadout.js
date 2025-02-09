window.addEventListener("load", function() {
    // Получаем video и source элементы
    const video = document.getElementsByTagName("video")[0];
    const source = document.getElementsByTagName("source")[0];

    // Устанавливаем атрибут playsinline для корректного отображения на iPhone
    video.setAttribute("playsinline", "true");

    // Функция для изменения src в зависимости от ширины окна
    function updateSource() {
        if (window.innerWidth <= 530) {
            source.setAttribute("src", "./stock-video-mobile.mp4");
        } else {
            source.setAttribute("src", "./stock-video.mp4");
        }
        // Перезагружаем видео, чтобы оно подхватило новый источник
        video.load();
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
