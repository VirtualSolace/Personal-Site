document.addEventListener('DOMContentLoaded', () => {
      const inputField = document.getElementById('usrInput');
      const outputField = document.getElementById('consoleOutput');

      inputField.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                  const usrInput = inputField.value.trim().toLowerCase();
                  handleCommands(usrInput);
                  inputField.value = ''; // Clear input field
            }
      });

      function handleCommands(command) {
            switch (command) {
                  case 'help':
                        console.log("The help command works");
                        break;

                  case 'whoami':
                        console.log("Hello, I am currently a third-year computer science and transdisciplinary cybersecurity student at New Mexico Tech");
                        break;

                  case 'resume':
                        window.open('assets/resume.pdf', '_blank');
                        break; // Add a break statement to prevent unintended fall-through.

                  case 'history':
                        window.location.href('assets/og.html');
                        break;

                  default:
                        console.log("Unknown command");
                        break;
            }
      }
});
