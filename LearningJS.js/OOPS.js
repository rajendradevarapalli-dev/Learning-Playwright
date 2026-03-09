
/*===============================================================================

1. Encapsulation:

class employee {
     employeename;
     employeeplace;
     employeeid;

     employeeDetails( empname,empplace,empid) {

        this.employeename = empname;
        this.employeeplace = empplace;
        this.employeeid = empid;
     }
     
     printMessage() {
        console.log("This is sample massage");

     }

     printGreetMessage() {

        console.log(this.employeename, this.employeeplace, this.employeeid);

     }


    }


    const emp = new employee();

    emp.employeeDetails("Rajendra", "Bengaluru", 324235345);

    emp.printGreetMessage();

    ================================================================================*/



//2.Inheritance:



class A {

    x=10;
    y =10;

    m1() {

    console.log("This is method 1");

    }

    m2() {

    console.log("This is method 2");
    
    }

    m3() {

    console.log("This is method 3");
    
    }

    m4() {

    console.log("This is method 4");
    
    }
}

class B extends A { 

     a=10;
     b=5;

     m5() {

    console.log("This is method 5");
    
    }
    m6() {

    console.log("This is method 6");
    
    }
}


const obj = new A();

//obj.m6()

console.log(obj.x)
   