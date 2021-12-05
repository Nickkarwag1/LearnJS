
function stringInUpperCase(str){
   let arr = str.split(' ');
   let newArrayForUpperCase = [];
        for (let i=0; i<arr.length; i++){
                newArrayForUpperCase.push(arr[i].charAt(0).toUpperCase()+arr[i].slice(1));
        }
   return newArrayForUpperCase.join(' ');

}


module.exports = stringInUpperCase;