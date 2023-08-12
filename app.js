// add submit event to the form
document.getElementById('loan-form').addEventListener('submit', function (e) {
  // hide results
  document.querySelector('.results').style.display = 'none'
  // show loader
  document.querySelector('.loading img').style.display = 'block'
  
  setTimeout(calculateResults, 2000)

  e.preventDefault()
})

//calculateResults
function calculateResults() {
   // UI VARS
   const amount = document.getElementById('amount')
   const interest = document.getElementById('interest')
   const years = document.getElementById('years')

   const monthlyPayment = document.getElementById('monthly-payment')
   const totalPayment = document.getElementById('total-payment')
   const totalInterest = document.getElementById('total-interest')

   const principal = parseFloat(amount.value)
   const calculatedInterest = parseFloat(interest.value) / 100 / 12
   const calculatedYears = parseFloat(years.value) * 12

   // COMPUTE MONTHLY PAYMENT
   const x = Math.pow(1 + calculatedInterest, calculatedYears)
   const monthly = (principal*x*calculatedInterest)/ (x-1)

   if (isFinite(monthly)) {
      monthlyPayment.value = monthly.toFixed(2)
      totalPayment.value = (monthly*calculatedYears).toFixed(2)
      totalInterest.value = ((monthly*calculatedYears)-principal).toFixed(2)
      // show results
        document.querySelector('.results').style.display = 'block'
     // hide loader
        document.querySelector('.loading img').style.display = 'none'
   } else {
     showError('Please check your numbers')
   }
}

// showError
function showError(error) {
     // hide results
     document.querySelector('.results').style.display = 'none'
     // hide loader
        document.querySelector('.loading img').style.display = 'none'
    // create div element
    const errorDiv = document.createElement('div')
    // get container and heading 
    const container = document.querySelector('.container')
    const heading = document.querySelector('.heading')
    // add className
    errorDiv.className = 'error'
    // create textnode and append
    errorDiv.appendChild(document.createTextNode(error))
    // insert before heading
    container.insertBefore(errorDiv, heading)
    setTimeout(clearError, 2000)
    // console.log(errorDiv)
}

// clearError
function clearError() {
    document.querySelector('.error').remove()
}










