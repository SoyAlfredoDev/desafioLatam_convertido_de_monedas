const option1 = document.querySelector('.option1')
const option2 = document.querySelector('.option2')
const option3 = document.querySelector('.option3')
const btn = document.querySelector('.btn')
const input = document.querySelector('input')
const select = document.querySelector('#select')
const resultado = document.querySelector('.resultado')

async function getData() {
    try {
        const res = await fetch('https://mindicador.cl/api');
        const data = await res.json();
        return data;
    } catch (error) {
        console.log('Error al obtener los datos:', error);
    }
}

btn.addEventListener('click', async () => {
    const data = await getData();
    const nameSelect = select.value;
    const valueInput = input.value

    if (nameSelect == 'cobre') {
        const dolarValue = data.dolar.valor
        const libraValue = data.libra_cobre.valor
        const total = Number(dolarValue) * Number(libraValue) * Number(valueInput)
        resultado.innerHTML = total.toFixed(2)
    }

    else if (nameSelect == 'dolar') {
        const dolarValue = data.dolar.valor
        const total = Number(dolarValue) * Number(valueInput)
        resultado.innerHTML = total.toFixed(2)
    }

    else if (nameSelect == 'euro') {
        const euroValue = data.euro.valor
        const total = Number(euroValue) * Number(valueInput)
        resultado.innerHTML = total.toFixed(2)
    }
})



