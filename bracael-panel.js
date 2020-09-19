const bracael  = {
    startItem: function(){
        document.querySelector('[js-allownumb="true"]').addEventListener('input', function(){
            this.value = this.value.replace(/[^0-9]/g, '')
        });

        $('[js-price="true"]').mask('#.##0,00', {reverse: true});

        document.querySelectorAll('input[js-price="true"]').forEach(function(data){
            data.addEventListener('focusout', function(){
                if(this.value.length != 0){
                    this.value.length === 1 || this.value.length === 2 ? this.value = `${this.value},00` : null 
                }
                else {
                    this.value = '0,00'
                }
            });
        });

        document.querySelector('[name="FORMinputImage"]').addEventListener('change', function(){
        this.value = this.value.trim();

        if(this.value != ''){
            const img = new Image('100%');
            img.src = this.value;
            img.onload = function () {
            console.log(this)
                // the image has sucess load
                document.querySelector('.GROUPimageClass').innerHTML = `
                <div class="ELEMimageShadow" style="background-image: url('${this.src}');"></div>
                <img class="INPUTimgUrl" src="${this.src}">
                <span class="SPANelemSucess">
                    <em>Imagem compatível</em>
                    <small>Maior que 890x594</small>
                </span>`;
            }
            img.onerror = function() {
                // the image has failed
                document.querySelector('.GROUPimageClass').innerHTML = `
                <span class="SPANelemFailure">URL da imagem que você informou,<br>não existe ou está quebrada!</span>`;
                console.clear();
            }
        }
        else {
            // input is empty
            if(document.querySelector('.GROUPimageClass').getElementsByTagName('SPAN')[0].classList.contains('SPANelemAwait')){
                this.value = null;
            }
            else {
                document.querySelector('.GROUPimageClass').innerHTML = `
                <span class="SPANelemAwait">Aguardando imagem!</span>`;
            }
        }
        });

        if(document.body.contains(document.querySelector('[name="addIcrmntItem"]'))){
        document.querySelector('[name="addIcrmntItem"]').addEventListener('click', function(){
            document.querySelector(`.GROUPexistItem[row="${document.querySelectorAll('.GROUPexistItem').length-1}"]`).insertAdjacentHTML('beforebegin', `
            <div class="GROUPexistItem" row="${document.querySelectorAll('.GROUPexistItem').length}">
                <div>
                    <div>
                        <input type="text" name="FORMtargetItem" placeholder="Item" maxlength="45">
                        <input type="input" name="FORMtargetLimit" placeholder="Limite" maxlength="1" size="1">
                    </div>
                    <div>
                        <input type="text" name="FORMtargetDesc" placeholder="Descrição" maxlength="60">
                    </div>
                </div>
                <div>
                    <div class="ELEMbtnRemove">
                        <button type="button" name="removeIcmntItem" js-row="${document.querySelectorAll('.GROUPexistItem').length}"></button>
                    </div>
                    <div class="ELEMsessPrice">
                        <label>R$</label>
                        <input type="text" name="FORMtargetPrice" size="3" js-price="true">
                    </div>
                </div>
            </div>`);
    
            document.querySelector(`.GROUPexistItem[row="${document.querySelectorAll('.GROUPexistItem').length-1}"]`).querySelector('[name="removeIcmntItem"]').addEventListener('click', function(){
    
                document.querySelector(`.GROUPexistItem[row="${document.querySelectorAll('.GROUPexistItem').length-1}"]`).remove();
    
            });
        });
    
        document.querySelectorAll('[name="removeIcmntItem"]').forEach(function(data, i){
            data.addEventListener('click', function(){
    
                document.querySelector(`.GROUPexistItem[row="${this.getAttribute('js-row')}"]`).remove();
    
            });
        });
        }

        document.querySelectorAll('.INPUTfunction').forEach(function(data){
            data.addEventListener('focusout', function(){
                if(this.value.length >= 1){
                    this.classList.add('INPUThasText');}
                    else {
                    this.classList.remove('INPUThasText');}
            });
        });

    },
    pushNotify: function(data){
        if(!document.body.contains(document.querySelector('.PUSHnotifyBttm'))){
            document.body.insertAdjacentHTML('beforeend', `
            <div class="PUSHnotifyBttm">
                <p>${data}</p>
            </div>`);

            $('.PUSHnotifyBttm').animate({
                'transform': '-70'
            }, {
                step: function (now, fx) {
                    $(this).css({"transform": "translate3d(0px, " + now + "px, 0px)"});
                },
                duration: 150,
                easing: 'linear',
                queue: false,
                complete: function () {
                    setTimeout(()=>{
                        $(this).animate({ opacity: 0 }, {
                            duration : 300,
                            easing: 'linear',
                            queue: false,
                            complete: function () {
                                this.remove()
                            }
                        });
                    }, 1300)
                }
            }, 'linear');
        }
    }
}