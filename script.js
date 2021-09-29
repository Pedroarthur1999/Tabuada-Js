function tabuada() {

    const num = document.getElementById('entrada');
    let n1 = Number(num.value);
    const resultado = document.getElementById('tab1');
    const resF = document.getElementById('res')

    if (Number(num.value.lenght) == 0) {
        window.alert("Insira os dados e tente novamente")
    } else {

        let i = Number;
        let cont = Number(n1);
        let valorFinal = Number;
        resultado.innerHTML = ''
        for (i = 1; i <= 10; i++) {
            valorFinal = cont * i;
            let item = document.createElement('option')
            item.value = `tab${i}`
            item.text += ` ${cont} x ${i} = ${valorFinal} `
            resultado.appendChild(item)
        }
    }
}

function sumirBorda() {
    //tilo = document.getElementById('tab1').style.borderColor = '#000000 '

}