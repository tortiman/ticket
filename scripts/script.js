const dropArea=document.getElementById('dropArea');
const previewContainer=document.getElementById('previewContainer');
const fileInput=document.getElementById('fileUpload');
const textUpload=document.querySelector('.text-upload');
const buttons=document.querySelector('.botonesRemoveChangeIcon');
const buttonTicket=document.querySelector('.button-ticket');
const fullName=document.getElementById('name');
const email=document.getElementById('email');
const github=document.getElementById('github');

/** VARIABLES QUE SE USAN EN EL TICKET */
let image='';
const ticketName=document.getElementById('ticketName');
const ticketName1=document.getElementById('ticketName1');
const ticketEmail=document.getElementById('ticketEmail');
const ticketAvatar=document.getElementById('ticketAvatar');
const ticketUserGithub=document.getElementById('ticketUserGithub');

previewContainer.addEventListener('click',(event)=>{
    fileInput.click();
});

fileInput.addEventListener('change',(event)=>{
    const file=event.target.files[0];
    if(checkSizeFile(file)){
        const imageURL=URL.createObjectURL(file);
        image=imageURL;
        previewContainer.src=imageURL;
        document.querySelector('.text-info').innerHTML='Upload your photo (JPG or PNG, max size: 500KB).';
        document.querySelector('.text-info').classList.remove('text-info-errors');
        document.querySelector('.image-info').classList.remove('image-info-error');  
        textUpload.style.display='none';
        buttons.style.display='flex';
    
        const removeButton=document.querySelector('.removeIcon');
        const changeButton=document.querySelector('.changeIcon');
    
        removeButton.addEventListener('click',(e)=>{
            previewContainer.src='/assets/images/icon-upload.svg';
        });
        changeButton.addEventListener('click',(e)=>{
            fileInput.click();
        });
    }else{
        document.querySelector('.text-info').innerHTML='File too large. Please upload image under 500kB.'; 
        document.querySelector('.text-info').classList.add('text-info-errors');
        document.querySelector('.image-info').classList.add('image-info-error'); 
    }
});

dropArea.addEventListener('dragover',(event)=>{
    event.preventDefault();
    dropArea.style.backgroundColor = '#ccc';
    previewContainer.style.backgroundColor='#ccc';
});

dropArea.addEventListener('dragleave',(event)=>{
    dropArea.style.backgroundColor = 'transparent';
    previewContainer.style.backgroundColor='transparent';
});

dropArea.addEventListener('drop',(event)=>{
    event.preventDefault();
    dropArea.style.backgroundColor = 'transparent';
    previewContainer.style.backgroundColor='transparent';

    const file=event.dataTransfer.files[0];
    if(checkSizeFile(file)){
        const imgeURL=URL.createObjectURL(file);
        image=imageURL;
        previewContainer.src=imgeURL; 
        document.querySelector('.text-info').innerHTML='Upload your photo (JPG or PNG, max size: 500KB).';
        document.querySelector('.text-info').classList.remove('text-info-errors');
        document.querySelector('.image-info').classList.remove('image-info-error'); 
        textUpload.style.display='none';
        buttons.style.display='flex';
    
        const removeButton=document.querySelector('.removeIcon');
        const changeButton=document.querySelector('.changeIcon');
    
        removeButton.addEventListener('click',(e)=>{
            previewContainer.src='/assets/images/icon-upload.svg';
        });
        changeButton.addEventListener('click',(e)=>{
            fileInput.click();
        });
    }else{
        document.querySelector('.text-info').innerHTML='File too large. Please upload image under 500kB.'; 
        document.querySelector('.text-info').classList.add('text-info-errors');
        document.querySelector('.image-info').classList.add('image-info-error');
    }
});

// eventos de que los input box se han rellenado de forma correcta y se quitan los mensajes de error

fullName.addEventListener('focusout',()=>{
    if(checkTextBox(fullName)){
        document.querySelector('.error-full-name').classList.add('error-full-name-correct');
    }else{
        document.querySelector('.error-full-name').classList.remove('error-full-name-correct');
    }
});

email.addEventListener('focusout',()=>{
    if(checkTextBox(email)){
        document.querySelector('.error-email').classList.add('error-email-correct');
        if(checkFormatEmail()){

        }else{
            document.querySelector('.error-email').classList.remove('error-email-correct');
            document.querySelector('.text-info-email').innerHTML='Please enter a valid email address.';
            document.getElementById('email').value='';    
        };
    }else{
        document.querySelector('.error-email').classList.remove('error-email-correct');
    };

    
});

github.addEventListener('focusout',()=>{
    if(checkTextBox(github)){
        document.querySelector('.error-github').classList.add('error-github-correct');
        if(checkFormatGithub()){

        }else{
            document.querySelector('.error-github').classList.remove('error-github-correct');
            document.querySelector('.text-info-github').innerHTML='Please enter a valid user github.';
            document.getElementById('github').value='';    
        };
    }else{
        document.querySelector('.error-github').classList.remove('error-github-correct');
    }
});


buttonTicket.addEventListener('click',()=>{
    // ********logica de errores
    // Comprobacion imagen distinta al icono upload
    // se cambia el texto de text-info y se pone en rojo sino se ha cargado una imagen
    if ((previewContainer.src !== 'http://127.0.0.1:3000/assets/images/icon-upload.svg') && checkTextBox(fullName) && checkTextBox(email) && checkTextBox(github) ){
        document.querySelector('.formulario').classList.add('formulario-hidden');
        document.querySelector('.ticket').classList.add('ticket-show');

        // ponemos los datos introducidos en el formulario en el resultado

        ticketName.innerText=fullName.value+'!';
        ticketName1.innerText=fullName.value;
        ticketEmail.innerText=email.value;
        ticketAvatar.src=image;
        ticketUserGithub.innerText=github.value;

    }else{
        document.querySelector('.text-info').innerHTML='No se ha cargado la imagen'; 
        document.querySelector('.text-info').classList.add('text-info-errors');
    }
    
    // Comprobamos que las cajas de texto estan completas
    
    
       
    
});


/* ----------------------Helper functions-------------------*/

function checkSizeFile(file){
    if((file.size/1024)>500){
        return false;
    }else{
        return true;
    }
}

// funciones para comprobar que los check estan rellenos y de forma correcta

function checkTextBox(textBox){
    if(textBox.value.trim()===""){
        return false;
    }else{
        return true;
    }
}

function checkFormatEmail(){
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email.value);
}

function checkFormatGithub(){
    const regex=/@.+/;
    return regex.test(github.value);
}