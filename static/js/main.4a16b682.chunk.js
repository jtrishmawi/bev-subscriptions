(this["webpackJsonpbev-react-stats"]=this["webpackJsonpbev-react-stats"]||[]).push([[0],{27:function(e,n,t){e.exports=t(36)},36:function(e,n,t){"use strict";t.r(n);var a=t(3),r=t(20),i=t.n(r),o=t(1),c=t.n(o),l=t(4),u=t(2),s=[{key:"benevoles",name:"B\xe9n\xe9voles"},{key:"artistes",name:"Artistes"},{key:"participants",name:"Participants"},{key:"grands",name:"Grands"}],m=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],d=t(15),p=t.n(d),f=t(8),b=t(21),g=t(26),h=new Date;h.setMonth(0),h.setDate(1),h.setHours(0,0,0,0);var v={lastYear:h,submissions:{all:[]},selected:localStorage.getItem("bev-selection")||"all",selected_submissions:[],search:""},w=function(e,n){switch(n.type){case"set_submissions":return Object(f.a)({},e,{submissions:n.payload.submissions,selected_submissions:n.payload.submissions[e.selected]||[]});case"set_selected":return Object(f.a)({},e,{selected:n.payload.selected,selected_submissions:e.submissions[n.payload.selected]||[],search:""});case"set_search":var t=e.submissions[e.selected],a=new g.a(t,{keys:["form_data.nom","form_data.prenom"]}).search(n.payload.search,{minMatchCharLength:3});return n.payload.search.length>=3&&(t=a.map((function(e){return e.item}))),Object(f.a)({},e,{search:n.payload.search,selected_submissions:t});default:throw Error("Reducer action type invalid")}},x=t(5),E=Object(o.createContext)(),y=function(){return Object(o.useContext)(E)};function j(){var e=Object(a.a)(["\n  border: none;\n  outline: none;\n  background: transparent;\n  color: #333;\n  display: inline-block;\n  white-space: nowrap;\n  margin: 0 1vw;\n  transition: all 200ms ease-in;\n  position: relative;\n  font-size: 1.25rem;\n  font-weight: ",";\n  cursor: pointer;\n\n  :after {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    width: ",';\n    content: ".";\n    color: transparent;\n    background: #333;\n    height: 1px;\n    transition: all 0.4s ease-in;\n  }\n\n  :hover {\n    color: #333;\n    ::after {\n      width: 100%;\n    }\n  }\n\n  @media (max-width: 768px) {\n    padding: 20px 0;\n    font-size: 1.5rem;\n    z-index: 6;\n  }\n']);return j=function(){return e},e}function k(){var e=Object(a.a)(["\n  display: flex;\n  width: 100%;\n  justify-content: space-evenly;\n  align-items: center;\n\n  @media (max-width: 480px) {\n    flex-direction: column;\n    background-color: #f8f9fa;\n    transition: all 0.3s ease-in;\n    top: 8vh;\n  }\n"]);return k=function(){return e},e}var O=u.c.div(k()),_=u.c.button(j(),(function(e){return e.active?"bold":"normal"}),(function(e){return e.active?"100%":"0%"})),C=function(e){var n=e.handleChange,t=y(),a=Object(l.a)(t,1)[0].selected;return c.a.createElement(O,null,c.a.createElement(_,{onClick:function(){return n("all")},active:"all"===a},"Tous"),s.map((function(e){return c.a.createElement(_,{key:e.key,onClick:function(){return n(e.key)},active:a===e.key},e.name)})))},z=function(){var e=c.a.useState(!1),n=Object(l.a)(e,2),t=n[0],a=n[1];return c.a.useEffect((function(){var e="undefined"===typeof window.navigator?"":navigator.userAgent,n=!1;(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\\-(n|u)|c55\/|capi|ccwa|cdm\\-|cell|chtm|cldc|cmd\\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\\-s|devi|dica|dmob|do(c|p)o|ds(12|\\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\\-|_)|g1 u|g560|gene|gf\\-5|g\\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\\-(m|p|t)|hei\\-|hi(pt|ta)|hp( i|ip)|hs\\-c|ht(c(\\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\\-(20|go|ma)|i230|iac( |\\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\\-[a-w])|libw|lynx|m1\\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\\-2|po(ck|rt|se)|prox|psio|pt\\-g|qa\\-a|qc(07|12|21|32|60|\\-[2-7]|i\\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\\-|oo|p\\-)|sdk\/|se(c(\\-|0|1)|47|mc|nd|ri)|sgh\\-|shar|sie(\\-|m)|sk\\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\\-|v\\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\\-|tdg\\-|tel(i|m)|tim\\-|t\\-mo|to(pl|sh)|ts(70|m\\-|m3|m5)|tx\\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\\-|your|zeto|zte\\-/i.test(e.substr(0,4)))&&(n=!0),a(n)}),[]),{isMobile:t}};function S(){var e=Object(a.a)(["\n  height: max(6vh, 50px);\n  border: 0;\n  color: #333;\n  font-size: 1.25rem;\n  display: none; // prevent being able to tab to it\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 4ch;\n  font-weight: bold;\n  background: rgba(0, 0, 0, 0.35);\n  border-radius: 0 0.7rem 0.7rem 0;\n"]);return S=function(){return e},e}function A(){var e=Object(a.a)(["\n  height: max(6vh, 50px);\n  border: 0;\n  color: #333;\n  font-size: 1.25rem;\n  padding: 0 1.6rem;\n  border-radius: 0.7rem;\n  width: 15ch;\n  appearance: none;\n  transition: all 0.3s cubic-bezier(0, 0, 0.43, 1.49);\n  transition-property: width, border-radius;\n  z-index: 1;\n  position: relative;\n\n  &&:not(:placeholder-shown) {\n    border-radius: 0.5rem 0 0 0.7rem;\n    width: calc(100% - 8ch);\n    + button {\n      display: block;\n    }\n  }\n"]);return A=function(){return e},e}function I(){var e=Object(a.a)(["\n  flex: 0 1 auto;\n  display: grid;\n  place-items: center;\n  position: relative;\n"]);return I=function(){return e},e}var D=u.c.form(I()),M=u.c.input(A()),F=u.c.button(S()),L=function(e){var n=e.setNavbarOpen,t=y(),a=Object(l.a)(t,2),r=a[0].search,i=a[1].setSearch,u=Object(o.useState)(r),s=Object(l.a)(u,2),m=s[0],d=s[1],p=function(e,n){var t=Object(o.useState)(e),a=Object(l.a)(t,2),r=a[0],i=a[1];return Object(o.useEffect)((function(){var t=setTimeout((function(){i(e)}),n);return function(){clearTimeout(t)}}),[e,n]),r}(m,500);return Object(o.useEffect)((function(){i(p||"")}),[p]),c.a.createElement(D,{onSubmit:function(e){e.preventDefault(),d(e.target.search.value),n((function(e){return!e}))},role:"search"},c.a.createElement(M,{name:"search",type:"search",onChange:function(e){return d(e.target.value)},placeholder:"Recherche"}),c.a.createElement(F,{type:"submit"},"Go"))},N=t(13);function U(){var e=Object(a.a)(["\n  display: flex;\n"]);return U=function(){return e},e}var G=u.c.button(U()),P=function(){var e=Object(x.b)().logout;return c.a.createElement(G,{onClick:function(){localStorage.removeItem("bev-selection"),e({returnTo:window.location.origin})}},c.a.createElement(N.b,null))},R=function(){var e=Object(x.b)().loginWithRedirect;return c.a.createElement("button",{onClick:function(){return e()}},c.a.createElement(N.a,null))};function T(){var e=Object(a.a)(["\n  display: flex;\n  align-items: center;\n  padding: 0.5rem;\n\n  img {\n    margin: 0 0.5rem;\n    border-radius: 505%;\n  }\n\n  button {\n    margin: 0 0.5rem;\n  }\n"]);return T=function(){return e},e}var Y=u.c.div(T()),q=function(){var e=Object(x.b)(),n=e.user,t=e.isAuthenticated;return e.isLoading?c.a.createElement("div",null,"..."):c.a.createElement(Y,null,t&&c.a.createElement("img",{src:n.picture,alt:n.name,height:48,width:48}),t?c.a.createElement(P,null):c.a.createElement(R,null))};function B(){var e=Object(a.a)(["\n  height: max(10vh, 60px);\n  width: 100%;\n  display: flex;\n  background: #f8f9fa;\n  position: relative;\n  text-transform: capitalize;\n  margin: 0 auto;\n  padding: 0 5vw;\n  z-index: 2;\n  align-self: center;\n  padding: 0;\n\n  @media (max-width: 480px) {\n    position: sticky;\n    top: 0;\n    left: 0;\n    right: 0;\n    left: 0;\n  }\n"]);return B=function(){return e},e}var J=u.c.nav(B());function W(){var e=Object(a.a)(["\n  display: none;\n  height: 100%;\n  width: 100%;\n  cursor: pointer;\n  padding: 0 10vw;\n  justify-content: space-between;\n  align-items: center;\n\n  @media (max-width: 480px) {\n    display: flex;\n  }\n"]);return W=function(){return e},e}var H=u.c.div(W());function V(){var e=Object(a.a)(["\n  display: flex;\n  height: 100%;\n  width: 100%;\n  justify-content: space-evenly;\n  align-items: center;\n\n  @media (max-width: 480px) {\n    flex-direction: column;\n    position: fixed;\n    width: 100%;\n    justify-content: flex-start;\n    padding-top: 10vh;\n    background-color: #f8f9fa;\n    transition: all 0.3s ease-in;\n    top: max(10vh, 60px);\n    left: ",";\n  }\n"]);return V=function(){return e},e}var Q=u.c.div(V(),(function(e){return e.open?"0":"-100%"}));function Z(){var e=Object(a.a)(["\n  background-color: #333;\n  width: 30px;\n  height: 3px;\n  transition: all 0.3s linear;\n  align-self: center;\n  position: relative;\n  transform: ",';\n\n  ::before,\n  ::after {\n    width: 30px;\n    height: 3px;\n    background-color: #333;\n    content: "";\n    position: absolute;\n    transition: all 0.3s linear;\n  }\n\n  ::before {\n    transform: ',";\n    top: -10px;\n  }\n\n  ::after {\n    opacity: ",";\n    transform: ",";\n    top: 10px;\n  }\n"]);return Z=function(){return e},e}var K=u.c.div(Z(),(function(e){return e.open?"rotate(-45deg)":"inherit"}),(function(e){return e.open?"rotate(-90deg) translate(-10px, 0px)":"rotate(0deg)"}),(function(e){return e.open?"0":"1"}),(function(e){return e.open?"rotate(90deg) ":"rotate(0deg)"})),X=function(){var e=y(),n=Object(l.a)(e,2)[1].setSelected,t=Object(o.useState)(!1),a=Object(l.a)(t,2),r=a[0],i=a[1],u=z().isMobile,s=Object(o.useCallback)((function(e){i((function(e){return!!e&&!e})),n(e)}),[n,i]);return c.a.createElement(J,null,c.a.createElement(H,{onClick:function(){return i(!r)}},c.a.createElement(K,{open:r}),u&&c.a.createElement(q,null)),c.a.createElement(Q,{open:r},!u&&c.a.createElement(q,null),u&&c.a.createElement(L,{setNavbarOpen:i}),c.a.createElement(C,{handleChange:s}),!u&&c.a.createElement(L,{setNavbarOpen:i})))},$=t(7),ee=t(6);function ne(){var e=Object(a.a)(["\n  grid-column: 1/3;\n  justify-content: space-between;\n  align-items: center;\n  text-align: left;\n\n  span:first-child {\n    flex: 1 1 auto;\n    text-align: left;\n\n    svg {\n      margin-left: 0.5rem;\n    }\n  }\n\n  span {\n    flex: 0 1 12ch;\n    padding-right: 1rem;\n    text-align: right;\n  }\n\n  a {\n    flex: 0 auto;\n  }\n"]);return ne=function(){return e},e}function te(){var e=Object(a.a)(["\n  grid-column: 2;\n  height: auto;\n  display: flex;\n  justify-content: flex-end;\n  overflow-wrap: anywhere;\n"]);return te=function(){return e},e}function ae(){var e=Object(a.a)(['\n  grid-column: 1;\n  font-weight: bold;\n\n  &:after {\n    content: ":";\n  }\n']);return ae=function(){return e},e}function re(){var e=Object(a.a)(["\n  display: grid;\n  grid-template-columns: 1fr auto;\n\n  dt,\n  dt + dd {\n    margin-top: 0.5rem;\n  }\n"]);return re=function(){return e},e}function ie(){var e=Object(a.a)(["\n  padding: 0.5rem 0.5rem 1rem;\n  width: 100%;\n"]);return ie=function(){return e},e}var oe=u.c.div(ie()),ce=u.c.dl(re()),le=u.c.dt(ae()),ue=u.c.dd(te()),se=Object(u.c)(ue)(ne()),me=function(e){var n=e.form_data,t=e.group,a=e.created_at,r=z().isMobile;return c.a.createElement(oe,null,c.a.createElement(ce,null,function(e){switch(e){case"B\xe9n\xe9voles":return c.a.createElement(c.a.Fragment,null,c.a.createElement(le,null,"T-shirt"),c.a.createElement(ue,null,n.taille),c.a.createElement(le,null,"Cat\xe9gories"),n.categories.map((function(e,n){return c.a.createElement(se,{key:n},e)})),c.a.createElement(le,null,"Disponibilit\xe9s"),n.horaires.map((function(e,n){return c.a.createElement(se,{key:n},e)})),c.a.createElement(le,null,"Commentaire"),c.a.createElement(se,null,n.addition));case"Artistes":return c.a.createElement(c.a.Fragment,null,c.a.createElement(le,null,"Cat\xe9gorie"),c.a.createElement(ue,null,n.categorie),c.a.createElement(le,null,"Dur\xe9e"),c.a.createElement(ue,null,n.duree),c.a.createElement(le,null,"Nombre"),c.a.createElement(ue,null,n.nombre),c.a.createElement(le,null,"Mat\xe9riel"),c.a.createElement(se,null,n.materiel),c.a.createElement(le,null,"Description"),c.a.createElement(se,null,n.description));case"Participants":case"Grands":return c.a.createElement(c.a.Fragment,null,c.a.createElement(le,null,"Cat\xe9gorie"),c.a.createElement(ue,null,n.categorie),c.a.createElement(le,null,"Quartier"),c.a.createElement(ue,null,n.quartier),c.a.createElement(le,null,"R\xe9f\xe9rent"),c.a.createElement(ue,null,n.referent),c.a.createElement(le,null,"Joueurs"),n.joueurs.map((function(e,n){return c.a.createElement(se,{key:n},c.a.createElement("span",null,e.nom,"Oui"===e.capitaine&&c.a.createElement(ee.f,null),"Oui"===e.vice_capitaine&&c.a.createElement(ee.g,null),"Oui"===e.nageur&&c.a.createElement(ee.e,null),"Oui"===e.coureur&&c.a.createElement(ee.c,null)),c.a.createElement("span",null,e.taille),c.a.createElement("span",null,e.date_de_naissance),r&&e.coordonnees&&c.a.createElement(c.a.Fragment,null,c.a.createElement("a",{href:"tel:".concat(e.coordonnees)},c.a.createElement(ee.b,null)),c.a.createElement("a",{href:"sms:".concat(e.coordonnees)},c.a.createElement(ee.d,null))))})));default:return Object.entries(n).map((function(e){var n=Object(l.a)(e,2),t=n[0],a=n[1];return c.a.createElement(o.Fragment,{key:t},c.a.createElement(le,null,t.charAt(0).toUpperCase()+t.slice(1)),c.a.createElement(ue,null,a))}))}}(t),c.a.createElement(le,null,"Inscription"),c.a.createElement(ue,null,new Date(a).toLocaleString())))};function de(){var e=Object(a.a)(["\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  width: 100%;\n  background: #f8f9fa;\n  margin-top: auto;\n"]);return de=function(){return e},e}var pe=u.c.div(de()),fe=function(e){var n=e.form_data;return z().isMobile?c.a.createElement(pe,null,n.telephone&&c.a.createElement(c.a.Fragment,null,c.a.createElement("a",{href:"tel:".concat(n.telephone)},c.a.createElement(ee.b,null)),c.a.createElement("a",{href:"sms:".concat(n.telephone)},c.a.createElement(ee.d,null))),n.email&&c.a.createElement("a",{href:"mailto:".concat(n.email)},c.a.createElement(ee.a,null))):null};function be(){var e=Object(a.a)(["\n  display: none;\n"]);return be=function(){return e},e}function ge(){var e=Object(a.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  background: #f8f9fa;\n  padding: 1rem 0.5rem;\n\n  h3 {\n    font-weight: bold;\n  }\n"]);return ge=function(){return e},e}function he(){var e=Object(a.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  border: 1px solid #f8f9fa;\n  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.25);\n\n  a {\n    color: #333;\n    border: 1px solid #333;\n    padding: 0.5rem;\n    margin: 0.5rem;\n    border-radius: 50%;\n  }\n"]);return he=function(){return e},e}var ve,we=u.c.article(he()),xe=u.c.div(ge()),Ee=u.c.div(be()),ye=function(e){var n,t=e.displayGroup,a=e.group,r=e.form_data,i=e.created_at,o=r.nom.charAt(0).toUpperCase(),l=[];if(o!==ve){if(ve)for(var u=ve.charCodeAt()+1;u<o.charCodeAt();u++)l=[].concat(Object($.a)(l),[c.a.createElement(Ee,{key:u,id:"data-navigation-".concat(String.fromCharCode(u))})]);n="data-navigation-".concat(o),ve=o}return c.a.createElement(c.a.Fragment,null,l,c.a.createElement(we,{id:n},c.a.createElement(xe,null,c.a.createElement("h3",null,"".concat(r.nom.toUpperCase()," ").concat(r.prenom||"")),t&&c.a.createElement("p",{role:"doc-subtitle"},a)),c.a.createElement(me,{form_data:r,group:a,created_at:i}),c.a.createElement(fe,{form_data:r})))};function je(){var e=Object(a.a)(["\n  padding: 0.25rem;\n  text-decoration: none;\n  outline: none;\n  color: inherit;\n  font-size: 2vh;\n\n  @media screen and (orientation: landscape) {\n    & {\n      font-size: 2vw;\n    }\n  }\n"]);return je=function(){return e},e}function ke(){var e=Object(a.a)(["\n  position: fixed;\n  top: max(10vh, 60px);\n  bottom: 0;\n  right: 0;\n  background: rgba(0, 0, 0, 0.25);\n  color: white;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n\n  @media screen and (orientation: landscape) {\n    & {\n      flex-direction: row;\n      left: 0;\n      top: unset;\n    }\n  }\n"]);return ke=function(){return e},e}var Oe=u.c.div(ke()),_e=u.c.a(je()),Ce=function(){return c.a.createElement(Oe,null,m.map((function(e){return c.a.createElement(_e,{key:e,href:"#",onClick:function(n){n.preventDefault();var t=document.getElementById("data-navigation-".concat(e));t&&t.scrollIntoView({behavior:"smooth",block:"center"})}},e)})))};function ze(){var e=Object(a.a)(["\n  animation: "," 1s linear infinite;\n  transform: translateZ(0);\n\n  border-top: 2px solid grey;\n  border-right: 2px solid grey;\n  border-bottom: 2px solid grey;\n  border-left: 4px solid black;\n  background: transparent;\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n"]);return ze=function(){return e},e}function Se(){var e=Object(a.a)(["\n  display: grid;\n  place-items: center;\n  height: 100vh;\n"]);return Se=function(){return e},e}function Ae(){var e=Object(a.a)(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]);return Ae=function(){return e},e}var Ie=Object(u.d)(Ae()),De=u.c.div(Se()),Me=u.c.div(ze(),Ie),Fe=function(){return c.a.createElement(De,null,c.a.createElement(Me,null))};function Le(){var e=Object(a.a)(["\n  overflow: scroll;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(100vw, 1fr));\n  grid-template-rows: auto 1fr;\n  position: relative;\n\n  h2 {\n    position: sticky;\n    background: rgba(255, 255, 255, 0.5);\n    top: 0;\n    font-size: 1.1rem;\n    height: 3rem;\n    font-weight: bold;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n  }\n\n  /* Extra small devices (phones, 600px and down) */\n  @media only screen and (max-width: 600px) {\n    grid-template-columns: repeat(auto-fit, minmax(100vw, 1fr));\n  }\n\n  /* Small devices (portrait tablets and large phones, 600px and up) */\n  @media only screen and (min-width: 600px) {\n    grid-template-columns: repeat(auto-fill, minmax(calc(100vw / 2), 1fr));\n    h2 {\n      grid-column: 1 / 3;\n    }\n  }\n\n  /* Medium devices (landscape tablets, 768px and up) */\n  @media only screen and (min-width: 768px) {\n    grid-template-columns: repeat(auto-fill, minmax(calc(100vw / 3), 1fr));\n    h2 {\n      grid-column: 1 / 4;\n    }\n  }\n\n  /* Large devices (laptops/desktops, 992px and up) */\n  @media only screen and (min-width: 992px) {\n    grid-template-columns: repeat(auto-fill, minmax(calc(100vw / 4), 1fr));\n    h2 {\n      grid-column: 1 / 5;\n    }\n  }\n\n  /* Extra large devices (large laptops and desktops, 1200px and up) */\n  @media only screen and (min-width: 1200px) {\n    grid-template-columns: repeat(auto-fill, minmax(calc(100vw / 5), 1fr));\n    h2 {\n      grid-column: 1 / 6;\n    }\n  }\n"]);return Le=function(){return e},e}function Ne(){var e=Object(a.a)(["\n  height: 100vh;\n  width: 100vw;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: auto 1fr;\n"]);return Ne=function(){return e},e}var Ue=u.c.div(Ne()),Ge=u.c.main(Le());var Pe,Re=(Pe=function(){var e,n=y(),t=Object(l.a)(n,1)[0],a=Object(x.b)(),r=a.isLoading,i=a.isAuthenticated;return r?c.a.createElement(Fe,null):(i&&(e="Il y a ".concat(t.selected_submissions.length," inscriptions"),t.search.length>3&&(e="Il y a ".concat(t.selected_submissions.length," inscriptions visibles sur ").concat(t.submissions[t.selected].length)),"all"!==t.selected&&(e+=" dans le groupe ".concat(t.selected.charAt(0).toUpperCase()+t.selected.slice(1))),e+=" pour l'ann\xe9e ".concat(t.lastYear.getFullYear(),".")),c.a.createElement(Ue,null,c.a.createElement(X,null),c.a.createElement(Ge,null,i&&c.a.createElement("h2",null,e),t.selected_submissions.map((function(e,n){return c.a.createElement(ye,Object.assign({key:n},e,{displayGroup:"all"===t.selected}))})),!i&&c.a.createElement("h2",null,"Connectez-vous ou demandez les acc\xe9s aux personnes concern\xe9es.")),c.a.createElement(Ce,null)))},function(e){var n=Object(o.useReducer)(w,v),t=Object(l.a)(n,2),a=t[0],r=t[1],i=Object(x.b)().isAuthenticated,u=Object(o.useCallback)((function(e){return r({type:"set_submissions",payload:{submissions:e}})}),[r]),m=Object(o.useCallback)((function(e){localStorage.removeItem("bev-selection"),i&&localStorage.setItem("bev-selection",e),r({type:"set_selected",payload:{selected:e}})}),[r,i]),d=Object(o.useCallback)((function(e){r({type:"set_search",payload:{search:e}})}),[r]);return Object(o.useEffect)((function(){Object(b.a)(p.a.mark((function e(){var n,t,r,o;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,fetch("http://www.bellevillenvrai.fr/api/forms");case 4:return n=e.sent,e.next=7,n.json();case 7:t=e.sent,r=t.data.map((function(e){var n=JSON.parse(e.form_data);if(n.nom=n.nom.trim(),n.joueurs){var t=JSON.parse(n.joueurs);n.joueurs=t.sort((function(e,n){return e.capitaine<n.capitaine||e.vice_capitaine<n.vice_capitaine?1:-1}))}return Object(f.a)({},e,{form_data:n})})).sort((function(e,n){return e.form_data.nom.trim().charAt(0).toLowerCase()>n.form_data.nom.trim().charAt(0).toLowerCase()?1:-1})).filter((function(e){return new Date(e.created_at)>=a.lastYear})),o=[],s.forEach((function(e){return o[e.key]=r.filter((function(n){return n.group===e.name}))})),u(Object(f.a)({all:r},o));case 12:case"end":return e.stop()}}),e)})))()}),[i,u,a.lastYear]),c.a.createElement(E.Provider,{value:[a,{setSubmissions:u,setSelected:m,setSearch:d}]},c.a.createElement(Pe,e))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Te=t(25);function Ye(){var e=Object(a.a)(["\n  ","\n  \n  body {\n    font-family: 'Noto Sans', sans-serif;\n    overflow: hidden;\n    color: #333;\n  }\n\n  * {\n    box-sizing: border-box;\n  }\n"]);return Ye=function(){return e},e}var qe=Object(u.a)(Ye(),Te.a);i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(qe,null),c.a.createElement(x.a,{domain:"dev-u2clydb2.eu.auth0.com",clientId:"a3mi01imTynRP8aUUtYPHVm3taGPgi87",redirectUri:"http://jtrishmawi.github.io/bev-subscriptions/"},c.a.createElement(Re,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.4a16b682.chunk.js.map