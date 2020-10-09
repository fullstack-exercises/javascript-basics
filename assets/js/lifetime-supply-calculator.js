const calculateSupply = function(age, numPerDay) {
    const maxAge = 100;
    const totalNeeded = numPerDay * 365 * (maxAge - age);
    let message =
        "You will need " +
        totalNeeded +
        " cups of tea to last you until the ripe old age of " +
        maxAge;
    console.log(message);
};

calculateSupply(14, 2);
calculateSupply(27, 6);
calculateSupply(45, 13);