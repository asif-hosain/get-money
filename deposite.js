document.getElementById('btn-deposite').addEventListener('click',function(){

    // get input deposite
    const inputDepo = document.getElementById('depo').value
    const inputDepoFloat = parseFloat(inputDepo);
    
    // Current deposite amount
    
    const depoAdd = document.getElementById('depo-amount').innerText
    const depoAddFloat = parseFloat(depoAdd)
    
    // new depo
    
    const updatedDepo = depoAddFloat + inputDepoFloat;
    // set updated depo
    
    document.getElementById('depo-amount').innerText=updatedDepo

    // clear input depo field

    document.getElementById('depo').value=""


    // balance update

    const balance = document.getElementById('bal').innerText
    const balanceFloat = parseFloat(balance);
    console.log(balanceFloat)
    
    const balTotal = balanceFloat+ updatedDepo;
    // update total balance

    document.getElementById('bal').innerText=balTotal
    
})

document.getElementById('btn-withdraw').addEventListener('click',function(){

    // get input deposite
    const inputDepo = document.getElementById('withd').value
    const inputDepoFloat = parseFloat(inputDepo);
    
    // Current deposite amount
    
    const depoAdd = document.getElementById('withd-amount').innerText
    const depoAddFloat = parseFloat(depoAdd)
    
    // new depo
    
    const updatedDepo = depoAddFloat + inputDepoFloat;
    // set updated depo
    
    document.getElementById('withd-amount').innerText=updatedDepo

    // clear input depo field

    document.getElementById('withd').value=""


    // balance update

    const balance = document.getElementById('bal').innerText
    const balanceFloat = parseFloat(balance);
 
    
    const balTotal = balanceFloat- updatedDepo;
    // update total balance

    document.getElementById('bal').innerText=balTotal
    
})

