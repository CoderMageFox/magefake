import GenerateRandomName from './fakeName'
import GenerateRandomMobile from './fakeMobile'
import GenerateRandomBankInfo from './fakeBankNum'
import GenerateRandomAddress from './fakeAddress'
import GenerateIDNum from './fakeIDNum'
const generateResult = {
    name:GenerateRandomName(),
    mobile:GenerateRandomMobile(),
    bankInfo:GenerateRandomBankInfo(),
    address:GenerateRandomAddress(),
    IDNum:GenerateIDNum(),
}

export default generateResult
