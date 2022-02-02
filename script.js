function compute()
{
    var resultString = "";
    var principal = document.getElementById("principal").value;

    if (principal <= 0 || principal == null){
        alert("Enter a positive number");
    }

    else{
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;

        var interest = principal * years * rate /100;
        var year = new Date().getFullYear()+parseInt(years);

        resultString =  `If you deposit principal ${principal},\n` +
                        `at an interest rate of ${rate}%.\n` +
                        `You will receive an amount of ${interest},\n` + 
                        `in the year ${year}`;
    }
    

    document.getElementById("result").innerText=resultString;

}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
     
