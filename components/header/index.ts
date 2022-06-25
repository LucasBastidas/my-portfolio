const logoPng = require("url:../../assets/logo.png");
const navButton = require("url:../../assets/list.png");
export function initHeaderComp() {
	class HeaderCompEl extends HTMLElement {
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
            justify-content: space-between;
            background-color: #172d4a;
            align-items: center;
            height: 90px;
            color: #CEC9C9;
            font-family: 'Play', sans-serif;          
         }
         @media(min-width: 960px){
            .cont{
               height: 200px;
            }
         }
         .logo{
            height: 130px;
            width: 130px;
         }
         @media(min-width: 960px){
            .logo{
               height: 200px;
               width: 200px;
            }
         }
         .header-title{
            padding-right: 10px;
            font-size: 12px;
            letter-spacing: 6px;
         }
         @media(min-width: 960px){
            .header-title{
               padding-right: 20px;
               font-size: 24px;
               letter-spacing: 10px;
            }
         }

         
         `;
			shadow.innerHTML = `
         <div class="cont">
         <div><img class="logo" src="${logoPng}" alt="hola"></img></div>
         <div>
         <h3 class="header-title">Mi portfolio</h3>
         </div>
         </div>
         `;
			shadow.appendChild(style);
		}
	}
	customElements.define("header-element", HeaderCompEl);
}
