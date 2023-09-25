function solve(stringNUM) {

    let number = Number(stringNUM);
    let str = '';

    for (let i = 0; i < number; i++) {

        for (let j = 0; j < number; j++) {

            for (let k = 0; k < number; k++) {

                letter = String.fromCharCode(97 + i)
                str += letter;
                letter = String.fromCharCode(97 + j)
                str += letter;
                letter = String.fromCharCode(97 + k)
                str += letter;
                console.log(str);
                str='';
            }

        }

    }
}
solve('3');