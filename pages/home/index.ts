const myImage = require("url:../../assets/306-3064446_developer-developer-png.png");
const backgroundImage = require("url:../../assets/altumcode-dMUt0X3f59Q-unsplash.jpg");
const tecnologiasImg = require("../../assets/tecnologias.jpg");
const javascriptImg = require("../../assets/tecnologias-iconos/js.png");
const typescriptImg = require("../../assets/tecnologias-iconos/typescript.png");
const htmlImg = require("../../assets/tecnologias-iconos/html.png");
const cssImage = require("../../assets/tecnologias-iconos/css.png");
const nodeJsImg = require("../../assets/tecnologias-iconos/node-js.png");
const postgreImg = require("../../assets/tecnologias-iconos/postgre.png");
const firebaseImg = require("../../assets/tecnologias-iconos/firebase.svg");
const reactJsImg = require("../../assets/tecnologias-iconos/react.png");
const sequalizeImg = require("../../assets/tecnologias-iconos/sequelize.svg");
const gitImg = require("../../assets/tecnologias-iconos/git.png");
const nextJsIcon = require("../../assets/tecnologias-iconos/nextjs-icon.svg");

const projects = [
	{
		title: "Movie-app",
		description:
			"App que podemos usar vía la terminal. Esta app busca entre películas que tengo guardadas en un archivo JSON. Utilicé los conceptos básicos de la programación para articular un pequeño motor que filtra y busca nuestras películas favoritas. Para esto utilicé JavaScript sobre Node.js y conceptos como collections para organizar la data de nuestra app.",
		imageUrl:
			"https://cdn.sanity.io/images/9ihg87o9/production/fee47c8a4261ae95fc2d20ba8d5b8c0927daa419-312x165.png",
		repoUrl: "https://github.com/LucasBastidas/dwf-m2-desafio",
		demoUrl: "https://github.com/LucasBastidas/dwf-m2-desafio",
	},
	{
		title: "Web personal interactiva",
		description:
			"Web responsive usando HTML, CSS y JavaScript. El sitio web mostraría mi información personal y profesional usando distintas páginas. Profundicé en CSS y en formas ordenadas de utilizarlo como BEM. También utilicé un sistema de gestión de contenidos para alimentar la web a través de una API.",
		imageUrl:
			"https://cdn.sanity.io/images/9ihg87o9/production/93df2dc53a5e6bea481650c9c9f0f9896bafbc88-312x165.png",
		repoUrl: "https://github.com/LucasBastidas/desafio-final-dwf-m4",
		demoUrl: "https://lucasbastidas.github.io/desafio-final-dwf-m4/",
	},
	{
		title: "Piedra, papel o tijera",
		description:
			"Webapp para jugar a piedra, papel o tijera basada web-components. Desarrollé una SPA basada en una arquitectura orientada a componentes. Además basé toda la arquitectura en un router y un state general de la app desarrollada 100% en vanilla JavaScript. Utilicé TypeScript en conjunto con Parcel..",
		imageUrl:
			"https://cdn.sanity.io/images/9ihg87o9/production/befad7fb1b871ecf5c9160fc82510de4dc1a8ea4-312x165.png",
		repoUrl: "https://github.com/LucasBastidas/desafio-m5",
		demoUrl: "https://lucasbastidas.github.io/desafio-m5/",
	},
	{
		title: "Piedra, papel o tijera (Versión online)",
		description:
			"WebApp para jugar a piedra, papel o tijera entre dos participantes conectados al servidor. Además de escalar la UI que ya tenía, cree una API Rest que nos permite generar game rooms. Para esto utilicé Firebase Realtime Database para mantener la comunicación entre jugadores. El servidor en este caso es Heroku.",
		imageUrl:
			"https://cdn.sanity.io/images/9ihg87o9/production/883de42c574af95fe1e74cbbb642a62c3b1bb90f-312x165.png",
		repoUrl: "https://github.com/LucasBastidas/dwf-m6-desafio-final",
		demoUrl: "https://piedra-papel-tijeras-v2.onrender.com/",
	},
	{
		title: "Chat-Rooms",
		description:
			"Webapp sencilla donde se pueden crear y unirse a chatRooms utilizando RealTimeDataBase de firebase.",
		imageUrl:
			"https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
		repoUrl: "https://github.com/LucasBastidas/chatroom-app",
		demoUrl: "https://chat-rooms-webapp.onrender.com/",
	},
	{
		title: "Directorio de mascotas",
		description:
			"Webapp donde podrás reportar mascotas perdidas. Exploré patrones conocidos como MVC y REST además de entender cómo funcionan las bases de datos relacionales.Además diseñé un sistema de autenticación e integré servicios como Algolia y Mapbox para integrar geolocalización en el sistema.",
		imageUrl:
			"https://cdn.sanity.io/images/9ihg87o9/production/ceb4612f5c545b4eb91213708e9f9dce1d58bda2-312x165.png",
		repoUrl: "https://github.com/LucasBastidas/lost-pets-app-v1",
		demoUrl: "https://lost-pets-webapp-v1.onrender.com",
	},
	{
		title: "Directorio de mascotas v2 (React)",
		description:
			"Planteé un nuevo front para la aplicación de mascotas perdidas. El foco era practicar con React. Se  profundiza en la arquitectura basada en capas y el uso de componentes de forma escalable. Empecé a usar hooks y a entender los beneficios de la programación reactiva. Esta vez utilicé Firebase como host.",
		imageUrl:
			"https://cdn.sanity.io/images/9ihg87o9/production/bbfa437c8a52749a2c02f22abfc8af63c0fee5ac-312x165.png",
		repoUrl: "https://github.com/LucasBastidas/lost-pets-v2-react",
		demoUrl: "https://lost-pets-app-v2-react.firebaseapp.com/",
	},
	{
		title: "E-Commerce (Desarrollo frontend)",
		description:
			"Frontend de un e-commerce. El foco de este proyecto está en profundizar conceptos de React y sus herramientas como Next.js y Vercel. También trabajé una arquitectura basada en capas, server-side-rendering y la performance de la web.",
		imageUrl:
			"https://cdn.sanity.io/images/9ihg87o9/production/aa8ec638489af74fd24e7b508833cf3a93b2a9b8-312x165.png",
		repoUrl: "https://github.com/LucasBastidas/ecommerce-fe",
		demoUrl: "https://ecommerce-fe-eosin.vercel.app/",
	},
	{
		title: "E-Commerce (Desarrollo backend)",
		description:
			"Backend de un e-commerce usando MercadoPago como procesador de pagos. El foco de este desafío está en la escalabilidad. Para eso utilicé muchas bases de datos como Firebase, Airtable y Algolia para diseñar un backend basado en una API Rest robusta que integra a varias tecnologías y saca lo mejor de cada una.",
		imageUrl:
			"https://cdn.sanity.io/images/9ihg87o9/production/9c1e55ddb0b2c013774f6bdbbb6801bfdc6bcbb4-312x165.png",
		repoUrl: "https://github.com/LucasBastidas/ecommerce-be",
		demoUrl: "https://github.com/LucasBastidas/ecommerce-be",
	},
];

