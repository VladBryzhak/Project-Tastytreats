import{a as p,l as v,s as i,r as g}from"./mobile-menu-b0792a06.js";const y="https://tasty-treats-backend.p.goit.global/api";async function m(a){const e="/recipes";try{return(await p(`${y}${e}/${a}`)).data}catch{throw new Error(Notiflix.Notify.failure("Failed to fetch categories"))}}const c={favRecipesGallery:document.querySelector(".fav-recipes-list"),emptyPageSection:document.querySelector(".empty-section-wrapper"),favContainer:document.querySelector(".fav-container"),buttonList:document.querySelector(".fav-categories-list")},d=v("favRecipes"),l="favRecipes";let f="";c.buttonList.addEventListener("click",L);function L(a){const e=a.target.closest(".fav-category");if(e&&e.dataset.category){const t=e.dataset.category,r=d.filter(({category:s})=>s===t);u(r)}else if(e&&e.dataset.value==="all"){const t=v("favRecipes");u(t)}f.classList.remove("active"),e.classList.add("active"),f=e}b();function b(){const a=document.querySelector("[data-value=all]");a.classList.add("active"),f=a,u(d),R(d)}c.favRecipesGallery.addEventListener("click",h);function h(a){if(a.target.closest(".heart")){let e=a.target.closest(".card-item");const t=e.dataset.id,r=e.dataset.category,s=v("favRecipes");if(!e.classList.contains("active")){e.classList.add("active");const o=A(t,r);if(s)s.push(o),i(l,s);else{const n=[];n.push(o),i(l,n)}return}if(e.classList.contains("active")){e.classList.remove("active");const o=s.filter(({id:n})=>t!==n);i(l,o);return}}}function A(a,e){return{id:a,category:e}}function R(a){a.length>0&&(c.buttonList.classList.remove("hide"),a.map(({category:t})=>t).filter((t,r,s)=>s.indexOf(t)===r).sort((t,r)=>t.localeCompare(r)).map(t=>{c.buttonList.insertAdjacentHTML("beforeend",`<li class="fav-category" data-category=${t}>
              <button class="fav-category-btn" type="button">${t}</button>
        </li>`)}))}function u(a){a.length>0&&(c.emptyPageSection.classList.add("hide"),c.favRecipesGallery.classList.remove("hide"),c.favRecipesGallery.innerHTML="",a.map(({id:e})=>{m(e).then(t=>{const r=[t];c.favRecipesGallery.insertAdjacentHTML("beforeend",g(r))})}))}
