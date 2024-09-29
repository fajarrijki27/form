function setupSignaturePad(canvasId, clearButtonId) {
    const canvas = document.getElementById(canvasId);
    const ctx = canvas.getContext('2d');
    let isDrawing = false;

    canvas.addEventListener('mousedown', (e) => {
        isDrawing = true;
        ctx.beginPath();
        ctx.moveTo(e.offsetX, e.offsetY);
    });

    canvas.addEventListener('mousemove', (e) => {
        if (isDrawing) {
            ctx.lineTo(e.offsetX, e.offsetY);
            ctx.stroke();
        }
    });

    canvas.addEventListener('mouseup', () => {
        isDrawing = false;
    });

    canvas.addEventListener('mouseleave', () => {
        isDrawing = false;
    });

    // Menghapus tanda tangan
    document.getElementById(clearButtonId).addEventListener('click', (e) => {
        e.preventDefault();
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    });
}

// Mengatur tiga canvas untuk tanda tangan
setupSignaturePad('signature-pad-1', 'clear-1');
setupSignaturePad('signature-pad-2', 'clear-2');
setupSignaturePad('signature-pad-3', 'clear-3');

