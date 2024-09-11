/*To hide the form after submitting*/
function hidecontainer() {
    document.getElementById("comments").style.display = "none";
}
let nameValue;
let emailvalue;
let reasonvalue;
let suggssionValue;
/*validation*/
function validateForm(){
    const name=document.getElementById('name');
    console.log(name);
    const email=document.getElementById('email');
    var reason=document.getElementById('reason');
    var suggssion=document.getElementById('suggssion');
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    nameValue=name.value;
    emailvalue=email.value;
    reasonvalue= reason.value;
    suggssionValue= suggssion.value;
    
        if(nameValue==""){
            name.style.borderColor="red";
        }else{
            name.style.borderColor="#006425";
        }
        if(emailvalue==""){
            email.style.borderColor="red";
        }else{
            email.style.borderColor="#006425";
        }
        if(!(emailvalue.match(validRegex))){
            email.style.borderColor="red";
            alert("Enter a Valid Email")
        }
        if(suggssionValue==""){
            suggssion.style.borderColor="red";
        }else{
            suggssion.style.borderColor="#006425";
        }
        if(reasonvalue==""){
            reason.style.borderColor="red";
        }else{
            reason.style.borderColor="#006425";
        }
    

        
    }

    document.addEventListener("DOMContentLoaded", function() {
        document.getElementById("send-btn").addEventListener("click", () => {
            validateForm();
            sendEmail();
        });
    });

    function sendEmail(){

        Email.send({
            Host : "smtp.elasticemail.com",
            Username : "upekshanav@gmail.com",
            Password : "1D5D67D3A7B26EB2F0F3582021EA7C6D60A1",
            To : 'upekshanav@gmail.com',
            From : "upekshanav@gmail.com",
            Subject : "This is the subject",
            Body : `Name : ${nameValue} <br>
            email : ${emailvalue} <br>
            reason : ${reasonvalue} <br>
            suggestion : ${suggssionValue} <br>
            `
        }).then(
          message => alert(message)
        );
        
    }

