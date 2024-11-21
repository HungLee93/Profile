const snowflakeCount = 10000; // Số lượng bông tuyết

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    const size = Math.random() * 7 + 3 + 'px'; // Kích thước ngẫu nhiên
    snowflake.style.width = size;
    snowflake.style.height = size;
    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    snowflake.style.animationDuration = Math.random() * 10+ 1 + 's'; // Tốc độ rơi ngẫu nhiên
    snowflake.style.animationDelay = Math.random() * 5 + 's'; // Trễ ngẫu nhiên

    // Màu sắc bông tuyết ngẫu nhiên
    const colors = ['#ce1126', '#FFFFF0', '#3399ff'];
    snowflake.style.background = colors[Math.floor(Math.random() * colors.length)];
    snowflake.style.opacity = Math.random();

    // Bắt đầu rơi
    document.body.appendChild(snowflake);

    // Khi bông tuyết rơi xong, chuyển thành "bãi tuyết"
    snowflake.addEventListener('animationend', () => {
        createSnowPile(snowflake.style.left);  // Tạo bãi tuyết ở vị trí của bông tuyết
        snowflake.remove();  // Xóa bông tuyết đã rơi
    });
}

// Tạo "bãi tuyết" khi bông tuyết rơi xuống
function createSnowPile(positionX) {
    const snowPile = document.createElement('div');
    snowPile.classList.add('snow-pile');
    snowPile.style.left = positionX;
    document.body.appendChild(snowPile);

    // Xóa bãi tuyết sau một khoảng thời gian (3 giây)
    setTimeout(() => {
        snowPile.remove();
    }, 3000); // Bãi tuyết sẽ tồn tại trong 3 giây
}

setInterval(() => {
    if (document.querySelectorAll('.snowflake').length < snowflakeCount) {
        createSnowflake();
    }
}, 100);
