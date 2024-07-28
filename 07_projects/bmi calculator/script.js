const form = document.querySelector('form')

form.addEventListener('submit',function(e){
  e.preventDefault();
 const height =  parseInt(document.querySelector('#height').value)
 const weight = parseInt(document.querySelector('#weight').value)
 const meteres = height/100
 
 const result = document.querySelector('#results')
 if(height === '' || height < 0 || isNaN(height)){
  result.innerHTML = 'please give a valid height'
 }
 
 else if(weight === '' || weight < 0 || isNaN(weight)){
  result.innerHTML = 'please give a valid weight'
 }
 else{
   const bmi = weight / (meteres*meteres)
   if(bmi < 18.6){
     result.innerHTML = `You are underweight and your body mass index is ${bmi}`
   }
   else if(bmi > 18.6 && bmi<24.9){
     result.innerHTML = `you are in normal range and your body mass index is ${bmi}`
   }
   else{
     result.innerHTML = `you are overweight and your body mass index is ${bmi}`
   }
 }


})