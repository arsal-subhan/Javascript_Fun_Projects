const calculateBtn = document.querySelector('#calculate_bmi');
const bmiResults = document.querySelector('#bmi_result');

const form = document.querySelector('form');

// Calling a arrow function event. 
calculateBtn.addEventListener('click', (event) => {

    const weight = document.querySelector('#weightField').value;
    const height = document.querySelector('#heightField').value;

// To check if user entered the values or not
    if(weight === '' || height === '')   {

        return alert ('Please enter height and weight both');
    } 

// Formulae to calculate BMI 
   const result = weight / (height*height);

   let bmiMsg;
   // Boot strap color.
   let msgColor = 'text-danger';

   if(result < 18.5 ) {
       bmiMsg = 'Thin'; 
   } 
   
   else if ( result >= 18.5 &&  result <= 25 ) {
        bmiMsg = 'Normal';
        msgColor = 'text-success';
   } 
   
   else if ( result >= 25 &&  result <= 30 ) {
    bmiMsg = 'Overweight';
    
   } 
   
   else if ( result > 30 ) {
    bmiMsg = 'Obese';
    
   }
   
bmiResults.innerHTML = `<p id="bmi_result">BMI = <b>${Math.round(result * 100) / 100}</b>(<span class="${msgColor}"><b>${bmiMsg}</b></span>)</p>`;

});

// Prevent page from loading 
// instead of e - (event) can also be added .
 form.addEventListener('submit', e => {
     e.preventDefault();
 })