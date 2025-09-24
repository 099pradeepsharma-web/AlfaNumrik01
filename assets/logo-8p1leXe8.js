import{j as o}from"./vendor_react-DXiryTHP.js";const e=({size:s=48})=>o.jsxs("svg",{width:s,height:s,viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg","aria-label":"Alfanumrik Logo",className:"alfanumrik-logo",style:{filter:"drop-shadow(0 2px 4px rgba(0,0,0,0.1))",animation:"logo-float 4s ease-in-out infinite"},children:[o.jsxs("defs",{children:[o.jsxs("linearGradient",{id:"logo-gradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[o.jsx("stop",{offset:"0%",style:{stopColor:"rgb(var(--c-primary-dark))"}}),o.jsx("stop",{offset:"100%",style:{stopColor:"rgb(var(--c-text-accent))"}})]}),o.jsx("style",{children:`
                        .alfanumrik-logo .logo-swoosh {
                            stroke-dasharray: 200;
                            stroke-dashoffset: 200;
                            animation: logo-draw 2s ease-out forwards 0.5s;
                        }
                        @keyframes logo-draw {
                            to {
                                stroke-dashoffset: 0;
                            }
                        }
                    `})]}),o.jsx("circle",{cx:"50",cy:"50",r:"45",fill:"url(#logo-gradient)",opacity:"0.1"}),o.jsx("path",{d:"M25 80 L50 20 L75 80",stroke:"url(#logo-gradient)",strokeWidth:"12",strokeLinecap:"round",strokeLinejoin:"round",fill:"none",style:{animation:"logo-glow 4s ease-in-out infinite"}}),o.jsx("path",{d:"M35 60 H65",stroke:"rgb(var(--c-surface))",strokeWidth:"8",strokeLinecap:"round",fill:"none"}),o.jsx("path",{className:"logo-swoosh",d:"M70 25 C 85 40, 85 60, 70 75",stroke:"rgb(var(--c-success))",strokeWidth:"7",strokeLinecap:"round",fill:"none"})]});export{e as L};
