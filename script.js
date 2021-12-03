function copy() {
    // Define variables
    let textarea = document.getElementById("input");
    let spaces = []; 
    let indent = 0;
    let newtext = "";

    // Get amount of rows
    var rows = $('#input').val().split(/\r?\n/);

    // Go trough all rows and count spaces before first character
    for (let i = 0; i < rows.length; i++) {
        spaces[i] = rows[i].search(/\S|$/);
    }   
    
    // Get lowest amount of spacces in array
    let min = Math.min.apply(Math, spaces);

    // Go trough array and set the amount of characters to remove in each line
    for(let j = 0; j < spaces.length; j++)
    {
        // Do not remove if the indent is already at its lowest point
        if(min != 0)
        {
            // Get array position
            if(spaces[j] == min)
            {
                indent = spaces[j];
            }
        }
    }

    // Go trough all rows and remove indent
    for (let i = 0; i < rows.length; i++) {
        rows[i] = rows[i].substring(indent);

        // Empty lines are ignored
        if (/\S/.test(rows[i])) {
            newtext += rows[i] + "\n";
        }
    }   

    // Set value  on textbox
    textarea.value = newtext;

    // Select the textarea and copy it's content
    textarea.select();
    document.execCommand("copy");

    // Fade in and out copy alert
    $("#note").fadeIn(50)
    $("#note").stop().animate({opacity:'100'}).html('Copied!').fadeOut(820);
}

function textAreaAdjust(element) {
   element.style.height = "1px";
   element.style.height = (25+element.scrollHeight)+"px";
}