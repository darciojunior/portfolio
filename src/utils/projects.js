import allIcons from './icons'

const [html, css, javascript, react, mongoDB, nodeJS, express] = allIcons

const projects = [
  {
    id: 1,
    path: "https://darciojunior.github.io/interactive-pricing-component/",
    projectName: "Interactive Pricing Component",
    imagePath: "images/interactive-pricing-component.png",
    icons: [html, css, javascript],
    description: (
      <div className="description">
        Componente de preço interativo com slider.<br></br>
        <span>
          *Ideia do projeto em{" "}
          <object><a href="https://www.frontendmentor.io/challenges/interactive-pricing-component-t0m8PIyY8" target='_blank' rel="noreferrer">
            Frontend Mentor
          </a></object>
          .
        </span>
      </div>
    ),
  },
  {
    id: 2,
    path: "https://darciojunior.github.io/crowdfunding-product-page/",
    projectName: "Crowdfunding Page",
    imagePath: "images/crowdfunding-product-page.png",
    icons: [html, css, javascript],
    description: (
      <div className="description">
        Página de doações com modal para a janela de doação.<br></br>
        <span>
          {" "}
          *Ideia do projeto em{" "}
          <object><a href="https://www.frontendmentor.io/challenges/crowdfunding-product-page-7uvcZe7ZR" target='_blank' rel="noreferrer">
            Frontend Mentor
          </a></object>
          .
        </span>
      </div>
    ),
  },
  {
    id: 3,
    path: "https://darciojunior.github.io/job-listing-react/",
    projectName: "Job Listing",
    imagePath: "images/job-listing-react.png",
    icons: [html, css, javascript, react],
    description: (
      <div className="description">
        Listagem de empregos por categorias.<br></br>{" "}
        <span>
          *Ideia do projeto em{" "}
          <object><a href="https://www.frontendmentor.io/challenges/job-listings-with-filtering-ivstIPCt" target='_blank' rel="noreferrer">
            Frontend Mentor
          </a></object>
          .
        </span>
      </div>
    ),
  },
  {
    id: 4,
    path: "/",
    projectName: "Em breve - Sistema de controle financeiro",
    imagePath: "images/pagina-em-construcao.png",
    icons: [html, css, javascript, react, mongoDB, nodeJS, express],
    description: (
      <div className="description">
        Sistema de controle financeiro completo.
      </div>
    ),
    disabled: true,
  },
];

export default projects;
