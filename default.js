window.onload = function(){

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

//EFFECT MODAL
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
	document.querySelector('.CLOSEfeed.CLOSEmodal').remove();}});}});}

//TOGGLE CATEGORIAS MENUNAV
document.querySelector('.HREFmost').addEventListener('click', function(){
	this.classList.toggle('ACTIVEit');
	$('#LABELspot').animate({ height: "toggle" },{duration: 300});
if(this.innerHTML === "Mostrar categorias") {
    this.innerHTML = "Ocultar categorias";}
	else{
	this.innerHTML = "Mostrar categorias";}});

//SCROLL SELECT CURRENT DIV
if(document.body.contains(document.querySelector('.ARTICLEsttc')) === true){
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
if(document.body.contains(document.querySelector('.POSTinst')) === true){
if(localStorage.BOOKmark != undefined){
	var GETitem = localStorage.BOOKmark;
	var JSONparse = JSON.parse(GETitem);
	var OBJname = Object.getOwnPropertyNames(JSONparse);
for(var i = 0; i < OBJname.length; i++){
	var ACTIVEpost = document.getElementById(OBJname[i]);
ACTIVEpost.classList.add('ACTIVElist');}}}

//RESIZE WIDTH RESPONSIVE
setInterval(function(){
var HTMLoffset = document.querySelector('HTML');
document.querySelector('HEADER.HEADmenu').style.width = HTMLoffset.offsetWidth + 'px'; }, 0);

if(document.body.contains(document.querySelector('.NOTIFYit')) === true && document.body.contains(document.querySelector('.SIDEnav')) === true){
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
if(document.body.contains(document.querySelector('.SWIPEopen')) === true){
document.querySelector('.SWIPEopen').addEventListener('click', function(){
	document.querySelector('.BTNhref').classList.remove('HREFactive');
	PUSHmenu.classList.remove('MENUactive');
	CONTENTframe.classList.remove('SWIPEopen');
	document.body.removeAttribute('style');});}});

//TOGLE FOOTER
if(document.body.contains(document.querySelector('.CROSSdown')) === true){
for(var i = 0; i < document.querySelectorAll('.CROSSdown').length; i++){
var CROSSdown = document.querySelectorAll('.CROSSdown');
CROSSdown[i].addEventListener('click', function(){
var COLUMNspot = this.parentNode.parentNode.querySelector('.COLUMNspot');
$(COLUMNspot).animate({ height: "toggle", },{duration: 300});});}}

//SEARCH --- BAR
if(document.body.contains(document.querySelector('.SEARCHbar')) === true){
var SEARCHbar = document.querySelector('.SEARCHbar');
var CONTENTframe = document.getElementById('CONTENTframe');
document.querySelector('.SEARCHit').addEventListener('click', function(){
SEARCHbar.classList.add('ACTIVEit');
this.onclick = document.querySelector('.SEARCHinput').select();
document.querySelector('.SEARCHinput').addEventListener('focusout', function(){
SEARCHbar.classList.remove('ACTIVEit');});});}

