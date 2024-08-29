document.getElementById('loginIcon').addEventListener('click', function() {
    var loginRegisterForms = document.getElementById('loginRegisterForms');
    if (loginRegisterForms.style.display === 'none') {
        loginRegisterForms.style.display = 'block';
    } else {
        loginRegisterForms.style.display = 'none';
    }
});

document.getElementById('contactBtn').addEventListener('click', function() {
    var contactDetails = document.getElementById('contactDetails');
    if (contactDetails.style.display === 'none') {
        contactDetails.style.display = 'block';
    } else {
        contactDetails.style.display = 'none';
    }
});
