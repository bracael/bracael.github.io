//<![CDATA[

firebase.auth().onAuthStateChanged(function(user) {
    if(user){

document.body.innerHTML = `
<div id="root">
<aside id="PUSHmenu">
    <section class="LOGOmarc"></section>
    <ul>
        <ol>
            <li><a class="HREFhomeItem" href="?main=index">Área de serviço</a></li>
        </ol>
        <ol>
            <li><a class="HREFfoodItem" href="?main=products">Meus produtos</a></li>
            <li><a class="HREFsttcItem" href="javascript:void(0)" onclick="alert('Bracael.COM\\n'+'Versão Alpha, 16.09.2020\\n'+'O Conteúdo para está página estará disponivel em breve.')">Estatísticas</a></li>
            <li><a class="HREFratgItem" href="javascript:void(0)" onclick="alert('Bracael.COM\\nVersão Alpha, 16.09.2020\\nO Conteúdo para está página estará disponivel em breve.')">Avaliações</a></li>
            <li><a class="HREFcnfgItem" href="?main=settings">Configurações</a></li>
        </ol>
        <ol>
            <li><a class="HREFhelpItem" href="javascript:void(0)" onclick="alert('Bracael.COM\\nVersão Alpha, 16.09.2020\\nO Conteúdo para está página estará disponivel em breve.')">Suporte</a></li>
            <li><a class="HREFfeedItem" href="javascript:void(0)" feedback="" onclick="alert('Bracael.COM\\nVersão Alpha, 16.09.2020\\nO Conteúdo para está página estará disponivel em breve.')">Enviar feedback</a></li>
        </ol>
        <footer>
            <span>© COPYRIGTH 2020<br/>Bracael – Todos os direitos reservados.</span>
            <span>Painel administrativo para parceiros.</span>
            <span>Last time updated May 9, 2020</span>
        </footer>
    </ul>
</aside>

<main>
    <header>
        <span>Carregando...</span>
        <div>
            <button type="text" name="pushNotify"></button>
            <button type="text" name="userEnd">Sair</button>
        </div>
    </header>
    <article>

    <span>Carregando...</span>
    <!--  // Carrendo...  -->

    </article>
</main>
</div>`;

document.querySelector('[name="userEnd"]').addEventListener('click', function(){
    firebase.auth().signOut()
});

const database = firebase.database();
const ARRAYweek = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
const ARRAYen = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"]
const ARRAYenglish = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const SEMANArst = [{
    "sun": [["",""]]
},{
    "mon": [["09:00","17:00"]]
},{
    "tue": [["09:00","17:00"]]
},{
    "wed": [["09:00","17:00"]]
},{
    "thu": [["09:00","17:00"]]
},{
    "fri": [["09:00","17:00"]]
},{
    "sat": [["",""]]
},];
var url = new URL(window.location.href);
var main = url.searchParams.get('main');
var edit = url.searchParams.get('edit');

console.log(parseInt(Math.random()*1000000000, 10))

fetch(firebaseConfig.databaseURL+'/.json')
.then((response) => response.json())
.then((result) => {
    const feed = result.feed;

if(main != null && main != ''){
if(main === 'index'){
    console.log('main=index')

    const RECEBIDOSit = new Array();

    result.request != undefined ?
    Object.entries(result.request).sort(function (a, b) {
        return (a[1].time < b[1].time) ? 1 : ((b[1].time < a[1].time) ? -1 : 0);
    }).map(function(data, i){

        const DETAILres = new Array();
        data[1].detail.map(function(item){

            const extraItem = new Array();

            item.extra != undefined ?
            item.extra.map(function(extra, ii){
                extraItem.push(`
                <div>
                    <span>${extra.amount}un</span><span>${extra.item}</span><span>${Number(extra.price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                </div>`)
            }) : null;

            DETAILres.push(`
            <div>
                <div>
                    <span>${item.amount}un</span><span>${item.title}</span><span>${Number(item.price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                </div>
                ${item.extra != undefined ? extraItem.join('\n') : ''}
                ${item.comment != undefined ? `
                <div>
                    <span>--</span><span>${item.comment != undefined ? item.comment : ''}</span><span></span>
                </div>` : ''}
                
            </div>`)
        })

        const ARRAYdate = new Intl.DateTimeFormat('pt-BR', { weekday: 'long', day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: 'numeric', hour12: true });
        const [{ value: weekday },,{ value: day },,{ value: month },,{ value: year },,{ value: hour },,{ value: minute },,{ value: hour12 }] = ARRAYdate.formatToParts(new Date(data[1].time));

        RECEBIDOSit.push(`
        <div class="CARDitemData" data-id="${data[0]}">
            <div class="CLIENTinfoData">
                <div class="BASEinfoClient">
                    <div class="INFOcliente">
                        <span>${data[1].client}</span>
                        <p>${data[1].street}, ${data[1].number} ${data[1].adjunct != undefined ? ` - ${data[1].adjunct}` : '' }<br>${data[1].region}${data[1].district != '' ? ` - ${data[1].district}` : ''}</p>
                    </div>
                    <div>
                        Pagamento: ${data[1].payment}
                    </div>
                    <div class="INFOtimestamp">
                        ${day} ${month} ${year} ás ${hour}:${minute} ${hour12}
                    </div>
                </div>
            </div>
            <div class="BASEinfoRequest">
                <div class="BTTMitemButton">
                    <button type="button" name="BTTNcomandConfirm" js-base="${i}">Aceitar pedido</button>
                    <button type="button" name="BTTNcomandCancel" js-base="${i}">Recusar</button>
                </div>
                <div class="COMANDAitemData">
                    <p>
                        <span>QTD.</span>
                        <span>DESCRIÇÃO</span>
                        <span>TOTAL</span>
                    </p>
                    ${DETAILres.join('\n')}
                </div>
                <div class="ITEMbox"><p>Total de ${Number(data[1].tovalue).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p></div>
            </div>
        </div>`);

    }) : null;


    const WAITINGinst = new Array();
    result.order != undefined ?
    Object.entries(result.order).sort(function (a, b) {
        return (a[1].time < b[1].time) ? 1 : ((b[1].time < a[1].time) ? -1 : 0);
    }).map(function(data, i){

        const ARRAYdate = new Intl.DateTimeFormat('pt-BR', { weekday: 'long', day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: 'numeric', hour12: true });
        const [{ value: weekday },,{ value: day },,{ value: month },,{ value: year },,{ value: hour },,{ value: minute },,{ value: hour12 }] = ARRAYdate.formatToParts(new Date(data[1].time));

        const info = result.business.info;
        WAITINGinst.push(`
        <div class="CARDitemWait" data-id="${data[0]}">
            <div>
                <div class="CARDleftIitem">
                    <div class="CLASSitemHead">
                        <span>${data[1].client}</span>
                        <p>${data[1].street}, ${data[1].number}${data[1].complement != '' ? ` - ${data[1].complement}` : ''}<br/>${data[1].region}${data[1].district != '' ? ` - ${data[1].district}` : ''}</p>
                    </div>
                    <div class="CLASSbttnModal">
                        <button type="button" name="WINDOWmodalCliente" js-win="${i}"><i class="CROSSicon"></i>Cliente</button>
                        <button type="button" name="WINDOWmodalComanda" js-win="${i}"><i class="CROSSicon"></i>Comanda</button>
                    </div>
                </div>
                <div class="CARDrightIitem">
                    <div class="RIGHTitemBttm">
                        <div class="CLASSitemSecond ITEMnone">
                            <button type="button" name="WINDOWmodalStatus" js-win="${i}">Editar status</button>
                        </div>
                        <div class="CLASSitemFirst">
                            <span>STATUS</span>
                            <p>${data[1].status}</p>
                        </div>
                    </div>
                    <div class="RIGHTitemMaster">
                        <span>TOTAL: ${Number(data[1].tovalue).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                        <button type="button" name="BTTNitemRemove" js-win="${i}"><svg class="SVGitemRemove" enable-background="new 0 0 515.556 515.556" height="12" viewBox="0 0 515.556 515.556" width="12" xmlns="http://www.w3.org/2000/svg"><path d="m64.444 451.111c0 35.526 28.902 64.444 64.444 64.444h257.778c35.542 0 64.444-28.918 64.444-64.444v-322.222h-386.666z"/><path d="m322.222 32.222v-32.222h-128.889v32.222h-161.111v64.444h451.111v-64.444z"/></svg>Remover pedido</button>
                    </div>
                </div>
            </div>
            <div>
                <div class="CLASSitemBttns">
                    <button type="button" name="WHATSsendContact" js-win="${i}"><i class="CROSSicon"></i>Enviar</button>
                    <button type="button" name="BTTNcssRota" onclick="javascript:window.open('https://www.google.com/maps/dir/${info.address.replace(/ /gi,'+')},+${info.number}+-+${info.region.replace(/ /gi,'+')},+${info.region.replace(/ /gi,'+')}+-+${info.unity},+${info.zipcode}/${data[1].street.replace(/ /gi,'+')},+${data[1].number}+-+${data[1].region.replace(/ /gi,'+')},+${info.region.replace(/ /gi,'+')}+-+${info.unity}')"><i class="CROSSicon"></i>Rota</button>
                    <button type="button" name="BTTNcssLocal" onclick="javascript:window.open('https://www.google.com/maps/place/${data[1].street.replace(/ /gi,'+')},+${data[1].number}+-+${data[1].region.replace(/ /gi,'+')},+${info.region.replace(/ /gi,'+')}+-+${info.unity}')"><i class="CROSSicon"></i>Local</button>
                    <button type="button" name="BTTNcssPrint" onClick="alert('Estamos trabando, este recurso estará disponivel em breve.')"><i class="CROSSicon"></i>Imprimir</button>
                </div>
                <div class="CLASSitemTimestamp">
                    ${day} ${month} ${year} ás ${hour}:${minute} ${hour12}
                </div>
            </div>
        </div>`);
    }) : null;


    document.querySelector('HEADER').getElementsByTagName('SPAN')[0].innerHTML = 'Área de serviço';
    document.getElementsByTagName('ARTICLE')[0].innerHTML = `
    <div class="HEADERnavScreen">
        <ul>
            <li><label for="RECEBIDOSfor" data-target="RECEBIDOSit" disabled="disabled">Novos pedidos</label></li>
            <li><label for="ATENDIMENTOfor" data-target="ATENDIMENTOit">Em atendimento</label></li>
        </ul>
    </div>
    <div class="AREAofService">
        <div id="DASHBOARDit">
        <input type="radio" id="RECEBIDOSfor" name="INPUTradio" value="huey">
        <input type="radio" id="ATENDIMENTOfor" name="INPUTradio" value="dewey">
            <div class="DASHBOARDinst">
                <div id="RECEBIDOSit" class="SCREENit" checked>
                    ${RECEBIDOSit != 0 ? RECEBIDOSit.join('\n') : '<p>Por enquanto, não há nada por aqui.</p>'}
                </div>
                <div id="ATENDIMENTOit" class="SCREENit">
                    ${WAITINGinst != 0 ? WAITINGinst.join('\n') : '<p>Por enquanto, não há nada por aqui.</p>'}
                </div>
            </div>
        </div>
    </div>
    </div>`;





    document.querySelectorAll('[name="WINDOWmodalCliente"]').forEach(function(data){
        data.addEventListener('click', function(){
        if(!document.body.contains(document.querySelector('.MODALdefault'))){
            const JSwinAtt = this.getAttribute('js-win');
            const JSwinStatus = document.querySelectorAll('.CARDitemWait')[JSwinAtt].getAttribute('data-id');

            const ARRAYdate = new Intl.DateTimeFormat('pt-BR', { weekday: 'long', day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: 'numeric', hour12: true });
            const [{ value: weekday },,{ value: day },,{ value: month },,{ value: year },,{ value: hour },,{ value: minute },,{ value: hour12 }] = ARRAYdate.formatToParts(new Date(result.order[JSwinStatus].time));

            console.log(result.order[JSwinStatus])

            document.body.insertAdjacentHTML('beforeend', `
            <div class="MODALdefault WINDOWmodalCliente">
                <div class="MODALinst">
                    <div class="CONTENTmodal">
                        <div class="MODALelemTitle">
                            <span>${result.order[JSwinStatus].client}</span>
                        </div>
                        <div class="MODALelemMsg">
                            <div class="DIVISORitemP">
                                <p>Endereço</p>
                                <p>${result.order[JSwinStatus].street}, ${result.order[JSwinStatus].number}${result.order[JSwinStatus].complement != '' ? ` - ${result.order[JSwinStatus].complement}` : ''}<br/>${result.order[JSwinStatus].region}${result.order[JSwinStatus].district != '' ? ` - ${result.order[JSwinStatus].district}` : ''}</p>
                            </div>
                            <div class="DIVISORitemP">
                                <p>Telefone</p>
                                <p>${result.order[JSwinStatus].tel}</p>
                            </div>
                            <div class="DIVISORitemP">
                                <p>Pagamento</p>
                                <p>${result.order[JSwinStatus].payment}</p>
                            </div>
                            ${result.order[JSwinStatus].comment != '' ? `
                            <div class="DIVISORitemP">
                                <p>Observação</p>
                                <p>${result.order[JSwinStatus].comment}</p>
                            </div>` : ''}
                            ${result.order[JSwinStatus].trade != undefined ? `
                            <div class="DIVISORitemP">
                                <p>Troco para</p>
                                <p>${Number(result.order[JSwinStatus].trade).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                            </div>` : ''}
                            <div class="DIVISORitemP">
                                <p>TOTAL</p>
                                <p>${Number(result.order[JSwinStatus].tovalue).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                            </div>
                        </div>
                        <div class="MODALelemFooter">
                            <p>${day} ${month} ${year} ás ${hour}:${minute} ${hour12}</p>
                            <button type="button" name="ACTIONitemCancel">Fechar</button>
                        </div>
                    </div>
                </div>
            </div>`);
    
            $('.MODALdefault').fadeIn(200, function(){
                this.querySelector('[name="ACTIONitemCancel"]').addEventListener('click', function(){
                    $('.MODALdefault').fadeOut(200, function(){
                        this.remove();
                    });
                });
            });
            document.querySelector('.MODALdefault').querySelector('.CONTENTmodal').insertAdjacentHTML('beforebegin', '<div class="SCREENmodal CLOSEmodal"></div>');
    
            if(document.body.contains(document.querySelector('.CLOSEmodal'))){
                document.querySelector('.CLOSEmodal').addEventListener('click', function click(e){
                    $('.MODALdefault').fadeOut(200, function(){
                        this.remove();
                    });
                });}

        }
        })
    })

    document.querySelectorAll('[name="WINDOWmodalComanda"]').forEach(function(data){
        data.addEventListener('click', function(){
        if(!document.body.contains(document.querySelector('.MODALdefault'))){
            const JSwinAtt = this.getAttribute('js-win');
            const CARDitemWait = document.querySelectorAll('.CARDitemWait')[JSwinAtt];
            const JSwinStatus = document.querySelectorAll('.CARDitemWait')[JSwinAtt].getAttribute('data-id');


            const orderCart = new Array();
            result.order[JSwinStatus].detail.map(function(item, i){

                const extraItem = new Array();
                item.extra != undefined ?
                item.extra.map(function(extra, i){

                    console.log(extra)
                    extraItem.push(
                    `<li>
                        <span>--</span>
                        <span>--</span>
                        <span>Extra de ${extra.item}</span>
                        <span>${extra.amount}un</span>
                        <span>${Number(extra.price * extra.amount).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                    </li>`)
                }) : null;

                orderCart.push(`
                    <li>
                        <span>${new Array(3 + 1 - (i + '').length).join('0') + ++i}</span>
                        <span>${item.id}</span>
                        <span>${item.title}</span>
                        <span>${item.amount}un</span>
                        <span>${Number(item.price * item.amount).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                    </li>
                    ${extraItem.length != 0 ? extraItem.join('\n') : ''}
                `);
            });
                
            // console.log(orderCart)

            document.body.insertAdjacentHTML('beforeend', `
            <div class="MODALdefault WINDOWmodalComanda">
                <div class="MODALinst">
                        <div class="CONTENTmodal">
                        <p class="IMPORTANTline"><b>${result.business.info.brand} Hamburgueria</b></p>
                        <p class="IMPORTANTline">CNPJ ${result.business.info.cnpj}</p>
                        <p class="IMPORTANTline">${result.business.info.address}, ${result.business.info.number} ${result.business.info.optional != '' ? `- ${result.business.info.optional} -` : '-'} ${result.business.info.region} - ${result.business.info.unity}</p>
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
                                <span>${Number(result.order[JSwinStatus].subvalue).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                            </div>
                        </div>
                        <div class="COMMANDfrete">
                            <span><small>ACRESCIMO</small>VALOR DA ENTREGA</span>
                            <span>${Number(result.order[JSwinStatus].delivery).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</}</span>
                        </div>
                        <div class="COMMANDfooter">
                                <b>TOTAL A PAGAR</b>
                                <span>${Number(result.order[JSwinStatus].tovalue).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                        </div>
                        <div class="COMMANDsend">
                            <em>Agradecemos aos nossos clientes pela preferência.</em>
                        </div>
                    </div>
                </div>
            </div>`);
    
            $('.MODALdefault').fadeIn(200);
            document.querySelector('.MODALdefault').querySelector('.CONTENTmodal').insertAdjacentHTML('beforebegin', '<div class="SCREENmodal CLOSEmodal"></div>');
    
            if(document.body.contains(document.querySelector('.CLOSEmodal'))){
                document.querySelector('.CLOSEmodal').addEventListener('click', function click(e){
                    $('.MODALdefault').fadeOut(200, function(){
                        this.remove();
                    });
                });}
        }
        })
    })

    document.querySelectorAll('[name="BTTNitemRemove"]').forEach(function(data){
        data.addEventListener('click', function(){
        if(!document.body.contains(document.querySelector('.MODALdefault'))){
            const JSwinAtt = this.getAttribute('js-win');
            const CARDitemWait = document.querySelectorAll('.CARDitemWait')[JSwinAtt];
            const JSwinStatus = document.querySelectorAll('.CARDitemWait')[JSwinAtt].getAttribute('data-id');

            document.body.insertAdjacentHTML('beforeend', `
            <div class="MODALdefault" id="REMOVEitem">
                <div class="MODALinst">
                    <div class="CONTENTmodal">
                        <div class="MODALelemTitle">
                            <span>Remover pedido?</span>
                        </div>
                        <div class="MODALelemMsg">Isso removerá este pedido da categoria "Em atendimento" e não será possivél devolver para cá. Deseja removê-lo?</div>
                        <div class="MODALelemFooter">
                            <button type="button" name="ACTIONitemCancel">Cancelar</button>
                            <button type="button" name="ACTIONitemRemove">Remover pedido</button>
                        </div>
                    </div>
                </div>
            </div>`);

            $(REMOVEitem).fadeIn(200, function(){
                this.querySelector('[name="ACTIONitemCancel"]').addEventListener('click', function(){
                    $(REMOVEitem).fadeOut(200, function(){
                        this.remove();
                    });
                });

                this.querySelector('[name="ACTIONitemRemove"]').addEventListener('click', function(){
                    database.ref(`order/${JSwinStatus}`).remove().then(()=>{
                        database.ref(`dump/${JSwinStatus}`).set(result.order[JSwinStatus]).then(()=>{
                            window.location.href = '?main=index';
                        })
                    })
                });
            });
            REMOVEitem.querySelector('.CONTENTmodal').insertAdjacentHTML('beforebegin', '<div class="SCREENmodal CLOSEmodal"></div>');

            if(document.body.contains(document.querySelector('.CLOSEmodal'))){
                document.querySelector('.CLOSEmodal').addEventListener('click', function click(e){
                    $(REMOVEitem).fadeOut(200, function(){
                        this.remove();
                    });
                });}
        }
        })
    })

    document.querySelectorAll('[name="WHATSsendContact"]').forEach(function(data){
        data.addEventListener('click', function(){
            const JSwinAtt = this.getAttribute('js-win');
            const CARDitemWait = document.querySelectorAll('.CARDitemWait')[JSwinAtt];
            const JSwinStatus = document.querySelectorAll('.CARDitemWait')[JSwinAtt].getAttribute('data-id');
            const RESinClient = result.order[JSwinStatus];

            const comandCart = new Array();
            RESinClient.detail.map(function(item){
                const lineComment = '*' +item.amount+ 'x* ```' +item.title+ '```';
                const lineExtra = new Array();
                item.extra != undefined ?
                item.extra.map(function(val){
                    lineExtra.push(`\n♨️ _${val.amount} extra de ${val.item}_`)
                }) : null;
                comandCart.push(`${lineComment}${item.comment != undefined ? `\n‼️ *${item.comment}*` : ''}${lineExtra.join('')}`);
            });
            var commentRequest = RESinClient.comment != '' ? `\n💬 _Comentário:_ ${RESinClient.comment}` : '';
            var TRADEfor = RESinClient.trade != undefined ? '\n💰 _Troco para:_ ```'+RESinClient.trade : '';

            window.open('https://api.whatsapp.com/send?text='+window.encodeURIComponent('*# DADOS PESSOAIS*\n👤 _Cliente:_ ```' +RESinClient.client+ '```\n📞 _Telefone:_ ```' +RESinClient.tel+ '```\n🌎 _Endereço:_ ```' +RESinClient.street+', '+RESinClient.number+ ' - ' +RESinClient.region+ '```\n🌐 _Google Maps:_ ' +`https://www.google.com/maps/dir/${result.business.info.address.replace(/ /gi,'+')},+${result.business.info.number}+-+${result.business.info.region.replace(/ /gi,'+')},+${result.business.info.region.replace(/ /gi,'+')}+-+${result.business.info.unity},+${result.business.info.zipcode}/${RESinClient.street.replace(/ /gi,'+')},+${RESinClient.number}+-+${RESinClient.region.replace(/ /gi,'+')},+${result.business.info.region.replace(/ /gi,'+')}+-+${result.business.info.unity}`+ '\n\n*# SOBRE O PEDIDO*\n' +comandCart.join('\n')+ '\n\n*# PAGAMENTO*' +commentRequest+ '\n💰 _Forma de pagamento:_ ```' +RESinClient.payment+ '```' +TRADEfor+ '\n💰 *_Valor a receber:_* ```' +RESinClient.tovalue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })+ '```'));
        })
    })


    document.querySelectorAll('[name="WINDOWmodalStatus"]').forEach(function(data){
        data.addEventListener('click', function(){
        if(!document.body.contains(document.querySelector('.MODALdefault'))){
        const JSwinAtt = this.getAttribute('js-win');
        const CARDitemWait = document.querySelectorAll('.CARDitemWait')[JSwinAtt];
        const JSwinStatus = document.querySelectorAll('.CARDitemWait')[JSwinAtt].getAttribute('data-id');

        document.body.insertAdjacentHTML('beforeend', `
        <div class="MODALdefault CHANGEradioStatus">
            <div class="MODALinst">
                <div class="CONTENTmodal">
                    <div class="MODALelemTitle">
                        <span>Alterar status</span>
                    </div>
                    <div class="MODALelemMsg">
                        <div>
                            <input type="radio" id="FORitemEspera" name="radioStatus" value="Em espera"${result.order[JSwinStatus].status != 'Em espera' ? '' : ' checked'}>
                            <label for="FORitemEspera">Em espera</label>
                        </div>
                        <div>
                            <input type="radio" id="FORitemPreparo" name="radioStatus" value="Em preparo"${result.order[JSwinStatus].status != 'Em preparo' ? '' : ' checked'}>
                            <label for="FORitemPreparo">Em preparo</label>
                        </div>
                        <div>
                            <input type="radio" id="FORitemRetirada" name="radioStatus" value="Em retirada"${result.order[JSwinStatus].status != 'Em retirada' ? '' : ' checked'}>
                            <label for="FORitemRetirada">Em retirada</label>
                        </div>
                        <div>
                            <input type="radio" id="FORitemComplet" name="radioStatus" value="Entregue"${result.order[JSwinStatus].status != 'Entregue' ? '' : ' checked'}>
                            <label for="FORitemComplet">Entregue</label>
                        </div>
                    </div>
                    <div class="MODALelemFooter">
                        <button type="button" name="ACTIONitemCancel">Fechar</button>
                        <button type="button" name="ACTIONitemRemove">Salvar</button>
                    </div>
                </div>
            </div>
        </div>`);

        $('.MODALdefault').fadeIn(200, function(){
            this.querySelector('[name="ACTIONitemCancel"]').addEventListener('click', function(){
                $('.MODALdefault').fadeOut(200, function(){
                    this.remove();
                    document.body.removeAttribute('style');
                });
            });

            this.querySelector('[name="ACTIONitemRemove"]').addEventListener('click', function(){
                for(let i = 0; i < document.querySelectorAll('[name="radioStatus"]').length; i++) {
                    document.querySelectorAll('[name="radioStatus"]')[i].checked ?
                    database.ref(`order/${JSwinStatus}`).update({
                        status: document.querySelectorAll('[name="radioStatus"]')[i].value
                    }).then(()=>{
                        CARDitemWait.querySelector('.CLASSitemFirst').children[1].innerHTML = document.querySelectorAll('[name="radioStatus"]')[i].value;
                        bracael.pushNotify(`Pedido de ${result.order[JSwinStatus].client} atualizado!`);
                    }) : null
                }
            });
        });
        document.querySelector('.MODALdefault').querySelector('.CONTENTmodal').insertAdjacentHTML('beforebegin', '<div class="SCREENmodal CLOSEmodal"></div>');
        document.body.style.overflow = "hidden";

        if(document.body.contains(document.querySelector('.CLOSEmodal'))){
            document.querySelector('.CLOSEmodal').addEventListener('click', function click(e){
                $('.MODALdefault').fadeOut(200, function(){
                    this.remove();
                    document.body.removeAttribute('style');
                    restItem = null;
                });
            });}
        }
        })
    })



    document.querySelectorAll('[name="BTTNcomandConfirm"]').forEach(function(data){
        data.addEventListener('click', function(){
            // console.log('Item confirmado!')
            const ITEMremoveSelect = document.querySelectorAll('.CARDitemData')[this.getAttribute('js-base')]


            database.ref(`request/${ITEMremoveSelect.getAttribute('data-id')}`).remove().then(()=>{

                database.ref('order').push(result.request[ITEMremoveSelect.getAttribute('data-id')]).then(()=>{
                    window.location.href = '?main=index';
                })

                })

        })
    })


    document.querySelectorAll('[name="BTTNcomandCancel"]').forEach(function(data){
        data.addEventListener('click', function(){
            const ITEMremoveSelect = document.querySelectorAll('.CARDitemData')[this.getAttribute('js-base')]
            // console.log(ITEMremoveSelect.getAttribute('data-id'))

            // console.log(JSON.stringify(result.request[ITEMremoveSelect.getAttribute('data-id')]))
            console.log(JSON.parse(`{"${ITEMremoveSelect.getAttribute('data-id')}":${JSON.stringify(result.request[ITEMremoveSelect.getAttribute('data-id')])}}`))

            document.body.insertAdjacentHTML('beforeend', `
            <div class="MODALdefault" id="REMOVEitem">
                <div class="MODALinst">
                    <div class="CONTENTmodal">
                        <div class="MODALelemTitle">
                            <span>Recusar pedido?</span>
                        </div>
                        <div class="MODALelemMsg">Ao recusar o pedido ele será removi para lixeira.</div>
                        <div class="MODALelemFooter">
                            <button type="button" name="ACTIONitemCancel">Cancelar</button>
                            <button type="button" name="ACTIONitemRemove">Excluir pedido</button>
                        </div>
                    </div>
                </div>
            </div>`);

            $(REMOVEitem).fadeIn(200, function(){
                this.querySelector('[name="ACTIONitemCancel"]').addEventListener('click', function(){
                    $(REMOVEitem).fadeOut(200, function(){
                        this.remove();
                        document.body.removeAttribute('style');
                    });
                });

                this.querySelector('[name="ACTIONitemRemove"]').addEventListener('click', function(){
                    database.ref(`request/${ITEMremoveSelect.getAttribute('data-id')}`).remove().then(()=>{

                    database.ref('dump').push(result.request[ITEMremoveSelect.getAttribute('data-id')]).then(()=>{
                        window.location.href = '?main=index';
                    })

                    })
                });
            });
            REMOVEitem.querySelector('.CONTENTmodal').insertAdjacentHTML('beforebegin', '<div class="SCREENmodal CLOSEmodal"></div>');
            document.body.style.overflow = "hidden";

            if(document.body.contains(document.querySelector('.CLOSEmodal'))){
                document.querySelector('.CLOSEmodal').addEventListener('click', function click(e){
                    $(REMOVEitem).fadeOut(200, function(){
                        this.remove();
                        document.body.removeAttribute('style');
                        restItem = null;
                    });
                });}
            

        })
    })

    database.ref('request').on('value', function(snapshot) {
        snapshot.val() != undefined ?
        Object.entries(snapshot.val()).map(async function(data, i){

            const onSnapshpt = new Array()
            for(let i = 0; i < document.querySelectorAll('.CARDitemData').length; i++){
                onSnapshpt.push(document.querySelectorAll('.CARDitemData')[i].getAttribute('data-id'))
            }

            await Promise.all(onSnapshpt).then(function(array){
            if(!array.includes(data[0])){
                const DETAILres = new Array();
                data[1].detail.map(function(item){
                    const extraItem = new Array();

                    item.extra != undefined ?
                    item.extra.map(function(extra, ii){
                        extraItem.push(`
                        <div>
                            <span>${extra.amount}un</span><span>${extra.item}</span><span>${Number(extra.price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                        </div>`)
                    }) : null;
        
                    DETAILres.push(`
                    <div>
                        <div>
                            <span>${item.amount}un</span><span>${item.title}</span><span>${Number(item.price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                        </div>
                        ${item.extra != undefined ? extraItem.join('\n') : ''}
                        ${item.comment != undefined ? `
                        <div>
                            <span>--</span><span>${item.comment != undefined ? item.comment : ''}</span><span></span>
                        </div>` : ''}
                    </div>`)
                });
    
                const ARRAYdate = new Intl.DateTimeFormat('pt-BR', { weekday: 'long', day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: 'numeric', hour12: true });
                const [{ value: weekday },,{ value: day },,{ value: month },,{ value: year },,{ value: hour },,{ value: minute },,{ value: hour12 }] = ARRAYdate.formatToParts(new Date(data[1].time));

                const INSERTadHTML = `
                <div class="CARDitemData" data-id="${data[0]}">
                    <div class="CLIENTinfoData">
                        <div class="BASEinfoClient">
                            <div class="INFOcliente">
                                <span>${data[1].client}</span>
                                <p>${data[1].street}, ${data[1].number} ${data[1].adjunct != undefined ? ` - ${data[1].adjunct}` : '' }<br>${data[1].region}${data[1].district != '' ? ` - ${data[1].district}` : ''}</p>
                            </div>
                            <div>
                                Pagamento: ${data[1].payment}
                            </div>
                            <div class="INFOtimestamp">
                                ${day} ${month} ${year} ás ${hour}:${minute} ${hour12}
                            </div>
                        </div>
                    </div>
                    <div class="BASEinfoRequest">
                        <div class="BTTMitemButton">
                            <button type="button" name="BTTNcomandConfirm" js-base="${i}">Aceitar pedido</button>
                            <button type="button" name="BTTNcomandCancel" js-base="${i}">Recusar</button>
                        </div>
                        <div class="COMANDAitemData">
                            <p>
                                <span>QTD.</span>
                                <span>DESCRIÇÃO</span>
                                <span>TOTAL</span>
                            </p>
                            ${DETAILres.join('\n')}
                        </div>
                        <div class="ITEMbox"><p>Total de ${Number(data[1].tovalue).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p></div>
                    </div>
                </div>`;


                document.querySelectorAll('.CARDitemData').length != 0 ?
                document.getElementById('RECEBIDOSit').insertAdjacentHTML('afterbegin', INSERTadHTML) : document.getElementById('RECEBIDOSit').innerHTML = INSERTadHTML;

                bracael.pushNotify('Novo pedido recebido!');

                const CARDitemData = document.querySelector(`.CARDitemData[data-id="${data[0]}"]`);

                CARDitemData.querySelector('[name="BTTNcomandConfirm"]').addEventListener('click', function(){
                        // console.log('Item confirmado!')

                    database.ref(`request/${CARDitemData.getAttribute('data-id')}`).remove().then(()=>{
                        database.ref(`order/${data[0]}`).set(data[1]).then(()=>{
                            window.location.href = '?main=index';
                        })
                    })
                })

                CARDitemData.querySelector('[name="BTTNcomandCancel"]').addEventListener('click', function(){

                    document.body.insertAdjacentHTML('beforeend', `
                    <div class="MODALdefault" id="REMOVEitem">
                        <div class="MODALinst">
                            <div class="CONTENTmodal">
                                <div class="MODALelemTitle">
                                    <span>Recusar pedido?</span>
                                </div>
                                <div class="MODALelemMsg">Ao recusar o pedido ele será removi para lixeira.</div>
                                <div class="MODALelemFooter">
                                    <button type="button" name="ACTIONitemCancel">Cancelar</button>
                                    <button type="button" name="ACTIONitemRemove">Excluir pedido</button>
                                </div>
                            </div>
                        </div>
                    </div>`);

                    $(REMOVEitem).fadeIn(200, function(){
                        this.querySelector('[name="ACTIONitemCancel"]').addEventListener('click', function(){
                            $(REMOVEitem).fadeOut(200, function(){
                                this.remove();
                                document.body.removeAttribute('style');
                            });
                        });

                        this.querySelector('[name="ACTIONitemRemove"]').addEventListener('click', function(){
                            database.ref(`request/${data[0]}`).remove().then(()=>{
                                database.ref(`dump/${data[0]}`).set(data[1]).then(()=>{
                                    window.location.href = '?main=index';
                                })
                            })
                        });
                    });

                    REMOVEitem.querySelector('.CONTENTmodal').insertAdjacentHTML('beforebegin', '<div class="SCREENmodal CLOSEmodal"></div>');
                    document.body.style.overflow = "hidden";

                    if(document.body.contains(document.querySelector('.CLOSEmodal'))){
                        document.querySelector('.CLOSEmodal').addEventListener('click', function click(e){
                            $(REMOVEitem).fadeOut(200, function(){
                                this.remove();
                                document.body.removeAttribute('style');
                                    restItem = null;
                            });
                        });}
                })

                document.querySelectorAll('.CARDitemData').forEach(function(card, ii){
                    card.querySelector(`[name="BTTNcomandConfirm"]`).setAttribute('js-base', ii)
                    card.querySelector(`[name="BTTNcomandCancel"]`).setAttribute('js-base', ii)
                })

                if(document.querySelector('[data-target="RECEBIDOSit"]').hasAttribute('disabled')){
                    $('.DASHBOARDinst').animate({ height: $('#RECEBIDOSit').outerHeight(true) }, 200);
                }

            }
            });
        }) : null;
    });


/*  :------------------------------------:
    |  FUNCIONALIDADES
    |  AÇÕES DO DASHBOARD
    :------------------------------------:  */

    document.querySelector('.DASHBOARDinst').style.height = `${document.querySelector('.SCREENit[checked]').offsetHeight}px`;

    document.querySelectorAll('[data-target]').forEach(function(data){
        data.addEventListener('click', function(){
    
            const target = this.getAttribute('data-target')
            const DASHBOARDit = document.querySelector('.DASHBOARDinst');
    
            if(!document.getElementById(target).hasAttribute('checked')){
            for(let i = 0; i < document.querySelectorAll('[data-target]').length; i++){
                document.querySelectorAll('.SCREENit')[i].toggleAttribute('checked');
                document.querySelectorAll('[data-target]')[i].toggleAttribute('disabled');
            }

            $(DASHBOARDit).animate({
                height: document.getElementById(target).offsetHeight
              }, 300);
    
            }
        });
    });


}
else if(main === 'statistic'){
    console.log('main=statistic')
}
else if(main === 'products'){
    var restItem = null;

    const postProduct = new Array();
    Object.entries(result.feed).sort(function (a, b) {
        return (a[1].published < b[1].published) ? 1 : ((b[1].published < a[1].published) ? -1 : 0);
    }).map(function(data){

        const ARRAYdate = new Intl.DateTimeFormat('pt-BR', { weekday: 'long', day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: 'numeric', hour12: true });
        const [{ value: weekday },,{ value: day },,{ value: month },,{ value: year },,{ value: hour },,{ value: minute },,{ value: hour12 }] = ARRAYdate.formatToParts(new Date(data[1].published));

        postProduct.push(`
        <div class="ITEMinCommerce">
            <div>
                <div class="ITEMelemImg">
                    <img src="${data[1].thumb}" height="64">
                </div>
            </div>
            <div class="SECTIONtext">
                <div class="TITLEspan">
                    <span>${data[1].title}</span>
                </div>
                <div class="SUBLIMtetx">
                    <span>${data[1].price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                </div>
            </div>
            <div class="EDITandDeleteOptions">
                <div class="OPTIONSbtn" data-id="${data[0]}">
                    <button type="button" name="editItem"></button>
                    <button type="button" name="${data[1].category.includes('Unavailable') ? 'removeUnavailable' : 'draftItem'}"></button>
                    <button type="button" name="deletItem"></button>
                </div>
                <div class="STATUScode">
                    <span>${day} de ${month} ${year}</span>
                </div>
            </div>
        </div>`);
    });

    Promise.all(postProduct).then(function(item){
        document.querySelector('HEADER').getElementsByTagName('SPAN')[0].innerHTML = 'Meus produtos';
        document.getElementsByTagName('ARTICLE')[0].innerHTML = `
        <div class="MASTERmain">
            <button type="button" onclick="window.location.href='?main=creatPost'" name="creatProduct">Novo produto</button>
            <div class="QUERYproduct">
                <input type="text" name="inputSearch" placeholder="Buscar por...">
            </div>
        </div>
        <div class="MAINbox">
            ${item.join('\n')}
        </div>`;

        document.querySelectorAll('[name="editItem"]').forEach(function(data){
            data.addEventListener('click', function(){
                console.log(this)
                window.location.href = `?main=item&edit=${this.parentNode.getAttribute('data-id')}`;
            });
        });

        document.querySelectorAll('[name="deletItem"]').forEach(function(data){
            data.addEventListener('click', function(){
                restItem = this.parentNode.getAttribute('data-id')

                document.body.insertAdjacentHTML('beforeend', `
                <div class="MODALdefault" id="REMOVEitem">
                    <div class="MODALinst">
                        <div class="CONTENTmodal">
                            <div class="MODALelemTitle">
                                <span>Descartar produto?</span>
                            </div>
                            <div class="MODALelemMsg">Isso descartará este produto. Após o descarte, não será mais possível vê-lo nem editá-lo.</div>
                            <div class="MODALelemFooter">
                                <button type="button" name="ACTIONitemCancel">Cancelar</button>
                                <button type="button" name="ACTIONitemRemove">Descartar produto</button>
                            </div>
                        </div>
                    </div>
                </div>`);

                $(REMOVEitem).fadeIn(200, function(){
                    this.querySelector('[name="ACTIONitemCancel"]').addEventListener('click', function(){
                        $(REMOVEitem).fadeOut(200, function(){
                            this.remove();
                            document.body.removeAttribute('style');
                        });
                    });

                    this.querySelector('[name="ACTIONitemRemove"]').addEventListener('click', function(){
                        database.ref(`feed/${restItem}`).remove().then(()=>{
                            window.location.href = '?main=products';
                        })
                    });
                });
                REMOVEitem.querySelector('.CONTENTmodal').insertAdjacentHTML('beforebegin', '<div class="SCREENmodal CLOSEmodal"></div>');
                document.body.style.overflow = "hidden";

                if(document.body.contains(document.querySelector('.CLOSEmodal'))){
                    document.querySelector('.CLOSEmodal').addEventListener('click', function click(e){
                        $(REMOVEitem).fadeOut(200, function(){
                            this.remove();
                            document.body.removeAttribute('style');
                            restItem = null;
                        });
                    });}
            });
        });


        document.querySelectorAll('[name="draftItem"]').forEach(function(data){
            data.addEventListener('click', function(){
                restItem = this.parentNode.getAttribute('data-id')
                console.log(this)
                console.log(restItem)

                document.body.insertAdjacentHTML('beforeend', `
                <div class="MODALdefault" id="UNAVAILABLEitem">
                    <div class="MODALinst">
                        <div class="CONTENTmodal">
                            <div class="MODALelemTitle">
                                <span>Produto indisponível?</span>
                            </div>
                            <div class="MODALelemMsg">Isso exibirá aos seus clientes que o produto está indisponível. Significa que ele existirá na loja, porém ninguém poderá compra-lo.</div>
                            <div class="MODALelemFooter">
                                <button type="button" name="ACTIONitemCancel">Cancelar</button>
                                <button type="button" name="ACTIONitemRemove">Confirmar</button>
                            </div>
                        </div>
                    </div>
                </div>`);

                $(UNAVAILABLEitem).fadeIn(200, function(){
                    this.querySelector('[name="ACTIONitemCancel"]').addEventListener('click', function(){
                        $(UNAVAILABLEitem).fadeOut(200, function(){
                            this.remove();
                            document.body.removeAttribute('style');
                        });
                    });

                    this.querySelector('[name="ACTIONitemRemove"]').addEventListener('click', function(){
                        database.ref(`feed/${restItem}`).once('value').then(function(item){
                            const itemCategory = item.val().category;

                            console.log(item.val())
                            console.log(item.val().category)

                            if(!item.val().category.includes('Unavailable')){
                                itemCategory.push('Unavailable')

                                database.ref(`feed/${restItem}`).update({
                                    category: itemCategory
                                }).then(()=>{
                                    window.location.href = '?main=products';
                                });
                            }
                        })
                    });
                });
                UNAVAILABLEitem.querySelector('.CONTENTmodal').insertAdjacentHTML('beforebegin', '<div class="SCREENmodal CLOSEmodal"></div>');
                document.body.style.overflow = "hidden";

                if(document.body.contains(document.querySelector('.CLOSEmodal'))){
                    document.querySelector('.CLOSEmodal').addEventListener('click', function click(e){
                        $(UNAVAILABLEitem).fadeOut(200, function(){
                            this.remove();
                            document.body.removeAttribute('style');
                            restItem = null;
                        });
                    });}

            });
        });

        document.querySelectorAll('[name="removeUnavailable"]').forEach(function(data){
            data.addEventListener('click', function(){

                const itemCategory = feed[this.parentNode.getAttribute('data-id')].category;
                console.log(itemCategory)

                if(itemCategory.includes('Unavailable')){
                    itemCategory.splice(itemCategory.indexOf('Unavailable'), 1);

                    console.log(itemCategory)
                    database.ref(`feed/${this.parentNode.getAttribute('data-id')}`).update({
                        category: itemCategory
                    }).then(()=>{
                        window.location.href = '?main=products';
                    });
                }
            });
        });

    });

} // published
else if(main === 'item'){

    const itemIngredient = new Array();

    feed[edit].extra != undefined && feed[edit].extra != null ?
    feed[edit].extra.map(function(data, i){
        itemIngredient.push(`
        <div class="GROUPexistItem" row="${i}">
            <div>
                <div>
                    <input type="text" name="FORMtargetItem" placeholder="Item" maxlength="45" value="${data[0]}">
                    <input type="input" name="FORMtargetLimit" placeholder="Limite" maxlength="1" size="1" value="${data[1]}">
                </div>
                <div>
                    <input type="text" name="FORMtargetDesc" placeholder="Descrição" maxlength="60"${data[2] != null ? ` value="${data[2]}"` : ''}>
                </div>
            </div>
            <div>
                ${i != 0 ? `
                <div class="ELEMbtnRemove">
                    <button type="button" name="removeIcmntItem" js-row="${i}"></button>
                </div>` : ''}
                <div class="ELEMsessPrice">
                    <label>R$</label>
                    <input type="text" name="FORMtargetPrice" size="3" value="${Number(data[3]).toFixed(2)}" js-price="true">
                </div>
            </div>
        </div>`)
        console.log(data[3])
    }) : null;

    const postCategory = feed[edit].category;
    var typePost = null;
    if(postCategory.includes('Burger')){
        typePost = 'Burger';
    }
    else if(postCategory.includes('Servings')){
        typePost = 'Servings';
    }
    else if(postCategory.includes('Drinks')){
        typePost = 'Drinks';
    }
    else if(postCategory.includes('Combo')){
        typePost = 'Combo';
    }
    else if(postCategory.includes('Promo')){
        typePost = 'Promo';
    }
    else if(postCategory.includes('Dessert')){
        typePost = 'Dessert';
    }

    const CLASSitemSemana = new Array();
    ARRAYen.map(function(data, i){
        const BUSINESSaction = new Array();
        result.business.action[i][data].map(function(item){
            item[0] != '' && item[1] != '' ? BUSINESSaction.push(true) : BUSINESSaction.push(false)
        });

        CLASSitemSemana.push(`
        <div>
            <input type="checkbox" id="${data}" name="${data}" value="${ARRAYenglish[i]}"${BUSINESSaction.every(elem => elem === true) ? '' : ' disabled'}${feed[edit].category.includes(ARRAYenglish[i]) ? ' checked' : ''}>
            <label for="${data}">${ARRAYweek[i]}</label>
        </div>`);
    })

    document.querySelector('HEADER').getElementsByTagName('SPAN')[0].innerHTML = 'Editar produto';
    document.getElementsByTagName('ARTICLE')[0].innerHTML = `
    <div class="EDITheadMain">
        <div>
            <span>Você está publicando para ${typePost === 'Dessert' ? 'Bomboniere' : typePost === 'Drinks' ? 'Bebidas' : typePost === 'Servings' ? 'Porções' : typePost}</span>
        </div>
        <div>
            <button type="button" name="BTTNupdateItem">Atualizar</button>
            <button type="button" onclick="window.location.href='?main=products'" name="fecharItem">Fechar</button>
        </div>
    </div>
    <div class="EDITindexMain"${typePost != null ? ` js-item="${typePost}"` : ''}>
        <div class="EDITmainText">
            <div class="GROUPinputClass">
                <input type="text" name="FORMinputImage" class="INPUTfunction INPUThasText" value="${feed[edit].thumb}">
                <label>URL da imagem</label>
            </div>
            <div class="GROUPimageClass">
                <div class="ELEMimageShadow" style="background-image: url('${feed[edit].thumb}');"></div>
                <img class="INPUTimgUrl" src="${feed[edit].thumb}">
                <span class="SPANelemSucess">
                    <em>Imagem compatível</em>
                    <small>Maior que 890x594</small>
                </span>
            </div>
        </div>
        <div class="EDITmainText">
            <div class="GROUPinputClass">
                <input type="text" name="FORMinputTitle" class="INPUTfunction INPUThasText" value="${feed[edit].title}">
                <label>Título</label>
            </div>
            <div class="GROUPinputClass">
                <input type="text" name="FORMinputPrice" class="INPUTfunction INPUThasText" value="${feed[edit].price.toFixed(2)}" js-price="true">
                <label>R$</label>
            </div>
            <div class="GROUPinputClass">
                ${feed[edit].category.includes('Drinks') ? `
                <input type="number" name="FORMinputMl" js-allownumb="true" class="INPUTfunction INPUThasText" value="${feed[edit].weight}">
                <label>Mililitro</label>` : `
                <input type="number" name="FORMinputGrams" js-allownumb="true" class="INPUTfunction INPUThasText" value="${feed[edit].grams}">
                <label>Gramas</label>`}
            </div>
            ${feed[edit].category.includes('Drinks') || feed[edit].category.includes('Dessert') ? '' : `
            <div class="GROUPinputClass">
                <textarea maxlength="600" name="FORMinputDesc" placeholder="Descrição">${feed[edit].description}</textarea>
            </div>`}
        </div>
        ${feed[edit].category.includes('Burger') || feed[edit].category.includes('Servings') ? feed[edit].extra != undefined && feed[edit].extra != null ? `
        <div class="EDITmainAdd">
            ${itemIngredient.reverse().join('\n')}
            <div class="GROUPicrmntItem">
                <button type="button" name="addIcrmntItem">Novo item adicional</button>
            </div>
        </div>` : `
        <div class="EDITmainAdd">
            <div class="GROUPexistItem" row="0">
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
                    <div class="ELEMsessPrice">
                        <label>R$</label>
                        <input type="text" name="FORMtargetPrice" size="3" js-price="true">
                    </div>
                </div>
            </div>
            <div class="GROUPicrmntItem">
                <button type="button" name="addIcrmntItem">Novo item adicional</button>
            </div>
        </div>` : ''}
        ${feed[edit].category.includes('Promo') ? `
        <div class="EDITmainSemana">
            <p>Selecione os dias da semana ao qual sua promoção estará visível aos seus clientes.</p>
            ${CLASSitemSemana.join('\n')}
        </div>`
        : ''}
    </div>`;

    bracael.startItem();

    document.querySelector('[name="BTTNupdateItem"]').addEventListener('click', function(){

        const CLASSitemSemana = new Array();
        feed[edit].category.includes('Promo') ?
        document.querySelector('.EDITmainSemana').querySelectorAll('[type="checkbox"]').forEach((item)=>{
            item.checked ? CLASSitemSemana.push(true) : CLASSitemSemana.push(false)
        }) : null;

        const ARRAYexistItem = new Array();
        document.querySelectorAll('.GROUPexistItem').forEach((data)=>{
            if(data.querySelector('[name="FORMtargetItem"]').value != '' &&
            Number(data.querySelector('[name="FORMtargetLimit"]').value) != 0 &&
            Number(data.querySelector('[name="FORMtargetPrice"]').value.replace(/\./g,'').replace(/\,/g,'.'))){
                ARRAYexistItem.push([data.querySelector('[name="FORMtargetItem"]').value,
                Number(data.querySelector('[name="FORMtargetLimit"]').value),
                data.querySelector('[name="FORMtargetDesc"]').value,
                Number(data.querySelector('[name="FORMtargetPrice"]').value.replace(/\./g,'').replace(/\,/g,'.'))])
            }
            else {
                ARRAYexistItem.push([null])
            }
            
        })

        const CATEGORYarrItem = new Array();
        feed[edit].category.includes('Promo') ?
        ARRAYenglish.map(function(item, i){
            CLASSitemSemana[i] ? CATEGORYarrItem.push(item) : null
        }) : null;

        const itemObject = JSON.parse(`{
            ${feed[edit].category.includes('Promo') ? `"category": ["Promo"${CATEGORYarrItem.length != 0 ? `,${JSON.stringify(CATEGORYarrItem).substring(1, JSON.stringify(CATEGORYarrItem).length-1)}` : ''}],` : `"category": ${JSON.stringify(feed[edit].category)},`}
            ${document.body.contains(document.querySelector('[name="FORMinputDesc"]')) ? `"description": "${document.querySelector('[name="FORMinputDesc"]').value.trim()}",` : ''}
            ${ARRAYexistItem.length != 0 ? `"extra": ${JSON.stringify(ARRAYexistItem)},` : ''}
            ${document.body.contains(document.querySelector('[name="FORMinputGrams"]')) ? `"grams": ${Number(document.querySelector('[name="FORMinputGrams"]').value)},` : ''}
            ${document.body.contains(document.querySelector('[name="FORMinputMl"]')) ? `"weight": ${Number(document.querySelector('[name="FORMinputMl"]').value)},` : ''}
            "price": ${Number(document.querySelector('[name="FORMinputPrice"]').value.replace(/\./g,'').replace(/\,/g,'.'))},
            "thumb": "${document.querySelector('[name="FORMinputImage"]').value.trim()}",
            "title": "${document.querySelector('[name="FORMinputTitle"]').value.trim()}"
        }`);

        const ifValidate = new Array();
        function ifValidateFunction(data){
            ifValidate.push(data)   }

        ifValidateFunction(itemObject.category.length != 0)
        ifValidateFunction(itemObject.price != 0)
        ifValidateFunction(itemObject.title != '')
        ifValidateFunction(itemObject.thumb != '')
        ifValidateFunction(document.body.contains(document.querySelector('.SPANelemSucess')))
        ifValidateFunction(feed[edit].category.includes('Promo') ? CATEGORYarrItem.filter(item => item !== 'Promo').length != 0 : true)
        ifValidateFunction(feed[edit].category.includes('Drinks') ? itemObject.weight != 0 : itemObject.grams != 0)

        if(ifValidate.every(elem => elem === true)){
            database.ref(`feed/${edit}`).update(itemObject).then(()=>{
                window.location.href = '?main=products'
            });
            console.log('Sucesso!')
        }
        else {
            bracael.pushNotify('Há algo de errado!');
        }

    });

}
else if(main === 'creatPost'){

    var postCategory = null;
    document.querySelector('HEADER').getElementsByTagName('SPAN')[0].innerHTML = 'Publicar produto';
    document.getElementsByTagName('ARTICLE')[0].innerHTML = `
    <div class="MAINbox">
        <div class="CHOOSEbttn">
            <button type="button" name="editBurger" data-class="Burger">Burger</button>
            <button type="button" name="editServings" data-class="Servings">Porção</button>
            <button type="button" name="editDrinks" data-class="Drinks">Bebida</button>
            <button type="button" name="editCombo" data-class="Combo">Combo</button>
            <button type="button" name="editPomo" data-class="Promo">Promoção</button>
            <button type="button" name="editDessert" data-class="Dessert">Bomboniere</button>
        </div>
    </div>`;

    const CLASSitemSemana = new Array();
    ARRAYen.map(function(data, i){
        const BUSINESSaction = new Array();
        result.business.action[i][data].map(function(item){
            item[0] != '' && item[1] != '' ? BUSINESSaction.push(true) : BUSINESSaction.push(false)
        });

        CLASSitemSemana.push(`
        <div>
            <input type="checkbox" id="${data}" name="${data}" value="${ARRAYenglish[i]}"${BUSINESSaction.every(elem => elem === true) ? '' : ' disabled'}>
            <label for="${data}">${ARRAYweek[i]}</label>
        </div>`);
    })

    document.querySelectorAll('[data-class]').forEach(function(data){
        data.addEventListener('click', function(){

        postCategory = this.getAttribute('data-class')

        document.getElementsByTagName('ARTICLE')[0].innerHTML = `
        <div class="EDITheadMain">
            <div>
                <span>Você está publicando para ${this.innerText}</span>
            </div>
            <div>
                <button type="button" name="BTTNpublicItem">Publicar</button>
                <button type="button" onclick="window.location.href='?main=products'" name="fecharItem">Fechar</button>
            </div>
        </div>
        <div class="EDITindexMain" js-item="${postCategory}">
            <div class="EDITmainText">
                <div class="GROUPinputClass">
                    <input type="text" name="FORMinputImage" class="INPUTfunction">
                    <label>URL da imagem</label>
                </div>
                <div class="GROUPimageClass">
                    <span class="SPANelemAwait">Aguardando imagem!</span>
                </div>
            </div>
            <div class="EDITmainText">
                <div class="GROUPinputClass">
                    <input type="text" name="FORMinputTitle" class="INPUTfunction">
                    <label>Título</label>
                </div>
                <div class="GROUPinputClass">
                    <input type="text" name="FORMinputPrice" class="INPUTfunction" js-price="true">
                    <label>R$</label>
                </div>
                <div class="GROUPinputClass">
                    ${postCategory != 'Drinks' ? `
                    <input type="number" name="FORMinputGrams" js-allownumb="true" class="INPUTfunction">
                    <label>Gramas</label>` : `
                    <input type="number" name="FORMinputMl" js-allownumb="true" class="INPUTfunction">
                    <label>Mililitro</label>`}
                </div>
                ${postCategory != 'Drinks' && postCategory != 'Dessert' ? `
                <div class="GROUPinputClass">
                    <textarea maxlength="600" name="FORMinputDesc" placeholder="Descrição"></textarea>
                </div>` : ``}
            </div>
            ${postCategory != 'Combo' && postCategory != 'Drinks' && postCategory != 'Promo' && postCategory != 'Dessert' ? `
            <div class="EDITmainAdd">
                <div class="GROUPexistItem" row="0">
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
                        <div class="ELEMsessPrice">
                            <label>R$</label>
                            <input type="text" name="FORMtargetPrice" size="3" js-price="true">
                        </div>
                    </div>
                </div>
                <div class="GROUPicrmntItem">
                    <button type="button" name="addIcrmntItem">Novo item adicional</button>
                </div>
            </div>` : ''}
            ${postCategory === 'Promo' ? `
            <div class="EDITmainSemana">
                <p>Selecione os dias da semana ao qual sua promoção estará visível aos seus clientes.</p>
                ${CLASSitemSemana.join('\n')}
            </div>`
            : ''}
        </div>`;

        bracael.startItem();

        document.querySelector('[name="BTTNpublicItem"]').addEventListener('click', function(){

            const CLASSitemSemana = new Array();
            postCategory === 'Promo' ?
            document.querySelector('.EDITmainSemana').querySelectorAll('[type="checkbox"]').forEach((item)=>{
                item.checked ? CLASSitemSemana.push(true) : CLASSitemSemana.push(false)
            }): null;

            const ARRAYexistItem = new Array();
            document.querySelectorAll('.GROUPexistItem').forEach((data)=>{
                const FORMtargetItem = data.querySelector('[name="FORMtargetItem"]').value.trim();
                const FORMtargetLimit = data.querySelector('[name="FORMtargetLimit"]').value.trim();
                const FORMtargetDesc = data.querySelector('[name="FORMtargetDesc"]').value.trim();
                const FORMtargetPrice = data.querySelector('[name="FORMtargetPrice"]').value.replace(/\./g,'').replace(/\,/g,'.');

                if(FORMtargetItem != '' && FORMtargetLimit != '' && FORMtargetPrice != ''){
                    ARRAYexistItem.push([FORMtargetItem, Number(FORMtargetLimit), FORMtargetDesc, Number(FORMtargetPrice)])
                }
            });

            const CATEGORYarrItem = new Array();
            postCategory === 'Promo' ?
            ARRAYenglish.map(function(item, i){
                CLASSitemSemana[i] ? CATEGORYarrItem.push(item) : null
            }) : null;

            const itemObject = JSON.parse(`{
                "category": [${postCategory != null ? `"${postCategory}"` : ''}${CATEGORYarrItem.length != 0 ? `,${JSON.stringify(CATEGORYarrItem).substring(1, JSON.stringify(CATEGORYarrItem).length-1)}` : ''}],
                "class": "Publicado",
                ${postCategory != 'Drinks' && postCategory != 'Dessert' ? `"description": "${document.querySelector('[name="FORMinputDesc"]').value.trim()}",` : ''}
                ${ARRAYexistItem.length != 0 ? `"extra": ${JSON.stringify(ARRAYexistItem)},` : ''}
                ${postCategory != 'Drinks' ? `"grams": ${Number(document.querySelector('[name="FORMinputGrams"]').value)},` : `"weight": ${Number(document.querySelector('[name="FORMinputMl"]').value)},`}
                "price": ${Number(document.querySelector('[name="FORMinputPrice"]').value.replace(/\./g,'').replace(/\,/g,'.'))},
                "published": "${new Date().toISOString()}",
                "thumb": "${document.querySelector('[name="FORMinputImage"]').value.trim()}",
                "title": "${document.querySelector('[name="FORMinputTitle"]').value.trim()}"
            }`);

            if(itemObject.category.length != 0 &&
            itemObject.price != 0 &&
            itemObject.title != '' &&
            (itemObject.thumb != '' &&
            document.body.contains(document.querySelector('.SPANelemSucess'))) &&
            postCategory != 'Promo' ? true : CATEGORYarrItem.length != 0){
                database.ref(`feed/${parseInt(Math.random()*1000000000, 10)}`).set(itemObject).then(()=>{
                    window.location.href = '?main=products'
                });
            }
            else {
                bracael.pushNotify('Há algo de errado!');
            }

        });

        });
    });

}
else if(main === 'rating'){
    console.log('main=rating')
}
else if(main === 'settings'){

    const DISTRICTitem = new Array();
    result.business.district != undefined ?
    Object.entries(result.business.delivery).map(function(item, i){

        DISTRICTitem.push(`
        <div class="CLASSitemDistrict" js-numb="${item[0]}">
            <div>
                <span>${item[1].zone}${item[1].district != '' ? ` (${item[1].district})` : ''}</span>
            </div>
            <div>
                <div class="CLASSitemFirst" name="itemDisplay">
                    <span>${item[1].rate.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                    <a href="javascript:void(0)" js-numb="${item[0]}" class="DELETzoneDelivery">Excluir</a>
                </div>
            </div>
        </div>`)
    }) : DISTRICTitem.push(`
    <div class="CLASSitemMessage">
        <span>Nenhum bairro encontrado!</span>
        <p>Nos parece que você ainda não adicionou bairros para entrega!</p>
    </div>`)

/*  :------------------------------------:
    |  FINAL DO AREAS DE ENTREGA
    |  INICIO DE FORMAS DE PAGAMENTO
    :------------------------------------:  */

    const ARRAYitemCash = new Array();
    const ARRAYitemDebit = new Array();
    const ARRAYitemCredit = new Array();
    const ARRAYitemVoucher = new Array();

    Object.entries(result.business.methods.cash).map(function(data){
        // console.log(data)
        ARRAYitemCash.push(`
        <div class="CLASSitemStatus">
            <input type="checkbox" class="INPUTctrl" name="PAYMENTmethod" id="cash_${data[0]}"${data[1] != false ? ' checked' : ''}>
            <label class="CUSTOMlabel" for="cash_${data[0]}">${data[0].toUpperCase()}</label>
        </div>`)
    })

    Object.entries(result.business.methods.debit).map(function(data){
        // console.log(data[0], data[1])
        ARRAYitemDebit.push(`
        <div class="CLASSitemStatus">
            <input type="checkbox" class="INPUTctrl" name="PAYMENTmethod" id="debit_${data[0]}"${data[1] != false ? ' checked' : ''}>
            <label class="CUSTOMlabel" for="debit_${data[0]}">${data[0].toUpperCase()}</label>
        </div>`)
    })

    Object.entries(result.business.methods.credit).map(function(data){
        // console.log(data)
        ARRAYitemCredit.push(`
        <div class="CLASSitemStatus">
            <input type="checkbox" class="INPUTctrl" name="PAYMENTmethod" id="credit_${data[0]}"${data[1] != false ? ' checked' : ''}>
            <label class="CUSTOMlabel" for="credit_${data[0]}">${data[0].toUpperCase()}</label>
        </div>`)
    })

    Object.entries(result.business.methods.voucher).map(function(data){
        // console.log(data)
        ARRAYitemVoucher.push(`
        <div class="CLASSitemStatus">
            <input type="checkbox" class="INPUTctrl" name="PAYMENTmethod" id="voucher_${data[0]}"${data[1] != false ? ' checked' : ''}>
            <label class="CUSTOMlabel" for="voucher_${data[0]}">${data[0].toUpperCase()}</label>
        </div>`)
    });

/*  :------------------------------------:
    |  FINAL DE FORMAS DE PAGAMENTO
    |  INICIO DE HORARIOS DE ATENDIMENTO
    :------------------------------------:  */

    const CLASSsemanaItem = new Array();
    result.business.action.map(function(data, i){
        const ARRAYitemHour = new Array();
        const ARRAYitemTime = new Array();
        data[ARRAYen[i]].map(function(item, ii){

            ARRAYitemHour.push(`
            <div>${item[0] != '' || item[1] != '' ? `<span>${item[0]} ÁS ${item[1]}</span>
            ${ii != 0 ? '' : `<a href="javascript:void(0);" class="CLASSitemEdit" data-alvo="${ARRAYen[i]}">Editar</a>`}`
            :
            `<span style="color: #ff6b6b;">Fechado</span>
            ${ii != 0 ? '' : `<a href="javascript:void(0);" class="CLASSitemEdit" data-alvo="${ARRAYen[i]}">Editar</a>`}`}
            </div>`)

            ARRAYitemTime.push(`
            <div class="CLASSitemChild">
                <input type="time" id="OPENtime" name="sun"${item[0] != '' ? ` value="${item[0]}"` : ''}>
                às
                <input type="time" id="CLOSEDtime" name="sun"${item[1] != '' ? ` value="${item[1]}"` : ''}>
                ${ii != 0 ? '<a href="javascript:void(0);" class="REMOVEthisElem">Excluir</a>' : ''}
            </div>`)
        })

        CLASSsemanaItem.push(`
        <div class="CLASSsemanaItem" data-item="${ARRAYen[i]}">
            <div>
                <span>${ARRAYweek[i]}</span>
            </div>
            <div>
                <div class="CLASSitemFirst" name="itemDisplay">
                    ${ARRAYitemHour.join('\n')}
                </div>
                <div class="CLASSitemSecond ITEMnone" name="itemDisplay">
                    <div class="CLASSitemTime">
                    ${ARRAYitemTime.join('\n')}
                    </div>
                    <a href="javascript:void(0)" class="CREATEnewTime" data-alvo="${ARRAYen[i]}">Adicionar novo</a>
                    <p>Para definir um dia como fechado mantenha o campo em branco.</p>
                    <div class="CLASSitemBttm">
                        <button type="button" name="SALVAthisTime" data-alvo="${ARRAYen[i]}">Guardar dados</button>
                        <button type="button" name="CLOSEthisTime" data-alvo="${ARRAYen[i]}">Fechar</button>
                    </div>
                </div>
            </div>
        </div>`)
    })

    document.querySelector('HEADER').getElementsByTagName('SPAN')[0].innerHTML = 'Configurações básicas';
    document.getElementsByTagName('ARTICLE')[0].innerHTML = `
    <div class="MAINbox">
        <div class="SETTINGelemColumn">
            <div class="MASTERtitle">
                <span>Básico</span>
            </div>
            <div class="CLASSitemMedia">
                <div class="CLASSitemCommerce">
                    <div>
                        <span>Status</span>
                    </div>
                    <div>
                        <div class="CLASSitemStatus">
                            <input type="checkbox" class="INPUTctrl" name="INPUTstatusCheckbox" id="SWITCHit"${result.business.status != false ? ' checked' : ''}>
                            <label class="CUSTOMlabel" for="SWITCHit">Fechado</label>
                        </div>
                    </div>
                </div>
                <div class="CLASSinputString">
                    <div>
                        <span>Título</span>
                    </div>
                    <div>
                        <div class="CLASSitemFirst" name="itemDisplay">
                            <span>${result.business.info.brand}</span>
                            <a href="javascript:void(0);" class="CLASSeditDisplay">Editar</a>
                        </div>
                        <div class="CLASSitemSecond ITEMnone" name="itemDisplay">
                            <div class="CLASSitemTitle">
                                <input type="text" js-key="brand" dir="ltr"${result.business.info.brand != '' ? ` value="${result.business.info.brand}"` : ''}>
                            </div>
                            <div class="CLASSitemBttm">
                                <button type="button" name="SAVEinfoString" js-class="CLASSitemTitle">Salvar alterações</button>
                                <button type="button" class="CLASSeditDisplay">Cancelar</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="CLASSinputString">
                    <div>
                        <span>WhatsApp</span>
                    </div>
                    <div>
                        <div class="CLASSitemFirst" name="itemDisplay">
                            <span>${result.business.info.whatsapp}</span>
                            <a href="javascript:void(0);" class="CLASSeditDisplay">Editar</a>
                        </div>
                        <div class="CLASSitemSecond ITEMnone" name="itemDisplay">
                            <div class="CLASSitemWhatsapp">
                                <input type="text" js-key="whatsapp" dir="ltr" placeholder="Ex.: (11) 99876-5432"${result.business.info.whatsapp != '' ? ` value="${result.business.info.whatsapp}"` : ''}>
                            </div>
                            <div class="CLASSitemBttm">
                                <button type="button" name="SAVEinfoString" js-class="CLASSitemWhatsapp">Salvar alterações</button>
                                <button type="button" class="CLASSeditDisplay">Cancelar</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="CLASSinputString">
                    <div>
                        <span>CNPJ</span>
                    </div>
                    <div>
                        <div class="CLASSitemFirst" name="itemDisplay">
                            <span>${result.business.info.cnpj}</span>
                            <a href="javascript:void(0);" class="CLASSeditDisplay">Editar</a>
                        </div>
                        <div class="CLASSitemSecond ITEMnone" name="itemDisplay">
                            <div class="CLASSitemCNPJ">
                                <input type="text" js-key="cnpj" dir="ltr" placeholder="CNPJ"${result.business.info.cnpj != '' ? ` value="${result.business.info.cnpj}"` : ''}>
                            </div>
                            <div class="CLASSitemBttm">
                                <button type="button" name="SAVEinfoString" js-class="CLASSitemCNPJ">Salvar alterações</button>
                                <button type="button" class="CLASSeditDisplay">Cancelar</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="CLASSinputString">
                    <div>
                        <span>Endereço</span>
                    </div>
                    <div>
                        <div class="CLASSitemFirst" name="itemDisplay">
                            <span>${result.business.info.address}, ${result.business.info.number}</span>
                            <a href="javascript:void(0);" class="CLASSeditDisplay">Editar</a>
                        </div>
                        <div class="CLASSitemSecond ITEMnone" name="itemDisplay">
                            <div class="CLASSitemCEP">
                                <input type="text" js-key="zipcode" dir="ltr" placeholder="CEP"${result.business.info.zipcode != '' ? ` value="${result.business.info.zipcode}"` : ''}>
                            </div>
                            <div class="CLASSitemAddress">
                                <input type="text" js-key="address" dir="ltr" placeholder="Rua" disabled="disabled"${result.business.info.address != '' ? ` value="${result.business.info.address}"` : ''}>
                                <input type="text" js-key="number" dir="ltr" placeholder="Número"${result.business.info.number != '' ? ` value="${result.business.info.number}"` : ''}>
                                <input type="text" js-key="district" dir="ltr" placeholder="Bairro" disabled="disabled"${result.business.info.district != '' ? ` value="${result.business.info.district}"` : ''}>
                                <input type="text" js-key="optional" dir="ltr" placeholder="Opcional"${result.business.info.optional != '' ? ` value="${result.business.info.optional}"` : ''}>
                                <input type="text" js-key="region" dir="ltr" placeholder="Cidade" disabled="disabled"${result.business.info.region != '' ? ` value="${result.business.info.region}"` : ''}>
                                <input type="text" js-key="unity" dir="ltr" placeholder="UF" disabled="disabled"${result.business.info.unity != '' ? ` value="${result.business.info.unity}"` : ''}>
                            </div>
                            <div class="CLASSitemBttm">
                                <button type="button" name="SAVEinfoString" js-class="CLASSitemAddress">Salvar alterações</button>
                                <button type="button" class="CLASSeditDisplay">Cancelar</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="CLASSinputString">
                    <div>
                        <span>Preço minimo</span>
                    </div>
                    <div>
                        <div class="CLASSitemFirst" name="itemDisplay">
                            <span>${result.business.info.minvalue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                            <a href="javascript:void(0);" class="CLASSeditDisplay">Editar</a>
                        </div>
                        <div class="CLASSitemSecond ITEMnone" name="itemDisplay">
                            <div class="CLASSitemMinmax">
                                <input type="text" js-key="minvalue" dir="ltr" value="${result.business.info.minvalue != 0 ? Number(result.business.info.minvalue).toFixed(2) : '0.00'}">
                            </div>
                            <p>Definir 0,00 para não ter valor minimo de compra.</p>
                            <div class="CLASSitemBttm">
                                <button type="button" name="SAVEinfoString" js-class="CLASSitemMinmax">Salvar alterações</button>
                                <button type="button" class="CLASSeditDisplay">Cancelar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="SETTINGelemColumn">
            <div class="MASTERtitle">
                <span>Formas de pagamento</span>
            </div>
            <div class="CLASSitemMedia">
                <div class="CLASSmethodCash">
                    <div>
                        <span>Dinheiro</span>
                    </div>
                    <div>
                        ${ARRAYitemCash.join('\n')}
                    </div>
                </div>
                <div class="CLASSmethodCash">
                    <div>
                        <span>Cartão de Débito</span>
                    </div>
                    <div>
                        ${ARRAYitemDebit.join('\n')}
                    </div>
                </div>
                <div class="CLASSmethodCash">
                    <div>
                        <span>Cartão de Crédito</span>
                    </div>
                    <div>
                        ${ARRAYitemCredit.join('\n')}
                    </div>
                </div>
                <div class="CLASSmethodCash">
                    <div>
                        <span>Voucher</span>
                    </div>
                    <div>
                        ${ARRAYitemVoucher.join('\n')}
                    </div>
                </div>
            </div>
        </div>
        <div class="SETTINGelemColumn">
            <div class="MASTERtitle">
                <span>Área de entrega</span>
            </div>
            <div class="CLASSitemMedia">
                ${DISTRICTitem.join('\n')}
                <div class="CLASSitemDistrict FIXEDitem">
                    <div>
                        <span>Adicionar um novo bairro?</span>
                    </div>
                    <div>
                        <div class="CLASSitemFirst ITEMnone" name="itemDisplay">
                            <!-- // NOSE -->
                        </div>
                        <div class="CLASSitemSecond" name="itemDisplay">
                            <div class="CLASSitemJSKEY">
                                <input type="text" js-key="zone" dir="ltr" placeholder="Bairro">
                                <input type="text" js-key="rate" dir="ltr" placeholder="Preço">
                            </div>
                            ${result.business.info.region != undefined ? `
                            <div class="CLASSitemJSKEY DISTRICTelemInput ITEMnone">
                                <input type="text" js-key="district" dir="ltr" placeholder="Cidade">
                            </div>` : ''}
                            <div class="CLASSitemBttm">
                                <button type="button" name="SAVEitemDistrict">Salvar configurações</button>
                                ${result.business.info.region != undefined ? `<a href="javascript:void(0)" class="CLASShrefJSKEY">Fora de ${result.business.info.region}?</a>` : ''}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="SETTINGelemColumn">
            <div class="MASTERtitle">
                <span>Horário de atendimento</span>
            </div>
            <div class="CLASSitemMedia">
                ${CLASSsemanaItem.join('\n')}
            </div>
        </div>
    </div>`;

/*  :------------------------------------:
    |  FINAL HTML SETTINGS
    |  INICIO DE INFO BASICA
    :------------------------------------:  */

    document.querySelector('[name="INPUTstatusCheckbox"]').addEventListener('change', function() {
        database.ref('business').update({
            status: this.checked
        }).then(()=>{
            if(this.checked){
                document.querySelector('[for="SWITCHit"]').innerText = 'Aberto';
            }
            else {
                document.querySelector('[for="SWITCHit"]').innerText = 'Fechado';
            }
        })
    })

    document.querySelectorAll('A.CLASSeditDisplay').forEach(function(data, ii){
        data.addEventListener('click', function(){

            document.querySelectorAll('.CLASSinputString').forEach(function(item){
                if(item.children[1].children[0].classList.contains('ITEMnone')){
                    item.children[1].children[0].classList.remove('ITEMnone')
                    item.children[1].children[1].classList.add('ITEMnone')
                }
            })

            for(let i = 0; i < 2; i++){
                data.parentNode.parentNode.children[i].classList.toggle('ITEMnone')
            }

        })
    })

    document.querySelectorAll('BUTTON.CLASSeditDisplay').forEach(function(data, ii){
        data.addEventListener('click', function(){
            for(let i = 0; i < 2; i++){
                document.querySelectorAll('.CLASSinputString')[ii].children[1].children[i].classList.toggle('ITEMnone')
            }
        })
    })

    var SPMaskBehavior = function (val) {
        return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
    },
    spOptions = {
        onKeyPress: function(val, e, field, options) {
            field.mask(SPMaskBehavior.apply({}, arguments), options);
          }
    };

    $('[js-key="whatsapp"]').mask(SPMaskBehavior, spOptions);

    $('[js-key="cnpj"]').mask('00.000.000/0000-00', {reverse: true});

    $('[js-key="minvalue"]').mask('#.##0,00', {reverse: true});
    
    $('[js-key="zipcode"]').mask('00000-000');

    document.querySelector('[js-key="minvalue"]').addEventListener('blur', function(){
        if(this.value.length != 0){
            this.value.length === 1 || this.value.length === 2 ? this.value = `${this.value},00` : null 
        }
        else {
            this.value = '0,00'
        }
    });

    function SEARCHzipCode(val) {
        const ZIPCode = val.replace(/\D/g, '');

        document.querySelector('[js-key="address"]').value = "Carregando...";
        document.querySelector('[js-key="district"]').value = "Carregando...";
        document.querySelector('[js-key="region"]').value = "Carregando...";
        document.querySelector('[js-key="unity"]').value = "Carregando...";

        fetch(`https://viacep.com.br/ws/${ZIPCode}/json/`, {
            method: 'GET',
            mode: 'cors',
            cache: 'default'
        }).then((response) => response.json())
        .then(function(result) {
            if(JSON.stringify(result) != '{"erro":true}'){
                document.querySelector('[js-key="address"]').value=(result.logradouro);
                document.querySelector('[js-key="district"]').value=(result.bairro);
                document.querySelector('[js-key="region"]').value=(result.localidade);
                document.querySelector('[js-key="unity"]').value=(result.uf);
            }
            else {
                bracael.pushNotify('CEP inválido!');
                document.querySelector('[js-key="address"]').value = null;
                document.querySelector('[js-key="district"]').value = null;
                document.querySelector('[js-key="region"]').value = null;
                document.querySelector('[js-key="unity"]').value = null;
            }
        });
    }

    document.querySelector('[js-key="zipcode"]').addEventListener('input', function(){
        // console.log(this.value.length, this.value)
        this.value.length === 9 ? SEARCHzipCode(this.value) : (()=>{
            document.querySelector('[js-key="address"]').value = null;
            document.querySelector('[js-key="district"]').value = null;
            document.querySelector('[js-key="region"]').value = null;
            document.querySelector('[js-key="unity"]').value = null;
        })();
    })
    
    document.querySelectorAll('[name="SAVEinfoString"]').forEach(function(data, ii){
        data.addEventListener('click', function(){
            const CLASSjs = this.getAttribute('js-class');
            const JSKEYatt = new Array();
            document.querySelector(`.${this.getAttribute('js-class')}`).querySelectorAll('INPUT').forEach((item)=>{

                if(item.getAttribute('js-key') === 'minvalue'){
                    // valor monetario type number
                    JSKEYatt.push(`"${item.getAttribute('js-key')}":${Number(item.value.replace(/\./g,'').replace(/\,/g,'.'))}`)
                }
                else {
                    // valor type string
                    JSKEYatt.push(`"${item.getAttribute('js-key')}":"${item.value}"`)
                }
            });

            const IFitemBase = new Array();
            const OBJitemBase = JSON.parse(`{
                ${JSKEYatt.join(',\n')}
                ${CLASSjs != 'CLASSitemAddress' ? '' : `,"zipcode":"${document.querySelector('[js-key="zipcode"]').value}"`}
            }`)

            Object.getOwnPropertyNames(OBJitemBase).map(function(props){
                if(props == 'optional'){
                    IFitemBase.push(true)
                }
                else {
                    OBJitemBase[props] != '' || typeof OBJitemBase[props] === 'number' ? IFitemBase.push(true) : IFitemBase.push(false)
                }
            })

            if(!IFitemBase.includes(false)){
                database.ref('business/info').update(OBJitemBase).then(()=>{
                    var ITEMstrConst = null;
                    if(CLASSjs === 'CLASSitemMinmax'){
                        ITEMstrConst = OBJitemBase.minvalue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
                    }
                    else if(CLASSjs === 'CLASSitemTitle'){
                        ITEMstrConst = OBJitemBase.brand
                    }
                    else if(CLASSjs === 'CLASSitemWhatsapp'){
                        ITEMstrConst = OBJitemBase.whatsapp
                    }
                    else if(CLASSjs === 'CLASSitemCNPJ'){
                        ITEMstrConst = OBJitemBase.cnpj
                    }
                    else if(CLASSjs === 'CLASSitemAddress'){
                        ITEMstrConst = `${OBJitemBase.address}, ${OBJitemBase.number}`
                    }

                    document.querySelector(`.${CLASSjs}`).parentNode.parentNode.children[0].querySelector('SPAN').innerText = ITEMstrConst;

                    bracael.pushNotify('Configurações salvas')

                    setTimeout(()=>{
                            document.querySelector(`.${CLASSjs}`).parentNode.parentNode.children[0].classList.remove('ITEMnone')
                            document.querySelector(`.${CLASSjs}`).parentNode.parentNode.children[1].classList.add('ITEMnone')
                    }, 1500);

                })
            }
            else {
                bracael.pushNotify('Há algo de errado!');
            }
        })
    })

    /*  :------------------------------------:
        |  FINAL DE INFO BASICA
        |  INICIO AREA DE ENTREGA
        :------------------------------------:  */

        document.querySelectorAll('.DELETzoneDelivery').forEach(function(data){
            data.addEventListener('click', function(){
                const NUMBitemJS = this.getAttribute('js-numb');

                console.log(document.querySelectorAll('.CLASSitemDistrict')[NUMBitemJS])

                document.body.insertAdjacentHTML('beforeend', `
                <div class="MODALdefault" id="REMOVEitem">
                    <div class="MODALinst">
                        <div class="CONTENTmodal">
                            <div class="MODALelemTitle">
                                <span>Remover bairro?</span>
                            </div>
                            <div class="MODALelemMsg">Ao remover este bairro, seus clientes não verá este local na lista ao selecionar a entrga.</div>
                            <div class="MODALelemFooter">
                                <button type="button" name="ACTIONitemCancel">Cancelar</button>
                                <button type="button" name="ACTIONitemRemove">Remover bairro</button>
                            </div>
                        </div>
                    </div>
                </div>`);

                $(REMOVEitem).fadeIn(200, function(){
                    this.querySelector('[name="ACTIONitemCancel"]').addEventListener('click', function(){
                        $(REMOVEitem).fadeOut(200, function(){
                            this.remove();
                            document.body.removeAttribute('style');
                        });
                    });

                    this.querySelector('[name="ACTIONitemRemove"]').addEventListener('click', function(){
                        database.ref(`business/delivery/${NUMBitemJS}`).remove().then(()=>{
                            window.location.href = '?main=settings';
                        })
                    });
                });
                
            })
        })

        document.querySelector('.CLASShrefJSKEY').addEventListener('click', function(){
            document.querySelector('.CLASSitemJSKEY.DISTRICTelemInput').classList.toggle('ITEMnone')
            if(document.querySelector('.CLASSitemJSKEY.DISTRICTelemInput').classList.contains('ITEMnone')){
                this.innerText =  `Fora de ${result.business.info.region}?`;
            }
            else {
                this.innerText =  `Para ${result.business.info.region}?`;
                document.querySelector('.CLASSitemJSKEY.DISTRICTelemInput').querySelector('[js-key="district"]').value = null;
            }
        })

        document.querySelectorAll('[name="SAVEitemDistrict"]').forEach(function(data){
            data.addEventListener('click', function(){
                const FIXEDitemObj = new Object();
                document.querySelector('.CLASSitemDistrict.FIXEDitem').querySelectorAll('input').forEach(function(item){
                    item.getAttribute('js-key') === 'rate' ? FIXEDitemObj[item.getAttribute('js-key')] = Number(item.value.replace(/\./g,'').replace(/\,/g,'.')) : FIXEDitemObj[item.getAttribute('js-key')] = item.value;
                })

                if(FIXEDitemObj.rate != 0 && FIXEDitemObj.zone != ''){
                    database.ref('business/delivery').push(FIXEDitemObj).then(()=>{
                        window.location.href = '?main=settings';
                    });
                }
                else {
                    bracael.pushNotify('Há algo de errado!');
                }
            })
        })

        $('[js-key="rate"]').mask('#.##0,00', {reverse: true});

        document.querySelectorAll('[js-key="rate"]').forEach(function(data){
            data.addEventListener('blur', function(){
                if(this.value.length != 0){
                this.value.length === 1 || this.value.length === 2 ? this.value = `${this.value},00` : null 
                }
                else {
                this.value = '0,00'
                }
            });
        })

    /*  :------------------------------------:
        |  FINAL AREA DE ENTREGA
        |  INICIO DE FORMAS DE PAGAMENTO
        :------------------------------------:  */

    document.querySelectorAll('[name="PAYMENTmethod"]').forEach(function(data){
        data.addEventListener('change', function() {

            var STATUSnamed = null;
            var METHODitemCard = null;

            if(this.id.split('_')[0] === 'cash'){
                METHODitemCard = 'Dinheiro';    }
            else if(this.id.split('_')[0] === 'debit'){
                METHODitemCard = 'Débito';  }
            else if(this.id.split('_')[0] === 'credit'){
                METHODitemCard = 'Crédito'; }
            else if(this.id.split('_')[0] === 'voucher'){
                METHODitemCard = 'Voucher'; }

            if(this.checked) {
                STATUSnamed = `Método de ${METHODitemCard} para ${this.id.split('_')[1].toUpperCase()} está ativo!`;    }
            else {
                STATUSnamed = `Método de ${METHODitemCard} para ${this.id.split('_')[1].toUpperCase()} está desativado!`;   }

            if(!document.body.contains(document.querySelector('.PUSHnotifyBttm'))){
                document.body.insertAdjacentHTML('beforeend', `
                <div class="PUSHnotifyBttm">
                    <p>${STATUSnamed}</p>
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

            database.ref(`business/methods/${this.id.split('_')[0]}/`).update(JSON.parse(`{
                "${this.id.split('_')[1]}": ${this.checked}
            }`))
        })
    })

    document.querySelectorAll('.CLASSitemEdit').forEach(function(data){
        data.addEventListener('click', function(){

            document.querySelectorAll('.CLASSsemanaItem').forEach(function(item){
                if(!item.querySelector('.CLASSitemSecond').classList.contains('ITEMnone')){
                    item.querySelector('.CLASSitemFirst').classList.remove('ITEMnone')
                    item.querySelector('.CLASSitemSecond').classList.add('ITEMnone')
                }
            })

            for(let i = 0; i < 2; i++){
                document.querySelector(`[data-item="${this.getAttribute('data-alvo')}"]`).querySelectorAll('[name="itemDisplay"]')[i].classList.toggle('ITEMnone')
            }
        })
    });

    document.querySelectorAll('[name="CLOSEthisTime"]').forEach(function(data){
        data.addEventListener('click', function(){
            for(let i = 0; i < 2; i++){
                document.querySelector(`[data-item="${this.getAttribute('data-alvo')}"]`).querySelectorAll('[name="itemDisplay"]')[i].classList.toggle('ITEMnone')
            }
        })
    });

    document.querySelectorAll('.CREATEnewTime').forEach(function(data){
        data.addEventListener('click', function(){

            document.querySelector(`.CLASSsemanaItem[data-item="${this.getAttribute('data-alvo')}"]`).querySelector('.CLASSitemTime').insertAdjacentHTML('beforeend', `
            <div class="CLASSitemChild">
            <input type="time" id="OPENtime" name="sun">
            às
            <input type="time" id="CLOSEDtime" name="sun">
            <a href="javascript:void(0);" class="REMOVEthisElem">Excluir</a></div>`);

            document.querySelector(`.CLASSsemanaItem[data-item="${this.getAttribute('data-alvo')}"]`).querySelector('.CLASSitemTime').children[document.querySelector(`.CLASSsemanaItem[data-item="${this.getAttribute('data-alvo')}"]`).querySelector('.CLASSitemTime').children.length-1].querySelector('.REMOVEthisElem').addEventListener('click', function(){
                console.log(this)
                this.parentNode.remove()
    
            })
        })
    });

    document.querySelectorAll('.REMOVEthisElem').forEach(function(data){
        data.addEventListener('click', function(){
            this.parentNode.remove()
        })
    });

    document.querySelectorAll('[name="SALVAthisTime"]').forEach(function(data){
        data.addEventListener('click', function(){

            const SETitemTime = new Array();
            const ELEMitemTime = new Array();
            const BOLEANitemCheck = new Array();
            for(let i = 0; i < document.querySelector(`.CLASSsemanaItem[data-item="${this.getAttribute('data-alvo')}"]`).querySelector('.CLASSitemTime').children.length; i++){

                if(document.querySelector(`.CLASSsemanaItem[data-item="${this.getAttribute('data-alvo')}"]`).querySelector('.CLASSitemTime').children[i].getElementsByTagName('input')[0].value != '' && document.querySelector(`.CLASSsemanaItem[data-item="${this.getAttribute('data-alvo')}"]`).querySelector('.CLASSitemTime').children[i].getElementsByTagName('input')[1].value != ''){

                    BOLEANitemCheck.push(true)
                    SETitemTime.push([document.querySelector(`.CLASSsemanaItem[data-item="${this.getAttribute('data-alvo')}"]`).querySelector('.CLASSitemTime').children[i].getElementsByTagName('input')[0].value, document.querySelector(`.CLASSsemanaItem[data-item="${this.getAttribute('data-alvo')}"]`).querySelector('.CLASSitemTime').children[i].getElementsByTagName('input')[1].value])

                }
                else {
                    BOLEANitemCheck.push(false)
                }

                BOLEANitemCheck.every(elem => elem === true) ? ELEMitemTime.push(`
                <div>
                    <span>${document.querySelector(`.CLASSsemanaItem[data-item="${this.getAttribute('data-alvo')}"]`).querySelector('.CLASSitemTime').children[i].getElementsByTagName('input')[0].value} ÁS ${document.querySelector(`.CLASSsemanaItem[data-item="${this.getAttribute('data-alvo')}"]`).querySelector('.CLASSitemTime').children[i].getElementsByTagName('input')[1].value}</span>
                    ${i != 0 ? '' : `<a href="javascript:void(0);" class="CLASSitemEdit" data-alvo="${this.getAttribute('data-alvo')}">Editar</a>`}
                </div>`) : null;
            }


            document.querySelector(`.CLASSsemanaItem[data-item="${this.getAttribute('data-alvo')}"]`).querySelectorAll('.CLASSitemChild').forEach(function(item, ii){
                if(ii === 0 && !BOLEANitemCheck[ii]){
                    item.getElementsByTagName('input')[0].value = ''
                    item.getElementsByTagName('input')[1].value = ''
                }
                else {
                    if(!BOLEANitemCheck[ii]){
                        item.remove()
                    }
                }
            })


            database.ref(`business/action/${ARRAYen.indexOf(this.getAttribute('data-alvo'))}/${this.getAttribute('data-alvo')}`).set(SETitemTime.length != 0 ? SETitemTime : [["",""]]).then(()=>{
                document.querySelector(`.CLASSsemanaItem[data-item="${this.getAttribute('data-alvo')}"]`).querySelector('.CLASSitemFirst').innerHTML = SETitemTime.length != 0 ? ELEMitemTime.join('\n') : `
                <div>
                    <span style="color: #ff6b6b;">Fechado</span>
                    <a href="javascript:void(0);" class="CLASSitemEdit" data-alvo="${this.getAttribute('data-alvo')}">Editar</a>
                </div>`;

                document.querySelector(`.CLASSitemEdit[data-alvo="${this.getAttribute('data-alvo')}"]`).addEventListener('click', function(){
                        document.querySelectorAll('.CLASSsemanaItem').forEach(function(item){
                            if(!item.querySelector('.CLASSitemSecond').classList.contains('ITEMnone')){
                                item.querySelector('.CLASSitemFirst').classList.remove('ITEMnone')
                                item.querySelector('.CLASSitemSecond').classList.add('ITEMnone')
                            }
                        })

                        for(let i = 0; i < 2; i++){
                            document.querySelector(`[data-item="${this.getAttribute('data-alvo')}"]`).querySelectorAll('[name="itemDisplay"]')[i].classList.toggle('ITEMnone')
                        }
                });

                setTimeout(()=>{
                    document.querySelector(`.CLASSsemanaItem[data-item="${this.getAttribute('data-alvo')}"]`).children[1].children[0].classList.remove('ITEMnone')
                    document.querySelector(`.CLASSsemanaItem[data-item="${this.getAttribute('data-alvo')}"]`).children[1].children[1].classList.add('ITEMnone')
                }, 1500);

                bracael.pushNotify(`Horarios de ${ARRAYweek[ARRAYen.indexOf(this.getAttribute('data-alvo'))].toLowerCase()} salvo com sucesso!`);

            })

        })
    });

}
else {
    // redirecionar pagina para inicio;
    window.location.replace('?main=index');
}
}
else {
    // redirecionar pagina para inicio;
    window.location.replace('?main=index');
}
});
}
else {
const url = new URL(window.location.href);
if(url.search != ''){
    window.location.replace(url.href.substring(0, url.href.indexOf(url.search)));
}
else {

    // AREA DE LOGIN
const ACTIVEpass = '<svg class="CROSSicon PASSit" fill="currentColor" focusable="false" width="24px" height="24px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path d="M12,7c-2.48,0-4.5,2.02-4.5,4.5S9.52,16,12,16s4.5-2.02,4.5-4.5S14.48,7,12,7z M12,14.2c-1.49,0-2.7-1.21-2.7-2.7 c0-1.49,1.21-2.7,2.7-2.7s2.7,1.21,2.7,2.7C14.7,12.99,13.49,14.2,12,14.2z"></path><path d="M12,4C7,4,2.73,7.11,1,11.5C2.73,15.89,7,19,12,19s9.27-3.11,11-7.5C21.27,7.11,17,4,12,4z M12,17 c-3.79,0-7.17-2.13-8.82-5.5C4.83,8.13,8.21,6,12,6s7.17,2.13,8.82,5.5C19.17,14.87,15.79,17,12,17z"></path></svg>';
const OCULTApass = '<svg class="CROSSicon PASSit" fill="currentColor" focusable="false" width="24px" height="24px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path d="M10.58,7.25l1.56,1.56c1.38,0.07,2.47,1.17,2.54,2.54l1.56,1.56C16.4,12.47,16.5,12,16.5,11.5C16.5,9.02,14.48,7,12,7 C11.5,7,11.03,7.1,10.58,7.25z"></path><path d="M12,6c3.79,0,7.17,2.13,8.82,5.5c-0.64,1.32-1.56,2.44-2.66,3.33l1.42,1.42c1.51-1.26,2.7-2.89,3.43-4.74 C21.27,7.11,17,4,12,4c-1.4,0-2.73,0.25-3.98,0.7L9.63,6.3C10.4,6.12,11.19,6,12,6z"></path><path d="M16.43,15.93l-1.25-1.25l-1.27-1.27l-3.82-3.82L8.82,8.32L7.57,7.07L6.09,5.59L3.31,2.81L1.89,4.22l2.53,2.53 C2.92,8.02,1.73,9.64,1,11.5C2.73,15.89,7,19,12,19c1.4,0,2.73-0.25,3.98-0.7l4.3,4.3l1.41-1.41l-3.78-3.78L16.43,15.93z M11.86,14.19c-1.38-0.07-2.47-1.17-2.54-2.54L11.86,14.19z M12,17c-3.79,0-7.17-2.13-8.82-5.5c0.64-1.32,1.56-2.44,2.66-3.33 l1.91,1.91C7.6,10.53,7.5,11,7.5,11.5c0,2.48,2.02,4.5,4.5,4.5c0.5,0,0.97-0.1,1.42-0.25l0.95,0.95C13.6,16.88,12.81,17,12,17z"></path></svg>';


document.body.innerHTML = `
<div class="LOGINuserSpot">
<div>
<div class="ENTERmailAndPass" name="SCREENin">
    <div class="COMPANYlogin">
        <section class="COMPANYit">
            <!-- Bracael -->
        </section>
        <span>Use uma conta Bracael.</span>
    </div>
<form autocomplete="off">
    <div class="GROUPinput">
        <input type="email" name="DOMemailInput" tabindex="1" autocomplete="off" autofocus="" autocapitalize="off" autocorrect="off"></input>
        <label>E-mail</label>
    </div>
    <div class="GROUPinput">
        <input type="password" name="DOMpasswordInput" tabindex="2" autocomplete="off"></input>
        <div class="SHOWpass">${ACTIVEpass}</div>
        <label>Senha</label>
    </div>
    <div class="FOOTERlogin">
        <button name="SCREENitemNext" type="button" onclick="alert('Entre em contato conosco pelo WhatsApp ou Instagram!')">Esqueceu a sua senha?</button>
        <button name="USERlogIn" tabindex="3">Fazer login</button>
    </div>
</form>
</div>

<div class="RESETpassWithEmail DISPLAYnone" name="SCREENin">
<div class="COMPANYlogin"><section class="COMPANYit"><!-- Bracael --></section><span>Esqueceu a senha? ou <a href="javascript:void(0)" class="TABLEdiv" id="TOOGLEscreen">Fazer login</a></span></div><p>Digite seu endereço de e-mail para redefinir a senha. Talvez você precise verificar sua pasta de spam ou desbloquear o e-mail bracael.service@gmail.com</p><div class="GROUPinput"><input type="email" id="INPTRESETpass" class="INPUTclass" tabindex="1" autocomplete="off" autofocus="" autocapitalize="off" autocorrect="off"></input><label>E-mail</label></div><div class="FOOTERlogin PAGEreset"><a class="IDONTacess" href="javascript:void(0);" onclick="alert('Bracael.COM\nVersão Beta, 12.05.2020\nO Conteúdo para está página estará disponivel em breve.')"><span>Não tem mais acesso?</span></a><button class="BTNRESETpass" tabindex="2">Enviar</button></div>
</div>

    </div>
</div>`;


document.querySelector('FORM').addEventListener('submit', (e)=>{
    e.preventDefault();
});

document.querySelector('[name="USERlogIn"]').addEventListener('click', function(){
    const DOMemailInput = document.querySelector('[name="DOMemailInput"]');
    const DOMpasswordInput = document.querySelector('[name="DOMpasswordInput"]');

	firebase.auth()
	.signInWithEmailAndPassword(DOMemailInput.value, DOMpasswordInput.value)
	.catch(function(error) {
        var MSGfail = null;
        DOMemailInput.value.length != 0 ?
        MSGfail = 'E-mail ou senha inválidos.' : MSGfail = 'Por favor, digite um email.';

    const GROUPall = document.querySelectorAll('.GROUPinput')[0];
    GROUPall.querySelector('INPUT').addEventListener('input', function(){
            $('.MSGerror').animate({ height: 0, opacity: 0 },{duration: 300, complete: function(){ $('.MSGerror').remove() }});
            GROUPall.classList.remove('ELEMinptFail');
    });

    GROUPall.classList.add('ELEMinptFail');
    DOMpasswordInput.value = null;
    DOMpasswordInput.removeAttribute('style')

    !GROUPall.hasAttribute('ELEMinptFail') && !document.body.contains(document.querySelector('.MSGerror')) ?
    GROUPall.insertAdjacentHTML('afterend', '<div class="MSGerror"><div class="CROSSicon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="#d50000" fill-rule="evenodd"><path id="Retângulo_2" data-name="Retângulo 2" class="cls-1" d="M8,0A8,8,0,1,1,0,8,8,8,0,0,1,8,0ZM7,3H9v7H7V3Zm0,8H9v2H7V11Z"></path></svg></div><span>' +MSGfail+ '</span></div>')
    : null;

    });
});

document.querySelectorAll('.GROUPinput').forEach(function(data){
    data.querySelector('INPUT').addEventListener('focusout', function(){
        this.value.length != 0 ? this.setAttribute('class', 'HAScontent') : this.removeAttribute('class');
    })
});

document.querySelector('.SHOWpass').addEventListener('click', function(){
    var PASSit = this.children[0];
    var TYPEbtn = document.querySelector('[name="DOMpasswordInput"]');
    if(TYPEbtn.getAttribute("type") != "password"){
        PASSit.innerHTML = ACTIVEpass;
        TYPEbtn.setAttribute("type", "password");   }
        else {
        PASSit.innerHTML = OCULTApass;
        TYPEbtn.setAttribute("type", "text");   }
});
}
}
});

//]]>
