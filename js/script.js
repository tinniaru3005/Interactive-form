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


//Disable the color select element
const colorSelect = document.getElementById('color');
for (var options of colorSelect) {
    options.disabled = true;
}
