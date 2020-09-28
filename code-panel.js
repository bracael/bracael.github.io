const bracael = {
    case: {
        dotw: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
    }, // Object case
    refreshItemCart: function() {
        // Atualiza a quantidade de itens no carrinho do menu principal inferior
        // [___________________________________________________________________]

        const valueCart = new Array();
        Object.entries(JSON.parse(sessionStorage.itemCart)).map(function(elem,ind,obj){
            valueCart.push(elem[1].amount); });

        document.querySelector('#SETVALUEit.CROSSicon.CARTicon').innerHTML = `<span>${valueCart.reduce((acumulador, valorAtual) => acumulador + valorAtual)}</span>`;
    }, // function refreshItemCart
    removeItemCart: function(data) {
        // Faz a troca do botâo de decremento e incremento para o novo adicionar
        // [___________________________________________________________________]

        const id = data.parentNode.parentNode.getAttribute('data-id');
        const itemCart = JSON.parse(sessionStorage.itemCart);
        delete itemCart[id];
        sessionStorage.itemCart = JSON.stringify(itemCart);

        data.parentNode.parentNode.remove();
        bracael.totaltoPay(); //atualiza o subtotal no cart aside


        if(document.body.contains(document.getElementById('POSTmap'))){
        bracael.finishItemAndCart(id);
        }

    }, // function removeItemCart
    totaltoPay: function(){
        // Atualiza o subtotal a pagar no carinho dentro do menu ASIDE
        // [__________________________________________________________]

        console.log(bracael.resumeCart())

        document.querySelector('.TOTALcart').getElementsByTagName('P')[0].innerHTML = bracael.resumeCart().toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }).replace('R$', '<span>R$</span>');
    }, // function totaltoPay
    totalCart: function(data){

        const totalCart = new Array();
        Object.entries(JSON.parse(sessionStorage.itemCart)).map(function(elem){

            const reduceInc = new Array();
            elem[1].extra[1].map(function(item){
                if(item.length != 0){
                    item[0] != 0 ? reduceInc.push(item[0] * item[1]) : null
                }
                // reduceInc.push(data[0] * data[1])
            });

            var total = reduceInc.reduce(function(total, numero){
                return total + numero;
            }, 0);

            totalCart.push(Number((elem[1].price * elem[1].amount) + total));
        });

        return totalCart.reduce((acumulador, valorAtual) => acumulador + valorAtual) + data

    }, // function totalCart()
    resumeCart: function(){

        const totalCart = new Array();
        Object.entries(JSON.parse(sessionStorage.itemCart)).map(function(elem){

            const reduceInc = new Array();
            elem[1].extra[1].map(function(item){
                if(item.length != 0){
                    item[0] != 0 ? reduceInc.push(item[0] * item[1]) : null
                }
                // reduceInc.push(data[0] * data[1])
            });

            var total = reduceInc.reduce(function(total, numero){
                return total + numero;
            }, 0);
            // console.log(totalCart)

            totalCart.push(Number((elem[1].price * elem[1].amount) + total));
        });

        return totalCart.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);

    }, // function resumeCart()
    finishItemAndCart: function (data){
        // Faz a troca do botâo de decremento e infremento para o novo adicionar
        // O recebido de data é um #id -- ex: id="1852964191399706218"
        // [____________________________________________________________________]

        const POSTbox = document.querySelector(`.POSTbox[data-id="${data}"]`);
        const INCREMENTdiv = POSTbox.querySelector('#INCREMENTdiv.SPINNERmax');
        const GETTINGdiv = POSTbox.querySelector('#GETTINGdiv.SPINNERmax');

        // EFEITO DA SEGUNDA AÇÃO
        $(INCREMENTdiv).animate({ opacity: 0 }, {
            duration : 400,
            easing: 'linear',
            queue: false
        });

        $(INCREMENTdiv).animate({
            'transform': '26'
        }, {
            step: function (now, fx) {
                $(this).css({"transform": "translate3d(0px, " + now + "px, 0px)"});
            },
                duration: 400,
                easing: 'linear',
                queue: false,
                complete: function () {
                    POSTbox.classList.remove('EXISTitem');
                    INCREMENTdiv.removeAttribute('style')
                    this.removeAttribute('disable')
                }
        }, 'linear');
    
        setTimeout(function(){
            $(GETTINGdiv).fadeIn(400);    },200);
    }, // function finishItemAndCart
    incrementCart: function (product){
        const elem = JSON.parse(sessionStorage.itemCart)[product];

        bracael.totaltoPay();

        const reduceInc = new Array();
        elem.extra[1].map(function(data){
            data[0] != 0 ? reduceInc.push(data[0] * data[1]) : null;
        });

        var optionCart = `<div class="OPTIONScart">${reduceInc.length != 0 ? '<i class="CROSSicon ICONinc"></i>' : ''}${elem.comment != null ? '<i class="CROSSicon ICONcomment16"></i>' : ''}</div>`;

        const childNode = new Array();
        for(var i = 0; i < document.querySelector('.ITENSinst').children.length; i++){
            childNode.push(document.querySelector('.ITENSinst').children[i].getAttribute('data-id'));    }
    
    if(!childNode.includes(product)){
        // PRIMEIRA AÇÃO "ADICIONAR", SE O ITEM NÃO EXISTE NO ASIDE-CART EXECUTA = INSERT HTML
    
        document.querySelector('.ITENSinst').insertAdjacentHTML('afterbegin', `
        <div class="CARTbox" data-id="${product}">
        <section class="CARTlf">
            <img src="${elem.thumb}" alt="${elem.title}">
        </section>
        <section class="POSTrt">
            <span>${Number(Number(elem.price * elem.amount) + Number(reduceInc[0] != undefined ? reduceInc[0] : 0)).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}${optionCart}</span>
            <span>${elem.title}</span>
            <span>${elem.weight === undefined ? elem.grams >= 1000 ? (function(){

                var countGrams = 0;
                var atual = elem.grams
                function decrementAgain(){
                    countGrams = ++countGrams;
                    atual = atual - 1000
                    atual >= 1000 ? decrementAgain() : null;
                }
    
                atual >= 1000 ? decrementAgain() : null
    
                if(atual != 0){
                    return `${Number(countGrams+'.'+atual).toFixed(1).replace('.',',')}kg`;
                }
                else {
                    return countGrams != 1 ? `${countGrams} QUILOS` : `${countGrams} QUILO`;
                }
            })() : elem.grams != 0 ? `${elem.grams}g` : 'Peso não informado' : elem.weight >= 1000 ? (function(){
        
                var countGrams = 0;
                var atual = elem.weight
    
                function decrementAgain(){
                    countGrams = ++countGrams;
                    atual = atual - 1000
                    atual >= 1000 ? decrementAgain() : null;
                }
    
                atual >= 1000 ? decrementAgain() : null
    
                if(atual != 0){
                    return `${Number(countGrams+'.'+atual).toFixed(1).replace('.',',')}L`;
                }
                else {
                    return countGrams != 1 ? `${countGrams} LITROS` : `${countGrams} LITRO`;
                }
            })() : `${elem.weight}ml`}</span>
        </section>
        </div>
        `);
    }
    else {
        const childCart = document.querySelector('.ITENSinst').children;
        for(var i = 0; i < childCart.length; i++){
        if(childCart[i].getAttribute('data-id') == product){
            childCart[i].querySelector('.POSTrt').innerHTML = `<span>${Number(Number(elem.price * elem.amount) + Number(reduceInc[0] != undefined ? reduceInc[0] : 0)).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}<small>${elem.amount}</small>${optionCart}</span>
            <span>${elem.title}</span>
            <span>${elem.about}</span>`;
        }}
    }
    }, // function incrementCart
    decrementCart: function (product){
        if(sessionStorage.itemCart != undefined){
            const elem = JSON.parse(sessionStorage.itemCart)[product];
        
            bracael.totaltoPay();

            const childCart = document.querySelector('.ITENSinst').children;
            if(elem != undefined){

                const reduceInc = new Array();
    
                elem.extra[1].map(function(data){
                    data[0] != 0 ? reduceInc.push(data[0] * data[1]) : null;
                });
    
                var optionCart = `<div class="OPTIONScart">${reduceInc.length != 0 ? '<i class="CROSSicon ICONinc"></i>' : ''}${elem.comment != null ? '<i class="CROSSicon ICONcomment16"></i>' : ''}</div>`;


                if(elem.amount != 1){
                    for(var i = 0; i < childCart.length; i++){
                    if(childCart[i].getAttribute('data-id') == product){
                        childCart[i].querySelector('.POSTrt').innerHTML = `<span>${Number(Number(elem.price * elem.amount) + Number(reduceInc[0] != undefined ? reduceInc[0] : 0)).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}<small>${elem.amount}</small>${optionCart}</span>
                        <span>${elem.title}</span>
                        <span>${elem.about}</span>`;
                    }}
                }
                else {
                for(var i = 0; i < childCart.length; i++){
                if(childCart[i].getAttribute('data-id') == product){
                    childCart[i].querySelector('.POSTrt').innerHTML = `<span>${Number(Number(elem.price * elem.amount) + Number(reduceInc[0] != undefined ? reduceInc[0] : 0)).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}${optionCart}</span>
                    <span>${elem.title}</span>
                    <span>${elem.about}</span>`;
                }}
                }
            }
            else {
                // O ITEM NÃO EXISTE NO STORAGE ... ENTÃO DELETA DO CARINHO
                for(var i = 0; i < childCart.length; i++){
                if(childCart[i].getAttribute('data-id') == product){
                    childCart[i].remove();  }}  }
        }
        else {
            document.querySelector('ASIDE#ITEMcart').innerHTML = `    <div class="ORDERitem EMPTYcart">
                Por enquanto, não há nada por aqui.
            </div>`
        
        }
    }, // function decrementCart
    obterStorage: function (ind, val){

        const itemCart = JSON.parse(sessionStorage.itemCart);
        const valueCart = new Array();
    
        sessionStorage.itemCart = JSON.stringify(Object.assign(itemCart, JSON.parse(`{"${ind}":{
            "title":"${itemCart[ind].title}",
            "price": ${itemCart[ind].price},
            "thumb":"${itemCart[ind].thumb}",
            "about":"${itemCart[ind].about}",
            "extra":${JSON.stringify(itemCart[ind].extra)},
            "comment": ${itemCart[ind].comment != null ? `"${itemCart[ind].comment}"` : null},
            "amount": ${val}
        }}`)));
    
        Object.entries(JSON.parse(sessionStorage.itemCart)).map(function(elem,ind,obj){
            // CRIA UMA ARRAY COM TODOS OS AMOUNT
            valueCart.push(elem[1].amount); });

        if(valueCart.reduce((acumulador, valorAtual) => acumulador + valorAtual) != 0){
        if(JSON.parse(sessionStorage.itemCart)[ind].amount != 0){
        document.querySelector(`.POSTbox[data-id="${ind}"]`).querySelector('.INPUTnumb').value = val;
        }
        else{
            bracael.finishItemAndCart(ind)
            delete itemCart[ind]
            sessionStorage.itemCart = JSON.stringify(itemCart)
        }
            // ALTERA QUANTIDADE DO CARINHO
            document.querySelector('#SETVALUEit.CROSSicon.CARTicon').getElementsByTagName('SPAN')[0].innerHTML  = valueCart.reduce((acumulador, valorAtual) => acumulador + valorAtual);
        } else {
            bracael.finishItemAndCart(ind)
            sessionStorage.removeItem('itemCart')
            document.querySelector('#SETVALUEit.CROSSicon.CARTicon').getElementsByTagName('SPAN')[0].remove();
        }
    }, // function obterStorage
    asideCartBox: function (data){
        data.classList.toggle('REMOVEit');
        data.insertAdjacentHTML('beforeend', '<div id="DELETorNOT"><button type="button" id="CANCELthis"></button><button type="button" id="DELETthis"></button></div>');

        data.querySelector('BUTTON#CANCELthis').addEventListener('click', function(){
            this.parentNode.parentNode.classList.remove('REMOVEit')
            $(this.parentNode).animate({
                opacity: 0
            }, 150, function() {
                this.remove();
            });
        });

        data.querySelector('BUTTON#DELETthis').addEventListener('click', function(){        
            if(Object.getOwnPropertyNames(JSON.parse(sessionStorage.itemCart)).length-1 != 0){
                bracael.removeItemCart(this)
                bracael.refreshItemCart()
            }
            else {
                if(window.location.href.indexOf('/p/request.html') != -1){
                    window.location.replace('/Project');
                }
                if(document.body.contains(document.getElementById('POSTmap'))){
                    bracael.finishItemAndCart(data.getAttribute('data-id'));
                }
                // REMOVE O CART DA BASE
                sessionStorage.removeItem('itemCart')
                // REMOVE O CIRCULO DE ITEM NO CARINHO DO MENU
                document.querySelector('#SETVALUEit.CROSSicon.CARTicon').getElementsByTagName('SPAN')[0].remove();
                // remove o item
            document.querySelector('ASIDE#ITEMcart').innerHTML = '<div class="ORDERitem EMPTYcart">Por enquanto, não há nada por aqui.</div>'
            }
        });
    }, // function asideCartBox
    postImg: function() {
            document.querySelectorAll('.POSTimg.ACTIVEit').forEach(function(data){
                data.classList.remove('ACTIVEit')
            });
    }, // function postImg
    refreshItemAside: function(product, val){
        const elem = JSON.parse(sessionStorage.itemCart)[product];

        bracael.totaltoPay();

        const reduceInc = new Array();
        elem.extra[1].map(function(data){
            data[0] != 0 ? reduceInc.push(data[0] * data[1]) : null;
        });

        const optionCart = `<div class="OPTIONScart">${reduceInc.length != 0 ? '<i class="CROSSicon ICONinc"></i>' : ''}${elem.comment != null ? '<i class="CROSSicon ICONcomment16"></i>' : ''}</div>`;

        document.querySelector(`.CARTbox[data-id="${product}"]`).querySelector('.POSTrt').innerHTML = `<span>${val.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}${optionCart}</span>
        <span>${elem.title}</span>
        <span>${elem.about}</span>`;
    }, // function refreshItemAside
    refreshCommentAside: function(data){
        const elem = JSON.parse(sessionStorage.itemCart)[data];

        elem.comment != null ? document.querySelector(`.CARTbox[data-id="${data}"]`).querySelector('.OPTIONScart').insertAdjacentHTML('afterbegin', '<i class="CROSSicon ICONcomment16"></i>') : document.querySelector(`.CARTbox[data-id="${data}"]`).querySelector('.ICONcomment16').remove();
    } // function refreshCommentAside
}
