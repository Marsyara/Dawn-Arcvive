function updateClock() {
    const now = new Date();
    
    // Format Tanggal Lengkap (Senin, 07 Januari 2026)
    const options = { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' };
    document.getElementById('date-text').innerText = now.toLocaleDateString('id-ID', options);

    // Format Jam
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    document.getElementById('clock-text').innerText = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);
updateClock();