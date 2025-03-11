const dropArea=document.getElementById('dropArea');
const previewContainer=document.getElementById('previewContainer');
const fileInput=document.getElementById('fileUpload');
const textUpload=document.querySelector('.text-upload');
const buttons=document.querySelector('.botonesRemoveChangeIcon');
const buttonTicket=document.querySelector('.button-ticket');


previewContainer.addEventListener('click',(event)=>{
    fileInput.click();
});

fileInput.addEventListener('change',(event)=>{
    const file=event.target.files[0];
    const imageURL=URL.createObjectURL(file);
    previewContainer.src=imageURL;
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
    const imgeURL=URL.createObjectURL(file);
    previewContainer.src=imgeURL; 

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
});

buttonTicket.addEventListener('click',()=>{
    // ********logica de errores
    // Comprobacion imagen distinta al icono upload
    console.log(previewContainer.src);
    if (previewContainer.src !== 'http://127.0.0.1:3000/assets/images/icon-upload.svg'){
        console.log('imagen distinta al icono de subida');
    }else{
        console.log('imagen igual al icono de subida');
    }
   
});