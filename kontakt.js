document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('kontakt-form');
    const messageDiv = document.getElementById('form-message');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name.length < 2) {
            showMessage('Podaj poprawne imię (min. 2 znaki)', 'error');
            return;
        }

        if (!validateEmail(email)) {
            showMessage('Podaj poprawny adres e-mail', 'error');
            return;
        }

        if (message.length < 10) {
            showMessage('Wiadomość musi mieć co najmniej 10 znaków', 'error');
            return;
        }
        
        showMessage('Formularz wysłany pomyślnie!', 'success');
        form.reset();
    });

    function showMessage(text, type) {
        messageDiv.textContent = text;
        messageDiv.className = type;
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email.toLowerCase());
    }
});
