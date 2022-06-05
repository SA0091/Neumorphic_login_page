// For Password Show Hide Toggle
function showPass() {
    let x = document.getElementsByName('forPassword')[0];
    if (x.type == 'password') {
        x.type = 'text'
    } else {
        x.type = 'password'
    }
}