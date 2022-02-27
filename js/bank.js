// login side
document.getElementById('login-button').addEventListener('click', function (e) {
    e.preventDefault()
    // get user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;

    //  get user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    if (userEmail == 'abcd@gmail.com' && userPassword == "abcd") {
        window.location.href = 'bank-account.html';
    }

})
// calculation side
document.getElementById("withdraw-button").addEventListener('click', function () {

    console.log('you are so beautiful');
})