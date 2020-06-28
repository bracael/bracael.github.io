//<![CDATA[

function POSTbox(pID, pURL, pTITLE, pLOCAL, pLABEL, pDATE){
	var div = document.getElementById(pID);
	var img = div.getElementsByTagName("img");
	var TYPEpage = pLOCAL.split(' ')
	var p = pLOCAL.replace(/[^0-9\.]+/g, '');

	var POSTcode = div.innerText.replace(/] \[/gm, ']\n[');
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


// console.log(DOCit.body.querySelector(".zip").hasAttribute("update"))

if(DOCit.body.querySelector('.demo') > -1 ? false : true){

if(DOCit.body.querySelector('.demo').hasAttribute('url')){
	var DEMOit = 'p/demo.html?url='+ DOCit.body.querySelector('.demo').getAttribute('url');
	var DEMOtf = true;
// console.log(DEMOit)
}else{
	var DEMOit = "javascript:alert('Não há atributo');";
	var DEMOtf = false;
// console.log(DEMOit)
}}
else{
	var DEMOit = '#';
	var DEMOtf = false;
// console.log(DEMOit)
}


var BOLLbuy =  DOCit.body.querySelector('.buy') > -1 ? false : true;
var BOLLzip =  DOCit.body.querySelector('.zip') > -1 ? false : true;
var BOLLbaixar =  DOCit.body.querySelector('.baixar') > -1 ? false : true;
var BOLLdemo =  DOCit.body.querySelector('.demo') > -1 ? false : true;

if(BOLLbaixar && BOLLdemo && BOLLbuy && BOLLzip && DEMOtf && pLOCAL.split('').includes('0','1','2','3','4','5','6','7','8','9') && DOCit.body.querySelector('.zip').hasAttribute('update') && DOCit.body.querySelector('.zip').hasAttribute('layout')){
	// console.log('Normal: '+pTITLE, true) // producto com valor
	var CHECKpost = true;
}
else if(BOLLbaixar && BOLLdemo && BOLLzip && DEMOtf && pLOCAL.split(' ').includes('free') && DOCit.body.querySelector('.zip').hasAttribute('update') && DOCit.body.querySelector('.zip').hasAttribute('layout')){
	// console.log('Grátis: '+pTITLE, true) // producto com valor
	var CHECKpost = true;
}
else if(BOLLdemo && DEMOtf && pLOCAL.split(' ').includes('excl')){
	// console.log('Exclusivo: ', true) // producto exclusivo
	var CHECKpost = true;
}
else{
	// console.log(false); // a postagem é falsa
	var CHECKpost = false;
}


const ARRAYdate = new Intl.DateTimeFormat('pt-BR', { weekday: 'long', day: 'numeric', month: 'numeric', year: 'numeric', hour: '2-digit', minute: 'numeric', hour12: true });
const [{ value: weekday },,{ value: day },,{ value: month },,{ value: year },,{ value: hour },,{ value: minute },,{ value: hour12 }] = ARRAYdate.formatToParts(new Date(pDATE));
var pDATE = `${day}/${month}/${year} ÀS ${hour}:${minute} ${hour12}`;

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

	if((p.length == 1) || (p.length == 2) || (p.length > 8)){ var pricePost = 'ERRO 400, OPS!'; }
	if(p.length == 3){ var pricePost = BR + aa + "," + ab; }
	if(p.length == 4){ var pricePost = BR + ba + "," + bb; }
	if(p.length == 5){ var pricePost = BR + ca + "," + cb; }
	if(p.length == 6){ var pricePost = BR + da + "." + db + "," + dc; }
	if(p.length == 7){ var pricePost = BR + ea + "." + eb + "," + ec; }
	if(p.length == 8){ var pricePost = BR + fa + "." + fb + "," + fc; }
	if(p.length == 0){ var pricePost = 'EMPTY!'; }

 
if(TYPEpage.includes('free')){
var POSTtype = '<div class="POSTBOXbt"><div class="POSTprice">GRÁTIS!</div><div class="POSTbtn"><li><a class="BTNlive" href="' +DEMOit+ '" target="_blank">Demo</a></li><li><a class="BTNinfo" href="' +pURL+ '">Info</a></li></div></div>' }
else if(TYPEpage.includes('excl')){
var POSTtype = '<div class="POSTBOXbt"><div class="POSTbtn MAXwidth"><li><a class="BTNlive" href="' +DEMOit+ '" target="_blank">DEMO</a></li><li><a class="BTNinfo" href="' +pURL+ '">Info</a></li></div></div>' }
else{
var POSTtype = '<div class="POSTBOXbt"><div class="POSTprice">'+pricePost+'</div><div class="POSTbtn"><li><a class="BTNlive" href="' +DEMOit+ '" target="_blank">Demo</a></li><li><a class="BTNinfo" href="' +pURL+ '">Info</a></li></div></div>' }

var ARRAYimg = new Array(3)
ARRAYimg[0] = 'https://4.bp.blogspot.com/-sFt6m4qFkA0/Xr_Gi8W4JHI/AAAAAAAAG50/8iQa42-JL3cSGPWPsApS2H8vtMm4wJflgCLcBGAsYHQ/s1600/cat-ba.png';
ARRAYimg[1] = 'https://2.bp.blogspot.com/-U1PEPnMPk2Q/Xr_BCoq7EAI/AAAAAAAAG5I/_LP4GUXyKTAH5WUi7H7zH2yfFFaBjTnYQCLcBGAsYHQ/s1600/village-de-traque.png';
ARRAYimg[2] = 'https://4.bp.blogspot.com/-CylagN7LkS4/Xr_AaLij-aI/AAAAAAAAG5A/yJ7KrR9y9C0-M3Kk6n2dmv8adyxh_gRRwCLcBGAsYHQ/s1600/amazonia-tour.png';
var RANDOMit = Math.random() * (ARRAYimg.length)
var RANDOMit = Math.floor(RANDOMit)

	if(img.length>=1 && DEMOtf && CHECKpost){
	summary = '<section class="POSTup '+pLOCAL+'"><div class="POSTimg"><img class="THUMBnail" src="'+img[0].src+'"></img></div><div class="POSTspot"><i class="BTNfav" rel="'+pID+'"></i></div></section><section class="POSTbt"><div class="POSTbt_inner"><h3 class="POSTtitle"><a class="POSTurl" href="'+pURL+'">'+pTITLE+'</a></h3><div class="POSTdate CALENDar">'+pDATE+'</div>' +POSTtype+ '</div></section>';
	} else { summary = '<section class="POSTup BROKENpost"><div class="POSTimg"><img class="THUMBnail" src="' +ARRAYimg[RANDOMit]+ '"></img></div></section><section class="POSTbt"><div class="POSTbt_inner"><h3 class="POSTtitle BROKENpost">OPS, ERRO 500!</h3><div class="POSTdate">'+pID+'</div><div class="POSTBOXbt"><div class="POSTprice" style="padding: 14px 0 0;">Erro Interno do Servidor.</div></div></div></section>'; }
	div.innerHTML = summary;	
}
















