window.onload = function(){

    if(window.location.href.indexOf('/p/checkout.html') != -1){

    async function formSubmit(METHODid){
    document.body.style.overflow = "hidden";
    document.body.insertAdjacentHTML('beforeend', '<div class="CARGAelem"><div class="CIRCLEon"></div></div>')
    $('.CARGAelem').fadeIn(200)

    await fetch('https://us-central1-bracaelcom.cloudfunctions.net/payment', {
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            Accept:'application/json'
        },
        body: JSON.stringify(METHODid)
    }).then((response) => response.json())
    .then((result) => {
        $('.CARGAelem').fadeOut(200, function(){
            this.remove();
            document.body.removeAttribute('style');
        });

        result.payment ?
        (function(){
            document.getElementById('stepPersonalData').removeAttribute('href');
            document.getElementById('stepPersonalData').removeEventListener('click', bracael.stepPersonal, false);
            document.querySelector('.STEPbox').setAttribute('class', 'STEPbox FULLstep');
            document.querySelector('.PAYMENTmethod').innerHTML = `
            <div class="SUCESSinst">
                <div class="SUCESShead">
                <i class="CROSSicon SUCCESicon"></i>
                </div>
                <p class="SUCESSh1">Pagamento com sucesso!</p>
                <p class="SUCESStext">O código abaixo é a sua chave de segurança de comprovante de pagamento. Envie para o suporte para iniciar a instalação de sua aplicação.</p>
                <div class="SUCESSbttm">
                    <span class="SECRETkey">${result.id}</span>
                    <div class="TOUCHbttn">
                        <p>Ou toque para enviar</p>
                        <button type="button" onclick="window.open('https://api.whatsapp.com/send?text=Olá, Natanael. Tudo bem? Eu acabei de realizar a compra da minha aplicação. Minha chade de segurança é ${'```'+result.id+'```'}')">Enviar para o Suporte</button>
                    </div>
                </div>
            </div>`
        })() : (function(){
            bracael.validCardText('Falha ao efetuar o pagamento, informe um cartão válido para continuar.')
        });

    }).catch((error) => {
        console.log(error);
    });
    }


    (function(win, doc){
        win.Mercadopago.setPublishableKey("TEST-5946973a-eb86-4cac-97f5-84ef934ed996");
        win.Mercadopago.getIdentificationTypes();

        doc.querySelector('#cardNumber') ?
        doc.querySelector('#cardNumber').addEventListener('keyup', function(event){
            let textLength = event.target.value.length;
            if(textLength >= 6){
                let bin = event.target.value.substring(0,6);
                win.Mercadopago.getPaymentMethod({
                    bin,
                }, (status, response)=>{
                    if (status == 200) {
                        doc.querySelector('#payment_method_id').value = response[0].id;
                        doc.querySelector('.CARDbrand').classList.add(response[0].name.replace(/\s/g, ''));
                        doc.querySelectorAll('.PAYMENDcard').forEach(function(data){
                            data.classList.add(response[0].name.replace(/\s/g, ''));
                        });
                    }
                });
            }
            else {
                doc.querySelector('.CARDbrand').classList.length > 1 ?
                doc.querySelector('.CARDbrand').setAttribute('class', 'CARDbrand') : null;

                doc.querySelectorAll('.PAYMENDcard').forEach(function(data){
                    data.classList.length > 1 ?
                    data.setAttribute('class', 'PAYMENDcard') : null;
                });
            }
        }) : null;

        doc.querySelector('#pay').addEventListener('submit', function(event){
            event.preventDefault();
            win.Mercadopago.createToken(event.target, (status, response)=>{

                status == 200 || status == 201 ?
                    formSubmit({
                        token: response.id,
                        payment_method_id: doc.querySelector('#payment_method_id').value,
                        payer: {
                            email: doc.querySelector('#INPUTdateEmail').value
                        }
                    }) : bracael.validCardText('Falha ao enviar os dados, certifique que todos os dados estão corretos.');
            })
        });

    })(window, document)

    cardholderName.addEventListener('input', function(){
        this.value != '' ?
        document.querySelector('.CARDname').classList.add('TEXTon') :
        document.querySelector('.CARDname').classList.remove('TEXTon');
        document.querySelector('.CARDname').innerText = this.value;
    });

    cardholderName.addEventListener('focusin', function(){
        document.querySelector('.CARDname').classList.add('SELECit');
    });

    cardholderName.addEventListener('focusout', function(){
        document.querySelector('.CARDname').classList.remove('SELECit');
    });

    cardNumber.addEventListener('input', function(){
		this.value = this.value.replace(/[^0-9]/g, '');

		var CARDnumberIt = String(this.value);
		if(CARDnumberIt.length <= 4){
			null;
		}
		else if(CARDnumberIt.length <= 8){
			var CARDnumberIt = CARDnumberIt.replace(/(\d{4})/gi, "$1 ");
		}
		else if(CARDnumberIt.length <= 12){
			var CARDnumberIt = CARDnumberIt.replace(/(\d{4})(\d{4})/gi, "$1 $2 ");
		}
		else if(CARDnumberIt.length <= 16){
			document.querySelector('.CARDNumber').classList.remove('INPUTsize');
			var CARDnumberIt = CARDnumberIt.replace(/(\d{4})(\d{4})(\d{4})/gi, "$1 $2 $3 ");
		}
		else {
			document.querySelector('.CARDNumber').classList.add('INPUTsize');
			var CARDnumberIt = CARDnumberIt.replace(/(\d{4})(\d{4})(\d{4})(\d{4})/gi, "$1 $2 $3 $4 ");
		}


        this.value != '' ?
        document.querySelector('.CARDNumber').classList.add('TEXTon') :
        document.querySelector('.CARDNumber').classList.remove('TEXTon');
        document.querySelector('.CARDNumber').innerText = CARDnumberIt;

    });

    cardNumber.addEventListener('focusin', function(){
        document.querySelector('.CARDNumber').classList.add('SELECit');
    });
    cardNumber.addEventListener('focusout', function(){
        document.querySelector('.CARDNumber').classList.remove('SELECit');
    });

    cardExpirationMonth.addEventListener('input', function(){
        Number(this.value.substring(0, 1).replace(/[^0-9]/g, '')) != 1 ?
        this.value = null :
        Number(this.value.replace(/[^0-9]/g, '')) > 12 ?
        this.value = this.value.substring(0, this.value.length-1).replace(/[^0-9]/g, '') :
        this.value = this.value.replace(/[^0-9]/g, '');

        cardExpirationMonth.value != '' ?
        document.querySelector('.MMcard').classList.add('TEXTon') :
        document.querySelector('.MMcard').classList.remove('TEXTon')
        document.querySelector('.MMcard').innerText = cardExpirationMonth.value;
    });
    cardExpirationMonth.addEventListener('focusin', function(){
        document.querySelector('.MMcard').classList.add('SELECit');
    });
    cardExpirationMonth.addEventListener('focusout', function(){
        document.querySelector('.MMcard').classList.remove('SELECit');
    });

    cardExpirationYear.addEventListener('input', function(){
        this.value = this.value.replace(/[^0-9]/g, '');
        this.value != '' ?
        document.querySelector('.AAcard').classList.add('TEXTon') :
        document.querySelector('.AAcard').classList.remove('TEXTon');
        document.querySelector('.AAcard').innerText = cardExpirationYear.value;
    });

    cardExpirationYear.addEventListener('focusin', function(){
        document.querySelector('.AAcard').classList.add('SELECit');
    });
    cardExpirationYear.addEventListener('focusout', function(){
        document.querySelector('.AAcard').classList.remove('SELECit');
    });

    document.getElementById('securityCode').addEventListener('input', function(){
    this.value = this.value.replace(/[^0-9]/g, '');

        securityCode.value != '' ?
        document.querySelector('.CARDcodeNumber').classList.add('TEXTon') :
        document.querySelector('.CARDcodeNumber').classList.remove('TEXTon');
        document.querySelector('.CARDcodeNumber').innerText = securityCode.value;
    });

    securityCode.addEventListener('focusin', function(){
    document.querySelector('.CARDwrapperInset').classList.add('CROSSstep');
        document.querySelector('.CARDcodeNumber').classList.add('SELECit');
    });

    securityCode.addEventListener('focusout', function(){
        document.querySelector('.CARDwrapperInset').classList.remove('CROSSstep');
        document.querySelector('.CARDcodeNumber').classList.remove('SELECit');
    });


    document.querySelector('BUTTON.BTTNstep').addEventListener('click', function(){
        const IDCnm = document.querySelector('#cardholderName').value;
        const IDCml = document.querySelector('#INPUTdateEmail').value;
        const IDCcml = document.querySelector('#confirmEmail').value;

        if(IDCml.split('@').length >= 2 ?
        IDCml.split('@')[1].split('.').length >= 2 ?
        IDCml.split('@')[1].split('.')[1] != '' ?
        IDCnm.trim().split(' ').length >= 2 && IDCml === IDCcml ? true
        : false
        : false
        : false
        : false){
            bracael.stepPersonal()
        }
        else {
            document.querySelector('.PERSONALitemElem').querySelectorAll('.GROUPinput').forEach(function(data){
                const DOMdataInput = data.querySelector('INPUT');
                var MSGfail = null;
                var MSGbool = true;

                if(DOMdataInput.id === 'cardholderName'){
                    DOMdataInput.value != '' ?
                    MSGfail = 'Digite seu nome completo.' : MSGfail = 'Digite seu nome.';
                    MSGbool = IDCnm.trim().split(' ').length >= 2 ? false : true;
                }
                else if(DOMdataInput.id === 'INPUTdateEmail'){
                    DOMdataInput.value != '' ?
                    MSGfail = 'E-mail inválido.' : MSGfail = 'Digite seu e-mail.';
                    MSGbool = IDCml.split('@').length >= 2 ?
                    IDCml.split('@')[1].split('.').length >= 2 ?
                    IDCml.split('@')[1].split('.')[1] != '' ? false : true : true : true;
                }
                else if(DOMdataInput.id === 'confirmEmail'){
                    DOMdataInput.value != '' ?
                    MSGfail = 'O E-mail é diferente.' : MSGfail = 'Campo obrigatório.';
                    MSGbool = IDCml.split('@').length >= 2 ?
                    IDCml.split('@')[1].split('.').length >= 2 ?
                    IDCml.split('@')[1].split('.')[1] != '' ? IDCml === IDCcml ? false : true : true : true : true;
                }

                if(!data.classList.contains('ELEMinptFail') && !data.contains(data.querySelector('.MSGerror')) && MSGbool){
                    data.classList.add('ELEMinptFail');
                    data.insertAdjacentHTML('beforeend', `
                    <div class="MSGerror">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="#d50000" fill-rule="evenodd">
                            <path id="RetÃ¢ngulo_2" data-name="RetÃ¢ngulo 2" class="cls-1" d="M8,0A8,8,0,1,1,0,8,8,8,0,0,1,8,0ZM7,3H9v7H7V3Zm0,8H9v2H7V11Z"></path>
                        </svg>
                        <span>${MSGfail}</span>
                    </div>`);
                }

                DOMdataInput.addEventListener('input', function(){
                if(data.classList.contains('ELEMinptFail') && data.contains(data.querySelector('.MSGerror'))){
                        data.classList.remove('ELEMinptFail')
                        data.querySelector('.MSGerror').remove()
                }});
            });
        }
    });

    bracael.focusOutInput()
    }

    if(document.querySelector('.CLASSitemAsk')){
        document.querySelectorAll('.CLASSitemAsk').forEach(function(data){
        data.querySelector('BUTTON').addEventListener('click', function(){
            document.querySelectorAll('.CLASSitemAsk').forEach(function(item){
                const paragraph = item.querySelector('P');
                paragraph.hasAttribute('style') ?
                paragraph.style.display != 'block' ?
                $(paragraph).animate({ height: 'toogle' }, 150) :
                $(paragraph).animate({ height: 0 }, 150, function(){

                    console.log(item)
                    paragraph.removeAttribute('style');
                    item.classList.remove('ARROWactItem')
                }) : null;
            });
            const paragraph = this.parentNode.querySelector('P');
            paragraph.style.display != 'block' ?
            $(paragraph).animate({ height: 'toggle' }, 150) : null;
            data.classList.add('ARROWactItem')
        });
    });
    }


};
