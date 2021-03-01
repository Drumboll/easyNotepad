$(document).ready(function() {
    $('div').focus();

    $('#btSave').click(function() {

        if ($('div').text() != '')
            saveFile($('div').text());
        else
            alert('No notes to save');
    });
});

// USING BLOB (BINARY LARGE OBJECT) TO SAVE THE TEXT.

function saveFile(Value) {

    // CONVERT THE TEXT TO A BLOB.
    var textToBLOB = new Blob([Value], { type: 'text/plain' });
    var sFileName = 'Nota.txt';       // THE FILE IN WHICH THE CONTENTS WILL BE SAVED.

    var newLink = document.createElement("a");
    newLink.download = sFileName;

    if (window.webkitURL != null) {
        newLink.href = window.webkitURL.createObjectURL(textToBLOB);
    }
    else {
        newLink.href = window.URL.createObjectURL(textToBLOB);
        newLink.style.display = "none";
        document.body.appendChild(newLink);
    }

    newLink.click();
}