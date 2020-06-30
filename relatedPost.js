//<![CDATA[
var relatedTitles=new Array();
var relatedTitlesNum=0;
var relatedUrls=new Array();
var relatedDate=new Array();
var thumburl=new Array();

function RELATEDpost(json){
for(var i = 0; i < json.feed.entry.length; i++){
var entry=json.feed.entry[i];

	relatedDate[relatedTitlesNum]=entry.published.$t;
	relatedTitles[relatedTitlesNum]=entry.title.$t;
	try{thumburl[relatedTitlesNum]=entry.media$thumbnail.url}
	catch(error){

s=entry.content.$t;a=s.indexOf("<img");
b=s.indexOf("src=\"",a);
c = s.indexOf("\"",b+5);
d = s.substr(b+5,c-b-5);

if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")){
	thumburl[relatedTitlesNum]=d}
else{
if(typeof(defaultnoimage)!=='undefined'){
	thumburl[relatedTitlesNum]=defaultnoimage}
	else{
	thumburl[relatedTitlesNum]="https://lh3.googleusercontent.com/-pI2JQ0kdVZU/VhfPlTK0utI/AAAAAAAAD-c/zK9nMazzQwA/s200-Ic42/NoImage.png"
}}}

for(var k=0;k<entry.link.length;k++){
if(entry.link[k].rel=='alternate'){
	relatedUrls[relatedTitlesNum]=entry.link[k].href;
	relatedTitlesNum++
}}}}

function removeRelatedDuplicates_thumbs(){
var tmp=new Array(0);
var tmp2=new Array(0);
var tmp3=new Array(0);
var tmp4=new Array(0);
for(var i=0;i<relatedUrls.length;i++){
if(!contains_thumbs(tmp,relatedUrls[i])){
	tmp.length+=1;
	tmp[tmp.length-1]=relatedUrls[i];
	tmp2.length+=1;
	tmp3.length+=1;
	tmp4.length+=1;
	tmp2[tmp2.length-1]=relatedTitles[i];
	tmp3[tmp3.length-1]=thumburl[i];
	tmp4[tmp4.length-1]=relatedDate[i];
}}
relatedTitles=tmp2;
relatedDate=tmp4;
relatedUrls=tmp;
thumburl=tmp3;}

function contains_thumbs(a,e){
for(var j=0;j<a.length;j++){
if(a[j]==e){
	return true
}}
	return false}

function printRelatedLabels_thumbs(current){
for(var i=0;i<relatedUrls.length;i++){
if((relatedUrls[i]==current)||(!relatedTitles[i])){
	relatedUrls.splice(i,1);
	relatedTitles.splice(i,1);
	relatedDate.splice(i,1);
	thumburl.splice(i,1);
	i--;
}}

var r=Math.floor((relatedTitles.length-1)*Math.random());
var i=0;

if(relatedTitles.length>0){
	document.write('<h2>'+relatedpoststitle+'</h2>');}
	document.write('<div class="RELATEDspot"><ul>');
	while(i<relatedTitles.length&&i<20&&i<MAXresult){
		
	var RELATEDdate = relatedDate[r].substring(0, 10).split('-');
	var MONTHdate = RELATEDdate[1];
	if(MONTHdate == 1){ var MONTHdate = "Janeiro" }
	if(MONTHdate == 2){ var MONTHdate = "Fevereiro" }
	if(MONTHdate == 3){ var MONTHdate = "Março" }
	if(MONTHdate == 4){ var MONTHdate = "Abril" }
	if(MONTHdate == 5){ var MONTHdate = "Maio" }
	if(MONTHdate == 6){ var MONTHdate = "Junho" }
	if(MONTHdate == 7){ var MONTHdate = "Julho" }
	if(MONTHdate == 8){ var MONTHdate = "Agosto" }
	if(MONTHdate == 9){ var MONTHdate = "Setembro" }
	if(MONTHdate == 10){ var MONTHdate = "Outubro" }
	if(MONTHdate == 11){ var MONTHdate = "Novembro" }
	if(MONTHdate == 12){ var MONTHdate = "Dezembro" }
	var RELATEDdate = RELATEDdate[2]+ ' de ' +MONTHdate+ ' de ' +RELATEDdate[0];

	document.write('<li><a href="'+relatedUrls+'"><img class="THUMBrelated" src="'+thumburl[r].replace('s72-c', 'w600-h400-c')+'"/><div class="RELATEDbttm"><span class="RELATEDdate">'+RELATEDdate+'</span><p>'+relatedTitles[r]+'</p></div></a></li>');

i++;
if(r<relatedTitles.length-1){
r++;}
else{
r=0;
}}

document.write('</ul></div>');
relatedUrls.splice(0,relatedUrls.length);
thumburl.splice(0,thumburl.length);
relatedTitles.splice(0,relatedTitles.length);}

//]]>