// Create a multidimensional array of Students containing the following data for each student:

// Student name, score, subject, term(e.g 1st term). 

// 1. Calculate the average score for each student(1st,2nd & 3rd position)

// 2. Calculate the percentage of each student score. If any student score is about 75% recommenrd the student for a government scholarship

// 3. If any student score is below 40% ask the student to REPEAT the class.

// NOTE: Add atleast 20 individual student data to the multidensional array.

const students = [
    // ['Name', 'Scores', 'Subject',  'Term'],
    ['Bolanle', 80, 'English',  '3rd term'],
    ['Miracle', 60, 'Maths',  '2nd term'],
    ['Kingsley', 20, 'Physics',  '3rd term'],
    ['Bambam', 64, 'Chemistry',  '2nd term'],
    ['Joy', 45, 'History',  '1st term'],
    ['Bright', 70, 'Economic',  '1st term'],
    ['Timothy', 30, 'Physics',  '3rd term'],
    ['Kukere', 51, 'Agri',  '2nd term'],
    ['DUC', 90, 'Geography',  '1st term'],
    ['Blessing',55, 'Home Eco',  '3rd term'],
    ['Gift', 38, 'Govern',  '1st term'],
    ['Delight', 95, 'Liter',  '3rd term'],
    ['Chukwuma', 53, 'Social Study',  '2nd term'],
    ['Loveth', 67, 'Arts',  '3rd term'],
    ['David', 48, 'Biology',  '1st term']
]
students.forEach(ss=>{
    let percent = ((ss[1]/100)*100).toFixed();
    ss.splice(2,0,percent+"%")
})
//console.log(students)
//console.log("Name ","Score ","Subject ","Term"+"\n" +students)
for(std=0; std<students.length; std++){
   // console.log(students[std])

    for(std1=0; std1<students.length; std1++){
       // console.log(students[std])
       
    }
    if(students[std][1]>=70){
        console.log(students[std]+" Congratulation! You have Government Scholarship")
    }else if(students[std][1]<=39){
        console.log(students[std]+" Sorry! You failed, You have to Repeat the class")   
    }else{
        console.log(students[std]+" Congrat! You Passed")
    }

}

 //console.log(students)
 