// main script
let unsavedChanges = false;
window.onload = function() {
      // Listen for changes on form fields or any other relevant content
      document.querySelectorAll('input, textarea').forEach(function(element) {
        element.addEventListener('change', function() {
          unsavedChanges = true;
        });
      });

      // Listen for attempts to navigate away from the page
      window.addEventListener('beforeunload', function(event) {
        if (unsavedChanges) {
          event.returnValue = "You have unsaved changes. Are you sure you want to leave?";
        }
      });
    };
alert("Rest in Pepperoni.")
