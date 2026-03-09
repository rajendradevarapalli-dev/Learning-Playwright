
/*
class calculator {

    x = "Raju";
    y = "Rajendra";

    add(num1, num2) {

        console.log(num1 + num2);
    }

    subtract(num1, num2) {

        console.log(num1 - num2);
    }

    divide(num1, num2) {

        console.log(num1 / num2);
    }
}

const cal = new calculator();

cal.add(20,10);
cal.subtract(20,10);
cal.divide(20,10);
console.log(cal.x)


const cal1 = new calculator();

cal1.add(30,10);
cal1.subtract(30,10);
cal1.divide(30,10);
console.log(cal1.x)        */




// class calculator {

//     constructor(num1,num2){

//         console.log(num1+num2);

//     }
// }

// const cal = new calculator(20,10);



class student {

    static y = "rajendra";

    m1(){

        console.log("This is method 1");
    }

    static  m2(){

        console.log("This is method 2");
        this.m1();
    }

     m3(){

        console.log("This is method 3");
    }

     static m4(){

        console.log("This is method 4");
        this.m1();

    }


     m5(){

        console.log("This is method 5");
    }

}


const student1 = new student();

student.m2();

// console.log(student.y);


student.m4();