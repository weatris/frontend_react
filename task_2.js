
function CheckAmountOfOddNumbers(arr){
    if(arr.length===0)
        return 'array should not be empty';
    return arr.filter(
        function (e) {
            return e<0;}).length;
}


export default  CheckAmountOfOddNumbers;