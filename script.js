// Ganti dengan Web App URL Google Apps Script (lihat Claude_Code/Free Trial Form/SETUP_GUIDE.md)
const FREE_TRIAL_ENDPOINT = "https://script.google.com/macros/s/AKfycbyUoFWzUIFGZ37-Od4e3TaBodvmBUtDmjVQBfBOgkWZYiG0hD3z-176WrH6IyKiuHqW-A/exec";

document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scrolling untuk Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Free Trial Form -> Google Sheet
    const trialForm = document.getElementById('trial-form');
    if (trialForm) {
        const agreeTos = document.getElementById('tf-agree-tos');
        const agreeAccount = document.getElementById('tf-agree-account');
        const submitBtn = document.getElementById('tf-submit');
        const statusEl = document.getElementById('tf-status');

        function updateSubmitState() {
            submitBtn.disabled = !(agreeTos.checked && agreeAccount.checked);
        }
        agreeTos.addEventListener('change', updateSubmitState);
        agreeAccount.addEventListener('change', updateSubmitState);
        updateSubmitState();

        trialForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if (!agreeTos.checked || !agreeAccount.checked) return;

            if (!FREE_TRIAL_ENDPOINT || FREE_TRIAL_ENDPOINT.indexOf('PASTE_') === 0) {
                statusEl.textContent = 'Form belum terhubung ke server. Hubungi admin lewat Discord.';
                statusEl.style.color = '#ff5555';
                return;
            }

            const formData = new FormData(trialForm);
            formData.append('agree_tos', agreeTos.checked ? 'yes' : 'no');
            formData.append('agree_account', agreeAccount.checked ? 'yes' : 'no');

            submitBtn.disabled = true;
            submitBtn.textContent = 'Mengirim...';
            statusEl.textContent = '';

            // (Bukan no-cors) - kita perlu BACA respons (duplicate/error/success), bukan cuma fire-and-forget.
            fetch(FREE_TRIAL_ENDPOINT, { method: 'POST', body: formData })
                .then((res) => res.json())
                .then((data) => {
                    if (data.status === 'success') {
                        statusEl.textContent = '\u2705 Trial berhasil didaftarkan! Tim kami akan aktifkan akses Discord & Telegram dalam 1x24 jam.';
                        statusEl.style.color = 'var(--gold)';
                        trialForm.reset();
                        submitBtn.textContent = 'Klaim Trial 7 Hari';
                        submitBtn.disabled = true;
                    } else if (data.status === 'duplicate') {
                        statusEl.textContent = '\u26A0\uFE0F ' + (data.message || 'Kamu sudah pernah klaim trial sebelumnya. Satu orang hanya bisa 1x trial.');
                        statusEl.style.color = '#ff5555';
                        submitBtn.disabled = false;
                        submitBtn.textContent = 'Klaim Trial 7 Hari';
                    } else {
                        statusEl.textContent = data.message || 'Gagal mengirim, coba lagi atau hubungi admin lewat Discord.';
                        statusEl.style.color = '#ff5555';
                        submitBtn.disabled = false;
                        submitBtn.textContent = 'Klaim Trial 7 Hari';
                    }
                })
                .catch(() => {
                    statusEl.textContent = 'Gagal mengirim, coba lagi atau hubungi admin lewat Discord.';
                    statusEl.style.color = '#ff5555';
                    submitBtn.disabled = false;
                    submitBtn.textContent = 'Klaim Trial 7 Hari';
                });
        });
    }
});
