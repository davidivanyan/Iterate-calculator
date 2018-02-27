const sumInt = (a, b) => {return a + b;}
const subtractionInt = (a, b) => {return a - b;}
const divisionInt = (a, b) => {return a/b;}
const multiplicationInt = (a, b) => {return a*b;}
const power = (a, pow) => {
  if (pow>0)
  {
    for (let i=0;i<pow;i++)
    {
      a *= a ;
    }
    return a;
  }
  else
  {
    for (let i=0;i<absolute(pow);i++)
    {
      a *= a ;
    }
      return 1/a;
  }
   }
const root = (a, pow) => {}
const absolute = (a, b) => {return (a>0)? a:0-a;}
const mod = (a, b) => {return a%b}
const log = (a, base) => {}
const flipSign = (a) => {return 0-a}
const sin = (a) => {}
const cos = (a) => {}
const percent = (a, b) => {return a*b/100}
const integral = (func,a, b,precision) => {}
