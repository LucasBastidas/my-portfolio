export function initProjectCardComp() {
	class ProjectCardComp extends HTMLElement {
		constructor() {
			super();
			this.render();
		}
		render() {
			const title = this.getAttribute("title");
			const description = this.getAttribute("description");
			const imageUrl = this.getAttribute("imageUrl");
			const url1 = this.getAttribute("url");
			const url2 = this.getAttribute("url2");
			const url2Title = "Probar";

			var shadow = this.attachShadow({ mode: "open" });
			var style = document.createElement("style");
			style.innerHTML = `
            .card-cont{
               
               display:flex;
               flex-direction:column;
               align-items:center;
               text-align: inherit;
               justify-content:space-between;
               padding-bottom:5px;
               height:400px;
               width:320px;
               border: 1px solid #000;
               border-radius: 5%;
               background-color: #313131;
               color: white;
               box-shadow: 5px 5px 25px 3px #000, 5px 5px 10px 1px #000;
            }
            .image{
               background: #fff url(${imageUrl}) center center/cover no-repeat;
               border-radius: 7px 7px 0px 0px;
               width:320px;
               height:150px
            }
            .title-description-cont{
               padding-left:8px;
               padding-right:8px;
            }
            .title{               
               font-size: 25px;
               margin: 0px;
               padding-top:10px;
            }
            .description{
               font-size: 15px;
               margin-bottom: 8px;
            }
            .vermas{
               
               font-size:20px;
               color: #607d8b;
            }
            .urls-cont{
               display: flex;
               gap:25px;
            }
         `;
			shadow.innerHTML = `
         <div class="card-cont">
         <div class="image"></div>
         <div class="title-description-cont">
            <h3 class="title">${title}</h3>
            <p class="description">${description}</p>
         </div>
         <div class="urls-cont">
            <a href="${url1}" class="vermas">Ver más</a>
            <a href="${url2}" class="vermas">${url2Title || ""}</a>
         </div>
      </div>
         `;
			shadow.appendChild(style);
		}
	}
	customElements.define("x-project-card", ProjectCardComp);
}
