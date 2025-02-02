function compute()
{
    // Calculate interest

    // Get form values
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var year = new Date().getFullYear()+parseInt(years);

    // Calculation
    var interest = principal * years * rate /100;
    
    // Concatenate result
    const resultString =  `If you deposit <mark>${principal.replace(/^0+/, '')}</mark>,<br />` +
                        `at an interest rate of <mark>${rate}%</mark>.<br />` +
                        `You will receive an amount of <mark>${interest}</mark>,<br />` + 
                        `in the year <mark>${year}</mark>`;

    // Write result
    document.getElementById("result").innerHTML=resultString;
}

function tryAgain(){
    // Prepare form for next entry
    alert("Enter a positive number");
    document.getElementById("principal").value = "";
    principal.focus();
    document.getElementById("result").innerText = "";
}

function updateRate() 
{
    // Update shown rate value
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=`${rateval}%`;
}

function checkdata() {
    // Check if amount is a positive number
    let value = document.getElementById("principal").value;

    if (value == "" || value <= 0) {
        tryAgain();
        return false;
    }

    return true;
}
        
