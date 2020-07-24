const alfy = require('alfy')
import generateResult from './fakeActions/index'
const featureList = [
    {
        title: '生成随机姓名',
        subtitle:`${generateResult.name}`,
        arg: `${generateResult.name}`
    },
    {
        title: '生成随机电话号码',
        subtitle: `${generateResult.mobile}`,
        arg:`${generateResult.mobile}`
    },
    {
        title: '生成随机身份证号',
        subtitle:`${generateResult.IDNum}`,
        arg: `${generateResult.IDNum}`
    },
    {
        title: '生成随机银行信息',
        subtitle: `${generateResult.bankInfo}`,
        arg:`${generateResult.bankInfo}`
    },
    {
        title: '生成随机地址',
        subtitle:`${generateResult.address}`,
        arg:`${generateResult.address}`,
    }
]
class FakeEventBus{
    constructor() {
    }
    //生成随机选择列表主逻辑
    handleInputEventBus() {
        alfy.output(featureList)
    }
}

let fakeEventBus = new FakeEventBus;
(function () {
    fakeEventBus.handleInputEventBus(alfy.input);
})();
