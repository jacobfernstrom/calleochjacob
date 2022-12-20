function generate(quantity,first,last){
    var numbers = [];
    for(i = 0; i < quantity; i++){
        var rand_number = Math.floor((Math.random() * last + 1) + first);
        if(numbers.includes(rand_number)){
        i--;
        } else{
            numbers.push(rand_number)
        }
    }   
    numbers.sort(function(a,b){return a - b})
    console.info(numbers)
    document.getElementById("numbers").innerHTML = numbers.join(" - ");
}




