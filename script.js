document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('beta-form');
    const statusText = document.getElementById('form-status');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        

        window.open('https://forms.gle/CWaKx1qJS6pUPRG79', '_blank');
        // // Animasi loading pada tombol
        // const btn = form.querySelector('button');
        // const originalText = btn.innerText;
        // btn.innerText = 'Memproses...';
        // btn.style.opacity = '0.7';

        // // URL Web App Google Apps Script (GANTI DENGAN URL MILIK ANDA NANTI)
        // // Contoh: const SCRIPT_URL = "https://script.google.com/macros/s/AKfycby.../exec";
        // const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwglKzVgptTzxjwNjCGr2MJUQL8laAR1TyHRSym8G4OFTg6sbG5EYlVjEjoYPz7P24O/exec";

        // // Mengambil data dari form
        // const formData = new FormData();
        // formData.append("nama", document.getElementById('name').value);
        // formData.append("email", document.getElementById('email').value);
        // formData.append("telegram", document.getElementById('telegram').value);
        // formData.append("tradingview", document.getElementById('tradingview').value);

        // if(SCRIPT_URL === "PASTE_URL_APPS_SCRIPT_DI_SINI") {
        //     alert("Perhatian: Sistem website belum tersambung ke Database. Ini hanya simulasi pengujian tombol.");
        //     setTimeout(() => {
        //         btn.innerText = originalText;
        //         btn.style.opacity = '1';
        //         form.style.display = 'none';
        //         statusText.innerHTML = `
        //             <div style="padding: 20px; background: rgba(255, 215, 0, 0.1); border: 1px solid #FFD700; border-radius: 8px;">
        //                 <h3 style="color: #FFD700; margin-bottom: 10px;">🎉 Pendaftaran (Simulasi) Berhasil!</h3>
        //                 <p style="color: #FFF;">Desain web siap. Segera masukkan URL Google Apps Script Anda ke dalam file script.js agar form ini berfungsi betulan.</p>
        //             </div>
        //         `;
        //     }, 1000);
        //     return;
        // }

        // // Kirim data ke Google Apps Script tanpa block CORS
        // fetch(SCRIPT_URL, {
        //     method: 'POST',
        //     body: formData,
        //     mode: 'no-cors'
        // }).then(response => {
        //     btn.innerText = originalText;
        //     btn.style.opacity = '1';
            
        //     form.style.display = 'none';
        //     statusText.innerHTML = `
        //         <div style="padding: 20px; background: rgba(255, 215, 0, 0.1); border: 1px solid #FFD700; border-radius: 8px;">
        //             <h3 style="color: #FFD700; margin-bottom: 10px;">🎉 Pendaftaran Berhasil!</h3>
        //             <p style="color: #FFF;">Data Anda telah masuk antrean aman kami. Kami akan menghubungi Anda segera melalui Email/Telegram.</p>
        //         </div>
        //     `;
        // }).catch(error => {
        //     alert("Terjadi gangguan jaringan internet. Silakan coba lagi nanti.");
        //     btn.innerText = originalText;
        //     btn.style.opacity = '1';
        // });
    });

    // Smooth Scrolling untuk Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
