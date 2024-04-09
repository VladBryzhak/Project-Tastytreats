import{r as v,l as A,s as N,a as $}from"./assets/mobile-menu-fe1d8a19.js";import{S as de,P as ue,a as f,N as i,b as pe,l as ge,n as z,c as k,Y as me}from"./assets/vendor-e04dd8bf.js";new de(".swiper",{allowSlideNext:!0,modules:[ue],pagination:{el:".swiper-pagination",clickable:!0,type:"bullets"},spaceBetween:20,autoplay:{delay:3e3},slidesPerView:"auto",slidesPerGroup:1,speed:800,loop:!0,mousewheel:{invert:!0}});const fe="https://tasty-treats-backend.p.goit.global/api";async function ye(){const e="/categories";try{return(await f.get(`${fe}${e}`)).data}catch{throw new Error(Notiflix.Notify.failure("Failed to fetch categories"))}}const he=document.querySelector(".categories-wrapper");ye().then(e=>{e.map(({name:t,_id:n}=el)=>{he.insertAdjacentHTML("beforeend",`
    <li class="category-item">
      <a href="#" data-id="${n}" data-name="${t}" class="category-link">${t}</a>
    </li>
    `)})});const Q="https://tasty-treats-backend.p.goit.global/api",X="/recipes";async function V(){try{return(await f.get(`${Q}${X}`)).data}catch{throw new Error(i.Notify.failure(""))}}async function ve(e){try{return(await f.get(`${Q}${X}/${e}`)).data}catch{throw new Error(i.Notify.failure(`${elements.onError.textContent}`))}}const be="https://tasty-treats-backend.p.goit.global/api";async function we(){const e="/areas";try{return(await f.get(`${be}${e}`)).data}catch{throw new Error(i.Notify.failure("Failed to fetch pecipes"))}}const Se="https://tasty-treats-backend.p.goit.global/api";async function Le(){const e="/ingredients";try{return(await f.get(`${Se}${e}`)).data}catch{throw new Error(i.Notify.failure("Failed to fetch pecipes"))}}const ee="https://tasty-treats-backend.p.goit.global/api";async function $e(e){const t="/recipes",n=new URLSearchParams({time:e});try{return(await f.get(`${ee}${t}?${n}`)).data}catch{throw new Error(i.Notify.failure("Failed to fetch pecipes"))}}async function Ce(e){const t="/recipes",n=new URLSearchParams({area:e});try{return(await f.get(`${ee}${t}?${n}`)).data}catch{throw new Error(i.Notify.failure("Failed to fetch pecipes"))}}const te="https://tasty-treats-backend.p.goit.global/api";async function W(e,t,n){const s="/recipes";try{return(await f.get(`${te}${s}?category=${e}&page=${t}&limit=${n}`)).data}catch{throw new Error(Notiflix.Notify.failure("Failed to fetch categories"))}}async function se(e,t){const n="/recipes";try{return(await f.get(`${te}${n}?page=${e}&limit=${t}`)).data}catch{throw new Error(Notiflix.Notify.failure("Failed to fetch categories"))}}const Ee=document.querySelector(".tui-pagination");document.querySelector(".categories-wrapper");const S=document.querySelector(".gallery-recipes"),xe=document.querySelector("#tui-pagination-container");let M;const Z={totalItems:100,itemsPerPage:9,visiblePages:3,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}};window.matchMedia("(max-width: 767px)").matches&&(Z.visiblePages=2,M="6");window.matchMedia("(min-width: 768px) and (max-width: 1200px)").matches&&(Z.visiblePages=3,M="8");window.matchMedia("(min-width: 1200px)").matches&&(M="9");new pe(Ee,Z);xe.addEventListener("click",qe);function qe(e){e.preventDefault();const t=document.querySelector(".active");if(e.target.tagName==="A"){if(e.preventDefault(),e.target.textContent,e.target.textContent=="first"&&B(t.textContent,"1"),e.target.textContent=="prev"){const s=document.querySelector(".tui-is-selected").textContent;B(t.textContent,s)}if(e.target.textContent=="next"){const s=document.querySelector(".tui-is-selected").textContent;B(t.textContent,s)}if(e.target.textContent=="last"){const s=document.querySelector(".tui-is-selected").textContent;B(t.textContent,s)}if(e.target.textContent=="...")return;B(t.textContent,e.target.textContent)}}function B(e,t){if(e!=="All categories"){for(;S.firstChild;)S.removeChild(S.firstChild);W(e,t,M).then(n=>{S.insertAdjacentHTML("beforeend",v(n.results))})}else{for(;S.firstChild;)S.removeChild(S.firstChild);se(t,M).then(n=>{S.insertAdjacentHTML("beforeend",v(n.results))})}}function Ae(){document.querySelectorAll(".tui-page-btn").forEach(function(t){t.textContent=="1"?t.classList.add("tui-is-selected"):t.classList.contains("tui-is-selected")&&t.classList.remove("tui-is-selected")})}const h={allCategoriesBtn:document.querySelector(".categories-btn"),categoriesContainer:document.querySelector(".categories-wrapper"),recipesContainer:document.querySelector(".gallery-recipes")},p={category:"Beef",page:1,limit:9,activeCategory:""};G();h.allCategoriesBtn.addEventListener("click",Ne);function Ne(){G()}h.categoriesContainer.addEventListener("click",ke);function ke(e){e.preventDefault(),e.target.closest(".category-link")&&(h.allCategoriesBtn.classList.contains("active")&&h.allCategoriesBtn.classList.remove("active"),p.activeCategory&&p.activeCategory.classList.remove("active"),p.activeCategory=e.target.closest(".category-link"),p.activeCategory.classList.add("active"),p.category=e.target.closest(".category-link").dataset.name,ne(),W(p.category,p.page,p.limit).then(t=>{h.recipesContainer.innerHTML="",h.recipesContainer.insertAdjacentHTML("beforeend",v(t.results))})),Ae()}function G(){const e=h.allCategoriesBtn;e.classList.contains("active")||e.classList.add("active"),p.activeCategory&&p.activeCategory.classList.remove("active"),ne(),se(p.page,p.limit).then(t=>{h.recipesContainer.innerHTML="",h.recipesContainer.insertAdjacentHTML("beforeend",v(t.results))})}function ne(){const e=Math.max(document.documentElement.clientWidth||0,window.innerWidth||0);e>=1200?p.limit=9:e<1200&&e>=768?p.limit=8:p.limit=6}function Re(){return{category:p.category,page:p.page,limit:p.limit,container:h.recipesContainer}}const a={form:document.querySelector(".search-form"),overlay:document.querySelector(".search-overlay"),searchInput:document.querySelector(".input-form"),btnCloseSearch:document.querySelector(".btn-close-search"),inputTime:document.querySelector(".input-time"),btnSelectTime:document.querySelector(".btn-select-time"),selectTime:document.querySelector(".select-time"),inputArea:document.querySelector(".input-area"),btnSelectArea:document.querySelector(".btn-select-area"),selectArea:document.querySelector(".select-area"),inputIngredients:document.querySelector(".input-ingredients"),btnSelectIngredients:document.querySelector(".btn-select-ingredients"),selectIngredients:document.querySelector(".select-ingredients"),btnReset:document.querySelector(".btn-reset-filter"),galleryRecipes:document.querySelector(".gallery-recipes"),btnHeart:document.querySelector(".heart")};V().then(e=>{a.galleryRecipes.insertAdjacentHTML("beforeend",v(e.results))}).catch(e=>{i.Notify.failure("Sorry, no pecipes were found for your request. Please try again.")});we().then(e=>{let t=e.map(({id:n,name:s})=>`<li class="option-area" value="${n}">${s}</li>`).join("");a.selectArea.insertAdjacentHTML("beforeend",t)}).catch(e=>{i.Notify.failure("Sorry, no areas were found for your request. Please try again.")});Le().then(e=>{let t=e.map(({_id:n,name:s})=>`<li class="option-ingredient" value="${n}">${s}</li>`).join("");a.selectIngredients.insertAdjacentHTML("beforeend",t)}).catch(e=>{i.Notify.failure("Sorry, no ingredients were found for your request. Please try again.")});a.searchInput.addEventListener("change",ge.debounce(Te,300));function Te(){const e=a.searchInput.value.trim().toLowerCase();a.btnCloseSearch.style.display="flex",V().then(t=>{const s=t.results.filter(r=>r.tags.map(d=>d.toLowerCase()).includes(e));e===""&&s.length===0&&i.Notify.info("No recipes found for the specified tag."),a.searchInput.value=e,a.galleryRecipes.innerHTML=v(s)}).catch(t=>{i.Notify.failure("Sorry, no recipes were found for your request. Please try again.")})}a.btnCloseSearch.addEventListener("click",()=>{a.searchInput.value="",a.btnCloseSearch.style.display="none"});a.btnSelectTime.addEventListener("click",()=>a.selectTime.style.display="flex");a.selectTime.addEventListener("mouseleave",()=>a.selectTime.style.display="none");a.selectTime.addEventListener("click",Pe);let F;function Pe(e){if(!e.target.classList.contains("active")){F&&F.classList.remove("active"),e.target.classList.add("active"),F=e.target,a.inputTime.value=e.target.textContent;const t=Number.parseInt(a.inputTime.value);a.selectTime.style.display="none",$e(t).then(n=>{a.galleryRecipes.innerHTML="",a.galleryRecipes.insertAdjacentHTML("beforeend",v(n.results))}).catch(n=>{i.Notify.failure("Sorry, no recipes were found for your request. Please try again.")})}}a.btnSelectArea.addEventListener("click",()=>a.selectArea.style.display="flex");a.selectArea.addEventListener("mouseleave",()=>a.selectArea.style.display="none");a.selectArea.addEventListener("click",Be);let O;function Be(e){if(!e.target.classList.contains("active")){O&&O.classList.remove("active"),e.target.classList.add("active"),O=e.target,a.inputArea.value=e.target.textContent;const t=a.inputArea.value;a.selectArea.style.display="none",Ce(t).then(n=>{n.results.length!==0&&(a.galleryRecipes.innerHTML="",a.galleryRecipes.insertAdjacentHTML("beforeend",v(n.results)))}).catch(n=>{i.Notify.failure("Sorry, no recipes were found for your request. Please try again.")})}}a.btnSelectIngredients.addEventListener("click",()=>a.selectIngredients.style.display="flex");a.selectIngredients.addEventListener("mouseleave",()=>a.selectIngredients.style.display="none");a.selectIngredients.addEventListener("click",je);let j;function je(e){if(!e.target.classList.contains("active")){j&&j.classList.remove("active"),e.target.classList.add("active"),j=e.target,a.inputIngredients.value=j.textContent;const t=j.getAttribute("value");a.selectIngredients.style.display="none",V().then(n=>{const r=n.results.filter(l=>l.ingredients.map(o=>o.id).includes(t));r.length===0&&i.Notify.info("No recipes found for the specified ingredient."),a.galleryRecipes.innerHTML=v(r)}).catch(n=>{i.Notify.failure("Sorry, no recipes were found for your request. Please try again.")})}}a.btnReset.addEventListener("click",()=>{if(a.form.reset(),document.querySelector(".categories-btn").classList.contains("active"))G();else{const{category:e,page:t,limit:n,container:s}=Re();W(e,t,n).then(r=>{s.innerHTML="",s.insertAdjacentHTML("beforeend",v(r.results))})}});const Me={recipesGallery:document.querySelector(".gallery-recipes")},_="favRecipes";Me.recipesGallery.addEventListener("click",Ie);function Ie(e){if(e.target.closest(".heart")){if(!A("login-info")){z.Notify.warning("Log In or Sign Up to add recipe to Favorites");return}let n=e.target.closest(".card-item");const s=n.dataset.id,r=n.dataset.category,l=A(_);if(!n.classList.contains("active")){n.classList.add("active");const d=ae(s,r);if(l)l.push(d),N(_,l);else{const o=[];o.push(d),N(_,o)}return}if(n.classList.contains("active")){n.classList.remove("active");const d=l.filter(({id:o})=>s!==o);N(_,d);return}}}function ae(e,t){return{id:e,category:t}}const I="/Project-Tastytreats/assets/icons-ab0fd9ed.svg#close-icon";function De(e){const t=`<form class="modal-rating-form" action="">
  <svg class="modal-rating-close-btn" width="20" height="20">
  <use href=${I}></use>
</svg>
   <div class="modal-rating-display"> <h2 class = "modal-rating-head">Rating</h2>
   <div class="modal-rating-container">
    <span class="modal-rating-counter">0.0</span>
    <div class="modal-rating-stars-container">
      <input
        class="modal-rating-input"
        type="radio"
        name="rating-star"
        value="1"
      />
      <svg class="modal-rating-star" width="24" height="24">
        <use href=${$}></use>
      </svg>
  
      <input
        class="modal-rating-input"
        type="radio"
        name="rating-star"
        value="2"
      />
      <svg class="modal-rating-star" width="24" height="24">
        <use href=${$}></use>
      </svg>
  
      <input
        class="modal-rating-input"
        type="radio"
        name="rating-star"
        value="3"
      />
      <svg class="modal-rating-star" width="24" height="24">
        <use href=${$}></use>
      </svg>
  
      <input
        class="modal-rating-input"
        type="radio"
        name="rating-star"
        value="4"
      />
      <svg class="modal-rating-star" width="24" height="24">
        <use href=${$}></use>
      </svg>
  
      <input
        class="modal-rating-input"
        type="radio"
        name="rating-star"
        value="5"
      />
      <svg class="modal-rating-star" width="24" height="24">
        <use href=${$}></use>
      </svg>
      </div>
    </div>
    <div class="modal-rating-email-container">
     <input class="modal-rating-email-in-input" type="email" placeholder="Enter email"/> 
    <button class="modal-rating-btn" type="submit">Send</button>
    </div>
    </div>
  </form>`,n=k.create(t);n.show();const s={counter:document.querySelector(".modal-rating-counter"),form:document.querySelector(".modal-rating-form"),container:document.querySelector(".modal-rating-container"),input:document.querySelectorAll("input[name=rating-star]"),star:document.querySelectorAll(".modal-rating-star"),mail:document.querySelector(".modal-rating-email-in-input"),btn:document.querySelector(".modal-rating-btn"),card:document.querySelector(".card-item"),closeBtn:document.querySelector(".modal-rating-close-btn")};s.container.addEventListener("click",l),s.mail.addEventListener("input",u),s.form.addEventListener("submit",m),s.closeBtn.addEventListener("click",r);function r(){n.close()}function l(c){if(c.preventDefault(),c.currentTarget===c.target)return;d();const y=[...s.input],C=[...s.star];y.forEach((R,w)=>{if(R===c.target){for(let L=0;L<=w;L++)C[L].classList.add("star-active");return s.counter.textContent=`${w+1}.0`}})}function d(){s.star.forEach(c=>{c.classList.remove("star-active"),s.counter.textContent="0.0"})}function o(c,y){const C={id:c,body:{rate:Number.parseFloat(s.counter.textContent),email:y}},R={method:"PATCH",body:JSON.stringify(C.body),headers:{"Content-Type":"application/json; charset=UTF-8"}};return fetch(`https://tasty-treats-backend.p.goit.global/api/recipes/${C.id}/rating`,R).then(w=>w.json())}function u(c){s.mail.value=c.target.value.trim()}function m(c){if(c.preventDefault(),s.mail.value===""||s.counter.textContent==="0.0"){i.Notify.warning("All fields required");return}o(e,s.mail.value).then(y=>{i.Notify.success("Your rate was add!"),n.close()}).catch(y=>i.Notify.failure("Something goes wrong!"))}}const ie={item1:document.querySelector(".gallery-recipes"),item2:document.querySelector(".popular-list")};ie.item1.addEventListener("click",re);ie.item2.addEventListener("click",re);function re(e){e.preventDefault();const t=e.target.closest(".modal-open-js");if(!t)return;const n=t.dataset.id;ve(n).then(s=>{const l=s.youtube.split("=")[1],d=A("favRecipes");let o=[];d&&(o=d.find(({id:g})=>g===s._id));const u=k.create(`
    <div class="modal-frame " >
       
        <button class="modal-close-button">
          <svg class="modal-close-icon" width="20" height="20">
          <use href=${I}></use>
        </svg>
        </button>

<div class="swap-container-top">
       <div class="iframeContainer"></div>
<div>
        <h2 class="dish-title">${s.title}</h2></div>
</div>
        <div class="swap-container">

        <div class="rait-container">

        <p class="recipe-rating recipe-box-text">${s.rating}</p>
        <ul class="icon-list-modal">
           ${He(s.rating)}
        </ul>
        
        <p class="preparing-time recipe-box-text">${s.time} min</p>
        
      </div>
      
      <div class="ingredients-container">
            <ul>
              ${s.ingredients.map(g=>`
                <li class="ingredients-container-box">
                  <span class="ingredient-name">${g.name}</span>
                  <span class="ingredient-measure">${g.measure}</span>
                </li>
              `).join("")}
            </ul>
          </div>
          <div class="tag-container"></div>
          </div>
          <p class="dish-instructions">${s.instructions}</p>
          <div class="btn-container">
            <button type="button" data-id="${s._id}" data-category="${s.category}" class="btn-modal-general btn-modal-first"></button>

            

            <button type="button" data-id="${s._id}" class="btn-modal-general btn-modal-secont give-rating-btn">Give a rating</button>

            </div>
             </div> `),m=u.element().querySelector(".btn-modal-first");m.textContent="Add to favorite",o&&(m.classList.add("active"),m.textContent="Remove from favorite");const c=u.element().querySelector(".tag-container");s.tags&&s.tags.length>0&&s.tags.forEach(g=>{if(g.trim()!==""){const x=document.createElement("span");x.textContent=`#${g}`,x.classList.add("tag"),c.appendChild(x)}});const y=u.element().querySelector(".iframeContainer");if(s.youtube!=="")me(y,{videoId:l,playerVars:{autoplay:0}});else{const g=document.createElement("img");g.src=s.thumb,y.appendChild(g)}u.element().querySelector(".modal-close-button").addEventListener("click",()=>{u.close()}),document.addEventListener("keydown",g=>{g.key==="Escape"&&u.close()}),u.show(),document.querySelector(".give-rating-btn").addEventListener("click",w);function w(g){const x=s._id;De(x)}const L={recipeDetailModal:document.querySelector(".modal-frame")},E="favRecipes";L.recipeDetailModal.addEventListener("click",T);function T(g){if(g.target.closest(".btn-modal-first")){if(!A("login-info")){z.Notify.warning("Log In or Sign Up to add recipe to Favorites");return}let q=g.target.closest(".btn-modal-first");const J=q.dataset.id,le=q.dataset.category,D=A(E);if(!q.classList.contains("active")){q.classList.add("active");const H=ae(J,le);if(m.textContent="Remove from favorite",D)D.push(H),N(E,D);else{const P=[];P.push(H),N(E,P)}return}if(q.classList.contains("active")){q.classList.remove("active"),m.textContent="Add to favorite";const H=D.filter(({id:P})=>J!==P);N(E,H);return}}}})}function He(e){let t=Math.round(e),n=[];for(let s=0;s<5;s+=1)t>=1?(n.push(`
        <li class="icon-rating checked modal-icon"><svg class="icon-star" width="16" height="16"><use href=${$}></use></svg></li>
        `),t-=1):n.push(`
        <li class="icon-rating unchecked modal-icon"><svg class="icon-star" width="16" height="16"><use href=${$}></use></svg></li>
        `);return n.join("")}const _e="https://tasty-treats-backend.p.goit.global/api/recipes/popular";async function Fe(){try{return(await f.get(`${_e}`)).data}catch{throw new Error(Notiflix.Notify.failure(""))}}const Oe=document.querySelector(".popular-list");function K(e){const t=e.map(({title:n,description:s,preview:r,_id:l})=>`
    <li class="list-item modal-open-js modal-open" data-id="${l}">
        <img class="item-img modal-open" src="${r}" alt="${n}" width="64" height="64">
        <div class="text-wrap">
        <h3 class="item-title modal-open">${n}</h3>
        <p class="item-text modal-open">${s}</p>
        </div>
    </li>`).join("");Oe.innerHTML=t}function oe(){if(window.innerWidth>=768)Fe().then(t=>{localStorage.setItem("popularRecipes",JSON.stringify(t)),K(t.slice(0,4))});else{const t=JSON.parse(localStorage.getItem("popularRecipes"));t&&K(t.slice(0,2))}}oe();window.addEventListener("resize",oe);const Y="/Project-Tastytreats/assets/icons-ab0fd9ed.svg#hat-icon",Ue=document.querySelector(".registration-btn"),ze=document.querySelector(".registration-btn"),Ve=/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}/;Ue.addEventListener("click",e=>{const t=`
    <div class="modal">
    <div class="registr-wrapper">
    <svg class="registr-icon" >
      <use href=${Y} ></use>
    </svg>
     </div>
    <h4 class="reg-title">Registration</h4>
      <form class="registration-form">
        <label for="text" class="label">Email
          <input type="email" class="input sign-name" email="sign up" />
        </label>
        <label for="password" class="label">Password
          <input type="password" class="input sign-password" name="password" />
          <p class="show-password">Show/Hide password</p>
        </label>
        <button type="submit" class="sign-button">Sign up</button>
      </form>
      <button class="log-account">Already have an account</button>
      <button class="reg-close-btn">
        <svg class="reg-close-icon">
          <use href=${I}></use>
        </svg>
      </button>
    </div>
  `,n=k.create(t);n.show(),document.querySelector(".reg-close-icon").addEventListener("click",()=>{n.close()});const r=document.querySelector(".sign-password");document.querySelector(".show-password").addEventListener("click",()=>{r.type==="password"?r.type="text":r.type="password"}),document.querySelector(".registration-form").addEventListener("submit",m=>{m.preventDefault();const c=document.querySelector(".sign-name");if(c.value===""&&r.value===""){i.Notify.warning("Please insert a valid email address");return}if(!Ve.test(c.value)){i.Notify.warning("Please insert a valid email address");return}if(r.value.length<6){i.Notify.warning("Password should have at least 6 symbols");return}const y={username:c.value,password:r.value};localStorage.setItem("login-info",JSON.stringify(y)),i.Notify.success("Registration successful"),n.close(),u()}),document.querySelector(".log-account").addEventListener("click",()=>{n.close(),u()});function u(){const m=`
      <div class="modal">
       <div class="registr-wrapper">
    <svg class="registr-icon" >
      <use href=${Y} ></use>
    </svg>
     </div>
      <h4 class="reg-title">Login</h4>
        <form class="login-form">
          <label for="text" class="label">Email
            <input type="email" class="input login-name" name="login" />
          </label>
          <label for="password" class="label">Password
            <input type="password" class="input login-password" name="password" />
            <button type="button" class="show-password">Show/Hide password</button>
          </label>
          <button type="submit" class="login-button">Log In</button>
        </form>
        <button class="sign-account">Don't have an account</button>
        <button class="reg-close-btn">
        <svg class="reg-close-icon2">
          <use href=${I}></use>
        </svg>
      </button>
      </div>`,c=k.create(m);c.show(),document.querySelector(".login-form").addEventListener("submit",w=>{w.preventDefault();const L=document.querySelector(".login-name"),E=document.querySelector(".login-password"),T=JSON.parse(localStorage.getItem("login-info"));T&&T.username===L.value&&T.password===E.value?(i.Notify.success("Login successful"),c.close(),ze.classList.add("active-account")):i.Notify.failure("Login failed. Please check your credentials")}),document.querySelector(".sign-account").addEventListener("click",()=>{c.close(),n.show()}),document.querySelector(".reg-close-icon2").addEventListener("click",()=>{n.close(),c.close()})}});const We="https://tasty-treats-backend.p.goit.global/api/events";async function Ze(){try{return(await f.get(`${We}`)).data}catch(e){console.error(e)}}const Ge=document.querySelector(".swiper-wrapper");function Je(e){const t=e.map(({cook:{imgUrl:n,imgWebpUrl:s},topic:{name:r,area:l,previewUrl:d,previewWebpUrl:o,imgUrl:u,imgWebpUrl:m}})=>`
    <div class="event-description swiper-slide">
  <div class="event-item">
    <div class="chef">
      <picture>
        <source
       
          srcset="
           ${s}
          "
          type="image/webp"
        />
        <source
         
          srcset="
            ${n}
          "
          type="image/png"
        />
        <img class="chef-photo" src="${n}" alt="chef photo"
        width="200"
        height="280"
        loading="lazy"" />
      </picture>
    </div>
    <div class="event-detail">
    <picture>
        <source
          
          srcset="
           ${o}
          "
          type="image/webp"
        />
        <source
       
          srcset="
            ${d}
          "
          type="image/png"
        />
        <img class="event-photo" src="${d}" alt="event photo"  width="200"
        height="280"
        loading="lazy"" />
      </picture>
      <div class="event-text">
      <h2 class="event-name">${r}</h2>
      <p class="event-area">${l}</p>
      </div>
   
      
    </div>
    <div class="event-big-photo">
      <picture>
        <source
          
          srcset="
           ${m}
          "
          type="image/webp"
        />
        <source
       
          srcset="
            ${u}
          "
          type="image/png"
        />
        <img class="big-photo" src="${u}" alt="big event photo"  
        width="200"
        height="280"
        loading="lazy"" />
      </picture>
    </div>
  </div>
</div>
  `).join("");Ge.insertAdjacentHTML("beforeend",t)}async function Ke(){try{const e=await Ze();Je(e)}catch(e){console.error(e)}}Ke();const Ye=document.querySelector(".ord-btn"),Qe=document.querySelector(".order-btn"),Xe="https://tasty-treats-backend.p.goit.global/api/orders/add",et="/^[a-zA-Zа-яА-Я-і-І-ї-Ї]+$/",tt="/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/",st="/^d{10}$/";Ye.addEventListener("click",ce);Qe.addEventListener("click",ce);function ce(){const e=`
      <div class="modal">
      <h4 class="ord-title">Order now</h4>
        <form class="order-form">
          <label for="ord-name" class="label">Name
            <input required type="text" class="input" id="ord-name" name="ord-name" />
          </label>
          <label for="ord-tel" class="label">Phone number
            <input required type="tel" class="input" id="ord-tel" name="ord-tel" />
          </label>
          <label for="ord-email" class="label">Email
            <input required type="email" class="input" id="ord-email" name="ord-email" />
          </label>
          <label for="ord-comment" class="label">Comment
            <textarea id="ord-comment" class="comment" name="ord-comment"></textarea>
          </label>
          <button type="submit" class="send-button">Send</button>
        </form>
        <button class="ord-close-btn">
        <svg class="ord-close-icon">
          <use href=${I}></use>
        </svg>
      </button>
      </div>`,t=k.create(e);t.show(),document.querySelector(".order-form").addEventListener("submit",r=>{if(r.preventDefault(),d(),l())return;i.Notify.warning("Please fill out all required fields.");function l(){const o={name:document.querySelector("#ord-name").value.trim(),phone:document.querySelector("#ord-tel").value.trim(),email:document.querySelector("#ord-email").value.trim()};if(!(!o.name||!o.phone||!o.email)&&!(!et.test(o.name)||!st.test(o.phone)||!tt.test(o.email)))return!0}function d(){const o={name:document.querySelector("#ord-name").value.trim(),phone:document.querySelector("#ord-tel").value.trim(),email:document.querySelector("#ord-email").value.trim()},u=document.querySelector(".comment").value.trim();u!==""&&(o.comment=u),f.post(Xe,o).then(()=>{i.Notify.success("Order submitted successfully")}).catch(()=>{i.Notify.failure("An error occurred while submitting the order.")}).finally(()=>{t.close()})}}),document.querySelector(".ord-close-btn").addEventListener("click",()=>{t.close()})}const U=document.querySelector("#scroll-btn");window.addEventListener("scroll",nt);function nt(){window.scrollY>300?U.style.display="block":U.style.display="none"}U.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));const b="/Project-Tastytreats/assets/anonimus-ebd19136.jpg",at=document.querySelector(".footer-title");at.addEventListener("click",()=>{const e=`
    <div class="footer-modal">
    <div class="dev-list">
          <ul class="develop-list">
            <li class="item-list">
              <img
                src=${b}
                alt=""
                width="100px"
                height="100px"
                class="develop-img jumping-element1"
              />
              <p class="develop-text jumping-element1">Nick Tsalyn</p>
            </li>
            <li class="item-list">
              <img
                src=${b}
                alt=""
                width="100px"
                height="100px"
                class="develop-img jumping-element2"
              />
              <p class="develop-text jumping-element2">Anna Kulchytska</p>
            </li>
            <li class="item-list">
              <img
                src=${b}
                alt=""
                width="100px"
                height="100px"
                class="develop-img jumping-element3"
              />
              <p class="develop-text jumping-element3">Oleh Panadii</p>
            </li>
            <li class="item-list">
              <img
                src=${b}
                alt=""
                width="100px"
                height="100px"
                class="develop-img jumping-element1"
              />
              <p class="develop-text jumping-element1">Oleksandr Tsybulskiy</p>
            </li>
            <li class="item-list">
              <img
                src=${b}
                alt=""
                width="100px"
                height="100px"
                class="develop-img jumping-element2"
              />
              <p class="develop-text jumping-element2">Daria Musienko</p>
            </li>
            <li class="item-list">
              <img
                src=${b}
                alt=""
                width="100px"
                height="100px"
                class="develop-img jumping-element3"
              />
              <p class="develop-text jumping-element3">Eugene Matviychuk</p>
            </li>
            <li class="item-list">
              <img
                src=${b}
                alt=""
                width="100px"
                height="100px"
                class="develop-img jumping-element1"
              />
              <p class="develop-text jumping-element1">Daryna Petrunina</p>
            </li>
            <li class="item-list">
              <img
                src=${b}
                alt=""
                width="100px"
                height="100px"
                class="develop-img jumping-element2"
              />
              <p class="develop-text jumping-element2">Roman Chuykov</p>
            </li>
            <li class="item-list">
              <img
                src=${b}
                alt=""
                width="100px"
                height="100px"
                class="develop-img jumping-element3"
              />
              <p class="develop-text jumping-element3">Kate Shcherbina</p>
            </li>
          </ul>
        </div>
    </div>`;k.create(e).show()});const it={favoriteNavBtn:document.querySelector(".registration-fav-btn")};it.favoriteNavBtn.addEventListener("click",e=>{A("login-info")||(e.preventDefault(),z.Notify.warning("Log In or Sign Up to continue"))});
//# sourceMappingURL=commonHelpers2.js.map
