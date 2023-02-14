import {
  DiHtml5,
  DiCss3,
  DiJavascript,
  DiReact,
  DiMongodb,
  DiNodejsSmall,
} from "react-icons/di";
import { SiExpress } from "react-icons/si";

const html = <DiHtml5 size="2rem" color="#E65100" name="html" label="HTML5"/>;
const css = <DiCss3 size="2rem" color="#0277BD" name="css" label="CSS"/>;
const javascript =   <DiJavascript size="2rem" color="#FFD600" name="javascript" label="Javascript"/>;
const react = <DiReact size="2rem" color="#61DEFB" name="react" label="React"/>;
const mongoDB = <DiMongodb size="2rem" color="#499D4A" name="mongoDB" label="MongoDB"/>;
const nodeJS = <DiNodejsSmall size="2rem" color="#FFF" name="nodeJS" label="Node.Js"/>;
const express = <SiExpress size="2rem" color="#FFF" name="express" label="Express.js"/>;

const allIcons = [html, css, javascript, react, mongoDB, nodeJS, express]

export default allIcons;
