

// Select Elements

const subjectRows = document.querySelectorAll('.row:not(.header)')
const submitBtn = document.querySelector('.submit-btn')
const submitBtnTotal = document.querySelector('.submit-btn-total')
const submitBtnMoyen = document.querySelector('.moyen')
const resultContainer = document.querySelector('.result')
const resultContainerTotal = document.querySelector('.results')
const resultEl = resultContainer.querySelector('span')
const resultElm = document.querySelector('.notes')
// const final = document.querySelectorAll('#final')







const subjectsCount = subjectRows.length
let result = 0
let resultMath = 0
let coefficientsValue = 0
let finalResult
let finalSub = 0
let totalResult
let finModuleNote = 0


submitBtnMoyen.addEventListener('click', () => getNoteMoyen())




// function getMoyen() {
//     subjectRows.forEach((row) => {
//     const final = row.querySelector('#final')
//     const one = +row.querySelector('.one').value
//     const tow = +row.querySelector('.tow').value
//     const three = +row.querySelector('.three').value

//     finalSub = (one + tow + three) / 3
//     // console.log(finalSub)
//     final.innerHTML =   round(finalSub)

//     // console.log(final)

//     // finalSub = array.reduce((acc, curent) => acc + curent, 0)
//     // console.log(finalSub)
// })
// }



function getNoteMoyen() {
  subjectRows.forEach((row) => {
    const final = row.querySelector("#final")
    const one = +row.querySelector('.one').value
    const tow = +row.querySelector('.tow').value
    const three = +row.querySelector('.three').value
    const finModule = +row.querySelector('.module').value


    finalSub = (one + tow + three) / 3
    finModuleNote = (finalSub + finModule) / 3

    console.log(finModuleNote)

    final.innerHTML = round(finModuleNote)

  })
}













submitBtn.addEventListener('click', () => getFinalResult())


function getFinalResult() {

  let yourName = prompt('ما اسمك')
  subjectRows.forEach((row) => {
    const final = +row.querySelector('#final').innerHTML
    const coefficient = +row.querySelector('.coefficient').value
    coefficientsValue += coefficient
    result += final * coefficient
  })

  finalResult = result / coefficientsValue

  resultContainer.classList.add('show')

  if (finalResult >= 10) {
    resultEl.innerText = ` wa ${yourName} wa rak najh asba3 b ${round(finalResult)} rakk naddddi`
  } if (finalResult < 10) {
    resultEl.innerText = ` ta sir yalkasol waaaaaaaaaaa hhhh malk a ${yourName} wax hbil jbti ${round(finalResult)} kan  khask ghir  
    ${round(10 - finalResult)} bax tnjah ziyar rask mra khra ola xof m3a idrissi izid lik xi no9ta hhhhhhh `
  }


  result = 0
  coefficientsValue= 0
  coefficientsValue = 0
}









function round(number) {
  const integer = number.toString().split('.')[0]
  // console.log(integer)
  const fraction = number.toString().split('.')[1]


  if (fraction) {
      return `${integer}.${fraction.slice(0, 2)}`
  } else {
    return number
  }
}





