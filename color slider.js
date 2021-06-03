let Rvalue = document.querySelector('.Rvalue')
let Gvalue = document.querySelector('.Gvalue')
let Bvalue = document.querySelector('.Bvalue')
let Rrange = document.querySelector('.Rrange')
let grid = document.querySelector('.grid')
const HEX = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
const hexNumber = []

grid.addEventListener('input', counting)
function counting(event) {
  // 使每一個色塊產生對應數字
  if (event.target.matches('.Rrange')) {
    Rvalue.innerHTML = event.target.value

  } else if (event.target.matches('.Grange')) {
    Gvalue.innerHTML = event.target.value
  } else if (event.target.matches('.Brange')) {
    Bvalue.innerHTML = event.target.value
  }
  // 背景變色
  $(".card-body").css("background-color", `rgb(${Rvalue.innerHTML},${Gvalue.innerHTML},${Bvalue.innerHTML})`)
  // 顯示16進制
  convert(Bvalue.innerHTML)
  convert(Gvalue.innerHTML)
  convert(Rvalue.innerHTML)
  $('.HEX').html(`#${hexNumber[0]}${hexNumber[1]}${hexNumber[2]}${hexNumber[3]}${hexNumber[4]}${hexNumber[5]}`)
  hexNumber.splice(0, hexNumber.length) //清空陣列
}

function convert(decimal) {
  if (decimal < 16) {  //1~16之間
    let b = decimal % 16
    HEXword = HEX[b]
    hexNumber.unshift(HEXword)
    hexNumber.unshift(HEX[0])
  }
  let a = parseInt(decimal / 16)  //先除一遍用parseInt取整數，捨去小數

  //decimal 2 hex 參考資料 >>> https://www.footmark.info/introduction-to-computer/digital-system-conversion/#fm-chapter-3-3-1
  let b = decimal % 16
  while (a !== 0) {
    let HEXword = HEX[b]
    hexNumber.unshift(HEXword)  //推進陣列
    b = a % 16  //b要放前面否則a先被洗掉之後丟給b那b是錯誤的
    a = parseInt(a / 16)
    if (a === 0) {              //若a為零還要再輸出一次餘數，否則會少輸出一個
      HEXword = HEX[b]
      hexNumber.unshift(HEXword)
    }
  }
  // return hexNumber
}
