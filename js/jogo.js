window.history.back;

//niveis do jogo
let niveis= [['tiny(3X3)',3],['classic(4X4)',4],['big(5X5)',5],['bigger(6X6)',6],['huge(7X7)',7],['huger(8X8)',8]];
//cores do ambiente

let cor=['linear-gradient(rgb(18, 54, 153), rgba(122, 253, 187, 0.856))','linear-gradient(rgb(0, 255, 221), rgb(185, 6, 230))','linear-gradient(rgb(0, 89, 255), rgb(6, 230, 92))','linear-gradient(rgb(183, 0, 255), rgb(215, 230, 6))','linear-gradient(rgb(183, 0, 255), rgb(230, 140, 2))'];
//incrementador do nivel do jogo
let i1 =0,i2= 0;
//nivel atual
let nivelAtual=document.getElementById('nivel');
//esconha para o swhitch
let escolha ;
//foncao que inicialisa o nivel do jogo
function start(){
  escolha = niveis[i1][0];
  nivelAtual.innerHTML = escolha;
}
//foncao que altera o nivel do jogo
function back(){
  if(i1>0){
    i1--;
    escolha = niveis[i1][0];
    nivelAtual.innerHTML = escolha;
  }
}
//foncao que altera o nivel do jogo
function next(){
  if(i1<5){
    i1++;
    escolha = niveis[i1][0];
    nivelAtual.innerHTML = escolha;
  }
}

let main= document.getElementById('main');
function mudarACorDoAmbiente(){
  if(i2==cor.length ||i2>cor.length){
    i2=0;
  }
  if(i2<cor.length){
    main.style.background=cor[i2];
    i2++;
  }
}

//------------------------------------

  let valorBloco;
  //funcao para gerar aliatoricamente o valor dos bloco [2,4]
  function valor24(){
    let aliatorio=parseInt(Math.floor(Math.random() * 2));
    if(aliatorio==1){
      return aliatorio+3;
    }else{
      return aliatorio+2;
    }
  }
  //funcao para somar o valor dos blocos adjacentes e com valores iguais  
  function somar(v1,v2){
    return v1+v2;
  }
  //pegar o valor dos blocos
  function pegarValor(){
    document.getElementById;
  }

//esta funcao vai retormar apenas a o bloco com o valor
function criarBloco(v){
  //criar o bloco el, que e o elemento do jogo
  let el = document.createElement('div');
  //colocar o elemento as formatacoes ideias
  el.setAttribute('class','blocoV');
 
  //criacao de um elemnto html p
  let p = document.createElement('p');
  p.innerHTML=v;
  el.appendChild(p)
  return el;
}
///
 let tabuleiro =document.getElementById('lable-play');
function criarNivel(p){
  let blocosTb= document.createElement('div');
  console.log('criou');
  blocosTb.setAttribute('class','bloco');
  blocosTb.setAttribute('id','bloco'+p);
  
  return blocosTb;
}
function criarTabuleiro(){
  
  console.log('22');
  switch(escolha){
    case 'tiny(3X3)':{
      
      tabuleiro.style.gridTemplateColumns='1fr 1fr 1fr';
      tabuleiro.style.gridTemplateRows='repeat(3,1fr)';
      console.log(escolha ,tabuleiro);
      for(i=1;i<=9;i++){alert('ddd'+tabuleiro)
        tabuleiro.appendChild(criarNivel(i));
      }
      break;
    }
    case'classic(4X4)':{
      tabuleiro.style.gridTemplateColumns='repeat(4,1fr)';
      tabuleiro.style.gridTemplateRows='repeat(4,1fr)';
      for(i=1;i<=16;i++){
        tabuleiro.appendChild(criarNivel(i));
      }
      break;
    }
    case'big(5X5)':{
      tabuleiro.style.gridTemplateColumns='repeat(5,1fr)';
      tabuleiro.style.gridTemplateRows='repeat(5,1fr)';
      for(i=1;i<=25;i++){
        tabuleiro.appendChild(criarNivel(i));
      }
      break;
    }
    case'bigger(6X6)':{
      tabuleiro.style.gridTemplateColumns='repeat(6,1fr)';
      tabuleiro.style.gridTemplateRows='repeat(6,1fr)';
      for(i=1;i<=36;i++){
        tabuleiro.appendChild(criarNivel(i));
      }
      break;
    }
    case'huge(7X7)':{
      tabuleiro.style.gridTemplateColumns='repeat(7,1fr)';
      tabuleiro.style.gridTemplateRows='repeat(7,1fr)';
      for(i=1;i<=49;i++){
        tabuleiro.appendChild(criarNivel(i));
      }
      break;
    }
    case'huger(8X8)':{
      tabuleiro.style.gridTemplateColumns='repeat(8,1fr)';
      tabuleiro.style.gridTemplateRows='repeat(8,1fr)';
      for(i=1;i<=64;i++){
        tabuleiro.appendChild(criarNivel(i));
      }
      break;
    }
  }
  

}
//let blocoV= document.getElementById('blocoV');
//posi e o numero de blocos no pabuleiro
let posi = [3][3];
let i=0;
function mover(){
  if(i>=0 && i<+16){
    i++;
  }else{
    i=0;
  }
  
   //b1 serao elemento que albergara o bloco
  let b1 = document.getElementById('bloco'+i);
  console.log(/*b1.getElementsByClassName('blocoV').length*/+'  dddd');
  //teste para ver se o espaço está vasio para entra um bloco
  if(b1.getElementsByClassName('blocoV').length<1){
    //se estiver vasio
    b1.appendChild(criarBloco(valor24()));
  }else{
    if(b1.getAttributeNS){

    }
    console.log('tem mais de dois')
  }
  
  console.log("funcionou");
}
/*
var ts_x;
var ts_y;
let tabuleiro =document.getElementById('lable-play');
tabuleiro.addEventListener('touchstart', //este codigo nao e meu
function f1(e) {
   e.preventDefault();
   var touch = e.changedTouches[0];
   ts_x = touch.pageX;
   ts_y = touch.pageY;
   console.log(ts_x,ts_y);
}, false);

tabuleiro.addEventListener('touchmove',/*este codigo nao e meu*/ /* function(e) {
   e.preventDefault();
   var touch = e.changedTouches[0];
   td_x = touch.pageX - ts_x; // deslocamento na horizontal
   td_y = touch.pageY - ts_y; // deslocamento na vertical
   // O movimento principal foi vertical ou horizontal?
   if( Math.abs( td_x ) > Math.abs( td_y ) ) {
      // é horizontal
      if( td_x < 0 ) {
         // é para esquerda
         console.log('esquerda');
      } else {
         // direita
         console.log('direita');
      }
   } else {
      // é vertical
      if( td_y < 0 ) {
         // cima
         console.log('cima');
      } else {
         // baixo
         console.log('baixo');
      }
   }
}, false);
*/

//function mover1(){
//  let pos ;
//  console.log(pos+' kim');
//
//  var obj = document.getElementById ("sat");
//  / * Catch touch * /
//  obj.addEventListener ("touchstart", função (evento) (
//    if (event.targetTouches.length == 1) {}
//  var touch = event.targetTouches;
//  touchOffsetX = touch.pageX - touch.target.offsetLeft;
//  touchOffsetY = touch.pageY - touch.target.offsetTop;
//  }
//  ), 'falso');
//}