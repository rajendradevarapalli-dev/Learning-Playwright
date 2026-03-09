

function add (num1, num2) {

    console.log (num1 + num2);
}

function sub (num1, num2) {

    console.log(num1 - num2);
}

function calculator (n1,n2,callback) {

    callback(n1,n2);

}

calculator(10,5,sub)