class Home extends HTMLElement {
	connectedCallback() {
		this.render();
	}
	addListeners() {}
	render() {
		const style = document.createElement("style");
		style.innerHTML = `
		.yo{
			height:90vh;
			display:flex;
			flex-direction:column;
			justify-content:center;
			text-align:center;
			background: #fff url(${backgroundImage}) center center/cover no-repeat;
		}
		@media(min-width:960px){
			.yo{
				height:100vh
			}
		}
		.h1{
			background-color:#000000bf;
			color: #ffffffd4;
			width: 0;
			overflow: hidden;
			white-space: nowrap;
			font-size: 3rem;
			margin: 10px auto;
			 border-right: 0.15em solid #172d4a;
			animation: typing 4s steps(38) 1s 1 normal both, blink 1s steps(1) infinite;
		}


		@keyframes typing {
			from {
			  width: 0;
			}
			to {
			  width: 100%;
			}
		  }
		  @keyframes blink {
			50% {
			  border-color: transparent;
			}
		  }


		.presentation{
			height:360px;
			width:100%;
			display:flex;
			align-items:center;
			background-color: #607d8b;
		}
		@media(min-width:960px){
			.presentation{
				height:460px
				
			}
		}
		.my-image-cont{
			display:flex;
			flex-direction:column;
			justify-content:center;
			background-color: #607d8b;
		}

		.my-image{
			height:185px;
			width:185px;
		}
		@media(min-width:960px){
			.my-image{
				height:350px;
				width:350px;
			}
		}
		.description{
			padding-right: 5px;
			text-align: center;
			color: white;
			background-color:#607d8b;
			font-family: monospace;
			font-size: 15px;
			cursor: default;
		}
		@media(min-width:960px){
			.description{
				padding-right:80px;
				padding-left:80px;
				font-size:25px;
				cursor: default;
			}
		}
		.sobre-mi{
			font-size:25px;
			color:#344a54;
			cursor: default;
		}
		@media(min-width:960px){
			.sobre-mi {
				font-size:60px
			}
		}

		.tecnologias-title__cont{
			height:300px;
			display:flex;
			flex-direction:column;
			justify-content:center;
			text-align:center;
			background: #fff url("${tecnologiasImg}")
			center center/cover no-repeat;
			cursor: default;       
		}

		.tecnologias-title__cont >h2{
			font-size:40px;
			background-color: #bbbbbbab;
			cursor: default;
			color:#172d4a;
		}

		.tecnologias{
			display:flex;
			flex-wrap: wrap;
			gap: 80px;
			justify-content:center;
			padding: 100px 0;
			background-color:#607d8b;
		}

		.icon-cont{
			width:150px
		}

		.icon-cont img{
			width:100%;
			transition: all 1s;
		}

		.icon-cont img:hover{
			transform: scale(1.2);
			
		}


		.proyects-title{
			height:500px;
			display:flex;
			flex-direction:column;
			justify-content:center;
			text-align:center;
			background: #fff url(https://images.unsplash.com/photo-1526040652367-ac003a0475fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80
			) center center/cover no-repeat;
			cursor: default;
			color:#172d4a;       
		}



		.proyects-title>h2{
			font-size:40px;
			background-color: #dcdcdcab;
			cursor: default;
		}
		.projects-cont{
			display:flex;
			flex-direction:column;
			justify-content:center;
			align-items:center;
			background-color:#607d8b;
			gap:25px;
			padding-top:20px;
			padding-bottom:40px;
		}
		@media(min-width:960px){
			.projects-cont{
				flex-direction:row;
				flex-wrap:wrap;
				padding-left:300px;
				padding-right:300px;
				gap:50px;
			}
		}

		
		`;
		this.innerHTML = `
      <header-element></header-element>
		<div class ="yo">
		<h1 class="h1">Lucas Bastidas,<br>





		FullStack Developer..
		</h1>
		</div>
		<div class="presentation">
		<div class="my-image-cont">
		<img class="my-image" src="${myImage}" alt="">
		</div>
		<div class="description">
		<h2 class="sobre-mi">Sobre mi </h2>
		<h4>Mi nombre es Lucas Bastidas, soy Desarrollador Web FullStack. Apasionado por la tecnología,
		me considero una persona responsable y ordenada, con ganas muchas de seguir aprendiendo y avanzar en mi carrera profesional.</h4>
		</div>
		</div>

		<section>

		<div class="tecnologias-cont">
		<div class="tecnologias-title__cont">

		<h2>Tecnologías</h2>

		</div>
		<div class="tecnologias">

		<div class="icon-cont">
			<img src=${javascriptImg} alt="javascript logo">
		</div>

		<div class="icon-cont">
			<img src=${typescriptImg} alt="typescript logo">
		</div>

		<div class="icon-cont">
			<img src=${htmlImg} alt="html5 logo">
		</div>

		<div class="icon-cont">
			<img src=${cssImage} alt="css3 logo">
		</div>

		<div class="icon-cont">
			<img src=${nodeJsImg} alt="nodejs logo">
		</div>

		<div class="icon-cont">
			<img src=${reactJsImg} alt="reactjs logo">
		</div>

		<div class="icon-cont">
			<img src=${firebaseImg} alt="firebase logo">
		</div>

		<div class="icon-cont">
			<img src=${postgreImg} alt="postgre logo">
		</div>

		<div class="icon-cont">
			<img src=${sequalizeImg} alt="sequelize logo">
		</div>

		<div class="icon-cont">
			<img src=${gitImg} alt="git logo">
		</div>

		<div class="icon-cont">
			<img src=${nextJsIcon} alt="nextjs logo">
		</div>

		</div>	
		</div>

		</section>

		<section>
		<div class="proyects-title">
		<h2>Mis Proyectos</h2>
		</div>
		<div class="projects-cont">
		
		${projects
			.map((r) => {
				return `<x-project-card title="${r.title}" imageUrl="${r.imageUrl}" description="${r.description}" url="${r.repoUrl}" url2="${r.demoUrl}"></x-project-card>`;
			})
			.join("")}
		

		</div>
		</section>
		<footer-element class="footer"></footer-element>
      `;
		this.appendChild(style);
	}
}
customElements.define("x-home-page", Home);

//COMENTARIO RANDOM TEST
