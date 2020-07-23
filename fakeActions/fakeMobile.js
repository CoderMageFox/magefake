const _ = require('lodash');
const MobileHeader = ["130", "131", "132", "133", "135", "137", "138", "170", "176","187", "189"]

const GenerateRandomMobile =  function() {
    const restArr = [];
    for(let i=0;i<8;i++){
        restArr[i] = _.random(0,9)
    }
    return [..._.sample(MobileHeader).concat(restArr.join(''))].join('')

}

export default GenerateRandomMobile
