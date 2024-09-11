/*To hide the form after submitting*/
function hidecontainer() {
    document.getElementById("comments").style.display = "none";
}
/*validation*/
function validateForm(){
    const name=document.getElementById('name');
    const email=document.getElementById('email');
    var reason=document.getElementById('reason');
    var suggssion=document.getElementById('suggssion');
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let nameValue=name.value;
    let emailvalue=email.value;
    let reasonvalue= reason.value;
    let suggssionValue= suggssion.value;
    
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

    document.getElementById("send-btn").addEventListener("click", function() {
        validateForm();
        sendEmail();
        console.log(works)
    });

    function sendEmail(){




        Email.send({
            Host : "smtp.elasticemail.com",
            Username : "upekshanav@gmail.com",
            Password : "1D5D67D3A7B26EB2F0F3582021EA7C6D60A1",
            To : 'upekshanav@gmail.com',
            From : "upekshanav@gmail.com",
            Subject : "This is the subject",
            Body : "And this is the body"
        }).then(
          message => alert(message)
        );
        
    }