//CONTENT TRANSITION POST
if(document.body.contains(document.querySelector('.ITEMpost')) === true){
for(var i = 0; i < document.querySelectorAll('.SELECTtab').length; i++){
var COMMENTSwid = document.querySelectorAll('.SELECTtab');

COMMENTSwid[i].addEventListener('click', function(){
	var SELECTtab = this.getAttribute('for');
	var CURRENTspot = document.querySelector('.CURRENTspot');
	var CURRENTurl = document.querySelector('.' +SELECTtab);
	var FIRSTelement = document.querySelector('.ITEMpost').firstElementChild;

if((!FIRSTelement.isEqualNode(CURRENTurl)) && (this.hasAttribute("disable") == false)){
if(document.querySelector('.POSTbody') === CURRENTurl){
setTimeout(function(){
document.querySelector('.POSTright').removeAttribute("style"); }, 1240); }
if(document.querySelector('.POSTbody') === FIRSTelement){
document.querySelector('.POSTright').style.cssText = "top:0"; }

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

//PAGINA DE LOGIN
if(window.location.href.indexOf('/p/login.html') > -1){
document.body.setAttribute('login', '');}

//ENVIA O VALOR DO CAMPO DE BUSCA
if(document.body.contains(document.querySelector('.SEARCHform')) === true){
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
if(document.body.contains(document.querySelector('.POPULARinst')) === true){
if(localStorage.LASTsearch != undefined){
var SPLITsearch = localStorage.LASTsearch.substring(2, localStorage.LASTsearch.length-2).split('","');
var ITEMsearch = new Array();
for(var i = 0; i < SPLITsearch.length; i++){
ITEMsearch += '<a class="SEARCHtag" href="/search?q=' +SPLITsearch[i]+'&amp;max-results=9">' +SPLITsearch[i]+ '</a>';}
document.querySelector('.POPULARinst').innerHTML = '<i class="LASTsearch"></i>' +ITEMsearch;}}

//ENVIAR BOOKMARK [OK]
var BTNcount = document.querySelectorAll('.BTNfav').length;
for(var i = 0; i < BTNcount; i++){
var BTNclick = document.querySelectorAll('.BTNfav');

BTNclick[i].addEventListener('click', function(){
var BTNrel = this.getAttribute('rel');
var POSTinst = document.getElementById(BTNrel);
var RELtitle = POSTinst.querySelector('.POSTurl').innerText;
var RELhref = POSTinst.querySelector('.POSTurl').href;
var RELdate = POSTinst.querySelector('.POSTdate').innerText;
var RELimage = POSTinst.querySelector('.THUMBnail').src;
var RELprice = POSTinst.querySelector('.POSTprice').innerText;

	var ACTIVEpost = document.getElementById(BTNrel);
	ACTIVEpost.classList.add('ACTIVElist');

if(localStorage.BOOKmark != undefined){
var GETitem = localStorage.BOOKmark;
if(!~GETitem.indexOf(BTNrel)){
var MARKexist = GETitem.substring(1, GETitem.length-1);
var BOOKmark = '{"' +BTNrel+ '":{"POSTtitle":"' +RELtitle+ '","POSTurl":"' +RELhref+ '","POSTdate":"' +RELdate+ '","RELimage":"' +RELimage+ '","RELprice":"' +RELprice+ '"},' +MARKexist+ '}';
localStorage.setItem('BOOKmark', BOOKmark);
}}else{
var BOOKmark = '{"' +BTNrel+ '":{"POSTtitle":"' +RELtitle+ '","POSTurl":"' +RELhref+ '","POSTdate":"' +RELdate+ '","RELimage":"' +RELimage+ '","RELprice":"' +RELprice+ '"}}';
localStorage.setItem('BOOKmark', BOOKmark);}
});}

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

var CONTENTpage = '<div class="POSTbox BOOKmark" id="'+OBJname[i]+'"><div class="POSTinst"><section class="POSTup"><div class="POSTimg"><img class="THUMBnail" src="' +pIMG+ '"></img></div><div class="POSTspot"><i class="BTNdel" rel="'+OBJname[i]+'"></i></div></section><section class="POSTbt"><div class="POSTbt_inner"><h3 class="POSTtitle"><a class="POSTurl" href="'+pURL+'">'+pTITLE+'</a></h3><div class="POSTdate CALENDar">'+pDATE+'</div><div class="POSTBOXbt"><div class="POSTprice">'+pPRICE+'</div><div class="POSTbtn"><li><a class="BTNlive" href="#" target="_blank">Demo</a></li><li><a class="BTNinfo" href="#">Info</a></li></div></div></div></section></div></div>';
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
if(OBJname.length > 2){
var BOOKtitle = document.querySelector('.BOOKtitle');
var BOOKtxt = `Há ${OBJname.length-1} temas na sua lista!`;
	BOOKtitle.innerHTML = BOOKtxt;}
else{
var BOOKtitle = document.querySelector('.BOOKtitle');
var BOOKtxt = `Só há ${OBJname.length-1} tema na sua lista!`;
	BOOKtitle.innerHTML = BOOKtxt;}

var THISpost = document.getElementById(BTNrel)
THISpost.parentNode.removeChild(THISpost);}

document.getElementById(BTNrel).style.cssText = "max-width:0;max-height:0;opacity:0";
setTimeout(DELTEpost, 920)}

function ZEROmark(){
var BOOKtitle = document.querySelector('.BOOKtitle');
BOOKtitle.parentNode.removeChild(BOOKtitle);
document.querySelector('.EMPTYfav').style.cssText = "max-height:900px;opacity:1";}

if(OBJname.length -1 == 0){
	document.querySelector('.BOOKtitle').style.cssText = "opacity:0;max-height:0";
	localStorage.removeItem('BOOKmark')
var BLOGinst = document.querySelector('.Blog');
var CONTENTpage = '<div class="EMPTYfav BOOKmark"><p>Nao há nenhum tema em seus favoritos... Não deixe-a solitaria. 😥</p><div class="SPOTfav"><div class="BOTfav"><div class="POSTbox EXEfav"><div class="POSTinst"><section class="POSTup excl"><div class="POSTimg"><img class="THUMBnail" src="https://2.bp.blogspot.com/-U1PEPnMPk2Q/Xr_BCoq7EAI/AAAAAAAAG5I/_LP4GUXyKTAH5WUi7H7zH2yfFFaBjTnYQCLcBGAsYHQ/s1600/village-de-traque.png"></div><div class="POSTspot EXEfav"><i class="BTNfav EXEfav"></i></div></section><section class="POSTbt"><div class="POSTbt_inner"><h3 class="POSTtitle"><span class="POSTurl EXEfav TITLEex"></span></h3><div class="POSTdate EXEfav DATEex"></div><div class="POSTBOXbt"><div class="POSTprice EXEfav PRICEex"></div><div class="POSTbtn EXEfav BUTTONSex"><li><span class="BTNlive EXEfav"></span></li><li><span class="BTNinfo EXEfav"></span></li></div></div></div></section></div></div></div><div class="BOTFAVright"><span class="MSGfav">Os temas adicionados a sua lista de favoritos duram até a limpeza dos dados do seu navegador ou excluí-los manualmente. Coloque novo temas a sua lista!</span><a href="#" class="BACKhome">Mostrar mais temas</a></div></div></div>';
BLOGinst.insertAdjacentHTML('beforeend', CONTENTpage);
setTimeout(ZEROmark, 700)}});}}
else{
var BLOGinst = document.querySelector('.Blog');
var CONTENTpage = '<div class="EMPTYfav"><p>Você ainda não adicionou nenhum tema ao seus favoritos 🙄</p><div class="SPOTfav"><div class="BOTfav"><div class="POSTbox EXEfav"><div class="POSTinst"><section class="POSTup excl"><div class="POSTimg"><img class="THUMBnail" src="https://2.bp.blogspot.com/-U1PEPnMPk2Q/Xr_BCoq7EAI/AAAAAAAAG5I/_LP4GUXyKTAH5WUi7H7zH2yfFFaBjTnYQCLcBGAsYHQ/s1600/village-de-traque.png"></div><div class="POSTspot EXEfav"><i class="BTNfav EXEfav"></i></div></section><section class="POSTbt"><div class="POSTbt_inner"><h3 class="POSTtitle"><span class="POSTurl EXEfav TITLEex"></span></h3><div class="POSTdate EXEfav DATEex"></div><div class="POSTBOXbt"><div class="POSTprice EXEfav PRICEex"></div><div class="POSTbtn EXEfav BUTTONSex"><li><span class="BTNlive EXEfav"></span></li><li><span class="BTNinfo EXEfav"></span></li></div></div></div></section></div></div></div><div class="BOTFAVright"><span class="MSGfav">Clique no icone de “adicionar aos favoritos” e crie sua lista personalizada com todos os temas que tu mais gosta. Estamos felizes por ter você em nosso site.</span><a href="#" class="BACKhome">Mostrar todos os temas</a></div></div></div>';
BLOGinst.insertAdjacentHTML('beforeend', CONTENTpage)}}

