(function(){
	var firebaseConfig = {
		apiKey: "AIzaSyDclLrJBsnmR_dRh9snqxezoYQN6hIIkvs",
		authDomain: "bracaelcom.firebaseapp.com",
		databaseURL: "https://bracaelcom.firebaseio.com",
		projectId: "bracaelcom",
		storageBucket: "bracaelcom.appspot.com",
		messagingSenderId: "303208089930",
		appId: "1:303208089930:web:7da5d329a0bdf8a00659b3",
	};
	firebase.initializeApp(firebaseConfig);
})();

function HTTPXMLresquest(JSONit){
	var url = new URL(window.location.href);
	var DEMOid = url.searchParams.get("id");
	var pLOCAL = JSONit.entry.georss$featurename.$t;
	var JSONvar = JSONit.entry.content.$t.replace(/<[^>]*>?/gm, '');
	var p = pLOCAL.replace(/[^0-9\.]+/g, '');

document.title = 'Bracael - '+JSONit.entry.title.$t;

const ARRAYdate = new Intl.DateTimeFormat('pt-BR', { weekday: 'long', day: 'numeric', month: 'numeric', year: 'numeric', hour: '2-digit', minute: 'numeric', hour12: true });
const [{ value: weekday },,{ value: day },,{ value: month },,{ value: year },,{ value: hour },,{ value: minute },,{ value: hour12 }] = ARRAYdate.formatToParts(new Date(JSONit.entry.published.$t));
var pDATE = `${day}/${month}/${year} ÀS ${hour}:${minute} ${hour12}`;

for(var i = 0; i < JSONit.entry.link.length; i++){
	var INDEXit = JSONit.entry.link[i].href;}

if(JSONvar.substring(0, JSONvar.length-JSONvar.length+1) == ' '){
	var JSONvar = JSONvar.substring(1, JSONvar.length);}

	var POSTcode = JSONvar.replace(/] \[/gm, ']\n[').replace(/]  \[/gm, ']\n[').replace(/]   \[/gm, ']\n[');
	var CODEdemo = POSTcode.replace('[demo', '[class="demo"');
	var CODEdemo = CODEdemo.replace('[pre]', '<pre>');
	var CODEdemo = CODEdemo.replace('[/pre]', '</pre>');
	var CODEdemo = CODEdemo.replace('[zip', '[class="zip"');
	var CODEdemo = CODEdemo.replace('[baixar', '[class="baixar"');
	var CODEdemo = CODEdemo.replace(/(?:\[changelog)/g, '[class="changelog"');
	var CODEdemo = CODEdemo.replace(/(?:\"])/g, '"></CAEL>');
	var CODEdemo = CODEdemo.replace(/(?:\[responsive])/g, '<responsive></responsive>');
	var CODEdemo = CODEdemo.replace(/(?:\[error])/g, '<error></error>');
	var CODEdemo = CODEdemo.replace(/(?:\[pagenavi])/g, '<pagenavi></pagenavi>');
	var CODEdemo = CODEdemo.replace(/(?:\[cookies])/g, '<cookies></cookies>');
	var CODEdemo = CODEdemo.replace(/(?:\[ads])/g, '<ads></ads>');
	var CODEdemo = CODEdemo.replace(/(?:\[fav])/g, '<fav></fav>');
	var CODEdemo = CODEdemo.replace(/(?:\[comments])/g, '<comments></comments>');
	var CODEdemo = CODEdemo.replace(/(?:\[seo])/g, '<seo></seo>');
	var CODEdemo = CODEdemo.replace(/(?:\[post])/g, '<post></post>');
	var CODEdemo = CODEdemo.replace(/(?:\[class=")/g, '<CAEL class="');
	var DOCit = new DOMParser().parseFromString(CODEdemo, 'text/html');
	var IMGit = new DOMParser().parseFromString(JSONit.entry.content.$t, 'text/html');
	var GETimg = IMGit.getElementsByTagName("img");

	// MOEDA
	var BR = "R$ ";

	//3 DIGITOS NA MOEDA
	var aa = p.substring(0, 1);
	var ab = p.substring(1);

	//4 DIGITOS NA MOEDA
	var ba = p.substring(0, 2);
	var bb = p.substring(2);

	//5 DIGITOS NA MOEDA
	var ca = p.substring(0, 3);
	var cb = p.substring(3);

	//6 DIGITOS NA MOEDA
	var da = p.substring(0, 1);
	var db = p.substring(1, 4);
	var dc = p.substring(4);

	//7 DIGITOS NA MOEDA
	var ea = p.substring(0, 2);
	var eb = p.substring(2, 5);
	var ec = p.substring(5);

	//8 DIGITOS NA MOEDA
	var fa = p.substring(0, 3);
	var fb = p.substring(3, 6);
	var fc = p.substring(6);

	if((p.length == 1) || (p.length == 2) || (p.length > 8)){ var PRICEpost = 'ERRO 400, OPS!'; }
	if(p.length == 3){ var PRICEpost = BR + aa + "," + ab; }
	if(p.length == 4){ var PRICEpost = BR + ba + "," + bb; }
	if(p.length == 5){ var PRICEpost = BR + ca + "," + cb; }
	if(p.length == 6){ var PRICEpost = BR + da + "." + db + "," + dc; }
	if(p.length == 7){ var PRICEpost = BR + ea + "." + eb + "," + ec; }
	if(p.length == 8){ var PRICEpost = BR + fa + "." + fb + "," + fc; }
	if(p.length == 0){ var PRICEpost = 'EMPTY!'; }

if(DOCit.body.contains(DOCit.body.querySelector('.baixar'))){
	var BOLLbxa = DOCit.body.querySelector('.baixar').hasAttribute('url');}
	else{ var BOLLbxa = false; }

if(DOCit.body.contains(DOCit.body.querySelector('.demo'))){
	var BOLLdmo = DOCit.body.querySelector('.demo').hasAttribute('url');}
	else{ var BOLLdmo = false; }

if(DOCit.body.contains(DOCit.body.querySelector('pre'))){
	var BOLLpre = true;}
	else{ var BOLLpre = false; }

if(DOCit.body.contains(DOCit.body.querySelector('.zip'))){
	var BOLLupt = DOCit.body.querySelector('.zip').hasAttribute('update');
	var BOLLlyt = DOCit.body.querySelector('.zip').hasAttribute('layout');}
	else{
	var BOLLupt = false;
	var BOLLlyt = false;}



if(pLOCAL.split(' ').includes('free') && GETimg.length>=1 && BOLLdmo && BOLLpre && BOLLbxa && BOLLupt && BOLLlyt && pLOCAL.split(' ').length === 1){
	var CHECKout = false;
	var POSTtrue = true;
	var PREMIUMspot = '<div class="INFOthis"><li><a href="' +INDEXit+ '"><i class="CROSSicon INFOicon"></i></a></li><li><a href="javascript:void(0);" class="CARTit"><i class="CROSSicon ADDTOfav"></i></a></li></div>';}
	else if(pLOCAL.split(' ').includes('excl') && GETimg.length>=1 && BOLLdmo && BOLLpre && pLOCAL.split(' ').length === 1){
	var CHECKout = false;
	var POSTtrue = true;
	var PREMIUMspot = '<div class="INFOthis"><li><a href="' +INDEXit+ '"><i class="CROSSicon INFOicon"></i></a></li><li><a href="javascript:void(0);" class="CARTit"><i class="CROSSicon ADDTOfav"></i></a></li></div>';}
else{
if(GETimg.length>=1 && BOLLdmo && BOLLpre && BOLLbxa && BOLLupt && BOLLlyt && Number(pLOCAL.replace(/[^0-9]/g,'')) !== 0 && pLOCAL.split(' ').length === 1){
	var CHECKout = true;
	var VALUEpay = PRICEpost.split(' ')[1].replace(/(?:,)/g, '.');
	var POSTtrue = true;
	var PREMIUMspot = '<div class="INFOthis"><li><a href="/p/checkout.html?id=' +DEMOid+ '" target="_blank"><i class="CROSSicon CARTicon"></i><span>' +PRICEpost+ '</span></a></li><li><a href="' +INDEXit+ '"><i class="CROSSicon INFOicon"></i></a></li><li><a href="javascript:void(0);" class="CARTit"><i class="CROSSicon ADDTOfav"></i></a></li></div>';}
	else{
	var CHECKout = false;
	var POSTtrue = false;}}

	if(window.location.href.indexOf('/p/demo.html') != -1){
if(POSTtrue){
	var GETdmo = DOCit.body.querySelector('.demo').getAttribute('url');
	document.querySelector('.REMOVEframe').innerHTML = '<a href="' +GETdmo+ '"><i class="CROSSicon CLOSEframe"></i></a>';
	document.querySelector('.FRAMEdrct').setAttribute('src', DOCit.body.querySelector('.demo').getAttribute('url'));
	document.querySelector('.PREMIUMspot').innerHTML = PREMIUMspot;

for(var i = 0; i < document.querySelectorAll('[data-size]').length; i++){
	document.querySelectorAll('[data-size]')[i].addEventListener('click', function(){
	document.querySelector('I.CROSSicon.ACTIVEit').classList.remove('ACTIVEit');
	this.children[0].classList.add('ACTIVEit');
	document.querySelector('IFRAME.FRAMEdrct').setAttribute('width', this.getAttribute('data-size'));});}

var HTMLwid = document.querySelector('HTML').offsetWidth;
if(!document.body.classList.contains('mobile')){
if(HTMLwid => 1024){
	document.querySelector('I.CROSSicon.DESKTOPit').classList.add('ACTIVEit');}
	else if(HTMLwid => 480){
	document.querySelector('I.CROSSicon.TABLETpn').classList.add('ACTIVEit');}
	else{
	document.querySelector('I.CROSSicon.TABLETrt').classList.add('ACTIVEit');}}
else{
if(HTMLwid <= 480){
	document.querySelector('I.CROSSicon.MOBILErt').classList.add('ACTIVEit');}
	else{
	document.querySelector('I.CROSSicon.MOBILEpn').classList.add('ACTIVEit');}}}

//BOOOKMARK EXISTENTE ------ DEMO
if(document.body.contains(document.querySelector('A.CARTit'))){
function ADDTOcart(){
	document.querySelector('.CARTit').classList.add('ACTIVElist');
if(localStorage.BOOKmark != undefined){
if(pLOCAL.split(' ').includes('free') || pLOCAL.split(' ').includes('excl')){
	var OBJstr = '{"' +new URL(window.location.href).searchParams.get('id')+ '":{"POSTtitle":"' +JSONit.entry.title.$t+ '","POSTurl":"' +INDEXit+ '","POSTdate":"' +pDATE+ '","RELimage":"' +GETimg[0].src+ '","POSTup":"' +pLOCAL+ '"},' +localStorage.BOOKmark.substring(1, localStorage.BOOKmark.length-1)+ '}';
	localStorage.setItem('BOOKmark', OBJstr);}
	else{
	var OBJstr = '{"' +new URL(window.location.href).searchParams.get('id')+ '":{"POSTtitle":"' +JSONit.entry.title.$t+ '","POSTurl":"' +INDEXit+ '","POSTdate":"' +pDATE+ '","RELimage":"' +GETimg[0].src+ '","RELprice":"' +PRICEpost+ '"},' +localStorage.BOOKmark.substring(1, localStorage.BOOKmark.length-1)+ '}';
	localStorage.setItem('BOOKmark', OBJstr);}}
else{
if(pLOCAL.split(' ').includes('free') || pLOCAL.split(' ').includes('excl')){
	var OBJstr = '{"' +new URL(window.location.href).searchParams.get('id')+ '":{"POSTtitle":"' +JSONit.entry.title.$t+ '","POSTurl":"' +INDEXit+ '","POSTdate":"' +pDATE+ '","RELimage":"' +GETimg[0].src+ '","POSTup":"' +pLOCAL+ '"}}';
	localStorage.setItem('BOOKmark', OBJstr);}
	else{
	var OBJstr = '{"' +new URL(window.location.href).searchParams.get('id')+ '":{"POSTtitle":"' +JSONit.entry.title.$t+ '","POSTurl":"' +INDEXit+ '","POSTdate":"' +pDATE+ '","RELimage":"' +GETimg[0].src+ '","RELprice":"' +PRICEpost+ '"}}';
	localStorage.setItem('BOOKmark', OBJstr);}}}

if(localStorage.BOOKmark != undefined){
if(Object.getOwnPropertyNames(JSON.parse(localStorage.BOOKmark)).includes(new URL(window.location.href).searchParams.get('id'))){
	document.querySelector('.CARTit').classList.add('ACTIVElist');}
	else{
	document.querySelector('A.CARTit').addEventListener('click', ADDTOcart);}}
	else{
	document.querySelector('A.CARTit').addEventListener('click', ADDTOcart);}}
	} // SE MINHA PÁGINA É DEMO



	if(window.location.href.indexOf('/p/checkout.html') != -1){	



		function confirmForm(a, b) {
			//MSG FAILURE ------ [RESOLVIDO]
			var GROUPall = a.parentElement;
			var ERROname = a.getAttribute('id');

			var MSGerror = '<div class="MSGerror '+ERROname+'"><div class="CROSSicon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="#d50000" fill-rule="evenodd"><path id="RetÃ¢ngulo_2" data-name="RetÃ¢ngulo 2" class="cls-1" d="M8,0A8,8,0,1,1,0,8,8,8,0,0,1,8,0ZM7,3H9v7H7V3Zm0,8H9v2H7V11Z"></path></svg></div><span>' +b+ '</span></div>';

			var parser = new DOMParser();
			var MSGerror = parser.parseFromString(MSGerror, 'text/html');
			
			if(!GROUPall.hasAttribute("fail") && !GROUPall.contains(document.querySelector('.MSGerror'))){
			GROUPall.setAttribute('fail', '');
			GROUPall.insertAdjacentElement("beforeend", MSGerror.querySelector('.MSGerror'));
			
			GROUPall.addEventListener('input', function(){
				if(GROUPall.contains(GROUPall.querySelector('.MSGerror'))){
				document.querySelector('.MSGerror.'+ERROname).remove();}
				GROUPall.removeAttribute('fail');});
			}}


		// console.log(VALUEpay)
		if(CHECKout){
		var CONTROLLpay = '<div class="FORMdiv"><div class="CONTROLLpayment"><div class="STEPbox"><ul class="steps"> <i class="CROSSstep"></i><li class="step-item"><a id="stepPersonalData" title="Dados pessoais" class="step-item-link tab-personal-data active"><span class="rounded step-number">1</span><span class="step-text">Dados pessoais</span></a></li><li class="step-item"><a id="stepPayment" title="Pagamento" class="step-item-link tab-payment"><span class="rounded step-number">2</span><span class="step-text">Pagamento</span></a></li><li class="step-item"><a id="stepThanks" title="Obrigado!" class="step-item-link"><span class="rounded step-number">3</span><span class="step-text">Obrigado!</span></a></li></ul></div><div class="PAYMENTmethod"><div class="CREDITcardPayment"><div class="SPOTinst"><div class="DISPLAYdados"><p><input type="text" id="INPUTcardName" class="INPUTclass" autocomplete="off"></input><label for="INPUTcardName">Nome e sobrenome</label></p><p><input type="email" id="INPUTdateEmail" class="INPUTclass" autocomplete="off"></input><label for="INPUTdateEmail">Digite seu E-mail</label></p><p><input type="email" class="INPUTclass" id="confirmEmail" autocomplete="off"></input><label>Confirmação de E-mail</label></p><div class="NEXTstep"><button class="BTTNstep BTNtype" type="button">Próximo passo</button></div></div></div><div class="SPOTinst DISPLAYnone"><div class="SLCTpayTab"><li><a href="javascript:void(0);" class="SLCTtoPay ACTIVEit" for="PAYMENTcrd"><i class="CROSSicon CARDicon"></i>Cartão de crédito</a></li><li><a href="javascript:void(0);" class="SLCTtoPay" for="PAYMENTblt"><i class="CROSSicon CAIXAlot"></i>Pagamento em lotérica</a></li><li><a href="javascript:void(0);" class="SLCTtoPay" for="PAYMENTpnl"><i class="CROSSicon BOLETOicon"></i>Boleto</a></li></div><div class="METHODtoPay"><div class="PAYMENTcrd" id="METHODitem"><form id="pay" name="pay"><fieldset><div class="CREDITcardNode"><div class="CREDITcardDate"><p hidden=""><input type="text" id="cardholderName" class="INPUTclass" data-checkout="cardholderName"></input><label for="cardholderName">Nome e sobrenome</label></p><p hidden=""><input type="email" id="email" class="INPUTclass" name="email"></input><label for="email">Digite seu E-mail</label></p><p hidden=""><input type="hidden" name="description" id="description" value="Ítem selecionado" disabled="disabled"></input><label for="description" hidden="">Descrição</label></p><p hidden=""><input name="transaction_amount" id="transaction_amount" disabled="disabled" type="hidden"></input><label for="transaction_amount" hidden="">Valor a pagar</label></p><p><input type="tel" id="cardNumber" class="INPUTclass" data-checkout="cardNumber" onselectstart="return false" onpaste="return false" onCopy="return false" onCut="return false" onDrag="return false" onDrop="return false" maxlength="19" autocomplete="off"></input><label for="cardNumber">Número do cartão</label></p><div class="DISPLAYflex CARDcol1"><p><input type="tel" id="cardExpirationMonth" class="INPUTclass" data-checkout="cardExpirationMonth" onselectstart="return false" onpaste="return false" onCopy="return false" onCut="return false" onDrag="return false" onDrop="return false" maxlength="2" autocomplete="off"></input><label for="cardExpirationMonth">MM</label></p><p><input type="tel" id="cardExpirationYear" class="INPUTclass" data-checkout="cardExpirationYear" onselectstart="return false" onpaste="return false" onCopy="return false" onCut="return false" onDrag="return false" onDrop="return false" maxlength="2" autocomplete="off"></input><label for="cardExpirationYear">AA</label></p><p><input type="tel" id="securityCode" class="INPUTclass" data-checkout="securityCode" onselectstart="return false" onpaste="return false" onCopy="return false" onCut="return false" onDrag="return false" onDrop="return false" maxlength="4" autocomplete="off"></input><label for="securityCode">CVC/CVV</label></p></div><div class="DISPLAYflex CARDcol2"><p> <select id="installments" class="form-control" name="installments"><option value="Parcelas">Parcelas</option> </select> <label for="installments" hidden>Parcelas</label></p><p hidden=""><input type="text" disabled="disabled" name="payment_method_id" id="payment_method_id" hidden=""></input></p></div><div class="DISPLAYflex CARDcol3"><p><select id="docType" data-checkout="docType"></select><label for="docType" hidden>Tipo de documento</label></p><p><input type="tel" id="docNumber" class="INPUTclass" data-checkout="docNumber"></input><label for="docNumber">Número do documento</label></p></div><div class="SUBMITpayment"><button type="submit" id="payment">Finalizar o pagamento</button></div></div><div class="CARDwrapper"><div class="CARDwrapperInset"><div class="PAYMENDcard"><div class="CARDcol1"><div class="CARDchip"><div class="CARDshiny"></div><div class="CARDbrand"></div></div></div><div class="CARDcol2"><div class="CARDNumber"></div></div><div class="CARDcol3"><div class="CARDname"></div><div class="CARDexpiration"><span class="MMcard"></span><span class="BARtag"></span><span class="AAcard"></span></div></div></div><div class="PAYMENDcard"><div class="CARDcol4"><div class="BLACKtarget"></div></div><div class="CARDcol5"><div class="CARDlines"></div><div class="CARDcode"><span class="CARDcodeNumber"></span></div></div></div></div></div></div></fieldset></form></div><div class="PAYMENTblt DISPLAYnone" id="METHODitem"><p>Um boleto bancário é um documento largamente utilizado no Brasil como instrumento de pagamento de um produto ou serviço prestado. Através do boleto, seu emissor pode receber do pagador o valor referente àquele pagamento</p></div><div class="PAYMENTpnl DISPLAYnone" id="METHODitem"><p>Caixa Econômica Federal (CEF), também conhecida como Caixa, é uma instituição financeira, sob a forma de empresa pública[4], com patrimônio próprio e autonomia administrativa com sede em Brasília, no Distrito Federal, e com filiais em todo o território nacional. É vinculada ao Ministério da Economia.</p></div></div></div></div></div></div><div class="PAYMENTbox"><div class="PAYMENTTinst"><div class="PAYMENTtitle"><span class="LICENSEtxt">Premium</span><a target="_blank" href="#"><i class="CIRCLEhelp"></i></a></div><div class="PAYMENTval"><span class="PREMIUMval">' +PRICEpost+ '</span><span class="COINhere">BRL</span></div><div class="PAYMENTTinfo"><h4>' +JSONit.entry.title.$t+ '</h4><p>' +DOCit.body.querySelector('pre').innerText+ '</p><div class="SAFEpost"><i class="CROSSicon DEFENSEit"></i>Compra 100% Segura</div></div></div></div></div>';
		document.querySelector('.Blog').innerHTML = CONTROLLpay;


		if(document.body.contains(document.querySelector('.INPUTclass'))){
			const INPUTclass = document.querySelectorAll('.INPUTclass');
			
			for(var i = 0; i < INPUTclass.length; i++){
				INPUTclass[i].addEventListener('focusout', function(){
				if(this.value.length >= 1){
				this.setAttribute('class', 'HAScontent');}
				else {
				this.removeAttribute('class');}});}}
		
		if(document.body.contains(document.querySelector('.BTTNstep'))){

			function stepPersonal(){
				document.querySelectorAll('.SPOTinst')[1].classList.toggle('DISPLAYnone');
				document.querySelectorAll('.SPOTinst')[0].classList.toggle('DISPLAYnone');
				
				document.querySelector('DIV.STEPbox').classList.toggle('CROSSstep');

				if(document.getElementById('stepPersonalData').hasAttribute('href')){
				document.getElementById('stepPersonalData').removeEventListener('click', stepPersonal, false);
				document.getElementById('stepPersonalData').removeAttribute('href');}
				else{
				document.getElementById('stepPersonalData').addEventListener('click', stepPersonal, false);
				document.getElementById('stepPersonalData').setAttribute('href', 'javascript:void(0);');}
			}


			document.querySelector('.BTTNstep').addEventListener('click', function(){
			var IDCnm = document.querySelector('#INPUTcardName').value;
			var IDCml = document.querySelector('#INPUTdateEmail').value;
			var IDCcml = document.querySelector('#confirmEmail').value;

				//VERIFICAÇÃO DE NOME
			if(IDCnm.split(' ').length <= 2){
				var NAMEer = !IDCnm.split(' ')[1] != '';}
				else{
				var NAMEer = false;}
			if((!IDCnm != '') || (IDCnm.split(' ').length <= 2 && NAMEer)){
				if(!IDCnm != ''){
					var MSGfail = 'Digite seu nome';}
					else{
					var MSGfail = 'Informe o seu nome completo';}
				confirmForm(document.querySelector('#INPUTcardName'), MSGfail);}

					//VERIFICAÇÃO DO EMAIL
			if(IDCml.split('').includes('@')){
				if(IDCml.split('@')[1].includes('.')){
				var MAILpt = false;
				var MAILer = IDCml.split('@')[1].split('.')[1] === '';}
				else{
				var MAILpt = true;
				var MAILer = false;}}
			else{
				var MAILpt = true;
				var MAILer = false;}

			if(IDCml == '' || !IDCml.split('').includes('@') || MAILpt || MAILer){
				if(IDCml == ''){
					var MSGfail = 'Digite seu e-mail';}
					else{
					var MSGfail = 'Digite um e-mail válido';}
				confirmForm(document.querySelector('#INPUTdateEmail'), MSGfail);}


				//VERIFICAÇÃO CONFIRMAÇÃO DE EMAIL
			if(IDCcml == '' || IDCcml != IDCml || MAILer){

				if(IDCcml == ''){
					var MSGfail = 'Campo obrigatório';}
					else{
					var MSGfail = 'O e-mail é diferente';}
					
				confirmForm(document.querySelector('#confirmEmail'), MSGfail);}

			if(IDCcml == IDCml && !MAILpt && document.querySelector('#confirmEmail').parentElement.contains(document.querySelector('#confirmEmail').parentElement.querySelector('.MSGerror'))){
				document.querySelector('.MSGerror.confirmEmail').remove();
				document.querySelector('#confirmEmail').parentElement.removeAttribute('fail');}

			
			if(!NAMEer && !(IDCml == '' || !IDCml.split('').includes('@') || MAILpt || MAILer) && !(IDCcml == '' || IDCcml != IDCml || MAILer)){
				stepPersonal();
			}

			});




			//EFEITOS NUMERO DO CARTÃO
	document.getElementById('cardNumber').addEventListener('input', function(){
		this.value = this.value.replace(/[^0-9.]/g, '');

		var CARDnumberIt = String(document.getElementById('cardNumber').value);
		if(CARDnumberIt.length <= 4){
			var CARDnumberIt = document.getElementById('cardNumber').value;
		}
		else if(CARDnumberIt.length <= 8){
			var CARDnumberIt = CARDnumberIt.replace(/(\d{4})/gi, "$1 ");
			// console.log('8', CARDnumberIt.replace(/(\d{4})(\d{4})/gi, "$1 "));
			// console.log(CARDnumberIt.length <= 8);
		}
		else if(CARDnumberIt.length <= 12){
			var CARDnumberIt = CARDnumberIt.replace(/(\d{4})(\d{4})/gi, "$1 $2 ");
			// console.log('12', CARDnumberIt.replace(/(\d{4})(\d{4})/gi, "$1 $2 "));
			// console.log(CARDnumberIt.length <= 12);
		}
		else if(CARDnumberIt.length <= 16){
			document.querySelector('.CARDNumber').classList.remove('INPUTsize');
			var CARDnumberIt = CARDnumberIt.replace(/(\d{4})(\d{4})(\d{4})/gi, "$1 $2 $3 ");
			// console.log('12', CARDnumberIt.replace(/(\d{4})(\d{4})(\d{4})/gi, "$1 $2 $3 "));
			// console.log(CARDnumberIt.length <= 12);
		}
		else {
			document.querySelector('.CARDNumber').classList.add('INPUTsize');
			var CARDnumberIt = CARDnumberIt.replace(/(\d{4})(\d{4})(\d{4})(\d{4})/gi, "$1 $2 $3 $4 ");
			// console.log('12', CARDnumberIt.replace(/(\d{4})(\d{4})(\d{4})(\d{4})/gi, "$1 $2 $3 $4 "));
			// console.log(CARDnumberIt.length <= 12);
		}

	if(this.value != ''){
	document.querySelector('.CARDNumber').classList.add('TEXTon');}
	else{
	document.querySelector('.CARDNumber').classList.remove('TEXTon');}
		document.querySelector('.CARDNumber').innerHTML = CARDnumberIt;});
	document.getElementById('cardNumber').addEventListener('focusin', function(){
		document.querySelector('.CARDNumber').classList.add('SELECit');});
	document.getElementById('cardNumber').addEventListener('focusout', function(){
			document.querySelector('.CARDNumber').classList.remove('SELECit');});


			//EFEITOS EMAIL
	document.getElementById('INPUTdateEmail').addEventListener('input', function(){
	document.querySelector('#email').setAttribute('value', this.value);});


			//EFEITOS NOME
	document.getElementById('INPUTcardName').addEventListener('input', function(){
	document.querySelector('#cardholderName').setAttribute('value', this.value);

	if(document.getElementById('INPUTcardName').value != ''){
	document.querySelector('.CARDname').classList.add('TEXTon');}
	else{
	document.querySelector('.CARDname').classList.remove('TEXTon');}
		const CARDnumberIt = document.getElementById('INPUTcardName').value;
		document.querySelector('.CARDname').innerText = CARDnumberIt});
	document.getElementById('INPUTcardName').addEventListener('focusin', function(){
		document.querySelector('.CARDname').classList.add('SELECit');});
	document.getElementById('INPUTcardName').addEventListener('focusout', function(){
			document.querySelector('.CARDname').classList.remove('SELECit');});


			//EFEITOS EXPIRATION MONTH
	document.getElementById('cardExpirationMonth').addEventListener('input', function(){
		this.value = this.value.replace(/[^0-9.]/g, '');
		
	if(document.getElementById('cardExpirationMonth').value != ''){
	document.querySelector('.MMcard').classList.add('TEXTon');}
	else{
	document.querySelector('.MMcard').classList.remove('TEXTon');}
		document.querySelector('.MMcard').innerText = document.getElementById('cardExpirationMonth').value;});
	document.getElementById('cardExpirationMonth').addEventListener('focusin', function(){
		document.querySelector('.MMcard').classList.add('SELECit');});
	document.getElementById('cardExpirationMonth').addEventListener('focusout', function(){
			document.querySelector('.MMcard').classList.remove('SELECit');});


			//EFEITOS EXPIRATION YEAR
	document.getElementById('cardExpirationYear').addEventListener('input', function(){
		this.value = this.value.replace(/[^0-9.]/g, '');
		
	if(document.getElementById('cardExpirationYear').value != ''){
	document.querySelector('.AAcard').classList.add('TEXTon');}
	else{
	document.querySelector('.AAcard').classList.remove('TEXTon');}
		document.querySelector('.AAcard').innerText = document.getElementById('cardExpirationYear').value;});
	document.getElementById('cardExpirationYear').addEventListener('focusin', function(){
		document.querySelector('.AAcard').classList.add('SELECit');});
	document.getElementById('cardExpirationYear').addEventListener('focusout', function(){
			document.querySelector('.AAcard').classList.remove('SELECit');});


			//EFEITOS CHAVE
	document.getElementById('securityCode').addEventListener('input', function(){
		this.value = this.value.replace(/[^0-9.]/g, '');
		
	if(document.getElementById('securityCode').value != ''){
	document.querySelector('.CARDcodeNumber').classList.add('TEXTon');}
	else{
	document.querySelector('.CARDcodeNumber').classList.remove('TEXTon');}
	document.querySelector('.CARDcodeNumber').innerText = document.getElementById('securityCode').value;});
	document.getElementById('securityCode').addEventListener('focusin', function(){
		document.querySelector('.CARDwrapperInset').classList.add('CROSSstep');
		document.querySelector('.CARDcodeNumber').classList.add('SELECit');});
	document.getElementById('securityCode').addEventListener('focusout', function(){
		document.querySelector('.CARDwrapperInset').classList.remove('CROSSstep');
		document.querySelector('.CARDcodeNumber').classList.remove('SELECit');});


			//EFEITOS CHAVE
	document.getElementById('docNumber').addEventListener('input', function(){
		this.value = this.value.replace(/[^0-9.]/g, '');});
		

		}
		
		}


		async function formSubmit(TOKENmp, METHODid){
			console.log(TOKENmp);
			console.log(METHODid);

			let processPayment = await firebase.functions().httpsCallable('checkout');

			processPayment({
				transaction_amount: parseFloat(VALUEpay),
				token: TOKENmp,
				description: JSONit.entry.title.$t,
				installments: 1,
				payment_method_id: METHODid,
				payer: {
					email: document.querySelector('#email').value
				}
			}).then(result=>{
				console.log(result.data)
			}).catch(err=>{
				console.log(err)
			});



			document.getElementById('stepPersonalData').removeAttribute('href');
			document.getElementById('stepPersonalData').removeEventListener('click', stepPersonal, false);

			document.querySelector('.STEPbox').classList.remove('CROSSstep');
			document.querySelector('.STEPbox').classList.add('FULLstep');

			// document.querySelector('.PAYMENTmethod').innerHTML = SUCESSpage;
		
		}


			(function(win, doc){

					window.Mercadopago.setPublishableKey("APP_USR-b202ae7d-c352-4526-ab29-5ca6bc441ead");
					window.Mercadopago.getIdentificationTypes();
		
			function cardBin(event){
				let textLength = event.target.value.length;
				if(textLength >= 6){
					let bin = event.target.value.substring(0,6);
					window.Mercadopago.getPaymentMethod({
						bin,
					}, setPaymentMethod);
					window.Mercadopago.getInstallments({
						bin,
						"amount": parseFloat(VALUEpay)
					},getInstallments);
				}
			}
			if(doc.querySelector('#cardNumber')){
				let cardNumber = doc.querySelector('#cardNumber');
				cardNumber.addEventListener('keyup', cardBin, false)
			}
		
			//Set Payment
			function setPaymentMethod(status, response) {

				if (status == 200) {
					let paymentMethodId = doc.querySelector('#payment_method_id');
		
					paymentMethodId.value = response[0].id;
					doc.querySelector('.CARDbrand').classList.add(response[0].name.replace(/\s/g, ''));
					for(var i = 0; i < doc.querySelectorAll('.PAYMENDcard').length; i++){
						doc.querySelectorAll('.PAYMENDcard')[i].classList.add(response[0].name.replace(/\s/g, ''));}
					
				} else {


					const INPTit = document.querySelector('.SPOTinst.DISPLAYnone').querySelectorAll('.INPUTclass');

					for(var i = 0; i < INPTit.length; i++){
					if(!INPTit[i].value != ''){
						var MSGfail = 'Campo obrigatório';
					confirmForm(INPTit[i], MSGfail);
			
					}
			
			
					}


					console.log(`payment method info error: ${response}`);
				}
			}
		
			//Set Instaments
			function getInstallments(status, response) {
				if (status == 200) {
				let label = response[0].payer_costs;
				let installmentsSel = doc.querySelector('#installments');
				installmentsSel.options.length = 0;
		
				label.map(function(elem,ind,obj){
					let txtOpt = elem.recommended_message;
					let valOpt = elem.installments;
					installmentsSel.options[installmentsSel.options.length] = new Option(txtOpt, valOpt);
				});
				} else {
					console.log(response);
				}
			}
		
			//Create Token
			function sendPayment(event){
				event.preventDefault();
				window.Mercadopago.createToken(event.target, sdkResponseHandler);
		
			}
			function sdkResponseHandler(status, response) {
				$('.ARROWjdiv').fadeIn(200);

				if (status == 200 || status == 201) {
					console.log("verify filled data");
					let paymentMethodId = doc.querySelector('#payment_method_id').value;
					let form = doc.querySelector('#pay');
					let card = doc.createElement('input');
					card.setAttribute('name', 'token');
					card.setAttribute('type', 'hidden');
					card.setAttribute('value', response.id);
					form.appendChild(card);
					formSubmit(response.id, paymentMethodId);
					form.addEventListener('submit', (event) => {
						event.preventDefault(); });
				}
				else{
					
					var MSGfail = 'Número de cartão inválido';
					confirmForm(document.getElementById('cardNumber'), MSGfail);
				}

				console.log(status);
				console.log(response);
			};
		
			if(doc.querySelector('#payment')){
				doc.querySelector('#pay').addEventListener('submit', sendPayment, false);
			}
		
		

			})(window, document);

		
		var SLCTtoPay = document.querySelectorAll('.SLCTtoPay');
		var METHODitem = document.querySelectorAll('#METHODitem');
		for(var i = 0; i < SLCTtoPay.length; i++){
		SLCTtoPay[i].addEventListener('click', function(){
			document.querySelector('.SLCTtoPay.ACTIVEit').classList.toggle('ACTIVEit');
			this.classList.toggle('ACTIVEit');

	for(var i = 0; i < SLCTtoPay.length; i++){
		if(METHODitem[i].classList.contains(`${this.getAttribute('for')}`)){
			METHODitem[i].classList.remove('DISPLAYnone');}
			else{
			METHODitem[i].classList.add('DISPLAYnone');}

	}});
	
	}

	}

}


function COMMENTdisplay(json){
var urlNoAvatar = "data:image/svg+xml;base64,PHN2ZyBpZD0iQWdydXBhcl8xIiBkYXRhLW5hbWU9IkFncnVwYXIgMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjUwIiBoZWlnaHQ9IjI1MCIgdmlld0JveD0iMCAwIDI1MCAyNTAiPgogIDxkZWZzPgogICAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6ICNjNWM1YzU7CiAgICAgIH0KCiAgICAgIC5jbHMtMiwgLmNscy0zIHsKICAgICAgICBmaWxsOiAjZmZmOwogICAgICB9CgogICAgICAuY2xzLTMgewogICAgICAgIGZpbGwtcnVsZTogZXZlbm9kZDsKICAgICAgfQogICAgPC9zdHlsZT4KICA8L2RlZnM+CiAgPHJlY3QgaWQ9IlJldMOibmd1bG9fMSIgZGF0YS1uYW1lPSJSZXTDom5ndWxvIDEiIGNsYXNzPSJjbHMtMSIgd2lkdGg9IjI1MCIgaGVpZ2h0PSIyNTAiLz4KICA8Y2lyY2xlIGlkPSJFbGlwc2VfMSIgZGF0YS1uYW1lPSJFbGlwc2UgMSIgY2xhc3M9ImNscy0yIiBjeD0iMTI1IiBjeT0iMTAzIiByPSI1NyIvPgogIDxwYXRoIGlkPSJGb3JtYV8xIiBkYXRhLW5hbWU9IkZvcm1hIDEiIGNsYXNzPSJjbHMtMyIgZD0iTTMxLDI1MHM0LjE1Mi03Ny4yMzIsNjktOTljMS42NjQtLjA0NCw0Ny40MDYtMC4wMDcsNTAsMCwzNy41MTEsOC4yODUsNzAuMTUxLDYxLjM3NSw2OSw5OUMyMTUuNzY5LDI0OS45MDUsMzEsMjUwLDMxLDI1MFoiLz4KPC9zdmc+Cg==";
var PIDcmmt = new Array();

for(var i = 0; i < json.feed.entry.length; i++){
	JSONit = json.feed.entry[i];
	PIDcmmt += '"' +JSONit.id.$t.split('post-')[1]+ '"';
    var ALTurl;
    var ALTdat;
    var ALTimg;
	var ALTtit;
	var ALTnam = JSONit.author[0].name.$t;

    for(var k = 0; k < JSONit.link.length; k++){
	if(JSONit.link[k].rel == 'alternate'){
ALTurl = JSONit.link[k].href;
ALTtit = JSONit.title.$t;
ALTdat = JSONit.gd$extendedProperty[1].value;
ALTimg = JSONit.author[0].gd$image.src;
break;}}

//*****************************************//

const dateTimeFormat = new Intl.DateTimeFormat('pt-BR', { weekday: 'long', day: 'numeric', month: 'numeric', year: 'numeric', hour: '2-digit', minute: 'numeric', hour12: true });
const [{ value: weekday },,{ value: day },,{ value: month },,{ value: year },,{ value: hour },,{ value: minute },,{ value: hour12 }] = dateTimeFormat.formatToParts(new Date(ALTdat));

var SEMANAfeira = ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'];
var FULLyear = `${day}/${month}/${year}`;

let DATEtoday = new Date()
let ARRAYdate = DATEtoday.toLocaleString('pt-BR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
}).replace(/\//g, '/')


//DATA ONTEM
var MOMENTit = new Date();
	var dd = new Date(MOMENTit.setDate(MOMENTit.getDate() + -1)).getDate(); 
	var mm = new Date(MOMENTit.setDate(MOMENTit.getDate() + -1)).getMonth() + 1;
	var yy = new Date(MOMENTit.setDate(MOMENTit.getDate() + -1)).getFullYear(); 
    if (dd < 10) { 
	dd = '0' + dd;}
	if (mm < 10) { 
	mm = '0' + mm;}
	var YESTERdd = dd + '/' + mm + '/' + yy;

//DATA TERCEIRO DIA
var THRDday = new Date();
	var dd = new Date(THRDday.setDate(THRDday.getDate() + -2)).getDate(); 
	var mm = new Date(THRDday.setDate(THRDday.getDate() + -2)).getMonth() + 1;
	var yy = new Date(THRDday.setDate(THRDday.getDate() + -2)).getFullYear(); 
    if (dd < 10) { 
	dd = '0' + dd;}
	if (mm < 10) { 
	mm = '0' + mm;}
	var THRDday = dd + '/' + mm + '/' + yy;

// DATA TERCEIRO DIA
var FOUTHday = new Date();
	var dd = new Date(FOUTHday.setDate(FOUTHday.getDate() + -3)).getDate(); 
	var mm = new Date(FOUTHday.setDate(FOUTHday.getDate() + -3)).getMonth() + 1;
	var yy = new Date(FOUTHday.setDate(FOUTHday.getDate() + -3)).getFullYear(); 
    if (dd < 10) { 
	dd = '0' + dd;}
	if (mm < 10) { 
	mm = '0' + mm;}
	var FOUTHday = dd + '/' + mm + '/' + yy;

// DATA QUARTO DIA
var FIFTHday = new Date();
	var dd = new Date(FIFTHday.setDate(FIFTHday.getDate() + -4)).getDate(); 
	var mm = new Date(FIFTHday.setDate(FIFTHday.getDate() + -4)).getMonth() + 1;
	var yy = new Date(FIFTHday.setDate(FIFTHday.getDate() + -4)).getFullYear(); 
    if (dd < 10) { 
	dd = '0' + dd;}
	if (mm < 10) { 
	mm = '0' + mm;}
	var FIFTHday = dd + '/' + mm + '/' + yy;

// DATA QUINTO DIA
var SIXTHday = new Date();
	var dd = new Date(SIXTHday.setDate(SIXTHday.getDate() + -5)).getDate(); 
	var mm = new Date(SIXTHday.setDate(SIXTHday.getDate() + -5)).getMonth() + 1;
	var yy = new Date(SIXTHday.setDate(SIXTHday.getDate() + -5)).getFullYear(); 
    if (dd < 10) { 
	dd = '0' + dd;}
	if (mm < 10) { 
	mm = '0' + mm;}
	var SIXTHday = dd + '/' + mm + '/' + yy;

// DATA SEXTO DIA
var SEVENTHday = new Date();
	var dd = new Date(SEVENTHday.setDate(SEVENTHday.getDate() + -6)).getDate(); 
	var mm = new Date(SEVENTHday.setDate(SEVENTHday.getDate() + -6)).getMonth() + 1;
	var yy = new Date(SEVENTHday.setDate(SEVENTHday.getDate() + -6)).getFullYear(); 
    if (dd < 10) { 
	dd = '0' + dd;}
	if (mm < 10) { 
	mm = '0' + mm;}
	var SEVENTHday = dd + '/' + mm + '/' + yy;


//DATA HOJE
if(ARRAYdate === FULLyear){
	var ALTdat = 'Hoje às ' +`${hour}:${minute} ${hour12}`;}
//DATA ONTEM
else if(YESTERdd == FULLyear){
	var ALTdat = 'Ontem às ' +`${hour}:${minute} ${hour12}`;}
// DATA TERCEIRO DIA
else if(THRDday == FULLyear || FOUTHday == FULLyear || FIFTHday == FULLyear || SIXTHday == FULLyear || SEVENTHday === FULLyear){
	var ALTdat = SEMANAfeira[new Date(ALTdat).getDay()]+ ' às ' +`${hour}:${minute} ${hour12}`;}
else{
	var ALTdat = `${day}/${month}/${year} às ${hour}:${minute} ${hour12}`;}

//*****************************************//

    if (ALTimg == "https://img1.blogblog.com/img/blank.gif" != "") { ALTimg = urlNoAvatar; }

	document.write('<div class="FLEXdiv"><a href="' +ALTurl.split('?')[0]+ '"><div class="FLOATdiv"><span class="IMGthub"><img src="' +ALTimg+ '" width="42" height="42"/></span></div><div class="FLOATdiv"><section><b>' + ALTnam + '</b> fez um novo comentario: “'+ALTtit+'”;</section><section class="DATEcomment">' + ALTdat + '</section></div></a></div>');} //FIM DO LOOP

	document.querySelector('.COMMENTdiv ').children[0].insertAdjacentHTML('beforeend', '<div class="SEEmore">Mostrar tudo</div>');
	document.querySelector('.COMMENTdiv ').children[0].insertAdjacentHTML('afterbegin', '<div class="INFOcmmt">' +json.feed.entry.length+ ' comentários sendo exidos.</div>');

if(Boolean(localStorage.NOTIFYit) !== true){
	localStorage.setItem('CLOUDalt', '[' +PIDcmmt.replace(/("")/gi,'","')+ ']');}

var ITEMapi = PIDcmmt.substring(1, PIDcmmt.length-1).split('""');
var ITEMlocal = localStorage.CLOUDalt.substring(2, localStorage.CLOUDalt.length-2).replace(/(",")/gi, ',');

if(Boolean(localStorage.NOTIFYit) !== true || ITEMapi.toString() !== ITEMlocal){
	document.querySelector('.ALERToff').setAttribute('class', 'ALERTon');}

var NOTIFYit = document.querySelector('.NOTIFYit');
var CLOSEout = document.querySelector('.CLOSEout');
var SWIPEnav = document.getElementById('CONTENTframe');
NOTIFYit.addEventListener('click', function(){

if(Boolean(localStorage.NOTIFYit) !== true || ITEMapi.toString() !== ITEMlocal){
	localStorage.setItem('NOTIFYit', 'true');
	localStorage.setItem('CLOUDalt', '[' +PIDcmmt.replace(/("")/gi,'","')+ ']');
	document.querySelector('.NOTIFYit').children[0].setAttribute('class', 'ALERToff');}

	document.querySelector('.SIDEnav').classList.add('ACTIVEit');
	SWIPEnav.classList.add('SWIPEnav');
	document.body.style.cssText = "overflow:hidden";});
CLOSEout.addEventListener('click', function(){
	SWIPEnav.classList.remove('SWIPEnav');
	document.querySelector('.SIDEnav').classList.remove('ACTIVEit');
	document.body.removeAttribute('style');});
SWIPEnav.addEventListener('click', function(){
	this.classList.remove('SWIPEnav');
	document.querySelector('.SIDEnav').classList.remove('ACTIVEit');
	document.body.removeAttribute('style');});}


window.onload = function(){

	//FOCUSOUT INPUT
	function focusOutInput(){
		if(document.body.contains(document.querySelector('.INPUTclass'))){
			const INPUTclass = document.querySelectorAll('.INPUTclass');
			console.log(INPUTclass)
			for(var i = 0; i < INPUTclass.length; i++){
				INPUTclass[i].addEventListener('focusout', function(){
				if(this.value.length >= 1){
				this.setAttribute('class', 'HAScontent');}
				else {
				this.removeAttribute('class');}});}}}

	//PAGINA DE LOGIN
	if(window.location.href.indexOf('/p/login.html') > -1 || window.location.href.indexOf('/p/signup.html') > -1){
	document.body.setAttribute('login', '');}

	//PAGINA DE CHECKOUT
	if(window.location.href.indexOf('/p/checkout.html') > -1){
	document.body.setAttribute('checkout', '');}


//CACHE URL SESSION STORAGE
if(sessionStorage.CACHEurl === undefined){
	sessionStorage.setItem('CACHEurl', JSON.stringify([window.location.href]));}
	else{
	if(window.location.href !== JSON.parse(sessionStorage.CACHEurl)[JSON.parse(sessionStorage.CACHEurl).length-1]){
	var GEThistory = JSON.parse(sessionStorage.CACHEurl);
	sessionStorage.setItem('CACHEurl', JSON.stringify(GEThistory.concat([window.location.href])));}}

/*********************************************
console.log(window.location.href)
console.log(JSON.stringify([window.location.href]) !== sessionStorage.CACHEurl)
console.log(JSON.stringify([window.location.href]))
console.log(sessionStorage.CACHEurl)
console.log(JSON.parse(sessionStorage.CACHEurl))
console.log(JSON.parse(sessionStorage.CACHEurl)[JSON.parse(sessionStorage.CACHEurl).length-1])
console.log(JSON.parse(sessionStorage.CACHEurl).length)
*********************************************/

//DIRECT PAGE
if(document.head.contains(document.querySelector('#HTTPXMLresquest'))){
var WINDOWhref = window.location.href; //window.location.href
var url = new URL(WINDOWhref);

if(url.searchParams.get("id") != ''){
	var DEMOurl = url.searchParams.get("id");}
	else{
	window.location.assign(window.location.protocol +'//'+ window.location.hostname);}
	document.getElementById('HTTPXMLresquest').setAttribute('src', 'https://tema404.blogspot.com/feeds/posts/default/' +url.searchParams.get("id")+ '?alt=json-in-script&callback=HTTPXMLresquest');}

//EFFECT MODAL
if(document.body.contains(document.querySelector('[feedback]')) && document.body.contains(document.querySelector('.MODALfeedback'))){
for(var i = 0; i < document.querySelectorAll('[feedback]').length; i++){
document.querySelectorAll('[feedback]')[i].addEventListener('click', function(){
	$('.MODALfeedback').fadeIn(500);
	document.querySelector('.MODALfeedback').classList.add('ACTIVEit');
	if(!document.body.hasAttribute('style')){
	document.body.style.cssText = "overflow:hidden";}
	document.getElementById('FEEDback').insertAdjacentHTML('beforebegin', '<div class="CLOSEfeed CLOSEmodal" ></div>');
for(var a = 0; a < document.querySelectorAll('.CLOSEmodal').length; a++){
document.querySelectorAll('.CLOSEmodal')[a].addEventListener('click', function(){
	if(!document.body.contains(document.querySelector('NAV.PUSHmenu.MENUactive'))){
	document.body.removeAttribute('style');}
	document.querySelector('.MODALfeedback').classList.remove('ACTIVEit');
	$('.MODALfeedback').fadeOut(500);
	if(document.body.contains(document.querySelector('.CLOSEfeed.CLOSEmodal'))){
document.querySelector('.CLOSEfeed.CLOSEmodal').remove();}});}});}}

//TOGGLE CATEGORIAS MENUNAV
if(document.body.contains(document.querySelector('.HREFmost'))){
document.querySelector('.HREFmost').addEventListener('click', function(){
	this.classList.toggle('ACTIVEit');
	$('#LABELspot').animate({ height: "toggle" },{duration: 300});
if(this.innerHTML === "Mostrar categorias") {
    this.innerHTML = "Ocultar categorias";}
	else{
	this.innerHTML = "Mostrar categorias";}});}

//SCROLL SELECT CURRENT DIV
if(document.body.contains(document.querySelector('.ARTICLEsttc'))){
const target = document.querySelectorAll('[data-text]')
function animeScroll(){
const windowTop = window.pageYOffset;

target.forEach(function(it){
var data = it.getAttribute('data-text')
if((windowTop) > it.offsetTop){
	document.querySelector('[href="#'+data+'"]').classList.add('SLTit');}
else{
	document.querySelector('[href="#'+data+'"]').classList.remove('SLTit');}})}

	animeScroll();
window.addEventListener('scroll', function(){
animeScroll();});}

//BOOOKMARK EXISTENTE
if(document.body.contains(document.querySelector('.POSTinst'))){
if(localStorage.BOOKmark != undefined){
	var GETitem = localStorage.BOOKmark;
	var JSONparse = JSON.parse(GETitem);
	var OBJname = Object.getOwnPropertyNames(JSONparse);
for(var i = 0; i < OBJname.length; i++){
	var ACTIVEpost = document.getElementById(OBJname[i]);
ACTIVEpost.classList.add('ACTIVElist');}}}

//NOTIFICAÃO MENU
if(document.body.contains(document.querySelector('.NOTIFYit')) && document.body.contains(document.querySelector('.SIDEnav'))){
document.querySelector('.SELECTitem').addEventListener('click', function(){
	this.parentNode.classList.add('ACTIVEit');
	this.insertAdjacentHTML('afterend', '<div class="FRONTend"></div>');

document.querySelector('.FRONTend').addEventListener('click', function(){
	document.querySelector('.SHIFTmenu').classList.remove('ACTIVEit');
	document.querySelector('.FRONTend').remove();});});

document.querySelector('.SLCTpromo').addEventListener('click', function(){
if(document.querySelector('.COMMENTdiv').classList.contains('ACTIVEit') === true){
	document.querySelector('.FRONTend').remove();
	document.querySelector('.COMMENTdiv').classList.toggle('ACTIVEit');
	document.querySelector('.PROMOdiv').classList.toggle('ACTIVEit');
	document.querySelector('.SHIFTmenu').classList.toggle('ACTIVEit');
	document.querySelector('.TEXT-MENUalert').innerText = "Promoções";}});

document.querySelector('.SLCTcommt').addEventListener('click', function(){
if(document.querySelector('.PROMOdiv').classList.contains('ACTIVEit') === true){
	document.querySelector('.FRONTend').remove();
	document.querySelector('.COMMENTdiv').classList.toggle('ACTIVEit');
	document.querySelector('.PROMOdiv').classList.toggle('ACTIVEit');
	document.querySelector('.SHIFTmenu').classList.toggle('ACTIVEit');
	document.querySelector('.TEXT-MENUalert').innerText = "Comentários";}});}

//MENUPUSH LATERAL
if(document.body.contains(document.querySelector('.BTNhref'))){
var PUSHmenu = document.querySelector('.PUSHmenu');
var CONTENTframe = document.getElementById('CONTENTframe');
document.querySelector('.BTNhref').addEventListener('click', function(){
	this.classList.toggle('HREFactive');
	PUSHmenu.classList.toggle('MENUactive');
	CONTENTframe.classList.toggle('SWIPEopen');
if(document.body.hasAttribute('style')) {
	document.body.removeAttribute('style');}
	else{
	document.body.style.cssText = "overflow:hidden";}
if(document.body.contains(document.querySelector('.SWIPEopen'))){
document.querySelector('.SWIPEopen').addEventListener('click', function(){
	document.querySelector('.BTNhref').classList.remove('HREFactive');
	PUSHmenu.classList.remove('MENUactive');
	CONTENTframe.classList.remove('SWIPEopen');
document.body.removeAttribute('style');});}});}

//TOGLE FOOTER
if(document.body.contains(document.querySelector('.CROSSdown'))){
for(var i = 0; i < document.querySelectorAll('.CROSSdown').length; i++){
var CROSSdown = document.querySelectorAll('.CROSSdown');
CROSSdown[i].addEventListener('click', function(){
var COLUMNspot = this.parentNode.parentNode.querySelector('.COLUMNspot');
$(COLUMNspot).animate({ height: "toggle" },{duration: 300});});}}

//SEARCH --- BAR
if(document.body.contains(document.querySelector('.SEARCHbar'))){
var SEARCHbar = document.querySelector('.SEARCHbar');
var CONTENTframe = document.getElementById('CONTENTframe');
document.querySelector('.SEARCHit').addEventListener('click', function(){
SEARCHbar.classList.add('ACTIVEit');
this.onclick = document.querySelector('.SEARCHinput').select();
document.querySelector('.SEARCHinput').addEventListener('focusout', function(){
SEARCHbar.classList.remove('ACTIVEit');});});}

//CONTENT TRANSITION POST
if(document.body.contains(document.querySelector('.ITEMpost'))){
for(var i = 0; i < document.querySelectorAll('.SELECTtab').length; i++){
var COMMENTSwid = document.querySelectorAll('.SELECTtab');

COMMENTSwid[i].addEventListener('click', function(){
	var SELECTtab = this.getAttribute('for');
	var CURRENTspot = document.querySelector('.CURRENTspot');
	var CURRENTurl = document.querySelector('.' +SELECTtab);
	var FIRSTelement = document.querySelector('.ITEMpost').firstElementChild;

if(!FIRSTelement.isEqualNode(CURRENTurl) && !this.hasAttribute("disable")){
FIRSTelement.insertAdjacentElement("beforebegin", CURRENTurl);
$(FIRSTelement).animate({ height: "toggle", opacity: "toggle" },{duration: 700});
setTimeout(function(){
$(CURRENTurl).animate({ height: "toggle", opacity: "toggle" },{duration: 700});}, 520);

//------DISABLE BUTTONS
for(var i = 0; i < document.querySelectorAll('.SELECTtab').length; i++){
	COMMENTSwid[i].setAttribute('disable', '');}
	
setTimeout(function(){
for(var i = 0; i < COMMENTSwid.length; i++){
	COMMENTSwid[i].removeAttribute("disable");}}, 1000);
	this.setAttribute('class', 'SELECTtab CURRENTspot');
	CURRENTspot.setAttribute('class', 'SELECTtab');
}});}}

//ENVIA O VALOR DO CAMPO DE BUSCA
if(document.body.contains(document.querySelector('.SEARCHform'))){
document.querySelector('.SEARCHform').addEventListener('submit', function(){
	var SEARCHinput = document.querySelector('.SEARCHinput').value;

if(SEARCHinput != ''){
if(localStorage.LASTsearch != undefined){
	var GETitem = localStorage.LASTsearch;
	var GETitef = GETitem.substring(2, GETitem.length-2);
	var OUTirm = '["' +GETitef+ '","' +SEARCHinput+ '"]';
	var LASTes = GETitef.split('","');

if(LASTes.length <= 3){
	localStorage.setItem('LASTsearch', OUTirm);}
	else{
	var SEARCtag = '["' +LASTes[1]+ '","' +LASTes[2]+ '","' +LASTes[3]+ '","' +SEARCHinput+ '"]';
	localStorage.setItem('LASTsearch', SEARCtag);}}
	else{
	var SEARCtag = '["' +SEARCHinput+ '"]';
localStorage.setItem('LASTsearch', SEARCtag);}}});}

//REGASTA E EXIBE O VALOR DA BUSCA [OK]
if(document.body.contains(document.querySelector('.POPULARinst'))){
if(localStorage.LASTsearch != undefined){
var SPLITsearch = localStorage.LASTsearch.substring(2, localStorage.LASTsearch.length-2).split('","');
var ITEMsearch = new Array();
for(var i = 0; i < SPLITsearch.length; i++){
ITEMsearch += '<a class="SEARCHtag" href="/search?q=' +SPLITsearch[i]+'&amp;max-results=9">' +SPLITsearch[i]+ '</a>';}
document.querySelector('.POPULARinst').innerHTML = '<i class="LASTsearch"></i>' +ITEMsearch;}}



//ENVIAR BOOKMARK [OK]
if(document.body.contains(document.querySelector('.BTNfav'))){
for(var i = 0; i < document.querySelectorAll('.BTNfav').length; i++){
document.querySelectorAll('.BTNfav')[i].addEventListener('click', function(){
var BTNrel = this.getAttribute('rel');
var POSTinst = document.getElementById(BTNrel);
var RELtitle = POSTinst.querySelector('.POSTurl').innerText;
var RELhref = POSTinst.querySelector('.POSTurl').href;
var RELdate = POSTinst.querySelector('.POSTdate').innerText;
var RELimage = POSTinst.querySelector('.THUMBnail').src;
var GETaes = POSTinst.querySelector('.POSTup').getAttribute('class').split(' ');
var GETtyp = GETaes.splice(GETaes.shift())[0];

	var ACTIVEpost = document.getElementById(BTNrel);
	ACTIVEpost.classList.add('ACTIVElist');

if(localStorage.BOOKmark != undefined){
if(!Object.getOwnPropertyNames(JSON.parse(localStorage.BOOKmark)).includes(BTNrel)){
if(GETtyp.split(' ').includes('free') || GETtyp.split(' ').includes('excl')){
	var BOOKmark = '{"' +BTNrel+ '":{"POSTtitle":"' +RELtitle+ '","POSTurl":"' +RELhref+ '","POSTdate":"' +RELdate+ '","RELimage":"' +RELimage+ '","POSTup":"' +GETtyp+ '"},' +localStorage.BOOKmark.substring(1, localStorage.BOOKmark.length-1)+ '}';
	localStorage.setItem('BOOKmark', BOOKmark);}
	else{
	var RELprice = POSTinst.querySelector('.POSTprice').innerText;
	var BOOKmark = '{"' +BTNrel+ '":{"POSTtitle":"' +RELtitle+ '","POSTurl":"' +RELhref+ '","POSTdate":"' +RELdate+ '","RELimage":"' +RELimage+ '","RELprice":"' +RELprice+ '"},' +localStorage.BOOKmark.substring(1, localStorage.BOOKmark.length-1)+ '}';
	localStorage.setItem('BOOKmark', BOOKmark);}}}
else{
if(GETtyp.split(' ').includes('free') || GETtyp.split(' ').includes('excl')){
	var BOOKmark = '{"' +BTNrel+ '":{"POSTtitle":"' +RELtitle+ '","POSTurl":"' +RELhref+ '","POSTdate":"' +RELdate+ '","RELimage":"' +RELimage+ '","POSTup":"' +GETtyp+ '"}}';
	localStorage.setItem('BOOKmark', BOOKmark);}
	else{
	var RELprice = POSTinst.querySelector('.POSTprice').innerText;
	var BOOKmark = '{"' +BTNrel+ '":{"POSTtitle":"' +RELtitle+ '","POSTurl":"' +RELhref+ '","POSTdate":"' +RELdate+ '","RELimage":"' +RELimage+ '","RELprice":"' +RELprice+ '"}}';
	localStorage.setItem('BOOKmark', BOOKmark);}}});}}

//RESGATA BOOKMARKS [OK]
if(window.location.href.indexOf('/p/favoritos.html') > -1){
var BLOGinst = document.querySelector('.Blog');
BLOGinst.classList.add('BOOKmark');

if(localStorage.BOOKmark != undefined){
var GETitem = localStorage.BOOKmark;
var JSONparse = JSON.parse(GETitem);
var OBJname = Object.getOwnPropertyNames(JSONparse);

for(var i = 0; i < OBJname.length; i++){
var pTITLE = JSONparse[OBJname[i]].POSTtitle;
var pURL = JSONparse[OBJname[i]].POSTurl;
var pPRICE = JSONparse[OBJname[i]].RELprice;
var pIMG = JSONparse[OBJname[i]].RELimage;
var pDATE = JSONparse[OBJname[i]].POSTdate;

if(JSONparse[OBJname[i]].hasOwnProperty('POSTup')){
	var POSTup = JSONparse[OBJname[i]].POSTup;}
	else{var POSTup = '';}

if(POSTup.includes('free')){
	var CONTENTpage = '<div class="POSTbox BOOKmark" id="'+OBJname[i]+'"><div class="POSTinst"><section class="POSTup ' +POSTup+ '"><div class="POSTimg"><img class="THUMBnail" src="' +pIMG+ '"></img></div><div class="POSTspot"><i class="BTNdel" rel="'+OBJname[i]+'"></i></div></section><section class="POSTbt"><div class="POSTbt_inner"><h3 class="POSTtitle"><a class="POSTurl" href="'+pURL+'">'+pTITLE+'</a></h3><div class="POSTdate CALENDar">'+pDATE+'</div><div class="POSTBOXbt"><div class="POSTprice">GRÁTIS!</div><div class="POSTbtn"><li><a class="BTNlive" href="/p/demo.html?id=' +OBJname[i]+ '" target="_blank">Demo</a></li><li><a class="BTNinfo" href="' +pURL+ '">Info</a></li></div></div></div></section></div></div>';}
	else if(POSTup.includes('excl')){
	var CONTENTpage = '<div class="POSTbox BOOKmark" id="'+OBJname[i]+'"><div class="POSTinst"><section class="POSTup ' +POSTup+ '"><div class="POSTimg"><img class="THUMBnail" src="' +pIMG+ '"></img></div><div class="POSTspot"><i class="BTNdel" rel="'+OBJname[i]+'"></i></div></section><section class="POSTbt"><div class="POSTbt_inner"><h3 class="POSTtitle"><a class="POSTurl" href="'+pURL+'">'+pTITLE+'</a></h3><div class="POSTdate CALENDar">'+pDATE+'</div><div class="POSTBOXbt"><div class="POSTbtn MAXwidth"><li><a class="BTNlive" href="/p/demo.html?id=' +OBJname[i]+ '" target="_blank">DEMO</a></li><li><a class="BTNinfo" href="' +pURL+ '">Info</a></li></div></div></div></section></div></div>';}
else{
	var CONTENTpage = '<div class="POSTbox BOOKmark" id="'+OBJname[i]+'"><div class="POSTinst"><section class="POSTup"><div class="POSTimg"><img class="THUMBnail" src="' +pIMG+ '"></img></div><div class="POSTspot"><i class="BTNdel" rel="'+OBJname[i]+'"></i></div></section><section class="POSTbt"><div class="POSTbt_inner"><h3 class="POSTtitle"><a class="POSTurl" href="'+pURL+'">'+pTITLE+'</a></h3><div class="POSTdate CALENDar">'+pDATE+'</div><div class="POSTBOXbt"><div class="POSTprice">'+pPRICE+'</div><div class="POSTbtn"><li><a class="BTNlive" href="/p/demo.html?id=' +OBJname[i]+ '" target="_blank">Demo</a></li><li><a class="BTNinfo" href="' +pURL+ '">Info</a></li></div></div></div></section></div></div>';}


BLOGinst.insertAdjacentHTML('beforeend', CONTENTpage)}
if(OBJname.length > 1){
var BOOKtitle = '<h3 class="BOOKtitle">Há ' +OBJname.length+ ' temas na sua lista!</h3>';}
else{
var BOOKtitle = '<h3 class="BOOKtitle">Só há ' +OBJname.length+ ' tema na sua lista!</h3>';}
BLOGinst.insertAdjacentHTML('afterbegin', BOOKtitle)

//REMOVER POST BOOKMARK [OK]
for(var i = 0; i < OBJname.length; i++){
var BTNclick = document.querySelectorAll('.BTNdel');

BTNclick[i].addEventListener('click', function(){
var BTNrel = this.getAttribute('rel');
var RECENTitem = localStorage.BOOKmark;
var JSONparse = JSON.parse(RECENTitem);
var OBJname = Object.getOwnPropertyNames(JSONparse);

if(~OBJname.indexOf(BTNrel)){
delete JSONparse[BTNrel]; // deleta o item selecionado
var JSONstr = JSON.stringify(JSONparse); //converte em texto
localStorage.setItem('BOOKmark', JSONstr)

function DELTEpost(){
if(OBJname.length > 1){
	if(OBJname.length > 2){
	var BOOKtxt = `Há ${OBJname.length-1} temas na sua lista!`;}
	else{
	var BOOKtxt = `Só há ${OBJname.length-1} tema na sua lista!`;}
	document.querySelector('.BOOKtitle').innerHTML = BOOKtxt;}

var THISpost = document.getElementById(BTNrel)
THISpost.parentNode.removeChild(THISpost);}

document.getElementById(BTNrel).style.cssText = "max-width:0;max-height:0;opacity:0";
setTimeout(DELTEpost, 920)}

function ZEROmark(){
var BOOKtitle = document.querySelector('.BOOKtitle');
BOOKtitle.parentNode.removeChild(BOOKtitle);
document.querySelector('.EMPTYfav').style.cssText = "max-height:900px;opacity:1";}

var BLOGinst = document.querySelector('.Blog');
if(OBJname.length -1 == 0){
	document.querySelector('.BOOKtitle').style.cssText = "opacity:0;max-height:0";
	localStorage.removeItem('BOOKmark');
var CONTENTpage = '<div class="EMPTYfav BOOKmark"><p>Nao há nenhum tema em seus favoritos... Não deixe-a solitaria. 😥</p><div class="SPOTfav"><div class="BOTfav"><div class="POSTbox EXEfav"><div class="POSTinst"><section class="POSTup excl"><div class="POSTimg"><img class="THUMBnail" src="https://2.bp.blogspot.com/-U1PEPnMPk2Q/Xr_BCoq7EAI/AAAAAAAAG5I/_LP4GUXyKTAH5WUi7H7zH2yfFFaBjTnYQCLcBGAsYHQ/s1600/village-de-traque.png"></div><div class="POSTspot EXEfav"><i class="BTNfav EXEfav"></i></div></section><section class="POSTbt"><div class="POSTbt_inner"><h3 class="POSTtitle"><span class="POSTurl EXEfav TITLEex"></span></h3><div class="POSTdate EXEfav DATEex"></div><div class="POSTBOXbt"><div class="POSTprice EXEfav PRICEex"></div><div class="POSTbtn EXEfav BUTTONSex"><li><span class="BTNlive EXEfav"></span></li><li><span class="BTNinfo EXEfav"></span></li></div></div></div></section></div></div></div><div class="BOTFAVright"><span class="MSGfav">Os temas adicionados a sua lista de favoritos duram até a limpeza dos dados do seu navegador ou excluí-los manualmente. Coloque novo temas a sua lista!</span><a href="#" class="BACKhome">Mostrar mais temas</a></div></div></div>';
BLOGinst.insertAdjacentHTML('beforeend', CONTENTpage);
setTimeout(ZEROmark, 700)}});}}
else{
var CONTENTpage = '<div class="EMPTYfav"><p>Você ainda não adicionou nenhum tema ao seus favoritos 🙄</p><div class="SPOTfav"><div class="BOTfav"><div class="POSTbox EXEfav"><div class="POSTinst"><section class="POSTup excl"><div class="POSTimg"><img class="THUMBnail" src="https://2.bp.blogspot.com/-U1PEPnMPk2Q/Xr_BCoq7EAI/AAAAAAAAG5I/_LP4GUXyKTAH5WUi7H7zH2yfFFaBjTnYQCLcBGAsYHQ/s1600/village-de-traque.png"></div><div class="POSTspot EXEfav"><i class="BTNfav EXEfav"></i></div></section><section class="POSTbt"><div class="POSTbt_inner"><h3 class="POSTtitle"><span class="POSTurl EXEfav TITLEex"></span></h3><div class="POSTdate EXEfav DATEex"></div><div class="POSTBOXbt"><div class="POSTprice EXEfav PRICEex"></div><div class="POSTbtn EXEfav BUTTONSex"><li><span class="BTNlive EXEfav"></span></li><li><span class="BTNinfo EXEfav"></span></li></div></div></div></section></div></div></div><div class="BOTFAVright"><span class="MSGfav">Clique no icone de “adicionar aos favoritos” e crie sua lista personalizada com todos os temas que tu mais gosta. Estamos felizes por ter você em nosso site.</span><a href="#" class="BACKhome">Mostrar todos os temas</a></div></div></div>';
BLOGinst.insertAdjacentHTML('beforeend', CONTENTpage);}}

var ACTIVEpass = '<svg class="CROSSicon PASSit" fill="currentColor" focusable="false" width="24px" height="24px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path d="M12,7c-2.48,0-4.5,2.02-4.5,4.5S9.52,16,12,16s4.5-2.02,4.5-4.5S14.48,7,12,7z M12,14.2c-1.49,0-2.7-1.21-2.7-2.7 c0-1.49,1.21-2.7,2.7-2.7s2.7,1.21,2.7,2.7C14.7,12.99,13.49,14.2,12,14.2z"></path><path d="M12,4C7,4,2.73,7.11,1,11.5C2.73,15.89,7,19,12,19s9.27-3.11,11-7.5C21.27,7.11,17,4,12,4z M12,17 c-3.79,0-7.17-2.13-8.82-5.5C4.83,8.13,8.21,6,12,6s7.17,2.13,8.82,5.5C19.17,14.87,15.79,17,12,17z"></path></svg>';
var OCULTApass = '<svg class="CROSSicon PASSit" fill="currentColor" focusable="false" width="24px" height="24px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path d="M10.58,7.25l1.56,1.56c1.38,0.07,2.47,1.17,2.54,2.54l1.56,1.56C16.4,12.47,16.5,12,16.5,11.5C16.5,9.02,14.48,7,12,7 C11.5,7,11.03,7.1,10.58,7.25z"></path><path d="M12,6c3.79,0,7.17,2.13,8.82,5.5c-0.64,1.32-1.56,2.44-2.66,3.33l1.42,1.42c1.51-1.26,2.7-2.89,3.43-4.74 C21.27,7.11,17,4,12,4c-1.4,0-2.73,0.25-3.98,0.7L9.63,6.3C10.4,6.12,11.19,6,12,6z"></path><path d="M16.43,15.93l-1.25-1.25l-1.27-1.27l-3.82-3.82L8.82,8.32L7.57,7.07L6.09,5.59L3.31,2.81L1.89,4.22l2.53,2.53 C2.92,8.02,1.73,9.64,1,11.5C2.73,15.89,7,19,12,19c1.4,0,2.73-0.25,3.98-0.7l4.3,4.3l1.41-1.41l-3.78-3.78L16.43,15.93z M11.86,14.19c-1.38-0.07-2.47-1.17-2.54-2.54L11.86,14.19z M12,17c-3.79,0-7.17-2.13-8.82-5.5c0.64-1.32,1.56-2.44,2.66-3.33 l1.91,1.91C7.6,10.53,7.5,11,7.5,11.5c0,2.48,2.02,4.5,4.5,4.5c0.5,0,0.97-0.1,1.42-0.25l0.95,0.95C13.6,16.88,12.81,17,12,17z"></path></svg>';
var loginUser = '<div class="LOGINspot"><div class="LOGINSPOTinst"><div class="COMPANYlogin"><section class="COMPANYit"><!-- Bracael --></section><span>Use uma conta Bracael.</span></div><form class="FORMlogin"><div class="GROUPinput"><input type="email" id="emailInput" class="INPUTclass" tabindex="1" autocomplete="off" autofocus="" autocapitalize="off" autocorrect="off"></input><label>E-mail</label></div><div class="GROUPinput"><input type="password" id="passwordInput" class="INPUTclass" tabindex="2" autocomplete="off"></input><div class="SHOWpass">' +ACTIVEpass+ '</div><label>Senha</label></div><div class="FOOTERlogin"><button class="BTN FORGOTpass" type="button">Esqueceu a sua senha?</button><button class="LOGin" tabindex="3">Fazer login</button></div></form></div></div>';
var contentHTML = document.querySelector('.Blog');

var fireBase = firebase.auth();
fireBase.onAuthStateChanged(function(user){
if(user){

if(window.location.href.indexOf('/p/login.html') > -1){
var CACHEurl = JSON.parse(sessionStorage.CACHEurl);
if(CACHEurl[CACHEurl.length-2] !== undefined){
	window.location.replace(CACHEurl[CACHEurl.length-2]);}
	else{
	window.location.replace("http://www.bracael.com/");}}
	document.querySelector('.cPANEL').parentNode.innerHTML = '<a href="javascript:void(0);" class="LOGout cPANEL">Sair</a>';

//SAIR DA CONTA ------ FIM DO IF
document.querySelector('.LOGout').addEventListener('click', function(){
	fireBase.signOut();
	var LOGINbtn = '<a href="/p/login.html" class="cPANEL">Entrar</a>'
	this.parentNode.innerHTML = LOGINbtn; });}
else{
if(window.location.href.indexOf('/p/login.html') > -1){
	document.body.setAttribute('login', '');
	contentHTML.innerHTML = loginUser;

var LOGin = document.querySelector('.LOGin');
LOGin.addEventListener('click', function(){
var userEmail = document.getElementById("emailInput").value;
var userPass = document.getElementById("passwordInput").value;

fireBase.signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
var MAILelement = document.getElementById("emailInput");
var PASSelement = document.getElementById("passwordInput");

if(MAILelement.value.length == 0){
	var MSGfail = 'Por favor, digite um email.';}
	else{
	var MSGfail = 'E-mail ou senha inválidos.';}

	this.onclick = MAILelement.select();
	PASSelement.value = null;

var MSGerror = '<div class="MSGerror"><div class="CROSSicon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="#d50000" fill-rule="evenodd"><path id="Retângulo_2" data-name="Retângulo 2" class="cls-1" d="M8,0A8,8,0,1,1,0,8,8,8,0,0,1,8,0ZM7,3H9v7H7V3Zm0,8H9v2H7V11Z"></path></svg></div><span>' +MSGfail+ '</span></div>';

var parser = new DOMParser();
var MSGerror = parser.parseFromString(MSGerror, 'text/html');
var GROUPinput = document.querySelector('.GROUPinput');

//MSG FAILURE ------ [RESOLVIDO]
var GROUPall = document.querySelector('.GROUPinput');

if(!GROUPall.hasAttribute("fail") && !document.body.contains(document.querySelector('.MSGerror'))){
GROUPinput.insertAdjacentElement("afterend", MSGerror.querySelector('.MSGerror'));}

MAILelement.addEventListener('input', function(){
$('.MSGerror').animate({ height: 0, opacity: 0 },{duration: 300, complete: function(){ $('.MSGerror').remove() }});
GROUPall.removeAttribute('fail');});

GROUPall.setAttribute('fail', '');

var errorCode = error.code;
var errorMessage = error.message;
console.log("Error: " + errorMessage)});
});

//MOSTRAR SENHA E ECULTAR SENHA ----- INPUT
var SHOWpass = document.querySelector('.SHOWpass');
SHOWpass.addEventListener('click', function(){
var PASSit = document.querySelector('.PASSit');
var TYPEbtn = document.getElementById("passwordInput").getAttribute("type");

if(TYPEbtn == "password"){
	PASSit.parentNode.innerHTML = OCULTApass;
	INPUTpass.setAttribute("type", "text");}
if(TYPEbtn == "text"){
	PASSit.parentNode.innerHTML = ACTIVEpass;
	INPUTpass.setAttribute("type", "password");}
});

var LOGINbtn = '<a href="javascript:void(0);" class="LOGout cPANEL">Sair</a>';
var parser = new DOMParser();
var HTMLpanel = parser.parseFromString(LOGINbtn, 'text/html');

var FORMlogin = document.querySelector('.FORMlogin');
FORMlogin.addEventListener('submit', (e) => {
	e.preventDefault();});

document.querySelector('BUTTON.FORGOTpass').addEventListener('click', function(){
	var FORGOTpass = '<div class="LOGINspot"><div class="LOGINSPOTinst"><div class="COMPANYlogin"><section class="COMPANYit"><!-- Bracael --></section><span>Esqueceu a senha?</span></div><p>Digite seu endereço de e-mail para redefinir a senha. Talvez você precise verificar sua pasta de spams ou desbloquear o e-mail no-reply@bracael.com.</p><div class="GROUPinput"><input type="email" id="INPTRESETpass" class="INPUTclass" tabindex="1" autocomplete="off" autofocus="" autocapitalize="off" autocorrect="off"></input><label>E-mail</label></div><div class="FOOTERlogin PAGEreset"><a class="IDONTacess" href="javascript:void(0);" onclick="alert(`Bracael.COM\nVersão Beta, 12.05.2020\nO Conteúdo para está página estará disponivel em breve.`)"><span>Não tem mais acesso?</span></a><button class="BTNRESETpass" tabindex="2">Enviar</button></div></div></div>';
	contentHTML.innerHTML = FORGOTpass;
	focusOutInput();

document.querySelector('.BTNRESETpass').addEventListener('click', function(){
	var auth = firebase.auth();
	var INPTRESETpass = document.getElementById('INPTRESETpass');
	fireBase.sendPasswordResetEmail(INPTRESETpass.value).then(function(){

var MAILit = INPTRESETpass.value.split('@')[0];
var MAILit = MAILit.substring(0, 3) + MAILit.substring(3, MAILit.length-0).replace(/[a-z^0-9]/gim, '•') +'@'+ ('holasoycael@gmail.com').split('@')[1];

	var FORGOTpass = '<div class="LOGINspot"><div class="LOGINSPOTinst SUCESSemail"><div class="COMPANYlogin TITLEsucess"><section class="COMPANYit"><!-- Bracael --></section><span>Solicitação com sucesso!</span></div><div class="SUCESSemail"><i class="CROSSicon CHECKicon"></i><div class="YOURmail"><span>' +MAILit+ '</span></div>Um e-mail foi enviado para seu e-mail de recuperaçao. Verifique a caixa de entrada do e-mail solicitado e siga as instruções para redefinir sua senha.</div><div class="COMPLETreset"><a href="javascript:void(0);" class="LOGINgo">Fazer login</a><strong><span>ou</span></strong><a href="https://www.bracael.com/" class="HOMEpage">Pagina inicial</a></div></div></div>';
	contentHTML.innerHTML = FORGOTpass;
		document.querySelector('.LOGINgo').addEventListener('click', function(){
		contentHTML.innerHTML = loginUser;
		});
	console.log('enviado')
	})
    .catch(function(error) {
if(INPTRESETpass.value.length == 0){
	var MSGfailure = 'Digite seu endereço de e-mail.';}
	else{
	var MSGfailure = 'Digite um e-mail válido.';}


var RESETerror = '<div class="MSGerror PAGEreset"><div class="CROSSicon"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="#d50000" fill-rule="evenodd"><path id="Retângulo_2" data-name="Retângulo 2" class="cls-1" d="M8,0A8,8,0,1,1,0,8,8,8,0,0,1,8,0ZM7,3H9v7H7V3Zm0,8H9v2H7V11Z"></path></svg></div><span>' +MSGfailure+ '</span></div>';


var DOMparse = new DOMParser();
var DOMparse = DOMparse.parseFromString(RESETerror, 'text/html');


if(document.body.contains(document.querySelector('.MSGerror'))){
if(document.querySelector('.MSGerror').innerText != DOMparse.querySelector('.MSGerror').children[1].innerText){
	document.querySelector('.MSGerror').children[1].innerText = DOMparse.querySelector('.MSGerror').children[1].innerText;
}}

var GROUPall = document.querySelector('.GROUPinput');
INPTRESETpass.value = null;
if(!GROUPall.hasAttribute("fail") && !document.body.contains(document.querySelector('.MSGerror'))){
document.querySelector('.GROUPinput').insertAdjacentElement("afterend", DOMparse.querySelector('.MSGerror'));}
GROUPall.setAttribute('fail', '');

INPTRESETpass.addEventListener('input', function(){
$('.MSGerror').animate({ height: 0, opacity: 0 },{duration: 300, complete: function(){ $('.MSGerror').remove() }});
GROUPall.removeAttribute('fail');});


INPTRESETpass.select();
INPTRESETpass.value = null;

	error.message = 'Digite um e-mail válido.'
	console.log("Error: " + error.message);
	// console.clear(); // para limpar a mensagem de erro do firebase
	// Error occurred. Inspect error.code.
    });

}); //document.querySelector('.BTNRESETpass')

});


focusOutInput();

}

}


if(window.location.href.indexOf('/p/signup.html') > -1){

	document.querySelector('.FORMsignup').addEventListener('submit', (event) => {
		event.preventDefault(); });

document.querySelector('.CREATEacount').addEventListener('click', function(){

	var GETname = document.getElementById('NAMEinput');
	var GETsame = document.getElementById('SNAMEinput');
	var GETmail = document.getElementById('EMAILinput');
	var GETpass = document.getElementById('PASSWORDinput');

	if(GETname.value.length != '' && GETsame.value != '' && GETmail.value != '' && GETpass.value != ''){
	firebase.auth().createUserWithEmailAndPassword(GETmail.value, GETpass.value).then(function(result){
		var user = fireBase.currentUser;
		var userId = user.uid;
		var COMPLETname = GETname.value.trim()+' '+GETsame.value.trim();

	const db = firebase.firestore();
	db.collection("todos").doc(userId).set({
		name: GETname.value,
		sobrenome: GETsame.value,
		email: GETmail.value
	})
	.then(function() {
		console.log("Document successfully written!");
		window.location.replace("/bracael.com/");
	})
	.catch(function(error) {
		console.error("Error writing document: ", error);
	});

		return result.user.updateProfile({
			displayName: COMPLETname
		  });
	},function (error){
		// Handle Errors here.
		var errorCode = error.code;
		var errorMessage = error.message;
		alert(`Erro: ${errorMessage}`)
		console.log('Erro:', errorMessage);
		return Result = "false";
		// ...
	});}
	else{
		console.log('Erro: erroCreateUser');}
});



// const user = firebase.auth();
// console.log(user.currentUser.displayName);
// var loginUser = '<div class="LOGINspot"><div class="LOGINSPOTinst"><div class="COMPANYlogin"><section class="COMPANYit"><!-- Bracael --></section><span>Crie sua conta Bracael</span></div><form class="FORMlogin"><div class="GROUPinput"><input type="email" id="emailInput" tabindex="1" autocomplete="off" autofocus="" autocapitalize="off" autocorrect="off"></input><label>E-mail</label></div><div class="GROUPinput"><input type="password" id="passwordInput" tabindex="2" autocomplete="off"></input><div class="SHOWpass">' +ACTIVEpass+ '</div><label>Senha</label></div><div class="FOOTERlogin"><button class="BTN FORGOTpass" type="button">Esqueceu a sua senha?</button><button class="LOGin" tabindex="3">Fazer login</button></div></form></div></div>';
// var contentHTML = document.querySelector('.Blog');
// 	contentHTML.innerHTML = loginUser;



focusOutInput();

}


});


}
