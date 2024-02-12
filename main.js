
const afrom0to9 = (A, x) => {
  let a = 0;
  for(let i=0; i<=9; i++) {
    if(((A*10+i)*i) <= x) {
      a = i;
    }else{
      break;
    }
  }
  
  return a;
}

function calculateSqrt(str) {
  console.log('str: '+str)

  const splitDot = str.split('.');
  console.log('splitDot: '+splitDot)
  
  let arr = []
  for(let i = splitDot[0].length-1; i >= 0; i-=2) {
    arr.unshift((i-1>=0 ? splitDot[0][i-1] : '')+splitDot[0][i])
  }


  console.log('arr: '+arr)

  //---------------------------------

  let A = 0;
  let x = 0;
  let aArr = []
  for(let i = 0; i < 6; i++) {
    console.log('-----------------')

    console.log(x, arr[i])
    x = x*100 + parseInt(arr[i]);
    console.log('x: '+x)
    const a = afrom0to9(A, x)
    aArr.push(a)
    console.log(a)
    const temp = (A*10+a)
    console.log('temp: '+temp)
    const sub = temp*a;
    console.log('sub: '+sub)

    x = x - sub;
    console.log('new x: '+ x)
    A = temp + a;
    console.log('new A: '+A)
  }
  
  console.log('--------------')
  console.log(aArr)
  console.log('--------------')


}

calculateSqrt('43600000000')
// calculateSqrt('43642.000000')
// calculateSqrt('.436')

// console.log(afrom0to9(0,4))