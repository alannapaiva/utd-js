import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`

*body
/* CSS reset */
*, *:before, *:after { 
  margin:0;
  padding:0;
  font-family: Arial,sans-serif;
}

body{
  margin:10px;
}

a{
  text-decoration: none;
}

/* content que contem os formulários */
.content{
  width: 500px;
  margin: 0px auto;
  position: relative;	
}

/* formatando o cabeçalho dos formulários */
h1{
  font-family: 'Poppins', sans-serif;
  font-size: 48px;
  color: hsl(322, 100%, 66%);
  padding: 10px 0;
  font-family: Arial,sans-serif;
  font-weight: bold;
  text-align: center;
  padding-bottom: 30px;
}

p{
  margin-bottom:15px;
}
p:first-child{
  margin: 0px;
}
label{
  color: hsl(192, 100%, 9%);
  position: relative;
  font-family: 'Open Sans', sans-serif;
}

/**** advanced input styling ****/
/* placeholder */
::-webkit-input-placeholder  {
  color: #bebcbc; 
  font-style: italic;
}
input:-moz-placeholder,
textarea:-moz-placeholder{
  color: #bebcbc;
  font-style: italic;
} 
input {
  outline: none;
}

input:not([type="checkbox"]){
  width: 95%;
  margin-top: 4px;
  padding: 10px;	
  border: 1px solid #b2b2b2;
  
  -webkit-border-radius: 3px;
  border-radius: 3px;
  
  -webkit-box-shadow: 0px 1px 4px 0px rgba(168, 168, 168, 0.6) inset;
  box-shadow: 0px 1px 4px 0px rgba(168, 168, 168, 0.6) inset;
  
  -webkit-transition: all 0.2s linear;
  transition: all 0.2s linear;
}

/*estilo do botão cadastro */
.button-cad{
  display: inline-block;
  background: #927cfe;
  color: #fff;
  font-family: 'Open Sans', sans-serif;
  font-size: 1.2rem;
  margin-top: 3rem;
  margin-left: 7rem;
  text-decoration: none;
  letter-spacing: 1px;
  border-radius: 40px;
  padding: 20px 40px 20px 40px;
  border: none;
  cursor: pointer;
  box-shadow: rgb(0 0 0 / 24%) 0px 3px 8px;
  transition: all 0.2s linear;
}

.button-cad:hover{
  background: hsl(322, 100%, 66%);
}

/*estilo do botão submit */
input[type="submit"]{
  display: inline-block;
  background:hsl(322, 100%, 66%);
  color: #fff;
  font-family: 'Open Sans', sans-serif;
  letter-spacing: 1px;
  font-size: 1.2rem;
  margin-top: 2.5rem;
  margin-left: 1rem;
  letter-spacing: 1px;
  border-radius: 40px;
  padding: 20px 40px 20px 40px;
  cursor: pointer;
  box-shadow: rgb(0 0 0 / 24%) 0px 3px 8px;
  transition: all 0.2s linear;
}

input[type="submit"]:hover{
  background:#927cfe;
}

/* estilos para o formulário */
#cadastro, 
#login{
  position: absolute;
  top: 0px;
  width: 88%;	
  padding: 18px 6% 60px 6%;
  margin: 0 0 35px 0;
  background: rgb(247, 247, 247);
  border: 1px solid hsl(322, 100%, 66%);
  
  border-radius: 5px;
  
  -webkit-animation-duration: 0.5s;
  -webkit-animation-timing-function: ease;
  -webkit-animation-fill-mode: both;

  animation-duration: 0.5s;
  animation-timing-function: ease;
  animation-fill-mode: both;
}

table {
  font-weight: 400;
  min-width: 420px;
  width: 100%;
  
  thead {
    display: none;
    font-weight: 500;
  }
  
  tbody {
    tr {
      border: 1px solid #dad6eb;
      border-radius: 5px;
      display: block;
      padding: 30px;
      margin-bottom: 30px;
      
      td {
        display: block;
        font-weight: 500;
        padding: 5px;
        position: relative;
        text-align: right;
        font-family: 'Open Sans', sans-serif;
        
        button {
          background: #927cfe;
          border: none;
          border-radius: 5px;
          box-shadow: 0 4px 8px transparentize(#222, .8);
          bottom: -30px;
          color: #fff;
          font-weight: 700;
          left: 50%;
          padding: 10px 0;
          position: absolute;
          transform: translate(-50%, 50%);
          width: 50%;
          margin:3px;

          &:hover,
          &:focus {
            background: lighten(#927cfe, 5%);
            cursor: pointer;
          }
        }
        button:hover{
          background: hsl(322, 100%, 66%);
        }
      }
    }
  }
}

@media all and (min-width: 768px) {
  table {
    border: 1px solid #eee;
    border-collapse: collapse;
    max-width: 992px;
    text-align: left;
    width: 100%;
    
    thead {
      display: table-header-group;
      
      th {
        font-family: 'Open Sans';
        color: hsl(322, 100%, 66%);
        
        font-size: 19px;
        padding: 10px;
      }
    }
    
    tbody {
      font-size: .875em;
      
      tr {
        border: none;
        display: table-row;
        
        &:nth-child(odd) {
          background: #eee;
        }
        
        td {
          display: table-cell;
          font-weight: 400;
          padding: 10px;
          text-align: left;
          
          button {
            display: inline-block;
            padding: 10px 15px;
            position: initial;
            transform: translate(0);
            width: auto;
          }
          
          &:before {
            display: none;
          }
          
          &:last-child {
            text-align: right;
          }
        }
      }
    }
  }
}
`;