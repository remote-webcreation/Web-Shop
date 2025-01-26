document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Verhindert das Standardformularsenden

    // Zeigt die Bestätigungsnachricht an
    document.getElementById('confirmationMessage').style.display = 'block';

     // Optional: Setzt das Formular zurück
    this.reset();

});