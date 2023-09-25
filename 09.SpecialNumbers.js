function solve(number) {
    

    for (let i = 1; i <= number; i++) {

        let sum = i % 10 + parseInt(i / 10);

        digitI10=i % 10; //Взема последната цифра от дадено число
        digitidel10=parseInt(i / 10); //премахва последната цифра от дадено число 

        if (sum==5 || sum==7 || sum==11) {
            console.log(`${i} -> True`);
        }else{
            console.log(`${i} -> False`);
        }
    }
    
}
solve(15);
//solve(20);