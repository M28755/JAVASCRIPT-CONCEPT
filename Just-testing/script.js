// Function to handle core text formatting actions
function format(command) {
    // execCommand applies formatting (like bold, italic, alignments) to selected text
    document.execCommand(command, false, null);
    document.getElementById('text-input').focus();
}

// Function to handle custom text case transformations
function toggleCase() {
    const selection = window.getSelection();
    if (!selection.rangeCount) return;

    const range = selection.getRangeAt(0);
    const selectedText = range.toString();

    if (selectedText.length > 0) {
        // If text is lowercase, make it uppercase. Otherwise, make it lowercase.
        const transformedText = selectedText === selectedText.toLowerCase()
            ? selectedText.toUpperCase()
            : selectedText.toLowerCase();

        range.deleteContents();
        range.insertNode(document.createTextNode(transformedText));
    }
}

// Function to wipe out all content inside the editor
function clearText() {
    const confirmClear = confirm("Are you sure you want to clear all text?");
    if (confirmClear) {
        document.getElementById('text-input').innerHTML = "";
    }
}
