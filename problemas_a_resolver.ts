//P1
(()=>{

    const addTwoNumbers = (a:number, b:number):number => {
        return a + b;
    }

    (() => {
        console.log(
            addTwoNumbers(2, 4)===(6)
        );
        console.log(
            addTwoNumbers(10, 10)===(20)
        );
    })()

})()

//P2
const addTwoNumbers = (params:{ first:number,second:number }) => {
    return params.first + params.second;
}

(() => {
    console.log(
        addTwoNumbers({
            first: 2,
            second: 4,
        })===(6)
    )

    console.log(
        addTwoNumbers({
            first: 10,
            second: 20,
        })===(30)
    )
})();
