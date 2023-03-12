function calcular (){

var n = window.document.getElementById('num')
var tab = window.document.getElementById('tab')

    if (n.value.length == 0){
        window.alert('Por favor, digite um número!')
    }else{
        n = Number(n.value)
        var c = 1
        tab.innerHTML = ''

        while(c <= 10 ){
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++

        }
    }

}



