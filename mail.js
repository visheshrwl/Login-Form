
const firebaseConfig = {
    apiKey: "AIzaSyDElHer8gTQs5kpb0-WZKolbT-8nIG0vIc",
    authDomain: "contactform-3a6be.firebaseapp.com",
    databaseURL: "https://contactform-3a6be-default-rtdb.firebaseio.com",
    projectId: "contactform-3a6be",
    storageBucket: "contactform-3a6be.appspot.com",
    messagingSenderId: "527405627798",
    appId: "1:527405627798:web:1b9e4f4bbce81d1be345b7",
    measurementId: "G-FRSZJ042L0"
};

//Initialize firebase
firebase.initializeApp(firebaseConfig);

//Reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e){
    e.preventDefault();   

    var name = getElementVal("name");
    var emailId = getElementVal("emailId");
    var msgContent = getElementVal("msgContent");

    saveMessages(name, emailId, msgContent);

    document.querySelector(".alert").style.display = "block";

    setTimeout(() => {
        document.querySelector(".alert").style.display = "none";
    }, 3000);

    document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailId, msgContent) => {
    var newContactForm = contactFormDB.push();

    newContactForm.set({
        name: name,
        emailId : emailId,
        msgContent : msgContent,
    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
}