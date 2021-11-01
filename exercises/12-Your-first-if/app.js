var total = prompt('How many km are left to go?');

// Your code below:

if(total > 100){
   return "Are we there yet?"
}
else if (total > 50){
    return "We still have a bit of driving left to go"
}
else if(total <= 50 ){
    return "I'm parking, I see you right now";
}