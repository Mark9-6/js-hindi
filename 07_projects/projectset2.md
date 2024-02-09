const form = document.querySelector('form');
//this usecase will give empty value
// const height = parseInt(document.querySelector('#height).value)
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value); // .value se value mil jati
  const weight = parseInt(document.querySelector('#weight').value); // .value se value mil jati
  const results = document.querySelector('#results'); // .value se value mil jati
  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  }
  else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid height ${weight}`;
  }
  else {
    const bmi = (weight/((height*height)/1000)).toFixed(2)
    //to show the results 
    results.innerHTML = `<span>${bmi}</span>`
  }

  
});
