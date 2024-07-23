

    // Color a span/div element content when a user moves the mouse over the element
    document.getElementById('hoverElement').addEventListener('mouseover', function() {
        this.style.backgroundColor = 'yellow';
    });

    document.getElementById('hoverElement').addEventListener('mouseout', function() {
        this.style.backgroundColor = 'lightgrey';
    });

    // Prompt to read a value from user and display it in the span element
    let userValue = prompt("Please enter a value:");
    document.getElementById('userValue').textContent = userValue;

    // Display the mouse X and Y coordinates in a <span> tag when you click on a <h1> tag which contains a paragraph
    document.getElementById('clickHeader').addEventListener('click', function(event) {
        let x = event.clientX;
        let y = event.clientY;
        document.getElementById('coordinates').textContent = `X: ${x}, Y: ${y}`;
    });

    // Character counts in the textarea
    document.getElementById('textArea').addEventListener('input', function() {
        let charCount = this.value.length;
        document.getElementById('charCount').textContent = charCount;
    });



    // Fullscreen mode
    function openFullscreen() {
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        }
    }

    function closeFullscreen() {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }

