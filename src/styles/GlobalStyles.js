import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
    
--color-grayish-blue: 237 18% 59%;
--color-soft-red: 345 95% 68%;

--color-white: 0 0% 100%;
--color-dark-desaturated-blue: 236 21% 26%;
--color-very-dark-blue: 235 16% 14%;
--color-very-dark-mostly-black-blue: 234 17% 12%;


--color-neutral-off-white: hsl(0, 0%, 94%);
--color-neutral-light-gray: hsl(0, 0%, 86%);
--color-neutral-smokey-gray: hsl(0, 1%, 44%);
--color-neutral-off-black: hsl(0, 0%, 8%);

 
}


*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  
}

/* Prevent font size inflation */
html {
  -moz-text-size-adjust: none;
  -webkit-text-size-adjust: none;
  text-size-adjust: none;
   font-size: 62.5%;
}

/* Remove default margin in favour of better control in authored CSS */
body, h1, h2, h3, h4, h5, h6, p,
figure, blockquote, dl, dd {
  margin-block-end: 0;
}

/* Set core body defaults */
body {
  min-height: 100vh;
  line-height: 1.5;
  background: url("pattern-hills.svg") no-repeat right 15% bottom ,url("bg-stars.svg") no-repeat center top, hsl(var(--color-very-dark-blue));
  color: hsl(var(--color-white));
  font-family: 'Red Hat Text', sans-serif;
    @media (min-width: 720px) {
    background-size: contain; 

    }

}
/* Remove list styles on ul, ol elements */
ul,
ol{
  list-style: none;
}



/* Set shorter line heights on headings and interactive elements */
h1, h2, h3, h4, h5, h6
button, input, label {
  line-height: 1.1;
}

/* Balance text wrapping on headings */
h1, h2,
h3, h4, h5, h6 {
  /* text-wrap: balance; - not yet supporeted on some browsers */
overflow-wrap: break-word;
 hyphens: auto;
}


/* Make images easier to work with */
img,
picture {
  max-width: 100%;

}

/* Inherit fonts for inputs and buttons */
input, button,
textarea, select {
  font: inherit;
  color: inherit;
}

/* Make sure textareas without a rows attribute are not tiny */
textarea:not([rows]) {
  min-height: 10em;
}

/* Anything that has been anchored to should have extra scroll margin */
:target {
  scroll-margin-block: 5ex;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  background-color: gray;
  color: black;
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid lightgray;
  outline-offset: -1px;
}


button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

:-webkit-any(article, aside, nav, section) h1 {
   
    margin-block-start: 0;
    margin-block-end: 0;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap; 
  border: 0;
}
.flip-card .top-flip, .flip-card .bottom-flip{

 
  height: 3rem;
  width: 65px;
  /* line-height: 1.5; */
  overflow: hidden;

  padding: 0.75rem;
  font-size: 3rem;
  color: hsl(var(--color-soft-red));
  font-weight: 700;
  position: absolute;
  display: flex;


  @media (min-width: 768px) {
      font-size: 4.1rem;
    height: 4.5rem;
    padding: 1.4rem;
    width: 90px;
  }
  @media (min-width: 1200px) {
    font-size: 5.5rem;
    height: 5.2rem;
    padding: 1.1rem;
    width: 110px;
  }

}  

     .flip-card .top-flip {
        
        /* background-color: orange; */
      background-color: hsl(var(--color-dark-desaturated-blue) / 0.7);
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
  border-bottom: 0.5px solid hsl(var(--color-very-dark-mostly-black-blue));
      animation: flip-top 250ms ease-in;
      transform-origin: bottom;
      justify-content: center;

      


      }


 .flip-card .bottom-flip {
       background-color: hsl(var(--color-dark-desaturated-blue) / 0.8);

      /* background-color: blue; */
  display: flex;
  align-items: flex-end;
  justify-content: center;
  bottom: 0;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
      animation: flip-bottom 250ms ease-out 250ms;
      transform: rotateX(90deg);
      transform-origin: top;
    


      }

      @keyframes flip-top {
        100% {
          transform: rotateX(90deg);
        }
      }
      @keyframes flip-bottom {
        100% {
          transform: rotateX(0deg);
        }
      }

`;
export default GlobalStyles;
