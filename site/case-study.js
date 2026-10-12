'use strict';
let lang='en';try{lang=localStorage.getItem('portfolio-language')==='id'?'id':'en';}catch{}
function translate(){document.documentElement.lang=lang;document.querySelectorAll('[data-en][data-id]').forEach(el=>el.textContent=el.dataset[lang]);document.querySelector('#case-language').textContent=lang==='en'?'EN / ID':'ID / EN';}
document.querySelector('#case-language').addEventListener('click',()=>{lang=lang==='en'?'id':'en';try{localStorage.setItem('portfolio-language',lang);}catch{}translate();});translate();
