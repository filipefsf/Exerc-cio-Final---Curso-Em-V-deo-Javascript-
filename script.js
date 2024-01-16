
var numeros = []

function adicionar(){
    var num = document.getElementById('txtnum')
    var sel = document.getElementById('selana')
    if (num.value.length==0){                                                       //testa se foi digitado algum número
        alert ('[ERRO] Nenhum número identificado! Por favor, tente novamente!')
        return
    } else if (Number(num.value) < 1 || Number(num.value) > 100){                   //testa se o número está dentro do range de 1-100
        alert ('[ERRO] Verifique se o número está entre 1-100!')
        num.value = ""
        return
    } else if (numeros.indexOf(Number(num.value)) != -1){                           //testa se o número já foi adicionado anteriormente
        alert('[ERRO] Número já adicionado anteriormente! Digite outro número!')
        num.value = ""
        return
    } else {                                                                        //número passou na validação
        let item = document.createElement('option')                                 //cria nova opção para o seletor
        item.text = `Valor ${num.value} adicionado.`                                //coloca o texto de que o valor foi adicionado
        item.value = `sel${num.value}`                                              //útil para PHP
        sel.appendChild(item)                                                       //Faz o item aparecer no seletor
        numeros.push(Number(num.value))                                             //acrescenta o número no array
        num.value = ""
    }
    num.focus()   
}

function finalizar(){
    var num = document.getElementById('txtnum')
    var res = document.getElementById('resposta')
    let soma = 0
    if(numeros.length==0){
        alert('[ERRO] Lista vazia! Por favor, adicione pelo menos um número e tente novamente!')
        num.focus() 
        return
    }
    res.innerHTML = `Ao todo, temos ${numeros.length} números adicionados.<br><br>`
    res.innerHTML+= `O maior valor informado foi o ${Math.max.apply(Math, numeros)}.<br><br>`
    res.innerHTML+= `O menor valor informado foi o ${Math.min.apply(Math,numeros)}.<br><br>`
    
    for(let pos in numeros){
        soma+=numeros[pos]
    }
    res.innerHTML+= `Somando todos os valores, temos ${soma}.<br><br>`
    res.innerHTML+= `A média dos valores digitados é ${soma/(numeros.length)}.`
    num.focus() 
}

function reiniciar(){
    var num = document.getElementById('txtnum')
    var sel = document.getElementById('selana')
    var res = document.getElementById('resposta')
    numeros = []
    res.innerHTML = ""
    sel.innerHTML = ""
    num.focus() 
}