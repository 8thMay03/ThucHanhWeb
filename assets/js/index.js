document.addEventListener('DOMContentLoaded', function () {
    // Lắng nghe sự kiện submit trên form
    document.getElementById('userInfoForm').addEventListener('submit', function (event) {
        // Ngăn chặn việc gửi form theo cách truyền thống
        event.preventDefault();

        // Lấy giá trị từ các trường input
        var userName = document.getElementById('userName').value;
        var userDob = document.getElementById('userDob').value;
        var userId = document.getElementById('userId').value;
        var userAddress = document.getElementById('userAddress').value;

        // Lưu thông tin người dùng vào localStorage (hoặc có thể sử dụng các phương thức khác)
        var userInfo = {
            name: userName,
            dob: userDob,
            id: userId,
            address: userAddress
        };

        localStorage.setItem('userInfo', JSON.stringify(userInfo));

        // Chuyển hướng sang trang exam.html
        window.location.href = 'exam.html';
    });
});
