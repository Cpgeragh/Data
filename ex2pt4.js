
//Creates array with ints
const ages = [25, 31, 42, 77];

//multiplys every number under 70 by 2
let array = ages.map((item) => {
    if (item < 70) {
        return item * 2;
    }

    else {
        return item;
    }
})

//displays answer to console
console.log(array);