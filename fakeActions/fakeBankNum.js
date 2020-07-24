const _ = require('lodash');
const BankData = [
    { name: '工商银行', number: '622202' },
    { name: '农业银行', number: '622848' },
    { name: '建设银行', number: '622700' },
    { name: '交通银行', number: '622262' },
    { name: '中国银行', number: '621661' },
    { name: '光大银行', number: '622666' },
    { name: '民生银行', number: '622622' },
    { name: '广发银行', number: '622556' },
    { name: '招商银行', number: '622588' },
    { name: '平安银行', number: '622155' },
    { name: '中信银行', number: '622689' },
    { name: '华夏银行', number: '622630' },
    { name: '兴业银行', number: '622908' }
]
const GenerateRandomBankInfo =  function() {
   const randomBank = _.sample(BankData);
   const restArr=[];
   //未实装银行卡校验,先凑合用着.只生成19位
    for(let i=0;i<14;i++){
        restArr[i] = _.random(0,9)
    }
    const resultNumber = randomBank.number.concat(restArr.join(''))
    return `${randomBank.name}-${resultNumber}`
}

export default GenerateRandomBankInfo

