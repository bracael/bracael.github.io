const bracael = {
    stepPersonal: function(){
        for(let i = 0; i < 2; i++){
            document.querySelector('.METHODpay').querySelector('FORM').children[i].classList.toggle('ITEMnone')
        }
        
        document.querySelector('DIV.STEPbox').classList.toggle('CROSSstep');

        if(document.getElementById('stepPersonalData').hasAttribute('href')){
        document.getElementById('stepPersonalData').removeEventListener('click', bracael.stepPersonal, false);
        document.getElementById('stepPersonalData').removeAttribute('href');
        }
        else{
        document.getElementById('stepPersonalData').addEventListener('click', bracael.stepPersonal, false);
        document.getElementById('stepPersonalData').setAttribute('href', 'javascript:void(0);');}
    },
    focusOutInput: function(){
    // FOCUSOUT INPUT
    document.querySelectorAll('.INPUTclass').forEach(function(data) {
        data.addEventListener('focusout', function(){
            this.value != '' ? this.classList.add('HAScontent') : this.classList.remove('HAScontent');
        });
    })
    },
    validCardText: function(data){
        document.body.contains(document.querySelector('.MESSAGEandes')) ? null :
        (function(){
            document.querySelector('.SUBMITpayment').insertAdjacentHTML('beforebegin', `
            <div class="MESSAGEandes">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <defs>
                        <style>
                        .cls-1 {
                            fill: #d50000;
                            fill-rule: evenodd;
                        }
                        </style>
                    </defs>
                    <path id="Elipse_1" data-name="Elipse 1" class="cls-1" d="M7,3H9v7H7V3Zm0,8H9v2H7V11ZM8,0A8,8,0,1,1,0,8,8,8,0,0,1,8,0Z"/>
                </svg>
                <p>${data}</p>
            </div>`)

            document.querySelector('.PAYMENTitemElem').querySelectorAll('INPUT').forEach(function(item){
                item.addEventListener('input', bracael.messageAndesInput, false);
            });

        })();
    },
    messageAndesInput: function(){
        document.querySelector('.PAYMENTitemElem').querySelectorAll('INPUT').forEach(function(elem){
            elem.removeEventListener('input', bracael.messageAndesInput, false)
        });
        document.body.contains(document.querySelector('.MESSAGEandes')) ?
            document.querySelector('.MESSAGEandes').remove()
        : null;
    }
}
