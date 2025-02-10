


function mail_function(){
    let parms={
        name: document.getElementById("name_id").value,
        email: document.getElementById("email_id").value,
        message:document.getElementById("mymsg").value
    }
    
    emailjs.send("service_4p72tru","template_hmvatxk",parms)
    .then(()=>alert("Email Sent!!"))


}