function POSTbody(pID, pTITLE, pURL, pDATE, pLOCAL){
	var div = document.getElementById(pID);
	var img = div.getElementsByTagName("img");
	var TYPEpage = pLOCAL.split(' ')
	var p = pLOCAL.replace(/[^0-9\.]+/g, '');

const date = new Date(pDATE)
const dateTimeFormat = new Intl.DateTimeFormat('br', { year: 'numeric', month: 'long', day: '2-digit' }) 
const [{ value: day },,{ value: month },,{ value: year }] = dateTimeFormat .formatToParts(date ) 

	var SHAREpage = '<div class="SHAREpage"><h3>Compartilhe essa página</h3><div class="SHAREspot"><li class="btnFacebook"><a class="SOCIALurl" data-height="500" data-url="https://www.facebook.com/sharer.php?u=' +pURL+ '" data-width="550" rel="nofollow"><i class="CROSSicon"><svg id="ICONfacebook" viewBox="0 0 6 13.795"><path fill="currentColor" d="M1.297 2.672v1.9h-1.3v2.321h1.3v6.9h2.664v-6.9h1.788s.167-1.114.249-2.331H3.972V2.974a.648.648 0 0 1 .578-.557h1.454V-.001H4.031a2.448 2.448 0 0 0-2.734 2.673z"></path></svg></i>Facebook</a></li><li class="btnTwitter"><a class="SOCIALurl" data-height="460" data-url="https://twitter.com/intent/tweet?url=' +pURL+ '&text=' +pTITLE+ '&via=bracael" data-width="550" rel="nofollow"><i class="CROSSicon"><svg id="icon-share-page-twitter" viewBox="0 0 14 11.645"><path fill="currentColor" d="M13.778 1.355a5.544 5.544 0 0 1-.965.326 3.01 3.01 0 0 0 .794-1.265.158.158 0 0 0-.231-.184 5.57 5.57 0 0 1-1.476.61.376.376 0 0 1-.092.011.391.391 0 0 1-.258-.1 3.018 3.018 0 0 0-2-.754 3.227 3.227 0 0 0-.956.148 2.924 2.924 0 0 0-1.971 2.107 3.22 3.22 0 0 0-.072 1.111.108.108 0 0 1-.027.085.112.112 0 0 1-.083.038h-.008A7.914 7.914 0 0 1 .993.582a.158.158 0 0 0-.259.02 3.022 3.022 0 0 0 .491 3.669 2.7 2.7 0 0 1-.688-.262.158.158 0 0 0-.234.136 3.022 3.022 0 0 0 1.763 2.784H2a2.716 2.716 0 0 1-.509-.049.158.158 0 0 0-.18.2A3.025 3.025 0 0 0 3.7 9.137a5.57 5.57 0 0 1-3.119.947H.234a.231.231 0 0 0-.226.174.239.239 0 0 0 .114.264 8.284 8.284 0 0 0 4.163 1.122 8.4 8.4 0 0 0 3.557-.755 7.856 7.856 0 0 0 2.6-1.95 8.551 8.551 0 0 0 1.594-2.669 8.432 8.432 0 0 0 .542-2.921v-.046a.514.514 0 0 1 .192-.4 5.966 5.966 0 0 0 1.2-1.317.158.158 0 0 0-.2-.232z"></path></svg></i>Twitter</a></li><li class="btnWhatsapp"><a alt="Compartilhar no WhatsApp" data-action="share/whatsapp/share" href="whatsapp://send?text=' +pTITLE+ '%20' +pURL+ '" title="Compartilhar no WhatsApp"><i class="CROSSicon"><svg id="ICONwhatsapp" viewBox="0 0 295 300"><g transform="translate(147.500000, 150.000000) scale(-1, 1) rotate(-180.000000) translate(-147.500000, -150.000000) "><path d="M136.918478,299.450382 C119.96972,298.030534 101.142857,292.671756 85.2018634,284.70229 C56.4805901,270.366412 33.8975155,247.648855 19.8804348,219.068702 C-0.732919255,177.114504 -0.13742236,130.305344 21.4836957,86.5648855 L24.9192547,79.648855 L12.2305901,42 C2.70263975,13.648855 -0.320652174,4.16793893 0.0458074534,3.61832061 C0.320652174,3.20610687 0.961956522,2.83969466 1.51164596,2.7480916 C2.24456522,2.61068702 2.47360248,2.29007634 2.47360248,1.23664122 C2.47360248,9.22872889e-16 2.61102484,-0.13740458 3.52717391,0.183206107 C6.77950311,1.19083969 33.1645963,9.61832061 54.9689441,16.5801527 L80.1630435,24.6412214 L86.8051242,21.5267176 C112.869565,9.06870229 139.437888,4.58015267 167.151398,7.96946565 C208.46972,13.0076336 245.665373,36 268.798137,70.9007634 C287.533385,99.1145038 296.923913,134.10687 294.221273,166.030534 C291.747671,195.618321 280.937112,222.870229 262.476708,245.954198 C244.336957,268.671756 218.501553,285.89313 190.238354,294.137405 C184.19177,295.923664 173.335404,298.167939 166.92236,298.992366 C161.654503,299.679389 143.148292,299.954198 136.918478,299.450382 Z M166.235248,268.580153 C192.803571,264.59542 215.432453,253.282443 234.259317,234.412214 C252.582298,216.137405 263.484472,194.473282 266.599379,170.061069 C267.561335,162.458015 267.607143,147.847328 266.645186,140.290076 C263.392857,114.412214 251.711957,90.6870229 233.11413,72.0458015 C219.371894,58.2137405 204.34705,48.9160305 186.161491,42.9160305 C174.11413,38.9770992 163.853261,37.3740458 149.973602,37.3740458 C138.567547,37.3282443 132.017081,38.0610687 122.260093,40.4427481 C108.975932,43.648855 100.180901,47.4045802 85.2934783,56.1984733 C84.1482919,56.8854962 83.3237578,56.6564885 62.939441,50.1526718 C51.3043478,46.4427481 41.5931677,43.5114504 41.4099379,43.648855 C41.1809006,43.7862595 44.0209627,52.8091603 47.6397516,63.7099237 C51.2585404,74.5648855 54.2360248,84 54.2360248,84.5954198 C54.2360248,85.1908397 53.0450311,87.5725191 51.5333851,89.8625954 C35.2259317,115.19084 29.0419255,142.80916 33.2104037,171.89313 C35.6381988,188.885496 41.4557453,203.816794 51.121118,217.740458 C71.2763975,246.916031 102.929348,265.557252 138.521739,269.221374 C143.972826,269.770992 160.784161,269.40458 166.235248,268.580153 Z" fill="currentColor"></path><path d="M97.5240683,226.030534 C94.6840062,225.068702 92.3020186,223.374046 88.7748447,219.709924 C80.9875776,211.557252 77.3229814,203.038168 76.8190994,191.587786 C76.2236025,178.442748 81.3540373,163.923664 92.943323,146.015267 C112.319876,116.10687 131.788043,98.5648855 157.531832,87.8473282 C170.724379,82.351145 179.33618,79.5114504 185.016304,78.6870229 C189.276398,78.1374046 197.704969,79.3740458 202.927019,81.389313 C207.645186,83.221374 214.24146,87.5267176 217.173137,90.7328244 C221.662267,95.6793893 225.555901,106.671756 225.555901,114.503817 C225.555901,117.755725 225.464286,118.167939 224.319099,119.450382 C221.982919,122.015267 192.940994,137.175573 189.505435,137.633588 C186.390528,138.045802 185.153727,137.175573 180.023292,131.175573 C172.052795,121.877863 169.579193,119.450382 168.159161,119.450382 C166.510093,119.450382 155.470497,124.992366 150.20264,128.473282 C137.330745,136.992366 126.611801,148.671756 118.229037,163.51145 C117.541925,164.70229 116.992236,165.847328 116.992236,166.122137 C116.992236,166.396947 118.458075,168.229008 120.244565,170.152672 C124.550466,174.870229 125.970497,177.022901 127.802795,181.465649 C129.909938,186.458015 129.818323,187.78626 127.024068,195.343511 C122.993012,206.335878 121.710404,209.770992 119.511646,215.679389 C117.221273,221.816794 115.48059,224.519084 113.14441,225.480916 C110.99146,226.396947 99.7686335,226.763359 97.5240683,226.030534 Z" fill="currentColor"></path></g></svg></i>WhatsApp</a></div></div>';


	var POSTcode = div.innerText.replace(/] \[/gm, ']\n[');
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

	if(DOCit.body.querySelector('responsive') > -1 ? false : true == true){
	var CODErespon = '<li><strong>Responsivo</strong>: 100% funcionando em todos os dispositivos móveis e tablets.</li>';}
	else{CODErespon = '';}
	if(DOCit.body.querySelector('error') > -1 ? false : true == true){
	var CODEerror = '<li><strong>Página 404</strong>: conteúdo costumizado para páginas não encontradas.</li>';}
	else{CODErespon = '';}
	if(DOCit.body.querySelector('pagenavi') > -1 ? false : true == true){
	var PAGEnavi = '<li><strong>Pagenavi</strong>: plug-in para navegação númeradas das postagens.</li>';}
	else{PAGEnavi = '';}
	if(DOCit.body.querySelector('cookies') > -1 ? false : true == true){
	var COOKies = '<li><strong>Notificação do uso de Cookies</strong>: ponto notificando o uso de cookies segundo as leis da união europeia em ordem do alerta aos visitantes da UE sobre os cookies usados e os dados coletados em sua página.</li>';}
	else{COOKies = '';}
	if(DOCit.body.querySelector('post') > -1 ? false : true == true){
	var CONpost = '<li><strong>Postagens por comandos</strong>: o conteúdo da postagem é inserido por comandos de texto específicos dentro da edição de postagem.</li>';}
	else{CONpost = '';}
	if(DOCit.body.querySelector('comments') > -1 ? false : true == true){
	var COMMents = '<li><strong>Múltiplo sistema de comentários</strong>: não apenas para Blogger, mas também o sistema de comentários do Facebook e Disqus com opção de escolher quais usar.</li>';}
	else{COMMents = '';}
	if(DOCit.body.querySelector('seo') > -1 ? false : true == true){
	var SEOmeta = '<li><strong>SEO Otimizado</strong>: resultados de buscadores prontos.</li>';}
	else{SEOmeta = '';}
	if(DOCit.body.querySelector('ads') > -1 ? false : true == true){
	var ADSspot = '<li><strong>Espaço de anúncios prontos</strong>: tenha locais específicos de anúncios para otimizar sua receita.</li>';}
	else{ADSspot = '';}
	if(DOCit.body.querySelector('fav') > -1 ? false : true == true){
	var FAVOrite = '<li><strong>Lista de favoritos</strong>: crie lista personalizada das postagens públicadas no dominio.</li>';}
	else{ADSspot = '';}

	var FEATURESthis = '<div class="FEATURESthis"><h4>Recursos inclusos</h4><ul>' +PAGEnavi+COOKies+CODEerror+CODErespon+CONpost+COMMents+SEOmeta+ADSspot+FAVOrite+ '</ul></div>';
	var CHANGElog = '<div class="CHANGElog"><h3>Changelog</h3><blockquote class="tr_bq">- v1.0.0 – ' +`${day} de ${month} de ${year}`+ '\n<b>lançamento inicial</b></blockquote></div>'


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

	if((p.length == 1) || (p.length == 2) || (p.length > 8)){ var pricePost = 'ERRO 400, OPS!'; }
	if(p.length == 3){ var pricePost = BR + aa + "," + ab; }
	if(p.length == 4){ var pricePost = BR + ba + "," + bb; }
	if(p.length == 5){ var pricePost = BR + ca + "," + cb; }
	if(p.length == 6){ var pricePost = BR + da + "." + db + "," + dc; }
	if(p.length == 7){ var pricePost = BR + ea + "." + eb + "," + ec; }
	if(p.length == 8){ var pricePost = BR + fa + "." + fb + "," + fc; }
	if(p.length == 0){ var pricePost = 'EMPTY!'; }


	var xa = DOCit.body.querySelector('.demo') > -1 ? false : true;
	var xb = DOCit.body.querySelector('pre') > -1 ? false : true;
	var xc = DOCit.body.querySelector('.baixar') > -1 ? false : true;
	var xd = DOCit.body.querySelector('.buy') > -1 ? false : true;
	var xe = DOCit.body.querySelector('.zip') > -1 ? false : true;

if(xa == true){
	var LIVEtemplate = DOCit.body.querySelector('.demo').getAttribute('url');}
if(xb == true){
	var DESCpost = DOCit.body.querySelector('pre').innerText;}
if(xc == true){
	var URLfree = DOCit.body.querySelector('.baixar').getAttribute('url');}
if(xd == true){
	var CHECKOUTbtn = DOCit.body.querySelector('.buy').getAttribute('url');}
if(xe == true){
if(DOCit.body.querySelector(".zip").hasAttribute("update")){
	var ITEMupdate = DOCit.body.querySelector('.zip').getAttribute('update').replace(/(-)/gi,'/');}
	else{ var ITEMupdate = false; }
if(DOCit.body.querySelector(".zip").hasAttribute("layout")){
	var ITEMlayout = DOCit.body.querySelector('.zip').getAttribute('layout')[0].toUpperCase() +
	DOCit.body.querySelector('.zip').getAttribute('layout').slice(1);}
	else { var ITEMlayout = false }}

// pLOCAL.split('').includes('0','1','2','3','4','5','6','7','8','9')
console.log(!xb)
	if(!xa && (TYPEpage.includes('excl') || TYPEpage.includes('free') || pLOCAL.split('').includes('0','1','2','3','4','5','6','7','8','9'))){ var ua = '<li><p class="SLCTit">Encerramento inesperado</p><p class="SLCTit">demo</p><p class="UNICitem">url</p><p>valor</p></li>'; } else { var ua = '' }
	if(!xb && (TYPEpage.includes('excl') || TYPEpage.includes('free') || pLOCAL.split('').includes('0','1','2','3','4','5','6','7','8','9'))){ var ub = '<li><p class="SLCTit">Encerramento inesperado</p><p class="SLCTit">pre</p><p>-</p><p>texto</p></li>'; } else { var ub = '' }
	if(!xc && (TYPEpage.includes('free') || pLOCAL.split('').includes('0','1','2','3','4','5','6','7','8','9'))){ var uc = '<li><p class="SLCTit">Encerramento inesperado</p><p class="SLCTit">baixar</p><p class="UNICitem">url</p><p>valor</p></li>'; } else { var uc = '' }
	if(!xd && (pLOCAL.split('').includes('0','1','2','3','4','5','6','7','8','9'))){ var ud = '<li><p class="SLCTit">Encerramento inesperado</p><p class="SLCTit">buy</p><p class="UNICitem">url</p><p>valor</p></li>'; } else { var ud = '' }
	if(!xe && (TYPEpage.includes('free') || pLOCAL.split('').includes('0','1','2','3','4','5','6','7','8','9'))){ var ue = '<li><p class="SLCTit">Encerramento inesperado</p><p class="SLCTit">zip</p><p>-</p><p>valor</p></li>'; } else { var ue = '' }
	if(!ITEMupdate && (TYPEpage.includes('free') || pLOCAL.split('').includes('0','1','2','3','4','5','6','7','8','9'))){ var uf = '<li><p class="SLCTit">Encerramento inesperado</p><p>zip</p><p class="SLCTit">update</p><p>valor</p></li>'; } else { var uf = '' }
	if(!ITEMlayout && (TYPEpage.includes('free') || pLOCAL.split('').includes('0','1','2','3','4','5','6','7','8','9'))){ var ug = '<li><p class="SLCTit">Encerramento inesperado</p><p>zip</p><p class="SLCTit">layout</p><p>valor</p></li>'; } else { var ug = '' }

	var ERRORpost = '<div class="MSGfailure"><h4>ERRO 500, OPS!<span>Erro Interno do Servidor</span></h4><ul><div class="FAILUREspot"><h5>Descrição</h5><li><p class="report">Os comandos estão digitados de maneira incorreta, por favor, verifique as palavras no texto da postagem.</p></li></div><div class="FAILUREspot"><h5>Relatorio de erros</h5><div class="FAILUREtype"><li>Resumo</li><li>Elemento</li><li>Propriedade</li><li>Tipo</li></div><div class="TYPEinfo">' +ua+ub+uc+ud+ue+uf+ug+ '</div></div><div class="FAILUREspot LASTfail"><h5>Informações adicionais</h5><li><p class="item"><b>Caminho URL</b><span>' + pURL + '</span></p></li><li><p class="item"><b>ID do Post</b><span>' + pID + '</span></p></li><li><p class="item"><b>Título</b><span>' + pTITLE + '</span></p></li><li><p class="item"><b>Data</b><span>' +`${day} de ${month} de ${year}`+ '</span></p></li></div></ul><a class="HOMEurl" href="#">Página inicial</a></div>';

if(TYPEpage.includes('free')){
if((xa == true) && (xb == true) && (xc == true) && (xe == true) && (ITEMupdate > -1 ? false : true == true) && (ITEMlayout > -1 ? false : true == true)){
	summary = '<div class="POSTcontent"><div class="POSTleft"><div class="LEFTinst"><div class="POSTdoor"><img src="'+img[0].src+'"></div><div class="TOOLSpost"><div class="ACTIONpost">' +SHAREpage+ '<div class="LIVEspot"><a class="btn LIVEtemplate" href="' +LIVEtemplate+ '" target="_blank"><div><i class="SEEit"></i><span>Visualizar tema</span></div></a></div></div></div><div class="DESCpost"><h3>' +pTITLE+ '<i class="CROSSicon" feedback=""></i></h3><div class="TYPEfile"><li>Tipo de arquivo<span>ZIP</span></li><li>Layout<span>' +ITEMlayout+ '</span></li><li>Última atualização<span>' +ITEMupdate+ '</span></li></div><p>' +DESCpost+ '</p><div class="FREEdownload"><li><a class="URLfree" href="' +URLfree+ '"><div class="btn-download-left"></div><div class="btn-download-right"><span class="btn-download-right-main">Baixar Grátis</span><span class="btn-download-right-secondary">Download seguro</span></div></a></li><li class="SECURITYitem">Verificado com <b>Antivírus</b></li></div></div><div class="INFORMATIONpage">' +FEATURESthis+CHANGElog+ '</div></div></div><div class="POSTright"><div class="STATICbox"><div class="fb-page" data-href="https://www.facebook.com/bracaelcom" data-tabs="timeline" data-width="" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/bracaelcom" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/bracaelcom">Bracael</a></blockquote></div></div></div></div>';
	div.innerHTML = summary;}
	else{
	div.innerHTML = ERRORpost;}


console.log('post type grátis');
}
else if(TYPEpage.includes('excl')){
if((xa == true) && (xb == true)){
	summary = '<div class="POSTcontent"><div class="POSTleft"><div class="LEFTinst"><div class="POSTdoor"><img src="'+img[0].src+'"></div><div class="TOOLSpost"><div class="ACTIONpost">' +SHAREpage+ '<div class="LIVEspot"><a class="btn LIVEtemplate" href="' +LIVEtemplate+ '" target="_blank"><div><i class="SEEit"></i><span>Visualizar tema</span></div></a></div></div></div><div class="DESCpost"><h3>' +pTITLE+ '</h3><p>' +DESCpost+ '</p></div><div class="INFORMATIONpage">' +FEATURESthis+CHANGElog+ '</div></div></div><div class="POSTright"><div class="STATICbox"><div class="fb-page" data-href="https://www.facebook.com/bracaelcom" data-tabs="timeline" data-width="" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/bracaelcom" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/bracaelcom">Bracael</a></blockquote></div></div></div></div>';
	div.innerHTML = summary;}
	else{
	div.innerHTML = ERRORpost;}

console.log('post type exclusivo');
}
else{
if((xa == true) && (xb == true) && (xc == true) && (xd == true) && (xe == true) && (ITEMupdate > -1 ? false : true == true) && (ITEMlayout > -1 ? false : true == true)){
	summary = '<div class="POSTcontent"><div class="POSTleft"><div class="LEFTinst"><div class="POSTdoor"><img src="'+img[0].src+'"></div><div class="TOOLSpost"><div class="ACTIONpost">' +SHAREpage+ '<div class="LIVEspot"><a class="btn LIVEtemplate" href="' +LIVEtemplate+ '" target="_blank"><div><i class="SEEit"></i><span>Visualizar tema</span></div></a></div></div></div><div class="DESCpost"><h3>' +pTITLE+ '<i class="CROSSicon" feedback=""></i></h3><div class="TYPEfile"><li>Tipo de arquivo<span>ZIP</span></li><li>Layout<span>' +ITEMlayout+ '</span></li><li>Última atualização<span>' +ITEMupdate+ '</span></li></div><p>' +DESCpost+ '</p><div class="FREEdownload"><li><a class="URLfree" href="' +URLfree+ '"><div class="btn-download-left"></div><div class="btn-download-right"><span class="btn-download-right-main">Baixar Grátis</span><span class="btn-download-right-secondary">versão de avaliação</span></div></a></li><li class="SECURITYitem">Verificado com <b>Antivírus</b></li></div></div><div class="INFORMATIONpage">' +FEATURESthis+CHANGElog+ '</div></div></div><div class="POSTright"><div class="PURCHASEbox"><div class="PURCHASEinst"><h4><span class="LICENSEtxt">Premium</span><a target="_blank" href="#"><i class="CIRCLEhelp"></i></a></h4><div class="PRICEbar"><span class="PREMIUMval">' +pricePost+ '</span><span class="COINhere">BRL</span></div><div class="CHECKOUTwrap"><li>Atualização do template</li><li>Nenhum script criptografado</li><li>3 Meses de suporte</li><li>Para domínios ilimitados</li><li>Remover créditos</li><span class="BUTTONpost"><a href="' +CHECKOUTbtn+ '" rel="nofollow" target="_blank" class="BTNit CHECKout"><i class="CARTit"></i><span>Comprar</span></a></span></div></div></div><div class="STATICbox FACEsec"><div class="fb-page" data-href="https://www.facebook.com/bracaelcom" data-tabs="" data-width="" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="false"><blockquote cite="https://www.facebook.com/bracaelcom" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/bracaelcom">Bracael</a></blockquote></div></div></div></div>';
	div.innerHTML = summary;}
	else{
	div.innerHTML = ERRORpost;}

console.log('normal, comum, com valor');
}









if(document.body.contains(document.querySelector('.SOCIALurl'))){
for(var r = 0; r < 2; r++){
	var SOCIALurl = document.querySelectorAll('.SOCIALurl');
	SOCIALurl[r].addEventListener('click', function(){
		var DATAurl = this.getAttribute('data-url').replace(/(?: )/g, '%20');
		var DATAwid = this.getAttribute('data-width');
		var DATAhei = this.getAttribute('data-height');

		var WINDOWleft = (screen.width/2)-(DATAwid/2);
		var WINDOWtop = (screen.height/2)-(DATAhei/2);
		return window.open(DATAurl, '', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+DATAwid+', height='+DATAhei+', top='+WINDOWtop+', left='+WINDOWleft);
	});
}}

if(document.body.contains(document.querySelector('.changelog'))){
for(var i = 0, c = 101; i < DOCit.body.querySelectorAll('.changelog').length; i++, c++){
	var STRnum = String(c).split('');
	var CHANGElog = DOCit.body.querySelectorAll('.changelog');
	var SPLITattr = CHANGElog[i].getAttribute('data').split('-');

	if(CHANGElog[i].getAttribute('before') > -1 ? false : true == true){
	var SPLITfixe = CHANGElog[i].getAttribute('before');
	var SPLITfixe = '<b>Retificado</b>: '+SPLITfixe+ '\n';}
	else{var SPLITfixe = '';}

	if(CHANGElog[i].getAttribute('after') > -1 ? false : true == true){
	var SPLITadde = CHANGElog[i].getAttribute('after');
	var SPLITline = SPLITadde.replace(/(\+ )/g, '\n<b>Novo</b>: ');
	var SPLITline = SPLITline.replace(/(\ \n)/g, '\n');
	var SPLITadde = '<b>Novo</b>: ' +SPLITline+ '\n';
	}else{var SPLITadde = '';}

	var MONTHlog = SPLITattr[1];

	if(MONTHlog == 1){ var MONTHlog = "janeiro" }
	if(MONTHlog == 2){ var MONTHlog = "fevereiro" }
	if(MONTHlog == 3){ var MONTHlog = "março" }
	if(MONTHlog == 4){ var MONTHlog = "abril" }
	if(MONTHlog == 5){ var MONTHlog = "maio" }
	if(MONTHlog == 6){ var MONTHlog = "junho" }
	if(MONTHlog == 7){ var MONTHlog = "julho" }
	if(MONTHlog == 8){ var MONTHlog = "agosto" }
	if(MONTHlog == 9){ var MONTHlog = "setembro" }
	if(MONTHlog == 10){ var MONTHlog = "outubro" }
	if(MONTHlog == 11){ var MONTHlog = "novembro" }
	if(MONTHlog == 12){ var MONTHlog = "dezembro" }

	var nDATE = SPLITattr[0]+ ' de ' +MONTHlog+ ' de ' +SPLITattr[2];
	var REGlog = '- v' +STRnum[0]+'.'+STRnum[2]+'.'+STRnum[1]+ ' - ' +nDATE+ '\n' +SPLITfixe+SPLITadde+ '\n';

	div.querySelector('.tr_bq').insertAdjacentHTML('afterbegin', REGlog)
}}


}

//]]>
