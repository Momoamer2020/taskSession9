
let grades= [20,30,40,50,60,100]

//function to get average and return T if less than 50
function getAverage(studentGrade)
{
    //calculate sum
    let sum=0;
    studentGrade.forEach(element => {
        sum += element;
    });


    //calculate average
    let ave=0; 
    ave=sum/studentGrade.length;
    console.log(`Average of Student grades is ${ave}` )

    if(ave >= 50)
        return true;
    else
        return false;

}


//function to add 10 to grades < 100
function getDouble(studentGradeArray)
{
let newGradArray = studentGradeArray.map(element => {
    if (element <100)
        return element +10;
})

return newGradArray;
}

// function to Filter array and return grades >=50
function filterPassed(gradesArray)
{
    let passedGrads= gradesArray.filter(element=> {
        if(element >= 50)
            return element 
    })
    return passedGrads;
}

console.log(`Student original grades are ${grades}`)
console.log(`is grade Average >= 50 is ${getAverage(grades)}`);
console.log(`add 10 to elemets < 50  new array is = ${getDouble(grades)}`);
console.log(`grades array >= 50 are ${filterPassed(grades)}`)