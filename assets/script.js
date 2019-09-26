(function() {
    'use strict';

    var dialogContainer = document.getElementById('dialog-container'),
        closeDialog = document.getElementById('close-dialog'),
        firstNameTextBox = document.getElementById('txtFirstName'),
        lastNameTextBox = document.getElementById('txtLastName'),
        clear = document.getElementById('clear'),
        messageLabel = document.getElementById('message-label'),
        openDialog = document.getElementById('open-dialog');

    firstNameTextBox.addEventListener('blur', function () {
        if (firstNameTextBox.value !== null) {
            messageLabel.innerHTML += firstNameTextBox.value;
        }
    })

    lastNameTextBox.addEventListener('blur', function () {
        if (lastNameTextBox.value !== null) {
            messageLabel.innerHTML += ' ' + lastNameTextBox.value;
        }
    })

    clear.addEventListener('click', function (e) {
        e.preventDefault();
        if (firstNameTextBox.value != null || lastNameTextBox.value != null || messageLabel.innerHTML != null) {
            firstNameTextBox.value = null;
            lastNameTextBox.value = null;
            messageLabel.innerHTML = null;
        }
    })

    openDialog.addEventListener('click', function (e) {
        e.preventDefault(e);
        dialogContainer.style.visibility = 'visible';
    })

    closeDialog.addEventListener('click', function (e) {
        e.preventDefault(e);
        dialogContainer.style.visibility = 'hidden';
    })

})();

