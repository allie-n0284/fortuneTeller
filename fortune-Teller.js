const randomizer = num => {
    return Math.floor(Math.random() * num)
};

const fortuneInfo = {
    specialSymbol: ['star', 'diamond', 'horseshoe', 'heart', 'clover', 'rainbow'],
    luckyColor: ['pink', 'blue', 'green', 'purple', 'silver', 'gold'],
    output: ['good luck', 'bad luck', 'great luck', 'rotten luck', 'no luck at all', 'ok luck'],
    advice: ['try something new today', 'take a personal day', 'curl up with a good book', 'call a friend', 'play more', 'adopt a pet']
};

let myFortune = [];

for(let prop in fortuneInfo) {
    let optionInd = randomizer(fortuneInfo[prop].length)
};

switch (prop) {
    case 'specialSymbol':
        myFortune.push(`Your special symbol is ${fortuneInfo[prop][optionInd]}.`)
        break;
        case 'luckyColor':
            myFortune.push(`Your lucky color currently is ${fortuneInfo[prop][optionInd]}.`)
            break;
            case 'output':
                myFortune.push(`Today you're having ${fortuneInfo[prop][optionInd]}.`)
                break;
                case 'advice':
                    myFortune.push(`So, you should ${fortuneInfo[prop][optionInd]}!`)
                    break;
                    default:
                    myFortune.push('Oops something went wrong! Please try again!')
                    break;
}

const formatFortune = myFortune => {
    const fortune = myFortune.join('/n')
    console.log(fortune)
};

const tellMyFortune = formatFortune(myFortune);