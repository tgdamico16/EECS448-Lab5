function calculate(){
    var entry1 = document.getElementById("entry1").value;
    var entry2 = document.getElementById("entry2").value;
    var result = document.getElementById("result");
    if (entry1.length < 8 || entry2.length < 8){
        result.innerHTML = "Error: Passwords must be at least 8 characters long!";
        result.style.color = "Red";
    }
    else if (entry1 != entry2){
        result.innerHTML = "Error: Passwords do not match!";
        result.style.color = "Red";
    }
    else{
        result.innerHTML = "Passwords match!";
        result.style.color = "Green";
    }
}