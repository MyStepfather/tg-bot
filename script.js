/* // Функция, вызываемая при нажатии кнопки "Пройти авторизацию"
function authorizeWithTelegram() {
    // Получение токена бота
    var botToken = '5949552471:AAHrmzTqKYzuy-ihVtm6Zy43-A-K-xovAts'; // Заменить на фактический токен бота

    // Создание виджета Telegram
    var widget = new TelegramLoginWidget('your_bot', {
        bot_id: 'your_bot_id', // Заменить на фактический идентификатор бота
        corner_radius: 20,
        request_access: true,
        user_id: 'unique_user_id', // Заменить на уникальный идентификатор пользователя на твоем сайте
        redirect_url: 'redirect.php' // Заменить на путь к файлу перенаправления на сервере
    });
    widget.start();
}

// Функция, вызываемая при нажатии кнопки "Проверить"
function checkAuthorization() {
    var userId = document.getElementById('userIdInput').value;
    var code = document.getElementById('codeInput').value;

    // Отправить запрос на сервер для проверки кода и идентификатора пользователя
    // Здесь необходимо реализовать логику проверки кода на сервере (например, с использованием PHP)
    // Примерный код для отправки запроса на сервер:
    fetch('check_authorization.php', {
        method: 'POST',
        body: JSON.stringify({ userId: userId, code: code })
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        if (data.authorized) {
            // Пользователь авторизован
            console.log('Авторизация прошла успешно');
        } else {
            // Пользователь не авторизован
            console.log('Авторизация не удалась');
        }
    })
    .catch(function(error) {
        console.error('Ошибка при проверке авторизации:', error);
    });
}
 */
const TelegramApi = require('node-telegram-bot-api')

const token = '5949552471:AAHrmzTqKYzuy-ihVtm6Zy43-A-K-xovAts'

const  bot = new TelegramApi(token, {polling: true})

bot.setMyCommands([
    {command: '/start', description: 'Получить код'},
    
])

bot.on('message', async msg => {
    const text = msg.text;
    const chatId = msg.chat.id;
    const regId = Math.floor(Math.random() * 9000) + 1000;

    if (text === '/start') {
        console.log(msg);
        return bot.sendMessage(chatId, `Твой код для регистрации - ${regId}`);
        
    }
    return bot.sendMessage(chatId, 'Я тебя не понимаю. Попробуй еще раз!');
})