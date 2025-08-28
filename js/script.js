document.addEventListener('DOMContentLoaded', () => {
      const inputField = document.getElementById('usrInput');
      const outputField = document.getElementById('consoleOutput');

      inputField.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                  const usrInput = inputField.value.trim().toLowerCase();
                  handleCommands(usrInput);
                  inputField.value = '';
            }
      });

      function handleCommands(command) {
            const [cmd, ...args] = command.split(' ')
            switch (cmd) {
                  case 'help':
                        console.log("The help command works");
                        break;

                  case 'whoami':
                        console.log("Hello, I am currently a third-year computer science and transdisciplinary cybersecurity student at New Mexico Tech");
                        break;

                  case 'resume':
                        window.open('assets/resume.pdf', '_blank');
                        break;

                  case 'history':
                        console.log('Redirecting to og.html'); // Debugging line
                        window.location.href = 'assets/og.html';
                        break;
                  
                  case 'theme':
                        handleThemeCommand(args);
                        break;

                  default:
                        console.log("Unknown command");
                        break;
            }
      }


      function handleThemeCommand(args) {
            if (args.length === 0) {
                  console.log("Please specify a theme: 'dark' or 'white'");
                  return;
            }

            const theme = args[0].toLowerCase(); // First argument (theme choice)
            switch (theme) {
                  case 'dark':
                        // Apply dark theme by updating CSS variables
                        document.documentElement.style.setProperty('--background-color', 'black');
                        document.documentElement.style.setProperty('--text-color', 'white');
                        document.documentElement.style.setProperty('--font-weight', 'bold');
                        console.log('Theme set to dark');
                        break;

                  case 'light':
                        // Apply light theme by updating CSS variables
                        document.documentElement.style.setProperty('--background-color', 'white');
                        document.documentElement.style.setProperty('--text-color', 'black');
                        document.documentElement.style.setProperty('--font-weight', 'normal');
                        console.log('Theme set to white');
                        break;

                  default:
                        console.log("Invalid argument. Use 'dark' or 'white' for the theme.");
            }
      }


});
