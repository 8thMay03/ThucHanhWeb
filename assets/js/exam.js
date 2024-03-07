document.addEventListener('DOMContentLoaded', function () {
    // Lấy thông tin từ localStorage
    var userInfo = JSON.parse(localStorage.getItem('userInfo'));

    // Kiểm tra nếu có thông tin người dùng
    if (userInfo) {
        // Tạo một đối tượng div để hiển thị thông tin
        var userInfoDiv = document.createElement('div');

        // Thêm thông tin vào đối tượng div
        userInfoDiv.innerHTML = `
            <p>Name: ${userInfo.name}</p>
            <p>Date of Birth: ${userInfo.dob}</p>
            <p>ID: ${userInfo.id}</p>
            <p>Address: ${userInfo.address}</p>
        `;

        // Lấy phần tử có id là 'userInfo' và thêm đối tượng div vào đó
        document.getElementById('userInfo').appendChild(userInfoDiv);
    } else {
        // Nếu không có thông tin người dùng, hiển thị thông báo
        document.getElementById('userInfo').innerHTML = 'No user information available.';
    }

    // Lấy câu hỏi từ file JSON và hiển thị ra màn hình
    fetch('./assets/questions/multichoices.json')
        .then(response => response.json())
        .then(questions => displayMultichoicesQuestions(questions));
});



function displayMultichoicesQuestions(questions) {
    var multichoicesQuestionsContainer = document.getElementById('multichoices-questions');

    // Tạo giao diện cho các câu hỏi multichoices
    questions.forEach(question => {
        var questionElement = document.createElement('div');
        questionElement.classList.add('question');

        // Hiển thị nội dung câu hỏi
        questionElement.innerHTML = `<p>${question.question}</p>`;

        // Hiển thị các lựa chọn
        var optionsList = document.createElement('ul');
        question.options.forEach((option, index) => {
            var optionItem = document.createElement('li');
            optionItem.innerHTML = `<input type="radio" name="question${question.id}" value="${option}" id="q${question.id}_option${index + 1}">
                                    <label for="q${question.id}_option${index + 1}">${option}</label>`;
            optionsList.appendChild(optionItem);
        });

        questionElement.appendChild(optionsList);
        multichoicesQuestionsContainer.appendChild(questionElement);
    });
}
