function myfunc(){

    var num6 = [];
    var num8;
    var num9 = [];
    var x;

    while(num6.length < 6){
        num8 = (Math.floor(Math.random() * 60) + 1);
        if(num6.includes(num8)){}
        else
            num6.push(num8);
    }
    for (x in num6.sort(comparaNumeros)){
        num9 += num6[x]+ " ";
    }
    document.getElementById("res").innerHTML = num9;
}
function comparaNumeros(a,b) { 
    if (a == b) return 0; 
    if (a < b) return -1;
    if (a > b) return 1;
}


/**
 * Botão Submit
 */
 document.getElementById("btnEnviar").onclick = function() {
    var radios = document.getElementsByName("seq");
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            if(radios[i].value != 1){
                myfunc();
                myfunc3();
                myfunc4();
            }
            else{
                
                myfunc();
                document.getElementById("res2").innerHTML = "";
                document.getElementById("res3").innerHTML = "";
            }
        }
    }
};

function myfunc3(){
    var num6 = [];
    var num8;
    var num9 = [];
    var x;

    while(num6.length < 6){
        num8 = (Math.floor(Math.random() * 60) + 1);
        if(num6.includes(num8)){}
        else
            num6.push(num8);
    }
    for (x in num6.sort(comparaNumeros)){
        num9 += num6[x]+ " ";
    }
    document.getElementById("res2").innerHTML = num9;
}
function comparaNumeros(a,b) { 
    if (a == b) return 0; 
    if (a < b) return -1;
    if (a > b) return 1;
}

function myfunc4(){
    var num6 = [];
    var num8;
    var num9 = [];
    var x;

    while(num6.length < 6){
        num8 = (Math.floor(Math.random() * 60) + 1);
        if(num6.includes(num8)){}
        else
            num6.push(num8);
    }
    for (x in num6.sort(comparaNumeros)){
        num9 += num6[x]+ " ";
    }
    document.getElementById("res3").innerHTML = num9;
}
function comparaNumeros(a,b) { 
    if (a == b) return 0; 
    if (a < b) return -1;
    if (a > b) return 1;
}


