document.getElementById('loan-form').addEventListener('submit',calculateResults);

function calculateResults(e){
    
const amount=  document.getElementById('amount');
const interest= document.getElementById('interest');
const years= document.getElementById('years');
const monthly= document.getElementById('monthly-payment');
const total= document.getElementById('total-payment');
const totalInterest= document.getElementById('total-interest');

const principal= document.parseFloat(amount.value);
const calculatedInterest= document.parseFloat(interest.value)/100/12;
const calculatedPayment= document.parseFloat(years.value)*12;
const x= Math.pow(1+calculatedInterest,calculatedPayment);
const monthlyPl= (principal*x*calculatedInterest)/(x-1);

if(isFinite(monthly)){
    monthly.value= monthlyPl.toFixed(2);
    total.value= (monthlyPl*calculatedPayment).toFixed(2);
    totalInterest= ((monthlyPl*calculatedPayment) -principal).toFixed(2);

}else{
console.log('please check your numbers')
}
e.preventDefault();
}