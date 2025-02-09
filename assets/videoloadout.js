window.addEventListener("load", function() {
    // Получаем video и source элементы
    const video = document.getElementsByTagName("video")[0];
    const source = document.getElementsByTagName("source")[0];

    // Устанавливаем атрибут playsinline для корректного отображения на iPhone
    video.setAttribute("playsinline", "");
    video.setAttribute("muted", "");
    function updateSource() {
        if (window.innerWidth <= 530) {
            source.setAttribute("src", "./stock-video-mobile.mp4");
        } else {
            source.setAttribute("src", "./stock-video.mp4");
        }
        video.load();
    }

    let resizeTimeout;

    function handleResize() {
        if (resizeTimeout) {
            clearTimeout(resizeTimeout);
        }
        
        resizeTimeout = setTimeout(updateSource, 500);
    }

    // Изменяем src при загрузке страницы
    updateSource();

    // Изменяем src при изменении размера окна с задержкой
    window.addEventListener("resize", handleResize);
});
