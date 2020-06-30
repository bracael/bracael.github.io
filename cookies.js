//<![CDATA[
$(document).ready(function(){
var EXISTEcookie = getCookie('NOTIFYcookie');
var COOKIESbar = $('SECTION.COOKIESbar');

if(EXISTEcookie==null){
FUNCTIONcookies('MOSTRARsim');
}else{
FUNCTIONcookies('MOSTRARnao');}

function FUNCTIONcookies(condicao){
if(condicao=='MOSTRARsim'){
	$(COOKIESbar).css('display', 'block' );
setTimeout(function(){
	$(COOKIESbar).animate({ opacity: 1 }); }, 1600);
	$('.COOKIESclose').click(function(ev){
	ev.preventDefault();
	definirNovaDataExpiracao();
});}
else if(condicao=='MOSTRARnao'){
// NENHUMA AÇÃO NECESSARIA
}}

function definirNovaDataExpiracao(){
var data=new Date();
var EXPIREtime=30;//30 dias
data.setTime(data.getTime()+(EXPIREtime*24*60*60*1000));
var expires="expires="+data.toUTCString();
var cookie='NOTIFYcookie="Esta web usa cookies!";'+expires;
document.cookie=cookie;}

function getCookie(nomeCookie){
var ca=document.cookie.split(';');
var name=nomeCookie+'=';
for(var i=0;i<ca.length;i++){
var c=ca[i].trim();
if(c.indexOf(name)==0){
return c.substring(name.length,c.length);}}
return null;}

$('.COOKIESclose').click(function(ev){
ev.preventDefault();
$(COOKIESbar).hide();
});});
//]]>