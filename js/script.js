//Make the first text field have the focus state by default to prompt the user.
const nameInput = document.getElementById('name');
nameInput.focus();


const jobRoleOption = document.getElementById('title');
const otherJobRoleInput = document.getElementById('other-job-role');
//"Other job role" text field should be hidden by default 
otherJobRoleInput.type = 'hidden';
//Display only when users select "Other" in the drop down menu
jobRoleOption.addEventListener("change", () => {
    if(jobRoleOption.value === 'other'){
        otherJobRoleInput.type = 'text';
    } else {
        otherJobRoleInput.type = 'hidden';
    }
});


//Disable and hide the color select element
const colorSelect = document.getElementById('color');
for (var options of colorSelect) {
    options.hidden = true;
    options.disabled = true;
}


//Program the "Design" <select> element to listen for user changes.
const designThemeSelect = document.getElementById('shirt-designs');
designThemeSelect.addEventListener("change", (e) => {
    for (let options of colorSelect) {
        options.disabled = false;
    }
    if (e.target.value === 'js puns') {
        for (let options of colorSelect) {
            colorSelect[1].hidden  = false; 
            colorSelect[2].hidden = false; 
            colorSelect[3].hidden = false; 

            colorSelect[4].hidden  = true; 
            colorSelect[5].hidden = true; 
            colorSelect[6].hidden = true; 
        }
    } else if (e.target.value === 'heart js') {
        for (let options of colorSelect) {
            colorSelect[1].hidden  = true; 
            colorSelect[2].hidden = true; 
            colorSelect[3].hidden = true;

            colorSelect[4].hidden  = false; 
            colorSelect[5].hidden = false; 
            colorSelect[6].hidden = false;  
        }
    }
});

