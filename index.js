import{a as b,S as w,i as p}from"./assets/vendor-BwXjtuc1.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();async function h(s,o,i){return await b.get(`https://pixabay.com/api/?q=${s}&image_type=photo&orientation=horizontal&safesearch=true&key=47380819-2a2ad5e165b633e18b6fd0fd3`,{params:{page:o,per_page:i}})}function g(s){return s.map(({webformatURL:o,largeImageURL:i,tags:a,likes:e,views:t,comments:c,downloads:L})=>`<li class="list-item" >
  <a href="${i}" alt="${a}" title=""/>
    <img src="${o}" alt="${a}" class="img-item">
  <div class="list-container">
  <p class="item"><span class="item-text">Likes</span> <span>${e}</span></p>
  <p class="item"><span class="item-text">Wiews</span> <span>${t}</span></p>
  <p class="item"><span class="item-text">Comments</span> <span>${c}</span></p>
  <p class="item"><span class="item-text">Downlods</span> <span>${L}</span></p>
  </div></a>
</li>`).join("")}const y=new w(".list-js a",{captionsData:"alt",captionDelay:250,captionClass:"imageTitle"}),P=document.querySelector(".form-js"),d=document.querySelector(".list-js"),u=document.querySelector(".loader"),r=document.querySelector(".js-load-btn");P.addEventListener("submit",$);r.addEventListener("click",v);let n=1,l=1,m;const f=15;function $(s){s.preventDefault();const{picture:o}=s.target.elements;if(m=o.value.trim(),d.innerHTML="",!m||m===" "){p.show({title:":(",message:"Please add request!",position:"center",color:"red"}),d.innerHTML=":(";return}n=1,u.classList.remove("hidden"),r.classList.replace("more-btn","hidden"),h(m,n,f).then(({data:{hits:i,totalHits:a}})=>{l=Math.ceil(a/f),console.log(l),i.length?(d.innerHTML=g(i),y.refresh(),n>=l?r.classList.replace("more-btn","hidden"):r.classList.replace("hidden","more-btn")):(p.show({title:"X",message:"Sorry, there are no images matching your search query. Please try again!",position:"center",color:"red"}),d.innerHTML="<h1>Ooops... 👻</h1>")}).catch(i=>{console.log(i.message),p.show({title:"X",message:`${i.message}`,position:"center",color:"red"})}).finally(()=>{o.value="",u.classList.add("hidden")})}async function v(){n+=1,r.disabled=!0,u.classList.add("hidden");try{const{data:{hits:s,totalHits:o}}=await h(m,n,f);d.insertAdjacentHTML("beforeend",g(s)),l=Math.ceil(o/f),console.log(l),console.log(n),n===l&&(console.log(n),r.classList.replace("more-btn","hidden"),p.show({title:"X",message:"Sorry, there are no images matching your search query. Please try again!",position:"center",color:"red"}));const a=document.querySelector(".list-item").getBoundingClientRect().height;window.scrollBy({left:0,top:a*2,behavior:"smooth"}),y.refresh()}catch(s){console.log(s.message),p.show({title:"X",message:`${s.message}`,position:"center",color:"red"})}finally{r.disabled=!1,u.classList.add("hidden")}}
//# sourceMappingURL=index.js.map
