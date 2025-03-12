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
    if(checkSizeFile(file)){
        const imageURL=URL.createObjectURL(file);
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
        previewContainer.src=imgeURL; 
        document.querySelector('.text-info').innerHTML='Upload your photo (JPG or PNG, max size: 500KB).';
        document.querySelector('.text-info').classList.remove('text-info-errors');
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

buttonTicket.addEventListener('click',()=>{
    // ********logica de errores
    // Comprobacion imagen distinta al icono upload
    // se cambia el texto de text-info y se pone en rojo
    if (previewContainer.src !== 'http://127.0.0.1:3000/assets/images/icon-upload.svg'){
        
    }else{
        document.querySelector('.text-info').innerHTML='No se ha cargado la imagen'; 
        document.querySelector('.text-info').classList.add('text-info-errors');
    }
    
      
});


/* ----------------------Helper functions-------------------*/

function checkSizeFile(file){
    if((file.size/1024)>500){
        return false;
    }else{
        return true;
    }
}