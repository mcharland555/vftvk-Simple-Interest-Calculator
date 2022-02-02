function compute()
{
    var resultString = "";
    var principal = document.getElementById("principal").value;

    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);

    const resultString =  `If you deposit principal <mark>${principal}</mark>,<br />` +
                        `at an interest rate of <mark>${rate}%</mark>.<br />` +
                        `You will receive an amount of <mark>${interest}</mark>,<br />` + 
                        `in the year <mark>${year}</mark>`;

    document.getElementById("result").innerHTML=resultString;
}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=`${rateval}%`;
}

function validateForm() {
  let amount = document.forms["calculatorForm"]["amount"].value;
  if (amount == "" || amount <= 0) {
    alert("Enter a positive number");
    return false;
  }
  compute()
}
        
