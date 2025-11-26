const container = document.getElementById('container');
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');

if (signUpButton) {
    signUpButton.addEventListener('click', function () {
        container && container.classList.add('right-panel-active');
    });
}

if (signInButton) {
    signInButton.addEventListener('click', function () {
        container && container.classList.remove('right-panel-active');
    });
}

// Optional: basic form submit prevention for demo
['signUpForm','signInForm'].forEach(function(id){
    var form = document.getElementById(id);
    if(form){
        form.addEventListener('submit', function(e){
            e.preventDefault();
            // Placeholder: handle actual submission logic here
            console.log(id + ' submitted');
        });
    }
});