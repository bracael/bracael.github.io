function HTTPXMLresquest(JSONit){
	var url = new URL(window.location.href);
	var DEMOid = Number(url.searchParams.get("id"));
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
	var CODEdemo = CODEdemo.replace('[buy', '[class="buy"');
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

if(DOCit.body.contains(DOCit.body.querySelector('.buy'))){
	var BOLLbuy = DOCit.body.querySelector('.buy').hasAttribute('url');}
	else{ var BOLLbuy = false; }

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
	var POSTtrue = true;
	var PREMIUMspot = '<div class="INFOthis"><li><a href="' +INDEXit+ '"><i class="CROSSicon INFOicon"></i></a></li><li><a href="javascript:void(0);" class="CARTit"><i class="CROSSicon ADDTOfav"></i></a></li></div>';}
	else if(pLOCAL.split(' ').includes('excl') && GETimg.length>=1 && BOLLdmo && BOLLpre && pLOCAL.split(' ').length === 1){
	var POSTtrue = true;
	var PREMIUMspot = '<div class="INFOthis"><li><a href="' +INDEXit+ '"><i class="CROSSicon INFOicon"></i></a></li><li><a href="javascript:void(0);" class="CARTit"><i class="CROSSicon ADDTOfav"></i></a></li></div>';}
