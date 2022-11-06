var data = 0;
var action = "";
var actionCleared = false;

function numberClick(num)
{
    if (action != "" && actionCleared == false)
    {
        document.getElementById("result").innerHTML = '';
        actionCleared = true;
    }

    if (num == '.' && document.getElementById("result").innerHTML.indexOf('.') !== -1)
        return;

    if (num == '.' && document.getElementById("result").innerHTML == '0')
    {
        document.getElementById("result").innerHTML += num;
        return;
    }

    if (document.getElementById("result").innerHTML == '0')
        document.getElementById("result").innerHTML = '';


    document.getElementById("result").innerHTML += num;
}

function clearResult()
{
    document.getElementById("result").innerHTML = '0';
    action = "";
}

function calcResult()
{
    var firstData = parseFloat(data);
    var secondData = parseFloat(document.getElementById("result").innerHTML);

    switch (action)
    {
        case "plus":
            document.getElementById("result").innerHTML = firstData + secondData;
            break;
        case "minus":
            document.getElementById("result").innerHTML = firstData - secondData;
            break;
        case "multiply":
            document.getElementById("result").innerHTML = firstData * secondData;
            break;
        case "divide":
            document.getElementById("result").innerHTML = firstData / secondData;
            break;
    }
    
    action = "";
}

function funcPlus()
{
    data = document.getElementById("result").innerHTML;
    action = "plus";
    actionCleared = false;
}

function funcMinus()
{
    data = document.getElementById("result").innerHTML;
    action = "minus";
    actionCleared = false;
}

function funcDivide()
{
    data = document.getElementById("result").innerHTML;
    action = "divide";
    actionCleared = false;
}

function funcMultiply()
{
    data = document.getElementById("result").innerHTML;
    action = "multiply";
    actionCleared = false;
}