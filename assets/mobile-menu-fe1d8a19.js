(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();const b=(r,e)=>{try{const o=JSON.stringify(e);localStorage.setItem(r,o)}catch(o){console.error("Set state error: ",o.message)}},m=r=>{try{const e=localStorage.getItem(r);return e===null?void 0:JSON.parse(e)}catch(e){console.error("Get state error: ",e.message)}},f="/Project-Tastytreats/assets/icons-ab0fd9ed.svg#heart",d="/Project-Tastytreats/assets/icons-ab0fd9ed.svg#star",u=m("favRecipes");function L(r){return r.map(({_id:o,preview:c,title:t,description:s,rating:a,category:g})=>{let l="";return u&&u.filter(({id:h})=>h===o).length>0&&(l="active"),` 
    <div  class="card-item   ${l}" data-id="${o}"  data-category="${g}" style="background: linear-gradient(1deg, rgba(5, 5, 5, 0.60) 4.82%, rgba(5, 5, 5, 0.00) 108.72%), url(${c}), lightgray -36.5px 0px / 129.2% 112.544% no-repeat; background-size: cover">
      <button class="heart" type="button">
        <svg class="icon-heart" width="22" height="22">
        <use href=${f}></use></svg>
      </button>
    
      <div class="card-descr">
        <h3 class="recipe-title ">${t}</h3>
        <p class="recipe-descr ">${s}</p>
        <div class="secondary-desc">
          <div class="rating-container">
            <p class="recipe-rating ">${a}</p>
            <ul class="icon-list">
              ${p(a)}
            </ul>
          </div>
         <button class="see-recipe modal-open-js " data-id="${o}"   type="button" >See recipe</button>
        </div>
      </div>  
    </div>`}).join("")}function p(r){let e=Math.round(r),o=[];for(let c=0;c<5;c+=1)e>=1?(o.push(`
        <li class="icon-rating checked"><svg class="icon-star" width="15" height="15"><use href=${d}></use></svg></li>
        `),e-=1):o.push(`
        <li class="icon-rating unchecked"><svg class="icon-star" width="16" height="16"><use href=${d}></use></svg></li>
        `);return o.join("")}const i=document.querySelectorAll(".theme-toggle"),n="dark-theme",v=localStorage.getItem("theme");v===n&&(document.body.classList.add(n),i.forEach(r=>r.checked=!0));i.forEach(r=>r.addEventListener("change",y));function y(){const r=this.checked;i.forEach(e=>{e.checked=r}),r?(document.body.classList.add(n),localStorage.setItem("theme",n)):(document.body.classList.remove(n),localStorage.removeItem("theme"))}(()=>{const r=document.querySelector(".js-menu-container"),e=document.querySelector(".js-open-menu"),o=document.querySelectorAll(".js-close-menu"),c=document.body,t=()=>{const s=e.getAttribute("aria-expanded")==="true"||!1;e.setAttribute("aria-expanded",!s),r.classList.toggle("is-open"),e.classList.toggle("hidden")};e.addEventListener("click",t),o.forEach(s=>s.addEventListener("click",t)),window.matchMedia("(min-width: 768px)").addEventListener("change",s=>{s.matches&&(r.classList.remove("is-open"),e.setAttribute("aria-expanded",!1),c.style.overflow="",o.classList.toggle("hidden"),e.classList.toggle("hidden"))})})();export{d as a,m as l,L as r,b as s};
//# sourceMappingURL=mobile-menu-fe1d8a19.js.map
