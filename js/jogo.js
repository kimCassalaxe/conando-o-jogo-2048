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



//mudar a cor do ambiente
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

let tabuleiro =document.getElementById('lable-play');
//------------------------------------

  let valorBloco;
  //funcao para gerar aliatoricamente o valor dos bloco [2,4]
  function valor24(){
    let aleatorio=parseInt(Math.floor(Math.random() * 2));
    if(aleatorio==1){
      return aleatorio+3;
    }else{
      return aleatorio+2;
    }
  }
  function valorAleatorio16(){
    return parseInt(Math.floor(Math.random() * 4+1));
  }
  //funcao para somar o valor dos blocos adjacentes e com valores iguais  
  function somar(v1,v2){
    return v1+v2;
  }
  //pegar o valor dos blocos
  function pegarValor(){
    document.getElementById;
  }

//atualizar a pagina
function refresh(){
  location.reload();
}
document.getElementById('refresh').addEventListener('click',refresh);

//esta funcao vai retormar apenas a o bloco com o valor
function criarBloco(v){
  //criar o bloco el, que e o elemento do jogo
  let el = document.createElement('div');
  //colocar o elemento as formatacoes ideias
  el.setAttribute('class','blocoV');
 
  //criacao de um elemnto html p
  let p = document.createElement('p');
  p.innerHTML=v;
  //adiciona o elemento p na div
  el.appendChild(p)
  return el;
}
///
function criarEspaconNoTabuleiro(p1,p2){
  let blocosTb= document.createElement('div');
  blocosTb.setAttribute('class',String(p1)+String(p2)+" bloco");
  blocosTb.setAttribute('id',String(p1)+String(p2));
  console.log('criou');
  return blocosTb;
  
}


//esta funcao cria o tabuleiro com os espaccos 
function criarTabuleiro(){  
  switch('classic(4X4)'){
    case 'tiny(3X3)':{
      console.log('22');
      tabuleiro.style.gridTemplateColumns='1fr 1fr 1fr';
      tabuleiro.style.gridTemplateRows='repeat(3,1fr)';
      console.log(escolha ,tabuleiro);
      for(i=1;i<=9;i++){
        tabuleiro.appendChild(criarEspaconNoTabuleiro(i));
      }
      break;
    }
    case'classic(4X4)':{
      tabuleiro.style.gridTemplateColumns='repeat(4,1fr)';
      tabuleiro.style.gridTemplateRows='repeat(4,1fr)';
      for(i=1;i<=4;i++){
        for(j=1;j<=4;j++){
          tabuleiro.appendChild(criarEspaconNoTabuleiro(i,j));
        }
      }
      break;
    }
    case'big(5X5)':{
      tabuleiro.style.gridTemplateColumns='repeat(5,1fr)';
      tabuleiro.style.gridTemplateRows='repeat(5,1fr)';
      for(i=1;i<=25;i++){
        tabuleiro.appendChild(criarEspaconNoTabuleiro(i));
      }
      break;
    }
    case'bigger(6X6)':{
      tabuleiro.style.gridTemplateColumns='repeat(6,1fr)';
      tabuleiro.style.gridTemplateRows='repeat(6,1fr)';
      for(i=1;i<=36;i++){
        tabuleiro.appendChild(criarEspaconNoTabuleiro(i));
      }
      break;
    }
    case'huge(7X7)':{
      tabuleiro.style.gridTemplateColumns='repeat(7,1fr)';
      tabuleiro.style.gridTemplateRows='repeat(7,1fr)';
      for(i=1;i<=49;i++){
        tabuleiro.appendChild(criarEspaconNoTabuleiro(i));
      }
      break;
    }
    case'huger(8X8)':{
      tabuleiro.style.gridTemplateColumns='repeat(8,1fr)';
      tabuleiro.style.gridTemplateRows='repeat(8,1fr)';
      for(i=1;i<=64;i++){
        tabuleiro.appendChild(criarEspaconNoTabuleiro(i));
      }
      break;
    }
  }
  

}
//posi e o numero de blocos no pabuleiro
let posi = [4][4];


//esta foncao coloca o bloco no espaco certo

function inserirBloco(){
  do{
//b1 sera elemento que albergara o bloco que foi criado 
//na foncao criarEspaconNoTabuleiro()
let b1 = document.getElementById(String(valorAleatorio16())+String(valorAleatorio16()));
 
  if(b1.children.length==0){
    //se o espaço estiver vasio entao coloca o bloco
    b1.appendChild(criarBloco(valor24()));
    break;
  }
  else{
    console.log(b1.children.length);
    continue;
  }
  }while(b1.children.length<=15);  
}
function calcular(x,y){
  let elmentoEx = [];
  let elmentoInt = [];
  if(x<200){
    //vai pegar todos elementos mais a esquerda
    for (let index2 = 1; index2 <=4; index2++) {
      for (let index1 = 4; index1 >=1; index1--) {
      let b2= document.getElementById(String(index2)+String(index1));
      if(b2.children.length==0){continue;}
      else if(b2.children.length!=0 && String(index2)+String(index1)=='14'){continue}
      else{
        //vai pegar todos elementos adjacente 
        b2.insertAdjacentElement(index1+1,b2.children[0]);
      } 
    }
    

    }
  }
  //if(elmentoInt[0].lastChild.lastChild.innerHTML==elmentoEx[0].lastChild.lastChild.innerHTML){
  //  somar(parseInt(elmentoEx[0].lastChild.lastChild.innerHTML),parseInt(elmentoInt[0].lastChild.lastChild.innerHTML))
  //}
  
}
let i=0;
function mover(){
  
}
//document.querySelector('body').addEventListener('mousemove', function(event) {
//  var posX = event.clientX,
//      posY = event.clientY;
//});


//Você pode usar o evento click ao invés de mousemove.

var lastClickPosition;

document.addEventListener('load', storePosition, true);
function storePosition(e) {
  lastClickPosition = { x: e.pageX, y: e.pageY };
  console.log('entrou');
  inserirBloco()
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

