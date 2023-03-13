function calcular (){

var n = window.document.getElementById('num')
var tab = window.document.getElementById('tab')

    if (n.value.length == 0){
        window.alert('Por favor, digite um número!')
    }else{
        n = Number(n.value)
        tab.innerHTML = ''

        /*while(c <= 10 ){
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++*/

        for(var c = 1; c <=10; c++){
            var item = document.createElement('option')
            item.text += `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
        }

   }

}
