const GenerateIDNum = function () {
    // 生成随机数字，max限制最大值，base限制最小值
    function getRandom(max, base) {
        return Math.floor(Math.random() * max + (base ? base : 0));
    }

    // 根据前17位生成末位
    function cnNewID(idcard) {
        let arrExp = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]; // 加权因子
        let arrValid = [1, 0, "X", 9, 8, 7, 6, 5, 4, 3, 2]; // 校验码
        let sum = 0, idx;
        for (let j = 0; j < 17; j++) {
            // 对前17位数字与权值乘积求和
            sum += parseInt(idcard[j], 10) * arrExp[j];
        }
        return arrValid[sum % 11];
    }

    let idcard = '';
    for (let i = 0; i < 18; i++) {
        if (i < 6) {
            idcard += getRandom(10)
        } else if (i === 6) {
            idcard += getRandom(2, 1) //年份第一位仅支持1和2
        } else if (i === 7) {
            idcard += idcard[6] === '1' ? 9 : 0;//两位年份规则，仅支持19和20
        } else if (i === 8) {
            idcard += idcard[6] === '1' ? getRandom(7, 3) : getRandom(2); //三位年份规则，仅支持193-199、200、201这些值
        } else if (i === 9) {
            idcard += getRandom(10) //四位年份规则,0-9
        } else if (i === 10) {
            idcard += getRandom(2);//首位月份规则
        } else if (i === 11) {
            idcard += idcard[10] === '0' ? getRandom(9, 1) : getRandom(3);//末位月份规则
        } else if (i === 12) {
            if (idcard.substr(8, 2) % 4 !== 0) {//首位日期规则，闰年没有30几号
                idcard += getRandom(4, 0);
            } else {
                idcard += getRandom(3, 0);
            }
        } else if (i === 13) {
            if (idcard[12] === 0) {//末位日期规则
                idcard += getRandom(9, 1);
            } else if (idcard[12] > 0 && idcard[12] < 3) {
                if (idcard.substr(8, 2) % 4 !== 0 && idcard.substr(10, 2) === '02') { // 判断闰年2月没有29号
                    idcard += getRandom(9, 1);
                } else {
                    idcard += getRandom(10);
                }
            } else {

                idcard += getRandom(2);
            }
        } else if (i > 13 && i < 17) {
            idcard += getRandom(10)
        } else if (i === 17) {

            idcard += cnNewID(idcard);
        }
    }
    return idcard;
}

export default GenerateIDNum
