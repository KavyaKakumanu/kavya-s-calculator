function view(num){
    document.getElementById('result').value += num
}
function del(){
    document.getElementById('result').value = " "
}



function calc(){
    var a = document.getElementById('result').value;
    var b = eval(a)
    var c = document.getElementById('result').value = b;
        


    
}