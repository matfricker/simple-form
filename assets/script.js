(function() {
    'use strict';

    var dialogContainer = document.getElementById('dialog-container'),
        openDialog = document.getElementById('open-dialog'),
        closeDialog = document.getElementById('close-dialog'),
        clear = document.getElementById('clear'),
        firstNameTextBox = document.getElementById('txtFirstName'),
        lastNameTextBox = document.getElementById('txtLastName'),
        messageLabel = document.getElementById('message-label');

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
        
        classie.remove( firstNameTextBox.parentNode, 'input-filled' );
        classie.remove( lastNameTextBox.parentNode, 'input-filled' );

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

