(function(){
var b=document.querySelector('.burger'),n=document.getElementById('nav');
if(b&&n)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'Close menu':'Open menu');});
function $(i){return document.getElementById(i);}
var f=$('cform');
if(f)f.addEventListener('submit',function(e){e.preventDefault();var fm=$('fm');
 if($('website').value)return;
 if(!f.checkValidity()){fm.hidden=false;fm.textContent='Please add your name, a valid email address and a message, and tick the agreement box.';return;}
 var body='Name: '+$('name').value+'\nEmail: '+$('email').value+'\nTopic: '+$('topic').value+'\n\n'+$('message').value;
 location.href='mailto:'+f.getAttribute('data-to')+'?subject='+encodeURIComponent(f.getAttribute('data-brand')+': '+$('topic').value)+'&body='+encodeURIComponent(body);
 fm.hidden=false;fm.textContent='Your email app should open with the message ready to send. If nothing happens, write to us directly at '+f.getAttribute('data-to')+'.';});
var c=$('cookie'),k=null;try{k=localStorage.getItem('ck_'+location.hostname);}catch(e){}
if(c&&!k)c.classList.add('show');
if(c)c.querySelectorAll('button').forEach(function(bt){bt.addEventListener('click',function(){try{localStorage.setItem('ck_'+location.hostname,bt.getAttribute('data-cookie'));}catch(e){}c.classList.remove('show');});});
var y=$('year');if(y)y.textContent=new Date().getFullYear();
})();
(function(){function $(i){return document.getElementById(i);}
var D={potato:[220,'40&ndash;50 min','Cut into chunks, toss in hot oil and turn once when the underside is golden.'],root:[200,'30&ndash;40 min','Carrots and parsnips caramelise beautifully; cut into even batons.'],brassica:[220,'18&ndash;25 min','Very hot and quick. Let the edges char a little.'],squash:[200,'35&ndash;45 min','Halves or wedges, cut side down, until a knife slides in easily.'],pepper:[210,'25&ndash;30 min','Wide strips and wedges, until soft with charred edges.'],chicken:[200,'about 1 h 20 min (1.5 kg)','Check 74&deg;C in the thickest part of the thigh, then rest 15&ndash;20 min.'],thighs:[200,'35&ndash;45 min','Skin side up for crisp skin; check 74&deg;C at the thickest point.'],fish:[200,'10&ndash;15 min','Fillets are done when they flake easily; thicker cuts take longer.']};
var rs=[].slice.call(document.querySelectorAll('input[name=ing]'));if(rs.length){var arc=$('ro-arc');function pol(a){var r=140,x=150+r*Math.cos(a),y=150+r*Math.sin(a);return x.toFixed(1)+' '+y.toFixed(1);}
 function draw(){var k='potato';rs.forEach(function(r){if(r.checked)k=r.value;});var d=D[k],t=d[0],f=Math.round((t*9/5+32)/5)*5,frac=(t-100)/150,a0=Math.PI*0.75,a1=a0+frac*Math.PI*1.5;
  arc.setAttribute('d','M'+pol(a0)+' A140 140 0 '+(a1-a0>Math.PI?1:0)+' 1 '+pol(a1));$('ro-tc').innerHTML=t+'&deg;C';$('ro-tf').innerHTML=f+'&deg;F &middot; fan '+(t-20)+'&deg;C';$('ro-tm').innerHTML=d[1];$('ro-tip').innerHTML=d[2];}
 rs.forEach(function(r){r.addEventListener('change',draw);});draw();}
var br=$('ba-r');if(br){var top=$('ba-top');function ba(){top.style.clipPath='inset(0 '+(100-br.value)+'% 0 0)';}br.addEventListener('input',ba);ba();}
var ps=$('pc-s');if(ps){var pc=$('pc-c'),g=$('pc-g');function pan(){var cap=parseInt(ps.value,10)/5,c=Math.max(1,parseFloat(pc.value)||1),cells=Math.round(c/cap*60),h='';for(var i=0;i<100;i++)h+='<i'+(i<Math.min(cells,100)?(i>=70?' class="x"':' class="on"'):'')+'></i>';g.innerHTML=h;
  var trays=Math.ceil(c/(cap*0.7*10/6)),r;if(cells<=70){r='<strong>One tray is fine</strong><p>About '+Math.round(cells/70*100)+'% of the comfortable space. Everything can roast with room to breathe.</p>';}else{r='<strong>Use '+Math.max(2,trays)+' trays</strong><p>That much will crowd one tray and steam. Split it and swap the trays halfway through.</p>';}
  $('pc-o').innerHTML=r;}ps.addEventListener('change',pan);pc.addEventListener('input',pan);pan();}
})();
