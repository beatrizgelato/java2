const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const #outResp2 = document.querySelector("#outResp2")


//ouvinte


frm.addEventListener("submit", (e)=>{
    e.preventDefault ()

    const valor = Numbe(frm.inValor.value)
    resp1.innerText ='Valor da compra: R$ ${valor.toFixed(2)}' //valor

    let valParcelas                          //valor das parcelas
    let numParcelas = Math.floor(valor / 20) //numero das parcelas

    //parcelamento máximo em 6 x 
          if(numParcelas > 6){
            valParcelas = valor / 6
            resp2.innerText ='Pode pagar em: 6 x de R$ ${valParcelas.toFixed(2)}
    // Quando o valor for de no mínimo uma parcela 
          }else if(numParcelas >=1){

     //para valores entre 2 e 6 parcelas
            } else { 
                valParcelas = valor/numParcelas
                resp2.innerText = 
                