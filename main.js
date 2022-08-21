const  cardBoard  =  documento . querySelector ( "#cardboard" ) ;
const  imgs  =  [
  "elefante.svg" ,
  "gato.svg" ,
  "girafa.svg" ,
  "beija-flor.svg" ,
  "lobo.svg" ,
  "tigre.svg"
] ;

deixe  cardHTML  =  "" ;

imgs . forEach ( img  =>  {
  cardHTML  +=  `<div class="memory-card" data-card=" ${ img } ">
    <img class="front-face" src="img/ ${ img } "/>
    <img class="back-face" src="img/js-badge.svg">
  </div>` ;
} ) ;

placa de cartão . innerHTML  =  cardHTML  +  cardHTML ;

/** Fim da Renderização HTML */

const  cards  =  documento . querySelectorAll ( ".memory-card" ) ;
deixe  firstCard ,  secondCard ;
deixe  lockCards  =  false ;

função  flipCard ( )  {
  if  ( lockCards )  return  false ;
  isso . classList . add ( "virar" ) ;

  if  ( ! firstCard )  {
    firstCard  =  this ;
    retornar  falso ;
  }

  segundoCard  =  this ;

  checkForMatch ( ) ;
}

função  checkForMatch ( )  {
  vamos  isMatch  =  firstCard . conjunto de dados . cartão  ===  segundoCartão . conjunto de dados . cartão ;

  ! é Match ? unFlipCards ( ) : resetCards ( isMatch ) ;
}

função  unFlipCards ( )  {
  lockCards  =  true ;
  setTimeout ( ( )  =>  {
    primeiroCartão . classList . remove ( "virar" ) ;
    segundoCartão . classList . remove ( "virar" ) ;

    resetCards ( ) ;
  } ,  1000 ) ;
}

function  resetCards ( isMatch  =  false )  {
  if  ( isMatch )  {
    primeiroCartão . removeEventListener ( "clique" ,  flipCard ) ;
    segundoCartão . removeEventListener ( "clique" ,  flipCard ) ;
  }

  [ firstCard ,  secondCard ,  lockCards ]  =  [ null ,  null ,  false ] ;
}

cartões . forEach ( card  =>  card . addEventListener ( "click" ,  flipCard ) ) ;
