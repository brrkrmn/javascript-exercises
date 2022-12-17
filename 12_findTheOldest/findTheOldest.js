const findTheOldest = function(people) {
    let oldest = null;
    people.forEach(human => {
        if (!human.yearOfDeath) {
            human.yearOfDeath = 2022;
        };
        if (oldest === null) {
            oldest = human;
        } else {
            let currentAge = (human.yearOfDeath - human.yearOfBirth);
            let oldestAge = (oldest.yearOfDeath - oldest.yearOfBirth);
            if (currentAge > oldestAge) {
                oldest = human;
            }
            console.log(currentAge, oldestAge);
        }
    })
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
