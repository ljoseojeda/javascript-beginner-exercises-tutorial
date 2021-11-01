/* This exercise is almost identical to 15-Random numbers - consider merging them here and using another concept for 15? */

// Declare your function here
function generateRandom(num1, num2)
{
    return Math.floor((Math.random() * 9) + 0);
}

console.log(generateRandom(0, 9));