if(window.location.href.indexOf('/p/login.html') > -1){
document.body.setAttribute('login', '');
var fireBase = firebase.auth();
// var usersList = document.getElementById('usersList');
var contentHTML = document.querySelector('.Blog');

var signedUser = '<div id="user_div" class="loggedin-div"><h3>Seja bem vindo(a)</h3><div id="usersList"><p id="user_para">Você está conectado no momento.</p></div></div>';

var ACTIVEpass = '<svg class="CROSSicon PASSit" fill="currentColor" focusable="false" width="24px" height="24px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path d="M12,7c-2.48,0-4.5,2.02-4.5,4.5S9.52,16,12,16s4.5-2.02,4.5-4.5S14.48,7,12,7z M12,14.2c-1.49,0-2.7-1.21-2.7-2.7 c0-1.49,1.21-2.7,2.7-2.7s2.7,1.21,2.7,2.7C14.7,12.99,13.49,14.2,12,14.2z"></path><path d="M12,4C7,4,2.73,7.11,1,11.5C2.73,15.89,7,19,12,19s9.27-3.11,11-7.5C21.27,7.11,17,4,12,4z M12,17 c-3.79,0-7.17-2.13-8.82-5.5C4.83,8.13,8.21,6,12,6s7.17,2.13,8.82,5.5C19.17,14.87,15.79,17,12,17z"></path></svg>';

var OCULTApass = '<svg class="CROSSicon PASSit" fill="currentColor" focusable="false" width="24px" height="24px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path d="M10.58,7.25l1.56,1.56c1.38,0.07,2.47,1.17,2.54,2.54l1.56,1.56C16.4,12.47,16.5,12,16.5,11.5C16.5,9.02,14.48,7,12,7 C11.5,7,11.03,7.1,10.58,7.25z"></path><path d="M12,6c3.79,0,7.17,2.13,8.82,5.5c-0.64,1.32-1.56,2.44-2.66,3.33l1.42,1.42c1.51-1.26,2.7-2.89,3.43-4.74 C21.27,7.11,17,4,12,4c-1.4,0-2.73,0.25-3.98,0.7L9.63,6.3C10.4,6.12,11.19,6,12,6z"></path><path d="M16.43,15.93l-1.25-1.25l-1.27-1.27l-3.82-3.82L8.82,8.32L7.57,7.07L6.09,5.59L3.31,2.81L1.89,4.22l2.53,2.53 C2.92,8.02,1.73,9.64,1,11.5C2.73,15.89,7,19,12,19c1.4,0,2.73-0.25,3.98-0.7l4.3,4.3l1.41-1.41l-3.78-3.78L16.43,15.93z M11.86,14.19c-1.38-0.07-2.47-1.17-2.54-2.54L11.86,14.19z M12,17c-3.79,0-7.17-2.13-8.82-5.5c0.64-1.32,1.56-2.44,2.66-3.33 l1.91,1.91C7.6,10.53,7.5,11,7.5,11.5c0,2.48,2.02,4.5,4.5,4.5c0.5,0,0.97-0.1,1.42-0.25l0.95,0.95C13.6,16.88,12.81,17,12,17z"></path></svg>';

var loginUser = '<div class="LOGINspot"><div class="LOGINSPOTinst"><h3>Bem vindo(a)<span>Esta é uma area privada.</span></h3><form class="FORMlogin"><div class="GROUPinput"><input type="email" id="emailInput" tabindex="1" autocomplete="off" autofocus="" autocapitalize="off" autocorrect="off"></input><label>Username or email</label></div><div class="GROUPinput"><input type="password" id="passwordInput" tabindex="2" autocomplete="off"></input><div class="SHOWpass">' +ACTIVEpass+ '</div><label>Password</label></div><div class="FOOTERlogin"><p>Esqueceu a sua senha?</p><button class="LOGin" tabindex="3">Fazer login</button></div></form></div></div>';


var cPANEL = document.querySelector('.cPANEL');

fireBase.onAuthStateChanged(function(user){
if(user){
	contentHTML.innerHTML = signedUser;
	user = fireBase.currentUser;

const LOGOUTbtn = '<a href="javascript:void(0);" class="LOGout cPANEL">Sair</a>';
cPANEL.parentNode.innerHTML = LOGOUTbtn;




//SAIR DA CONTA ------ FIM DO IF
document.querySelector('.LOGout').addEventListener('click', function(){
	fireBase.signOut();
	var LOGINbtn = '<a href="javascript:void(0);" class="cPANEL">Entrar</a>'
	this.parentNode.innerHTML = LOGINbtn; });}
else { contentHTML.innerHTML = loginUser;
var LOGin = document.querySelector('.LOGin');
LOGin.addEventListener('click', function(){
var userEmail = document.getElementById("emailInput").value;
var userPass = document.getElementById("passwordInput").value;

fireBase.signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
var MAILelement = document.getElementById("emailInput");
var PASSelement = document.getElementById("passwordInput");

if(MAILelement.length == 0){
var MSGfail = 'Por favor, digite um email.';
}else{
var MSGfail = 'E-mail ou senha inválidos.';	
}


var MSGerror = '<div class="MSGerror"><div class="CROSSicon"><svg aria-hidden="true" class="stUf5b qpSchb" fill="currentColor" focusable="false" width="16px" height="16px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></svg></div><span>' +MSGfail+ '</span></div>';

var parser = new DOMParser();
var MSGerror = parser.parseFromString(MSGerror, 'text/html');
var GROUPinput = document.querySelector('.GROUPinput');

//MSG FAILURE ------ [RESOLVIDO]
var GROUPall = document.querySelector('.GROUPinput');
if((!GROUPall.hasAttribute("fail") == true) && (document.querySelector('.MSGerror') > -1 ? true : false === true)){
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

//FOCUS TEXT
var INPUTmail = document.getElementById("emailInput");
var INPUTpass = document.getElementById("passwordInput");
INPUTmail.addEventListener('focusout', function(){
	if(INPUTmail.value.length >= 1){
	INPUTmail.setAttribute('class', 'HAScontent');}
else {
	INPUTmail.removeAttribute('class');}});

INPUTpass.addEventListener('focusout', function(){
	if(INPUTpass.value.length >= 1){
	INPUTpass.setAttribute('class', 'HAScontent');}
else {
	INPUTpass.removeAttribute('class');}});

var LOGINbtn = '<a href="javascript:void(0);" class="LOGout cPANEL">Sair</a>';
var parser = new DOMParser();
var HTMLpanel = parser.parseFromString(LOGINbtn, 'text/html');

var FORMlogin = document.querySelector('.FORMlogin')
FORMlogin.addEventListener('submit', (e) => {
	e.preventDefault();});

}});
}}