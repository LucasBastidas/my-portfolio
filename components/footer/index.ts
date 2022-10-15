const logoPng = require("url:../../assets/logo.png");
const linkedinLogoPng = require("url:../../assets/linkedin-5-64.png");
const githubLogoPng = require("url:../../assets/github-10-64.png");
const instagramLogoPng = require("url:../../assets/instagram-64.png");
export function initFooterComp() {
  class FooterCompEl extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      var shadow = this.attachShadow({ mode: "open" });
      var style = document.createElement("style");
      style.innerHTML = `
         @import url('https://fonts.googleapis.com/css2?family=Play&display=swap');
         @import url('https://fonts.googleapis.com/css2?family=Jost:wght@300&display=swap');
         .cont{
            display: flex;
            flex-direction: column;
            text-align: center;
            background-color: #172d4a;
            align-items: center;
            height: 200px;
            color: #CEC9C9;
            font-family: 'Play', sans-serif;          
         }
         @media(min-width: 960px){
            .cont{
               height: 300px;
               flex-direction:row;
               justify-content:space-between;
            }
         }
         .logo{
            height: 100px;
            width: 100px;
         }
         @media(min-width: 960px){
            .logo{
               height: 300px;
               width: 300px;
            }
         }
         .header-title{
            padding-right: 10px;
            font-size: 12px;
            letter-spacing: 6px;
         }
         @media(min-width: 960px){
            .redes-cont{
               padding-right: 50px;
               display:flex;
               flex-direction:column;
               gap:35px;
            }
         }
         .logo_linkedin{
            height:25px;
            width:25px;
            cursor:pointer;
         }
         .logo_linkedin:hover{
            animation: myAnim 2s ease 0s 1 normal forwards;
         }
         .logo_github{
            height:25px;
            width:25px;
            cursor:pointer;
         }
         .logo_github:hover{
            animation: myAnim 2s ease 0s 1 normal forwards;
         }
         .logo_instagram{
            height:25px;
            width:25px;
            cursor:pointer;
         }
         .logo_instagram:hover{
            animation: myAnim 2s ease 0s 1 normal forwards;
         }
         .email{
            cursor:default
         }
         @media(min-width: 960px){
            .logo_linkedin{
               height:40px;
               width:40px
            }
            .logo_github{
               height:40px;
               width:40px
            }
            .logo_instagram{
               height:40px;
               width:40px
            }
         }
         @keyframes myAnim {
            0% {
               transform: scale3d(1, 1, 1);
            }
         
            30% {
               transform: scale3d(1.25, 0.75, 1);
            }
         
            40% {
               transform: scale3d(0.75, 1.25, 1);
            }
         
            50% {
               transform: scale3d(1.15, 0.85, 1);
            }
         
            65% {
               transform: scale3d(0.95, 1.05, 1);
            }
         
            75% {
               transform: scale3d(1.05, 0.95, 1);
            }
         
            100% {
               transform: scale3d(1, 1, 1);
            }
         }
         `;
      shadow.innerHTML = `
         <div class="cont">
         <div><img class="logo" src="${logoPng}" alt="hola"></img></div>
         <div class="redes-cont">
         <div>
         <a href="https://www.linkedin.com/in/lucasbastidas/">
         <img class="logo_linkedin" src="${linkedinLogoPng}" alt="hola"></img>
         </a>
         </div>
         <div>
         <a href="https://github.com/LucasBastidas">
         <img class="logo_github" src="${githubLogoPng}" alt="hola"></img>
         </a>
         </div>
         <div><span class="email">lucaasbastidas@gmail.com</span></div>
         </div>
         </div>
         `;
      shadow.appendChild(style);
    }
  }
  customElements.define("footer-element", FooterCompEl);
}
