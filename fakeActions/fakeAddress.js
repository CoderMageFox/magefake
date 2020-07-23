const _ = require('lodash');
import province from '../addressData/province.json'
import town from '../addressData/town.json'
import city from '../addressData/city.json'
import area from '../addressData/area.json'
const GenerateRandomAddress = function () {
    function getSample(item) {
        return _.sample(item)
    }
    const RandomProvince = getSample(province);
    const cityArr = city.filter((city) => {
        return city.province === _.get(RandomProvince,'province')
    })
    const RandomCity = getSample(cityArr)
    const areaArr = area.filter((area) => {
        return area.city === _.get(RandomCity,'city')
    })
    const RandomArea = getSample(areaArr)
    const townArr = town.filter((town) => {
        return town.area === _.get(RandomArea,'area')
    })
    const RandomTown = getSample(townArr)
    return `${_.get(RandomProvince,'name','')}${_.get(RandomCity,'name','')}${_.get(RandomArea,'name','')}${_.get(RandomTown,'name','')}`
}

export default GenerateRandomAddress