else{
if(GETimg.length>=1 && BOLLdmo && BOLLpre && BOLLbxa && BOLLbuy && BOLLupt && BOLLlyt && Number(pLOCAL.replace(/[^0-9]/g,'')) !== 0 && pLOCAL.split(' ').length === 1){
	var POSTtrue = true;
	var GETbuy = DOCit.body.querySelector('.buy').getAttribute('url');
	var PREMIUMspot = '<div class="INFOthis"><li><a href="' +GETbuy+ '" target="_blank"><i class="CROSSicon CARTicon"></i><span>' +PRICEpost+ '</span></a></li><li><a href="' +INDEXit+ '"><i class="CROSSicon INFOicon"></i></a></li><li><a href="javascript:void(0);" class="CARTit"><i class="CROSSicon ADDTOfav"></i></a></li></div>';}
	else{
	var POSTtrue = false;}}

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
if(document.body.contains(document.querySelector('.DIRECTmenu'))){
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

//RESIZE WIDTH RESPONSIVE
if(document.body.contains(document.querySelector('HEADER.HEADmenu'))){
setInterval(function(){
var HTMLoffset = document.querySelector('HTML');
document.querySelector('HEADER.HEADmenu').style.width = HTMLoffset.offsetWidth + 'px'; }, 0);}

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

//PAGINA DE LOGIN
if(window.location.href.indexOf('/p/login.html') > -1){
document.body.setAttribute('login', '');}

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



var fireBase = firebase.auth();
// var usersList = document.getElementById('usersList');
var contentHTML = document.querySelector('.Blog');


var ACTIVEpass = '<svg class="CROSSicon PASSit" fill="currentColor" focusable="false" width="24px" height="24px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path d="M12,7c-2.48,0-4.5,2.02-4.5,4.5S9.52,16,12,16s4.5-2.02,4.5-4.5S14.48,7,12,7z M12,14.2c-1.49,0-2.7-1.21-2.7-2.7 c0-1.49,1.21-2.7,2.7-2.7s2.7,1.21,2.7,2.7C14.7,12.99,13.49,14.2,12,14.2z"></path><path d="M12,4C7,4,2.73,7.11,1,11.5C2.73,15.89,7,19,12,19s9.27-3.11,11-7.5C21.27,7.11,17,4,12,4z M12,17 c-3.79,0-7.17-2.13-8.82-5.5C4.83,8.13,8.21,6,12,6s7.17,2.13,8.82,5.5C19.17,14.87,15.79,17,12,17z"></path></svg>';

var OCULTApass = '<svg class="CROSSicon PASSit" fill="currentColor" focusable="false" width="24px" height="24px" viewBox="0 0 24 24" xmlns="https://www.w3.org/2000/svg"><path d="M10.58,7.25l1.56,1.56c1.38,0.07,2.47,1.17,2.54,2.54l1.56,1.56C16.4,12.47,16.5,12,16.5,11.5C16.5,9.02,14.48,7,12,7 C11.5,7,11.03,7.1,10.58,7.25z"></path><path d="M12,6c3.79,0,7.17,2.13,8.82,5.5c-0.64,1.32-1.56,2.44-2.66,3.33l1.42,1.42c1.51-1.26,2.7-2.89,3.43-4.74 C21.27,7.11,17,4,12,4c-1.4,0-2.73,0.25-3.98,0.7L9.63,6.3C10.4,6.12,11.19,6,12,6z"></path><path d="M16.43,15.93l-1.25-1.25l-1.27-1.27l-3.82-3.82L8.82,8.32L7.57,7.07L6.09,5.59L3.31,2.81L1.89,4.22l2.53,2.53 C2.92,8.02,1.73,9.64,1,11.5C2.73,15.89,7,19,12,19c1.4,0,2.73-0.25,3.98-0.7l4.3,4.3l1.41-1.41l-3.78-3.78L16.43,15.93z M11.86,14.19c-1.38-0.07-2.47-1.17-2.54-2.54L11.86,14.19z M12,17c-3.79,0-7.17-2.13-8.82-5.5c0.64-1.32,1.56-2.44,2.66-3.33 l1.91,1.91C7.6,10.53,7.5,11,7.5,11.5c0,2.48,2.02,4.5,4.5,4.5c0.5,0,0.97-0.1,1.42-0.25l0.95,0.95C13.6,16.88,12.81,17,12,17z"></path></svg>';

var loginUser = '<div class="LOGINspot"><div class="LOGINSPOTinst"><div class="COMPANYlogin"><section class="COMPANYit"><!-- Bracael --></section><span>Use uma conta Bracael.</span></div><form class="FORMlogin"><div class="GROUPinput"><input type="email" id="emailInput" tabindex="1" autocomplete="off" autofocus="" autocapitalize="off" autocorrect="off"></input><label>E-mail</label></div><div class="GROUPinput"><input type="password" id="passwordInput" tabindex="2" autocomplete="off"></input><div class="SHOWpass">' +ACTIVEpass+ '</div><label>Senha</label></div><div class="FOOTERlogin"><button class="BTN FORGOTpass" type="button">Esqueceu a sua senha?</button><button class="LOGin" tabindex="3">Fazer login</button></div></form></div></div>';

fireBase.onAuthStateChanged(function(user){
if(user){


if(window.location.href.indexOf('/p/login.html') > -1){
var CACHEurl = JSON.parse(sessionStorage.CACHEurl);
if(CACHEurl[CACHEurl.length-2] !== undefined){
	window.location.replace(CACHEurl[CACHEurl.length-2]);}
	else{
	window.location.replace("http://localhost/bracael.com/");}}

	user = fireBase.currentUser;

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

document.querySelector('BUTTON.FORGOTpass').addEventListener('click', function(){
	var FORGOTpass = '<div class="LOGINspot"><div class="LOGINSPOTinst"><div class="COMPANYlogin"><section class="COMPANYit"><!-- Bracael --></section><span>Esqueceu a senha?</span></div><p>Digite seu endereço de e-mail para redefinir a senha. Talvez você precise verificar sua pasta de spams ou desbloquear o e-mail no-reply@bracael.com.</p><div class="GROUPinput"><input type="email" id="INPTRESETpass" tabindex="1" autocomplete="off" autofocus="" autocapitalize="off" autocorrect="off"></input><label>E-mail</label></div><div class="FOOTERlogin PAGEreset"><a class="IDONTacess" href="javascript:void(0);" onclick="alert(`Bracael.COM\nVersão Beta, 12.05.2020\nO Conteúdo para está página estará disponivel em breve.`)"><span>Não tem mais acesso?</span></a><button class="BTNRESETpass" tabindex="2">Enviar</button></div></div></div>';
	contentHTML.innerHTML = FORGOTpass;
	var INPTRESETpass = document.getElementById('INPTRESETpass');
	INPTRESETpass.addEventListener('focusout', function(){
	if(INPTRESETpass.value.length >= 1){
	INPTRESETpass.setAttribute('class', 'HAScontent');}
	else {
	INPTRESETpass.removeAttribute('class');}});


document.querySelector('.BTNRESETpass').addEventListener('click', function(){
	var auth = firebase.auth();
	var INPTRESETpass = document.getElementById('INPTRESETpass');
	auth.sendPasswordResetEmail(INPTRESETpass.value).then(function(){
	var FORGOTpass = '<div class="LOGINspot"><div class="LOGINSPOTinst SUCESSemail"><div class="COMPANYlogin TITLEsucess"><section class="COMPANYit"><!-- Bracael --></section><span>Solicitação com sucesso!</span></div><div class="SUCESSemail"><i class="CROSSicon CHECKicon"></i><div class="YOURmail"><span>' +INPTRESETpass.value+ '</span></div>Um e-mail foi enviado para seu e-mail de recuperaçao. Verifique a caixa de entrada do e-mail solicitado e siga as instruções para redefinir sua senha.</div><div class="COMPLETreset"><a href="javascript:void(0);" class="LOGINgo">Fazer login</a><strong><span>ou</span></strong><a href="https://www.bracael.com/" class="HOMEpage">Pagina inicial</a></div></div></div>';
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
INPTRESETpass.value = null;;
if(!GROUPall.hasAttribute("fail") && !document.body.contains(document.querySelector('.MSGerror'))){
document.querySelector('.GROUPinput').insertAdjacentElement("afterend", DOMparse.querySelector('.MSGerror'));}
GROUPall.setAttribute('fail', '');

INPTRESETpass.addEventListener('input', function(){
$('.MSGerror').animate({ height: 0, opacity: 0 },{duration: 300, complete: function(){ $('.MSGerror').remove() }});
GROUPall.removeAttribute('fail');});

	error.message = 'Digite um e-mail válido.'
	console.log("Error: " + error.message)
	// Error occurred. Inspect error.code.
    });

}); //document.querySelector('.BTNRESETpass')

});


}

}
});


}
