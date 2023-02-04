const studentResume = 
    {
        name : "Rajarajan",
        age : 22,
        higher_education : "B.E-Mechanical Engineering",
        year_of_passing : 2022 ,
        current_company : "Tech Mahindra",
        experience : "8 Months",
        CGPA : 8.28
    }

    console.log("------------For loop-----------------");
    var studentKeys = Object.keys(studentResume);

    for(let i=0; i<studentKeys.length; i++){
        console.log(studentKeys[i] , studentResume[studentKeys[i]])
    }

    console.log("-----------------For each------------");
    studentKeys.forEach((val, idx, accArr)=>{
        console.log(studentKeys[idx],studentResume[val]);
    })

    console.log("-------------For in------------------");
    for(obj in studentResume){
        console.log(obj, studentResume[obj])
    }

    console.log("--------------for of------------------");
    for(arr of studentKeys){
        console.log(arr, studentResume[arr]);
    }