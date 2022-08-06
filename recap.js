function inchfeetConvert(value)
{
    var conv = value/12;
    return conv;
}

const dadaInches = 60;
const dadaDeet = inchfeetConvert(dadaInches);
console.log(dadaDeet);

const nanaInches = 144;
const nanaFeet =inchfeetConvert(144);
console.log(nanaFeet);