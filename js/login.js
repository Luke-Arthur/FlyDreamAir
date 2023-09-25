$(document).ready(function () {
  $('#registrationForm').submit(function (e) {
    e.preventDefault();
    const fullName = $('#fullName').val();
    const email = $('#email').val();
    const password = $('#password').val();
    const confirmPassword = $('#confirmPassword').val();

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
  });
});