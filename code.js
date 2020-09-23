const database = firebase.database();
const numberday = new Date().getDay()
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][numberday];

localStorage.dataShow === undefined ? localStorage.dataShow = new Date() : null;

window.onload = async function(){
await fetch(firebaseConfig.databaseURL+'/.json')
.then((response) => response.json())
.then(function(result) {
    const itemCart = sessionStorage.itemCart != undefined ? JSON.parse(sessionStorage.itemCart) : undefined;

    const burger = new Array();
    const drinks = new Array();
    const servings = new Array();
    const promo = new Array();
    const combo = new Array();
    Object.entries(result.feed).map(function(elem,ind,obj){

        const buttonsCart = elem[1].category.includes('Unavailable') ? '<div class="SPINNERmax"><span class="OFSTOCKitem">Indisponível</span></div>' :
        `<div class="SPINNERmax" id="INCREMENTdiv">
        <div class="SPINNERinput">
        <div class="PREPENDinput">
            <button class="btn btn-decrement" type="button" for="${elem[0]}"><i class="CROSSicon MINUSicon"></i></button>
        </div>
        <input type="number" value="${itemCart != undefined ? itemCart[elem[0]] != undefined ? itemCart[elem[0]].amount : 0 : 0}" min="1" max="5" disabled="disabled" onselectstart="return false" onpaste="return false" oncopy="return false" oncut="return false" ondrag="return false" ondrop="return false" autocomplete="off" class="INPUTnumb">
        <div class="PREPENDinput">
            <button class="btn btn-increment" type="button" for="${elem[0]}"><i class="CROSSicon PLUSicon"></i></button>
        </div>
        </div>
        </div>
        <div class="SPINNERmax" id="GETTINGdiv">
        <button type="button" class="GETTINGit" for="${elem[0]}"><i class="CROSSicon CARTicon"></i>Adicionar</button>
        </div>`;

        var info = '';
        !elem[1].category.includes('Drinks') ? info = `<div class="ACESSinfo"><p>${elem[1].description}</p></div>` : ''


        const item = `<div class="POSTbox${itemCart != undefined ? Object.getOwnPropertyNames(itemCart).includes(elem[0]) ? ' EXISTitem' : '' : ''}" data-id="${elem[0]}">
        <section class="POSTup">
            <div class="POSTimg">
                <img src="${elem[1].thumb}" alt="${elem[1].title}">
                ${info}
            </div>
            <div class="POSTbttm">
            ${buttonsCart}
            </div>
        </section>
        <section class="POSTbt">
            <span>${Number(elem[1].price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
            <div>
                <h3>${elem[1].title}</h3>
                <span>${!elem[1].category.includes('Drinks') ? elem[1].grams >= 1000 ? (function(){

                    var countGrams = 0;
                    var atual = elem[1].grams
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
                })() : elem[1].grams != 0 ? `${elem[1].grams}g` : 'Peso não informado' : elem[1].weight >= 1000 ? (function(){

                    var countGrams = 0;
                    var atual = elem[1].weight

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
                })() : `${elem[1].weight}ml`}</span>
            </div>
            <button type="button" class="INFObtn" for="${elem[0]}"><i class="CROSSicon INFOicon"></i></button>
        </section>
        </div>`;

        elem[1].category.includes('Combo') && !elem[1].category.includes('Drinks') ? combo.push(item) : false;
        elem[1].category.includes('Burger') ? burger.push(item) : false;
        elem[1].category.includes('Servings') ? servings.push(item) : false;
        elem[1].category.includes('Drinks') ? drinks.push(item) : false;
        elem[1].category.includes('Promo') && !elem[1].category.includes('Drinks') && elem[1].category.includes(weekday) ? promo.push(item) : false;

    });

    const promoinst = promo.length != 0 ?
    `<div class="PROMOinst">
        ${promo.join('\n')}
    </div>
    <div class="MESSAGEandes">
        <p>Promoção disponível aos ${bracael.case.dotw[numberday]} por tempo indeterminado.</p>
    </div>` :
    `<small>Hoje não é dia de promoção.</small>`;


if(document.body.contains(document.getElementById('POSTmap'))){
    POSTmap.innerHTML = `
<div class="BURGERpost" id="SCREENit">
    <div>
        ${burger.length != 0 ? burger.join('\n') : '<div class="MSGelemFailure"><small>Nenhum hamburguer publicado!</small></div>'}
    </div>
</div>
<div class="PORCIONpost DISPLAYnone" id="SCREENit">
    <div>
    ${servings.length != 0 ? servings.join('\n') : '<div class="MSGelemFailure"><small>Nenhuma porção publicada!</small></div>'}
    </div>
</div>
<div class="BEBIDADApost DISPLAYnone" id="SCREENit">
    <div>
    ${drinks.length != 0 ? drinks.join('\n') : '<div class="MSGelemFailure"><small>Nenhuma bebida publicada!</small></div>'}
    </div>
</div>`;
}

CONTENTmodal.innerHTML = `<div class="MASTERmenu">
<button type="button" class="ASIDEbtn" name="destaque" disabled="disabled">Combos</button>
<button type="button" class="ASIDEbtn" name="promo">Promoção</button>
<span></span>
</div>
<div class="SCREENmenu">
<div class="DESTAQbar">
${combo.join('\n')}
</div>
<div class="PROMObar">
${promoinst}
</div>
</div>`;

});


const SEMANAit = new Array();
database.ref('business').once('value').then(snapshot=>{
    // DIAS DA SEMANA NO MENU-PUSH
    for(var a = 0; a < 7; a++){
        snapshot.val().action[a][Object.getOwnPropertyNames(snapshot.val().action[a])].map(function(e, i, o){
        if(o[i][0] == '' || o[i][1] == ''){
            SEMANAit.push(`<li><span>${bracael.case.dotw[a]}</span><span style="color: #ff847c;">Fechado</span></li>`);
        }
        else {
            if(i != 0){
                SEMANAit.push(`<li><span>--</span><span>${o[i][0]} às ${o[i][1]}</span></li>`); }
                else {
                SEMANAit.push(`<li><span>${bracael.case.dotw[a]}</span><span>${o[i][0]} às ${o[i][1]}</span></li>`);    }
        }
    });}
    document.getElementById('SEMANAit').innerHTML = SEMANAit.join('\n');

    // bairros para atendimentos
    const district = new Array();

    Object.entries(snapshot.val().delivery).sort(function (a, b) {
        return (a[1].zone > b[1].zone) ? 1 : ((b[1].zone > a[1].zone) ? -1 : 0);
    }).map(function(data, index, stuff){
        if(stuff[index-1] != undefined){
            var letter = data[1].zone.substring(0, 1) != stuff[index-1][1].zone.substring(0, 1) ? stuff[index][1].zone.substring(0, 1) : '';    }
            else {
            var letter = stuff[index][1].zone.substring(0, 1);  }

        district.push(`<div class="SECTORhr"><span>${letter}</span><span>${data[1].zone}</span><span>${data[1].rate != 0 ? Number(data[1].rate).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) : 'GRÁTIS'}</span></div>`);
    });

    DISTRICTon.innerHTML = `
    <div class="MASTERmenu">Área de entrega</div>
    <div class="MASTERsub">
        Resultados para <b>${snapshot.val().info.region}/${snapshot.val().info.unity}</b>
    </div>
    <div class="DISTRICTinst">
        ${district.join('\n')}
    </div>`;

    const banrisul = '<i class="CROSSicon VISAicon"><img height="20" src="https://1.bp.blogspot.com/-P6ong_vSPo4/X2hJ-EcfzbI/AAAAAAAAHPA/uMHLrlxGR7IlXURS3yBhpva8gOYlIhlHwCLcBGAsYHQ/s320/banrisul.png"></i>';
    const visa = '<i class="CROSSicon VISAicon"><img height="20" src="https://4.bp.blogspot.com/-yjRJamc055o/XzKLkgO8A1I/AAAAAAAAHGo/EKk1YWu8uTwFHZmqtsKa7Q5XI_eXsMo3gCLcBGAsYHQ/s320/visa.png"></i>';
    const maestro = '<i class="CROSSicon MAESTROcon"><img height="20" src="https://4.bp.blogspot.com/-cP673wyKTYY/XzKNpfTn-5I/AAAAAAAAHG4/TYatZb6b4u8kqSQd56uk-2hP25N_-UeQgCLcBGAsYHQ/s320/maestro.png"></i>';
    const elo = '<i class="CROSSicon ELOicon"><img height="20" src="https://2.bp.blogspot.com/-_cwtVG4dR1g/XzKRdsHr1BI/AAAAAAAAHHs/sz5v6dB6bYcjFd9aZFoEMF-RQQN59ATkQCLcBGAsYHQ/s320/elo.png"></i>';
    const mastercard = '<i class="CROSSicon MASTERcon"><img height="20" src="https://4.bp.blogspot.com/-c2qRtCccgFk/XzKOp6dtO3I/AAAAAAAAHHQ/bksycs51u6EbTaF8_FMm31fN6iV6Hul-gCLcBGAsYHQ/s320/mastercard.png"></i>';
    const hipercard = '<i class="CROSSicon AMEXicon"><img height="20" src="https://1.bp.blogspot.com/-Pxg-BfPny3o/X2hJ-NGAdpI/AAAAAAAAHO8/EepI7iQqVwEEi6Cf5RcDK2M2gzagl3HfwCLcBGAsYHQ/s320/hipercard.png"></i>';
    const amex = '<i class="CROSSicon AMEXicon"><img height="20" src="https://3.bp.blogspot.com/-sf2IZ3tnMjM/XzKNe8H_PmI/AAAAAAAAHG0/zyjZveMaCbUJUDlVGI0x-dsIFK73Ys2EACLcBGAsYHQ/s320/amex.png"></i>';
    const diners = '<i class="CROSSicon DINERSicon"><img height="20" src="https://3.bp.blogspot.com/-7W74XVvvqks/XzKPbSRz5jI/AAAAAAAAHHg/o4mhb7P8sR01FJkEhyWUUnsbS6Oy3Dd6QCLcBGAsYHQ/s320/diners.png"></i>';
    const alelo = '<i class="CROSSicon ALELOicon"><img height="20" src="https://4.bp.blogspot.com/-oT3WobHsu4c/XzKUljudVSI/AAAAAAAAHII/FGkJNrJ6tbgDFwvH8EmxmrD20RNWjCiNwCLcBGAsYHQ/s320/alelo.png"></i>';
    const sodexo = '<i class="CROSSicon SODEXOcon"><img height="20" src="https://2.bp.blogspot.com/-romfsWuFvDc/XzKTG2L-nvI/AAAAAAAAHH8/bzPh5XSrwwk3ArbFXPr05fyGHGVseoHqgCLcBGAsYHQ/s1600/sodexo.png"></i>';
    const ticket = '<i class="CROSSicon TICKETicon"><img height="20" src="https://1.bp.blogspot.com/-N3flCB8it7Q/XzKWCU4HUyI/AAAAAAAAHIU/hwICpw0fQMk_RHUAoXW45it0ZSxsya40wCLcBGAsYHQ/s320/ticket.png"></i>';
    const vrref = '<i class="CROSSicon VRREFicon"><img height="20" src="https://1.bp.blogspot.com/-UpUHmGhhdL8/XzKKMZk6rDI/AAAAAAAAHGY/Nxt-U6lXPHY_eROYrvRynCJoMnvLeke1gCLcBGAsYHQ/s320/vr-ref.png"></i>';

    const methods = snapshot.val().methods;
    const cash = methods.cash.brl ? `
    ${methods.cash.brl ? '<small>BRL (moeda do Brasil)</small>' : ''}` : '<small>Não trabalhamos com dinheiro em espécie</small>';
    const debit = methods.debit.visa || methods.debit.maestro || methods.debit.elo || methods.debit.banrisul ? `
    ${methods.debit.visa ? visa : ''}
    ${methods.debit.maestro ? maestro : ''}
    ${methods.debit.elo ? elo : ''}
    ${methods.debit.banrisul ? banrisul : ''}` : '<small>Não trabalhamos com débito</small>';
    const credit = methods.credit.visa || methods.credit.mastercard || methods.credit.elo || methods.credit.hipercard || methods.credit.amex || methods.credit.diners ? `
    ${methods.credit.visa ? visa : ''}
    ${methods.credit.mastercard ? mastercard : ''}
    ${methods.credit.elo ? elo : ''}
    ${methods.credit.hipercard ? hipercard : ''}
    ${methods.credit.amex ? amex : ''}
    ${methods.credit.diners ? diners : ''}` : '<small>Não trabalhamos com crédito</small>';
    const voucher = methods.voucher.alelo || methods.voucher.sodexo || methods.voucher.ticket || methods.voucher.vrref ? `
    ${methods.voucher.alelo ? alelo : ''}
    ${methods.voucher.sodexo ? sodexo : ''}
    ${methods.voucher.ticket ? ticket : ''}
    ${methods.voucher.vrref ? vrref : ''}` : '<small>Não trabalhamos com voucher</small>';

    PAGAMENTOit.innerHTML = `
    <p>Dinheiro</p>
    <div class="PAGAMENTOform">
    ${cash}
    </div>
    <p>Cartão de Débito</p>
    <div class="PAGAMENTOform">
        ${debit}
    </div>
    <p>Cartão de Crédito</p>
    <div class="PAGAMENTOform">
        ${credit}
    </div>
    <p>Voucher</p>
    <div class="PAGAMENTOform">
        ${voucher}
    </div>
    `;

});

const MENUslct = document.querySelectorAll('.MENUslct');
for(var i = 0; i < MENUslct.length; i++){
    MENUslct[i].addEventListener('click', function(){

if(!this.classList.contains('ACTIVEit') && !this.hasAttribute("disabled")){
        bracael.postImg()
        const SLCTscreen = document.querySelector(`.${document.querySelector('.MENUslct.ACTIVEit').getAttribute('for')}`);
        document.querySelector('.MENUslct.ACTIVEit').classList.toggle('ACTIVEit');
        this.classList.toggle('ACTIVEit');

        for(var i = 0; i < MENUslct.length; i++){
            MENUslct[i].setAttribute('disabled', 'disabled');}

    $(SLCTscreen).animate({ opacity: 0 }, {
        duration : 150,
        easing: 'linear',
        queue: false
    });
  
    $(SLCTscreen).animate({
        'transform': '100'
    }, {
        step: function (now, fx) {
        $(this).css({"transform": "translate3d(0px, " + now + "vh, 0px)"});
            },
        duration: 300,
        easing: 'linear',
        queue: false,
        complete: function () {
            this.classList.add('DISPLAYnone');
            this.removeAttribute('style');
    }
    }, 'linear');

    setTimeout(()=>{
        const ELEMENTset = document.querySelector(`.${this.getAttribute('for')}`);
        $(ELEMENTset).fadeIn(500, function() {
            ELEMENTset.classList.remove('DISPLAYnone');
            ELEMENTset.removeAttribute('style')
        })  }, 100)

        setTimeout(()=>{
        for(var i = 0; i < MENUslct.length; i++){
            MENUslct[i].removeAttribute('disabled')
        }}, 600)

}
});
}


if(document.body.contains(document.querySelector('.CONTENTblogger'))){
// CART AND ITENS STORAGE
if(sessionStorage.itemCart != undefined){
    const startCart = new Array();
    const boxCart = new Array();
    const totalCart = new Array();

    Object.entries(JSON.parse(sessionStorage.itemCart)).map(function(elem,ind,obj){

        const reduceInc = new Array();
        elem[1].extra[1].map(function(data){
            reduceInc.push(data[0] * data[1])
        });

        var total = reduceInc.reduce(function(total, numero){
            return total + numero;
        }, 0);

        totalCart.push(Number((elem[1].price * elem[1].amount) + total));
        if(elem[1].amount != 1){
            var amountCart = `<small>${elem[1].amount}</small>`;    }
            else {
            var amountCart = '';    }

        var optionCart = `<div class="OPTIONScart">${total != 0 ? '<i class="CROSSicon ICONinc"></i>' : ''}${elem[1].comment != null ? '<i class="CROSSicon ICONcomment16"></i>' : ''}</div>`;

        boxCart.push(`
        <div class="CARTbox" data-id="${elem[0]}">
        <section class="CARTlf">
            <img src="${elem[1].thumb}" alt="${elem[1].title}">
        </section>
        <section class="POSTrt">
            <span>${Number((elem[1].price * elem[1].amount) + total).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) + amountCart + optionCart}</span>
            <span>${elem[1].title}</span>
            <span>${elem[1].about}</span>
        </section>
        </div>
        `);

        // CRIA UMA ARRAY COM TODOS OS AMOUNT
        startCart.push(elem[1].amount); });

    if(startCart.reduce((acumulador, valorAtual) => acumulador + valorAtual) != 0){
        document.querySelector('#SETVALUEit.CROSSicon.CARTicon').innerHTML = `<span>${startCart.reduce((acumulador, valorAtual) => acumulador + valorAtual)}</span>`;   }

        // ITENS EXISTE ASIDE__ITEM_CART
        if(window.location.href.indexOf('/p/request.html') != -1){
            console.log('request.html')
        }
        ITEMcart.innerHTML = `<div class="ORDERitem CARTopen">
        <div class="OPENCARTinst">
        <h3>Todos os seus pedidos</h3>
        <div class="TOTALcart"><strong>subtotal á pagar</strong><p>${Number(totalCart.reduce((acumulador, valorAtual) => acumulador + valorAtual)).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }).replace('R$', '<span>R$</span>')}</p></div>
        <div class="ITENScart">
        <div class="ITENSinst" id="CARTmap">
            ${boxCart.join('')}
        </div>
        </div>
        <div class="CONFIRMcart">
            <button onclick="window.location.href='./p/request.html'" class="PREMIUMbtn"><i class="CROSSicon SAVEicon"></i>Confirmar</button>
        </div>
        </div>
        </div>`;
}

database.ref().on('value', function (snapshot) {
    const COMMERCEstatus = document.querySelector('SPAN.STATUScode');

    if(snapshot.val()['business'].status){
        document.querySelector('SECTION.COMMERCEstatus').id = 'ABERTOit';
        COMMERCEstatus.innerText = 'Delivery aberto!';
    }
    else {
        document.querySelector('SECTION.COMMERCEstatus').id = 'FECHADOit';
        COMMERCEstatus.innerText = 'Delivery fechado!';
    }

    const WAITINGinst = new Array();

    // console.log(snapshot.val().order)

    snapshot.val().order != undefined ?
    Object.entries(snapshot.val().order).map(function(e, i, o){
        WAITINGinst.push(`
        <div class="WAITINGcard">
            <span>${e[1].client}</span>
            <div><p>Status</p>${e[1].status == 'Em espera' ? `<p>${e[1].status}</p>` : e[1].status == 'Em preparo' ? `<p style="color: #eff94f;">${e[1].status}</p>` : e[1].status == 'Em retirada' ? `<p style="color: #4fa3f9;">${e[1].status}</p>` : `<p style="color: #4ff94f;">${e[1].status}</p>`}</div>
        </div>
        `);
    }) : null;

    WAITINGlist.innerHTML = `
    <div class="MASTERmenu">Lista de atendimento</div>
    ${snapshot.val().order != undefined ? `
    <div class="MASTERsub">
        Total de ${Object.getOwnPropertyNames(snapshot.val().order).length} pedidos no momento
    </div>
    <div class="WAITINGinst">
        ${WAITINGinst.join('')}
    </div>` : '<small>Por enquanto, não há nada por aqui.<small>'}`;
});

document.querySelectorAll('.INFObtn').forEach(info=>{
    info.addEventListener('click', function(){
        document.querySelector(`.POSTbox[data-id="${this.getAttribute('for')}"]`).querySelector('.POSTimg').classList.toggle('ACTIVEit')
    });
});

//GET JSON POST
document.querySelectorAll('.GETTINGit').forEach(card=>{
    card.addEventListener("click", function(){

        database.ref(`feed/${this.getAttribute('for')}`).once('value').then((result)=>{

        if(!this.hasAttribute('disabled') && result.val() != null && result.val() != undefined){
        const POSTbox = document.querySelector(`.POSTbox[data-id="${this.getAttribute('for')}"]`);

        const dataNumber = new Array();
        result.val().extra != undefined ? result.val().extra.map(function(data){
            dataNumber.push([0,Number(data[3])])
        }) : null

        const SETitem = JSON.parse(`{"${this.getAttribute('for')}":{
            "title":"${result.val().title}",
            "price": ${result.val().price},
            "thumb":"${result.val().thumb}",
            "about":"${!result.val().category.includes('Drinks') ? result.val().grams >= 1000 ? (function(){

                var countGrams = 0;
                var atual = result.val().grams
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
            })() : result.val().grams != 0 ? `${result.val().grams}g` : 'Peso não informado' : result.val().weight >= 1000 ? (function(){

                var countGrams = 0;
                var atual = result.val().weight

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
            })() : `${result.val().weight}ml`}",
            "extra": ${result.val().extra != undefined ? `[${JSON.stringify(result.val().extra)},${JSON.stringify(dataNumber)}]` : '[[],[]]'},
            "comment": null,
            "amount": 1
        }}`);

        if(sessionStorage.itemCart != undefined){
            // PRIMERA AÇÃO NO PRODUTO --- COM STORAGE EXISTENTE
            if(!Object.getOwnPropertyNames(JSON.parse(sessionStorage.itemCart)).includes(this.getAttribute('for'))){
                sessionStorage.itemCart = JSON.stringify(Object.assign(JSON.parse(sessionStorage.itemCart), SETitem));  }
                bracael.incrementCart(this.getAttribute('for'));
        }
        else {
            // PRIMEIRA AÇÃO NO PRODUTO --- REAL
            sessionStorage.itemCart = JSON.stringify(SETitem);

            // ITENS EXISTE ASIDE__ITEM_CART
            document.querySelector('ASIDE#ITEMcart').innerHTML = `    <div class="ORDERitem CARTopen">
    <div class="OPENCARTinst">
        <h3>Todos os seus pedidos</h3>
        <div class="TOTALcart"><strong>subtotal á pagar</strong><p>${Number(result.val().price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }).replace('R$', '<span>R$</span>')}</p></div>
        <div class="ITENScart">
        <div class="ITENSinst">
            <div class="CARTbox" data-id="${this.getAttribute('for')}">
            <section class="CARTlf">
                <img src="${result.val().thumb}" alt="${result.val().title}">
            </section>
            <section class="POSTrt">
                <span>${Number(result.val().price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                <span>${result.val().title}</span>
                <span>${!result.val().category.includes('Drinks') ? result.val().grams >= 1000 ? (function(){

                    var countGrams = 0;
                    var atual = result.val().grams
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
                })() : result.val().grams != 0 ? `${result.val().grams}g` : 'Peso não informado' : result.val().weight >= 1000 ? (function(){
    
                    var countGrams = 0;
                    var atual = result.val().weight
    
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
                })() : `${result.val().weight}ml`}</span>
            </section>
            </div>
        </div>
        </div>
        <div class="CONFIRMcart">
            <button onclick="window.location.href='./p/request.html'" class="PREMIUMbtn"><i class="CROSSicon SAVEicon"></i>Confirmar</button>
        </div>
    </div>
    </div>`;
        }

    document.getElementById('ITEMcart').querySelector(`[data-id="${this.getAttribute('for')}"]`).addEventListener('dblclick', function(){
        if(this.children.length < 3){
            bracael.asideCartBox(this)
        }
    });

        // SEMPRE ACRESCENTA O PRIMEIRO VALOR NO INPUT
        POSTbox.querySelector('.INPUTnumb').value = 1;
        this.setAttribute('disabled', 'disabled');

        const INCREMENTdiv = POSTbox.querySelector('#INCREMENTdiv.SPINNERmax');

        // EFEITO DA PRIMEIRA AÇÃO
        $(this.parentNode).animate({ opacity: 0 }, {
            duration : 400,
            easing: 'linear',
            queue: false
        });
        
        $(this.parentNode).animate({
            'transform': '26'
        }, {
            step: function (now, fx) {
                $(this).css({"transform": "translate3d(0px, " + now + "px, 0px)"});
            },
            duration: 400,
            easing: 'linear',
            queue: false,
            complete: function () {
                POSTbox.classList.add('EXISTitem');
                this.removeAttribute('style');
                this.querySelector('.GETTINGit').removeAttribute('disabled');
            }
        }, 'linear');

        setTimeout(function(){
            $(INCREMENTdiv).fadeIn(400);    },200);

            bracael.refreshItemCart()
        }
    });

    });
});


for(let i = 0; i < document.querySelectorAll('.CARTbox').length; i++){
document.querySelectorAll('.CARTbox')[i].addEventListener('dblclick', function dbclick(event){
    if(this.children.length < 3){
    bracael.asideCartBox(this)
    }
});}


for(var i = 0; i < document.querySelectorAll('button.btn.btn-decrement').length; i++){
document.querySelectorAll('button.btn.btn-decrement')[i].addEventListener('click', function(){
    const dataItem = this.getAttribute('for');
    if(sessionStorage.itemCart != undefined){
    if(JSON.parse(sessionStorage.itemCart)[dataItem] != undefined){
    bracael.obterStorage(dataItem, --JSON.parse(sessionStorage.itemCart)[dataItem].amount);
    bracael.decrementCart(dataItem);
    }}
});}

for(var i = 0; i < document.querySelectorAll('button.btn.btn-increment').length; i++){
document.querySelectorAll('button.btn.btn-increment')[i].addEventListener('click', function(){
    const dataItem = this.getAttribute('for');
    if(sessionStorage.itemCart != undefined){
    if(JSON.parse(sessionStorage.itemCart)[dataItem] != undefined){
  
    bracael.obterStorage(dataItem, ++JSON.parse(sessionStorage.itemCart)[dataItem].amount);
    bracael.incrementCart(dataItem);
    }}
});}

document.querySelectorAll('[data-aside]').forEach(function(data){
    data.addEventListener('click', function(){
    bracael.postImg();
    document.getElementById(data.getAttribute('data-aside')).classList.toggle('MENUactive');
    document.getElementById('CONTENTframe').classList.toggle('SWIPEopen');
    document.body.style.overflow = "hidden";

    if(document.body.contains(document.querySelector('.SWIPEopen'))){
    document.querySelector('.SWIPEopen').addEventListener('click', function click(e){
        bracael.postImg();
        document.getElementById(data.getAttribute('data-aside')).classList.toggle('MENUactive');
        document.getElementById('CONTENTframe').classList.toggle('SWIPEopen');
        document.body.removeAttribute('style');
        this.removeEventListener('click', click);
    });}
    });
});

document.querySelectorAll('.ASIDEbtn').forEach(function(data){
    data.addEventListener('click', function(){
        bracael.postImg();
        document.querySelector('.ASIDEbtn[disabled]').removeAttribute('disabled')
        this.setAttribute('disabled', '')
        document.querySelector('.SCREENmenu').classList.toggle('ACTIVEit')
    });
});

}



//  PAGINA DE ENVIAR PEDIDO
if(document.body.contains(document.getElementById('CONFIRMform')) && sessionStorage.itemCart != undefined){
database.ref('business').once('value').then(function(snapshot){

if(bracael.resumeCart() >= snapshot.val().info.minvalue && snapshot.val().status){
    const user = localStorage.clientApp != undefined ? JSON.parse(localStorage.clientApp) : null;

    const DISTRICTit = new Array();
    Object.entries(snapshot.val().delivery).map(function(data){
        DISTRICTit.push(`<option js-key="${data[0]}">${data[1].zone}${data[1].district != '' ? ` - ${data[1].district}` : ''} (${Number(data[1].rate).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })})</option>`);
    });

    document.getElementById('CONFIRMform').innerHTML = `
    <div>
    <em>MANIPULE SEU PEDIDO!</em>
    <p>Incremente ingredientes nos itens do seu carrinho ou também nos informe quando remover um ingrediente que tu não gosta.</p>
    <button class="COMMENTline" type="button">Manipular pedido</button>
    </div>
    
    <section class="REQUESTit">
        <input id="FIRSTstep" name="INPUTradio" type="radio" checked="">
        <input id="SECONDstep" name="INPUTradio" type="radio">
    <div class="REQUESTinst">
    <div class="SECTIONinpt" js-target="FIRSTstep" checked="">
    <div class="GROUPinput">
        <input type="text" class="inputType" name="inputClient" placeholder="Nome e sobrenome *" tabindex="1" autocapitalize="on" autocorrect="off" ${user != null ? `value="${user.name}"` : ''}>
    </div>
    <div class="GROUPinput">
        <input type="text" class="inputType" name="inputDdd" placeholder="DDD *" tabindex="2" autocapitalize="on" autocorrect="off" maxlength="2" ${user != null ? `value="${user.ddd}"` : ''}>
        <input type="text" class="inputType" name="inputPhone" placeholder="Telefone *" tabindex="3" autocapitalize="on" autocorrect="off" maxlength="10" ${user != null ? `value="${user.phone}"` : ''}>
    </div>
    <div class="MESSAGEandes">
        <p>O telefone é importante para casos de dificuldade de encontrar o endereço.</p>
    </div>
    <div class="GROUPinput" id="CONFIRMitem">
        <button class="TEXThref" type="button">Termos & privacidade</button>
        <button class="CHANGEstep BUTTONif" data-for="SECONDstep" tabindex="4" type="button">Proximo passo</button>
    </div>
    </div>
    <div class="SECTIONinpt" js-target="SECONDstep">
    <div class="GROUPinput">
        <input type="text" class="inputType" name="inputRoad" placeholder="Rua *" tabindex="-1" autocapitalize="on" autocorrect="off" ${user != null ? `value="${user.street}"` : ''}>
        <input type="text" class="inputType" name="inputNumber" placeholder="Número *" tabindex="-1" autocapitalize="on" autocorrect="off" ${user != null ? `value="${user.number}"` : ''}>
    </div>
    <div class="GROUPinput">
        <input type="text" name="inputExtra" placeholder="Complemento" tabindex="-1" autocapitalize="on" autocorrect="off" ${user != null ? `value="${user.extra}"` : ''}>
    </div>
    <div class="GROUPinput">
        <div id="SELECTopt" >
        <select name="INSERTrate" tabindex="-1" id="INSERTrate">
            <option disabled selected value>Selecione seu bairro *</option>
            ${DISTRICTit.join('\n')}
        </select>
        </div>
    </div>
    <div class="MESSAGEandes">
        <p>Será cobrada a taxa de entrega no valor subtotal do pedido.</p>
    </div>
    <div class="GROUPinput" id="CONFIRMitem">
        <button class="CHANGEstep TEXThref" data-for="FIRSTstep" tabindex="-1" type="button">Voltar atrás</button>
        <button class="BUTTONif" id="DEMANDit" tabindex="-1" type="button">Finalizar pedido</button>
    </div>
    </div>
    </div>
    </section>`;

    document.querySelector('.REQUESTit').style.height = `${document.querySelector('.SECTIONinpt[checked]').offsetHeight}px`;

    document.querySelector('[name="inputPhone"]').addEventListener('input', function(){
        if(this.value.replace(/[^\d]+/g,'').length === 8){
            this.value = this.value.replace(/[^\d]+/g,'').replace(/(\d{4})(\d{4})/, "$1-$2")
        }
        else if(this.value.replace(/[^\d]+/g,'').length === 9){
            this.value = this.value.replace(/[^\d]+/g,'').replace(/(\d{5})(\d{4})/, "$1-$2")
        }
    });

    for(let i = 0; i < document.querySelectorAll('.CHANGEstep').length; i++){
        document.querySelectorAll('.CHANGEstep')[i].addEventListener('click', function(){

            const REQUESTit = document.querySelector('.REQUESTit');
            var inputClient = document.querySelector('[name="inputClient"]').value != '' ? document.querySelector('[name="inputClient"]').value.split(' ').length >= 2 ? document.querySelector('[name="inputClient"]').value.split(' ')[1] != '' ? true : false : false : false;
            const inputPhone = document.querySelector('[name="inputPhone"]').value;
            const inputDdd = document.querySelector('[name="inputDdd"]').value;

            if(inputClient && inputPhone.replace(/[^\d]+/g,'').length >= 8 && inputDdd.length === 2){
                
                REQUESTit.querySelector('.SECTIONinpt[checked]').removeAttribute('checked');
                REQUESTit.querySelector(`[js-target="${this.getAttribute('data-for')}"]`).setAttribute('checked', '');

                REQUESTit.style.height = `${REQUESTit.querySelector('.SECTIONinpt[checked]').offsetHeight}px`;
                
                REQUESTit.querySelector('[name="INPUTradio"][checked]').removeAttribute('checked');
                REQUESTit.querySelector(`#${this.getAttribute('data-for')}[name="INPUTradio"]`).setAttribute('checked', '');
                
                REQUESTit.querySelector('.SECTIONinpt[checked]').getElementsByTagName('INPUT')[0].value == '' ?
                REQUESTit.querySelector('.SECTIONinpt[checked]').getElementsByTagName('INPUT')[0].select()
                : null;
            }
            else {
                if(!inputClient){
                    document.querySelector('[name="inputClient"]').classList.add('inputEmpty');
                    setTimeout(function(){
                        document.querySelector('[name="inputClient"]').classList.remove('inputEmpty')
                    }, 600);
                }

                if(document.querySelector('[name="inputDdd"]').value.length !== 2){
                    document.querySelector('[name="inputDdd"]').classList.add('inputEmpty');
                    setTimeout(function(){
                        document.querySelector('[name="inputDdd"]').classList.remove('inputEmpty')
                    }, 600);
                }

                if(document.querySelector('[name="inputPhone"]').value.length <= 8){
                    document.querySelector('[name="inputPhone"]').classList.add('inputEmpty');
                    setTimeout(function(){
                        document.querySelector('[name="inputPhone"]').classList.remove('inputEmpty')
                    }, 600);
                }
            }
        });
    }
    // document.querySelectorAll('.CHANGEstep').forEach(function(data){
    // });

    document.querySelector('.COMMENTline').addEventListener('click', function(){
        const COMMENTline = new Array();
        Object.entries(JSON.parse(sessionStorage.itemCart)).map(function(elem, ind){

            const EXTRAstr = new Array();
            elem[1].extra[0].map(function(data, ind){

                EXTRAstr.push(`
                <div class="CARDinc" js-somar="${elem[0]}">
                    <div>
                        <span class="NAMEANDval">${data[0]} por <strong>${Number(data[3]).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</strong></span>
                        ${data[2] != '' ? `<span class="ITEMDESval">${data[2]}</span>` : ''}
                    </div>
                    <div class="HANDLEitem">
                        <button type="button" js-limited="${data[1]},${ind}" name="buttonDecrement">-</button>
                        <input type="text" disabled="disabled" name="inputHandle" value="${elem[1].extra[1][ind][0]}">
                        <button type="button" js-limited="${data[1]},${ind}" name="buttonIncrement">+</button>
                    </div>
                </div>`);
            });
            
            const reduceInc = new Array();
            elem[1].extra[1].map(function(data){
                reduceInc.push(data[0] * data[1])
            });

            var total = reduceInc.reduce(function(total, numero){
                return total + numero;
            }, 0);

            COMMENTline.push(`
            <li>
                <div><p><span>${elem[1].amount}un</span><span>${elem[1].title}</span></p><button type="button" class="COMMENTact"></button></div>
                <div class="CONTENTadd">
                    ${EXTRAstr.length != 0 ? `
                    <h4>Adicional de ingrediente?</h4>
                    <div class="EXTRAinc">
                        ${EXTRAstr.join('\n')}
                        <div class="ITEMttl">
                            <span>Total: ${Number((elem[1].price * elem[1].amount) + total).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                        </div>
                    </div>` : ''}
                    <h4>Algum comentário?</h4>
                    <div class="COMMENTdata">
                        <textarea name="commentText" maxlength="140" placeholder="Ex: tirar a cebola, carne mal passada etc.">${elem[1].comment != null ? elem[1].comment : ''}</textarea>
                        <div class="SUBMITtxt">
                            <span>0 / 140</span>
                            <button type="button" data-comment="${elem[0]}">Salvar comentário</button>
                        </div>
                    </div>
                </div>
            </li>`);
        });
    
        document.body.insertAdjacentHTML('beforeend', `
    <div class="COMMENTcart">
        <div class="COMMENTinst">
            <div class="COMMENTmodal">
                ${COMMENTline.join('\n')}
            </div>
        </div>
    </div>`);


    document.querySelectorAll('[name="buttonDecrement"]').forEach(function(data){
        data.addEventListener('click', function(){
            const inputHandle = this.parentNode.querySelector('[name="inputHandle"]');
            const sessionStr = JSON.parse(sessionStorage.itemCart);
            const itemCart = JSON.parse(sessionStorage.itemCart)[this.parentNode.parentNode.getAttribute('js-somar')]

            if(Number(inputHandle.value)-1 >= 0){
                inputHandle.value = --inputHandle.value;

                sessionStr[this.parentNode.parentNode.getAttribute('js-somar')].extra[1][this.getAttribute('js-limited').split(',')[1]][0] = itemCart.extra[1][this.getAttribute('js-limited').split(',')[1]][0]-1;

                sessionStorage.itemCart = JSON.stringify(sessionStr)

                const reduceInc = new Array();
                JSON.parse(sessionStorage.itemCart)[this.parentNode.parentNode.getAttribute('js-somar')].extra[1].map(function(data){
                    reduceInc.push(data[0] * data[1])
                });

                var total = reduceInc.reduce(function(total, numero){
                    return total + numero;
                }, 0);

                this.parentNode.parentNode.parentNode.querySelector('.ITEMttl').getElementsByTagName('SPAN')[0].innerHTML = `Total: ${Number((itemCart.price * itemCart.amount) + total).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;

                bracael.refreshItemAside(this.parentNode.parentNode.getAttribute('js-somar'), Number((itemCart.price * itemCart.amount) + total))
            }
            else {
                this.parentNode.classList.add('LIMITEDinst')
                setTimeout(()=>{
                    this.parentNode.classList.remove('LIMITEDinst')
                }, 300)
            }
        });
    });

    document.querySelectorAll('[name="buttonIncrement"]').forEach(function(data){
        data.addEventListener('click', function(){
            const inputHandle = this.parentNode.querySelector('[name="inputHandle"]');
            const sessionStr = JSON.parse(sessionStorage.itemCart);
            const itemCart = JSON.parse(sessionStorage.itemCart)[this.parentNode.parentNode.getAttribute('js-somar')];

            if(Number(inputHandle.value) <= Number(this.getAttribute('js-limited').split(',')[0])-1){
                inputHandle.value = ++inputHandle.value;

                sessionStr[this.parentNode.parentNode.getAttribute('js-somar')].extra[1][this.getAttribute('js-limited').split(',')[1]][0] = itemCart.extra[1][this.getAttribute('js-limited').split(',')[1]][0]+1;

                sessionStorage.itemCart = JSON.stringify(sessionStr)

                const reduceInc = new Array();
                JSON.parse(sessionStorage.itemCart)[this.parentNode.parentNode.getAttribute('js-somar')].extra[1].map(function(data){
                    reduceInc.push(data[0] * data[1])
                });

                var total = reduceInc.reduce(function(total, numero){
                    return total + numero;
                }, 0);

                this.parentNode.parentNode.parentNode.querySelector('.ITEMttl').getElementsByTagName('SPAN')[0].innerHTML = `Total: ${Number((itemCart.price * itemCart.amount) + total).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`;

                bracael.refreshItemAside(this.parentNode.parentNode.getAttribute('js-somar'), Number((itemCart.price * itemCart.amount) + total))
            }
            else {
                this.parentNode.classList.add('LIMITEDinst')
                setTimeout(()=>{
                    this.parentNode.classList.remove('LIMITEDinst')
                }, 300)
            }
        });
    });

        for(let i = 0; i < document.querySelectorAll('.COMMENTact').length; i++){
            document.querySelectorAll('.COMMENTact')[i].addEventListener('click', function(){

                const dataComment = this.parentNode.parentNode.querySelector('.CONTENTadd');
                const dataCommentStyle = document.querySelector('.CONTENTadd[style]');
    
                dataComment != dataCommentStyle ?
                $(dataCommentStyle).animate({ height: 'toggle' }, 300, function(){
                    this.removeAttribute('style');
                })
                : null;
    
                $(dataComment).animate({ height: 'toggle' }, 200, function(){
                    this.querySelector('[name="commentText"]').value != '' ?
                    null
                    : this.querySelector('[name="commentText"]').select();

                    dataComment.style.display != 'block' ?
                        this.removeAttribute('style')
                    : null;
                });
            });
        }

        document.querySelectorAll('.COMMENTdata').forEach(function(data){
            const commentText = data.querySelector('[name="commentText"]');
            const dataComment = data.querySelector('[data-comment]')
            commentText.addEventListener('input', function(){
                data.getElementsByTagName('SPAN')[0].innerHTML = `${commentText.value.length} / 140`;
            });

            dataComment.addEventListener('click', function(){
                const itemCart = JSON.parse(sessionStorage.itemCart);
                const commentStr = commentText.value.trim() != '' ? commentText.value : null;

                if(itemCart[this.getAttribute('data-comment')].comment != commentStr){
                    commentText.value != '' ?
                        itemCart[this.getAttribute('data-comment')].comment = commentText.value.trim()
                        : itemCart[this.getAttribute('data-comment')].comment = null;
                    sessionStorage.itemCart = JSON.stringify(itemCart);

                    bracael.refreshCommentAside(this.getAttribute('data-comment'))

                    this.classList.add('SUCESSbtn');
                    setTimeout(()=>{
                        this.classList.remove('SUCESSbtn');
                    }, 500);
                }
                else {
                    data.classList.add('FAILact');
                    setTimeout(()=>{
                        data.classList.remove('FAILact');
                    }, 400)
                }
            });
        });
        
        const COMMENTcart = document.querySelector('.COMMENTcart');
        $(COMMENTcart).fadeIn(200);
        COMMENTcart.querySelector('.COMMENTmodal').insertAdjacentHTML('beforebegin', '<div class="SCREENmodal CLOSEmodal" ></div>');
        // console.log(Number(INSERTrate.options[INSERTrate.options.selectedIndex].value))

        if(document.body.contains(document.querySelector('.CLOSEmodal'))){
            document.querySelector('.CLOSEmodal').addEventListener('click', function click(e){
                $(COMMENTcart).fadeOut(200, function() {
                    this.remove();
                    // Animation complete
                  });
                this.removeEventListener('click', click);
            });}

    });


    localStorage.lastPurchase = new Date()


    document.getElementById('DEMANDit').addEventListener('click', function(){
    if(bracael.resumeCart() >= snapshot.val().info.minvalue){
        const INSERTrate = document.getElementById('INSERTrate');
        const inputClient = document.querySelector('[name="inputClient"]').value.trim();
        const inputDdd = document.querySelector('[name="inputDdd"]').value.trim();
        const inputPhone = document.querySelector('[name="inputPhone"]').value.trim();
        const inputRoad = document.querySelector('[name="inputRoad"]').value.trim();
        const inputNumber = document.querySelector('[name="inputNumber"]').value.trim()
        const inputExtra = document.querySelector('[name="inputExtra"]').value.trim();

        if(INSERTrate.options[INSERTrate.options.selectedIndex].value != '' && inputClient.value != '' && inputRoad.value != '' && inputNumber.value != ''){

            const orderCart = new Array();
            const comandCart = new Array();
            const detailCart = new Array();
            Object.entries(JSON.parse(sessionStorage.itemCart)).map(function(data,ind,obj){
                const lineComment = '*' +data[1].amount+ 'x* ```' +data[1].title+ '```';

                const lineExtra = new Array();
                const extraItem = new Array();
                const SYSTEMitemExtra = new Array();
                data[1].extra[1].map(function(item, i){

                    if(item[0] != 0){
                        lineExtra.push(`\n♨️ _${item[0]} extra de ${data[1].extra[0][i][0]}_`)
                        console.log(data[1].title, item)
                    
                        SYSTEMitemExtra.push({
                            item: data[1].extra[0][i][0],
                            amount: item[0],
                            price: item[1]
                        })
                        // console.log(item)

                        extraItem.push(
                    `<li>
                        <span>--</span>
                        <span>--</span>
                        <span>Extra de ${data[1].extra[0][i][0]}</span>
                        <span>${item[0]}un</span>
                        <span>${Number(item[0] * item[1]).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                    </li>`)
                    }
                });

                detailCart.push({
                    amount: data[1].amount,
                    price: data[1].price,
                    title: data[1].title,
                    extra: SYSTEMitemExtra,
                    comment: data[1].comment,
                    about: data[1].about,
                    id: data[0]
                })
                comandCart.push(`${lineComment}${data[1].comment != null ? `\n‼️ *${data[1].comment}*` : ''}${lineExtra.join('')}`);
                orderCart.push(`
                    <li>
                        <span>${new Array(3 + 1 - (ind + '').length).join('0') + ++ind}</span>
                        <span>${data[0].substring(data[0].length-11, data[0].length-1)}</span>
                        <span>${data[1].title}</span>
                        <span>${data[1].amount}un</span>
                        <span>${Number(data[1].price * data[1].amount).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                    </li>
                    ${extraItem.join('\n')}
                `);
            });


            document.body.insertAdjacentHTML('beforeend', `
            <div class="COMANDAmodal">
            <div class="COMANDinst">
                <div class="CONTENTmodal">
                    <input id="FIRSTstep" name="COMMANDradio" type="radio" checked="">
                    <input id="SECONDstep" name="COMMANDradio" type="radio">
                <div class="COMANDAscreen">
                <div class="SECTIONinpt" js-target="FIRSTstep" checked="">
                    <p class="IMPORTANTline"><b>${snapshot.val().info.brand} Hamburgueria</b></p>
                    <p class="IMPORTANTline">CNPJ ${snapshot.val().info.cnpj}</p>
                    <p class="IMPORTANTline">${snapshot.val().info.address}, ${snapshot.val().info.number} - loja 2 - ${snapshot.val().info.region} - ${snapshot.val().info.unity}</p>
                    <p>Esta nota não substitui o cupom fiscal, portanto, é uma forma fácil de que o cliente está acostumado a visualizar os detalhes no pedido.</p>
                    <strong>
                        <span>#</span>
                        <span>CÓDIGO</span>
                        <span>DESCRIÇÃO</span>
                        <span>QTD.</span>
                        <span>TOTAL</span>
                    </strong>
                    <div class="COMMANDlist">
                        ${orderCart.join('\n')}
                        <div class="COMMANDsubtotal">
                            <span>SUBTOTAL</span>
                            <span>${Number(bracael.resumeCart()).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                        </div>
                        </div>
                        <div class="COMMANDfrete">
                            <span><small>ACRESCIMO</small>VALOR DA ENTREGA</span>
                            <span>${Number(snapshot.val().delivery[INSERTrate.options[INSERTrate.options.selectedIndex].getAttribute('js-key')].rate).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</}</span>
                        </div>
                        <div class="COMMANDfooter">
                            <b>TOTAL A PAGAR</b>
                            <span>${Number(bracael.totalCart(snapshot.val().delivery[INSERTrate.options[INSERTrate.options.selectedIndex].getAttribute('js-key')].rate)).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                        </div>
                        <div class="COMMANDsend">
                            <em>Tenha o WhatsApp instalado em seu Smarthphone para prosseguir com o envio do pedido</em>
                            <button type="button" class="NEXTscrn STRAPboot" data-for="SECONDstep">Próximo!</button>
                        </div>
                </div>
                <div class="SECTIONinpt" js-target="SECONDstep">
                    <div class="PAYMENTmethod">
                        <h3>Forma de pagamento</h3>
                        <p>Informe o método de pagamento para que tenhamos uma entrega rápida e nosso atendimento seja eficaz. A entrega melhora muito com alguns detalhes importante.</p>
                        <div class="METHODloop">
                            <div class="CHECKBOXgr">
                                <input type="checkbox" class="INPUTctrl" name="SWITCHit" id="PAYCAHSHmethod">
                                <label class="STATUSlabel" for="PAYCAHSHmethod">Pagar com dinheiro?</label>
                            </div>
                        </div>
                        <div class="METHODloop">
                            <div class="CHECKBOXgr">
                                <input type="checkbox" class="INPUTctrl" name="SWITCHit" id="PAYCREDITmethod">
                                <label class="STATUSlabel" for="PAYCREDITmethod">Pagar no cartão?</label>
                            </div>
                        </div>
                    </div>

                    <span name="commentRquestTitle">Mais alguma coisa?</span>
                    <textarea name="commentRequest" placeholder="Ex. interphone está com defeito"></textarea>
                    <div class="COMMANDsend">
                        <em>Tenha o WhatsApp instalado em seu Smarthphone para prosseguir com o envio do pedido</em>
                        <button type="button" class="WHATSAPPbtn STRAPboot">Enviar pedido!</button>
                        <strong><span>ou</span></strong>
                        <button type="button" class="NEXTscrn" data-for="FIRSTstep">Voltar</button>
                    </div>
                </div>
                </div>
                </div>
            </div>
            </div>`);



            document.getElementById('PAYCAHSHmethod').addEventListener('change', function() {
                
                if(this.checked) {
                    this.parentElement.insertAdjacentHTML('afterend', `
                    <div class="CASHinpt">
                        <div class="CASHinst">
                            <span>R$</span>
                            <input type="tel" value="0" name="AMOUNTcash" maxlength="3">
                            <em>Troco?</em>
                        </div>
                    </div>`);

                    $('.CASHinpt').animate({ height: 'toggle' }, 300, function(){
                        document.querySelector('.COMANDAscreen').style.height = `${document.querySelector('.COMANDAscreen').querySelector('.SECTIONinpt[checked]').offsetHeight}px`;
                    });

                } else {
                    $('.CASHinpt').animate({ height: 'toggle' }, 300, function(){
                        this.remove();
                        document.querySelector('.COMANDAscreen').style.height = `${document.querySelector('.COMANDAscreen').querySelector('.SECTIONinpt[checked]').offsetHeight}px`;
                    });
                }
            });

            const COMANDAmodal = document.querySelector('.COMANDAmodal');
            $(COMANDAmodal).fadeIn(200, function(){
                document.querySelector('.COMANDAscreen').style.height = `${document.querySelector('.CONTENTmodal').querySelector('.SECTIONinpt[checked]').offsetHeight}px`;
            });
            COMANDAmodal.querySelector('.CONTENTmodal').insertAdjacentHTML('beforebegin', '<div class="SCREENmodal CLOSEmodal" ></div>');

            if(document.body.contains(document.querySelector('.CLOSEmodal'))){
                document.querySelector('.CLOSEmodal').addEventListener('click', function click(e){
                    $(COMANDAmodal).fadeOut(200, function() {
                        this.remove();
                        // Animation complete
                      });
                    this.removeEventListener('click', click);
                });}
                

            document.querySelectorAll('.NEXTscrn').forEach(function(data){
                data.addEventListener('click', function(){
                    const CONTENTmodal = document.querySelector('.CONTENTmodal');
                    const COMANDAscreen = document.querySelector('.COMANDAscreen');

                    COMANDAscreen.querySelector('.SECTIONinpt[checked]').removeAttribute('checked');
                    COMANDAscreen.querySelector(`[js-target="${data.getAttribute('data-for')}"]`).setAttribute('checked', '');

                    COMANDAscreen.style.height = `${COMANDAscreen.querySelector('.SECTIONinpt[checked]').offsetHeight}px`;

                    CONTENTmodal.querySelector('[name="COMMANDradio"][checked]').removeAttribute('checked');
                    CONTENTmodal.querySelector(`#${data.getAttribute('data-for')}[name="COMMANDradio"]`).setAttribute('checked', '');
                });
            });


            var TRADEforCash = null;
            document.querySelector('.WHATSAPPbtn').addEventListener('click', function(){
                if(document.getElementById('PAYCAHSHmethod').checked || document.getElementById('PAYCREDITmethod').checked){
                    var commentRequest = document.querySelector('[name="commentRequest"]');
                    var commentRequest = commentRequest.value != '' ? `\n💬 _Comentário:_ ${commentRequest.value.trim()}` : '';

                    if(document.getElementById('PAYCAHSHmethod').checked && document.getElementById('PAYCREDITmethod').checked){
                        const AMOUNTcash = document.querySelector('[name="AMOUNTcash"]').value;
                        var TRADEcash = 'Dinheiro e Cartão';
                        var TRADEfor = '';
                        TRADEforCash = AMOUNTcash != 0 ? Number(AMOUNTcash) : null
                        AMOUNTcash != 0 ? TRADEfor = '\n💰 _Troco para:_ ```' +Number(AMOUNTcash).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })+ '```' : null;
                    
                    }
                    else if(document.getElementById('PAYCAHSHmethod').checked){
                        const AMOUNTcash = document.querySelector('[name="AMOUNTcash"]').value;
                        var TRADEcash = 'Dinheiro';
                        var TRADEfor = '';
                        TRADEforCash = AMOUNTcash != 0 ? Number(AMOUNTcash) : null
                        AMOUNTcash != 0 ? TRADEfor = '\n💰 _Troco para:_ ```' +Number(AMOUNTcash).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })+ '```' : null;
                    }
                    else if(document.getElementById('PAYCREDITmethod').checked){
                        var TRADEcash = 'Cartão';
                        var TRADEfor = '';
                    }

                    localStorage.clientApp = JSON.stringify({
                        name: inputClient,
                        street: inputRoad,
                        number: inputNumber,
                        extra: inputExtra,
                        ddd: inputDdd,
                        phone: inputPhone
                    });

                    database.ref('request').push({
                        client: inputClient,
                        comment: document.querySelector('[name="commentRequest"]').value,
                        detail: detailCart,
                        region: snapshot.val().delivery[INSERTrate.options[INSERTrate.options.selectedIndex].getAttribute('js-key')].zone,
                        district: `${snapshot.val().delivery[INSERTrate.options[INSERTrate.options.selectedIndex].getAttribute('js-key')].district != '' ? snapshot.val().delivery[INSERTrate.options[INSERTrate.options.selectedIndex].getAttribute('js-key')].district : ''}`,
                        number: inputNumber,
                        payment: TRADEcash,
                        status: "Em espera",
                        street: inputRoad,
                        complement: document.querySelector('[name="inputExtra"]').value,
                        tel: `(${inputDdd}) ${inputPhone}`,
                        time: new Date().toISOString(),
                        subvalue: bracael.resumeCart(),
                        tovalue: bracael.totalCart(snapshot.val().delivery[INSERTrate.options[INSERTrate.options.selectedIndex].getAttribute('js-key')].rate),
                        delivery: Number(snapshot.val().delivery[INSERTrate.options[INSERTrate.options.selectedIndex].getAttribute('js-key')].rate),
                        trade: TRADEforCash
                    })

                    window.open('https://api.whatsapp.com/send?phone=55'+snapshot.val().info.whatsapp.replace(/[^0-9]+/g, '')+'&text='+window.encodeURIComponent('*# DADOS PESSOAIS*\n👤 _Nome:_ ```' +inputClient+ '```\n📞 _Telefone:_ ```(' +inputDdd+ ') ' +inputPhone+ '```\n🌎 _Endereço:_ ```' +inputRoad+ ', ' +inputNumber+`${inputExtra != '' ? ` - ${inputExtra}` : ''}`+ ' - ' +snapshot.val().delivery[INSERTrate.options[INSERTrate.options.selectedIndex].getAttribute('js-key')].zone+`${snapshot.val().delivery[INSERTrate.options[INSERTrate.options.selectedIndex].getAttribute('js-key')].district != '' ? ` - ${snapshot.val().delivery[INSERTrate.options[INSERTrate.options.selectedIndex].getAttribute('js-key')].district}` : ''}`+'```\n\n*# SOBRE O PEDIDO*\n' +comandCart.join('\n')+ '\n\n*# PAGAMENTO*' +commentRequest+ '\n💰 _Forma de pagamento:_ ```' +TRADEcash+ '```' +TRADEfor+ '\n💰 *_Valor a receber:_* ```' +Number(bracael.totalCart(snapshot.val().delivery[INSERTrate.options[INSERTrate.options.selectedIndex].getAttribute('js-key')].rate)).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })+ '```'));


                    document.querySelector('.CONTENTmodal').innerHTML = `
                    <div class="CLASSrequestSucess">
                        <div class="HEADitemSucess"></div>
                    <div class="TEXTitemSucess">
                        <span>Pedido registrado!</span>
                        <p>Você está sendo redicionado para o WhatsApp, confirme a mensagem pronta para nosso contato. Desde já muito obrigado.</p>
                    </div>
                    </div>`;

                    $('.CONTENTmodal').animate({ height: $('.CLASSrequestSucess').outerHeight(true) }, 200);
                    document.querySelector('.CLOSEmodal').remove();
                    sessionStorage.removeItem('itemCart');

                    setTimeout(()=>{
                        window.location.href = '/';
                    }, 5000)

                }
                else {
                    const CONTENTmodal = document.querySelector('.CONTENTmodal');
                    CONTENTmodal.classList.add('FAILact');
                    setTimeout(()=>{
                        CONTENTmodal.classList.remove('FAILact');
                    }, 400)
                }
            });

        }
        else {

            console.log('ELSE');
            for(let i = 0; i < document.querySelectorAll('.inputType').length; i++){
                if(document.querySelectorAll('.inputType')[i].value == ''){
                    document.querySelectorAll('.inputType')[i].classList.add('inputEmpty')
                    setTimeout(function(){
                        document.querySelectorAll('.inputType')[i].classList.remove('inputEmpty')
                    }, 600)
                }
            }
            
            if(INSERTrate.options[INSERTrate.options.selectedIndex].value == ''){
                document.getElementById('SELECTopt').classList.add('inputEmpty')
                setTimeout(function(){
                    document.getElementById('SELECTopt').classList.remove('inputEmpty')
                }, 600)
            }
        }
    }
    else {
        alert(`O valor mínimo de entregas é de ${Number(snapshot.val().info.minvalue).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`)
    }
    });

}
else {

    console.log('ELSE')

    if(snapshot.val().status){
        document.getElementById('CONFIRMform').innerHTML = `
        <small>O valor mínimo de entregas é de ${Number(snapshot.val().info.minvalue).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</small>`;
    }
    else {
        document.getElementById('CONFIRMform').innerHTML = `
        <small>Estamos fechado no momento, volte quando o delivery estiver em aberto.</small>`;
    }

}
});}
else {
    if(document.body.contains(document.getElementById('CONFIRMform')) ){
        document.getElementById('CONFIRMform').innerHTML = '<small>Carrinho vazio!</small>'
    }
}


}





