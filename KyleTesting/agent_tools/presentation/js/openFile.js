function openFile(elementId) {
  // Create a new file input element
  var fileInput = document.createElement('input');
  fileInput.type = 'file';

  // Listen for file selection changes for the created file input
  fileInput.addEventListener('change', handleFileSelect, false);

  // Trigger the file input click event programmatically
  fileInput.click();
}

function handleFileSelect(evt) {
  var file = evt.target.files[0]; // Get the selected file

  // Check if a file was selected
  if (file) {
    var fileUrl = URL.createObjectURL(file); // Get a local URL for the file
    window.open(fileUrl); // Open the file in a new tab or window
  }
}
