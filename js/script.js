let text_area = document.getElementById("input");
let mem = document.getElementById("mem");

function lastchar(str) {
    return str.slice(-1);
}

function spl(str) {
    return str.split(/[)\(+ * / -]/);
}

function splrev(str) {
    return str.split(/[)\(0-9 . ^]/);
}
//console.log(splrev("5-6.2/9*2.6"));

let prevRes = false;

function clickbtn(num) {
    let repeat = false;
    if ((text_area.value === '0' && num != '.') || text_area.value === 'error') {
        text_area.value = '';
    }
    
    if (num === '+' && (lastchar(text_area.value) === '+' 
    || lastchar(text_area.value) === '-' 
    || lastchar(text_area.value) === '*' 
    || lastchar(text_area.value) === '/' 
    || lastchar(text_area.value) === '.' )) {
        repeat = true;
    }
    if (num === '-' && (lastchar(text_area.value) === '+' 
    || lastchar(text_area.value) === '-' 
    || lastchar(text_area.value) === '*' 
    || lastchar(text_area.value) === '/' 
    || lastchar(text_area.value) === '.' )) {
        repeat = true;
    }
    if (num === '*' && (lastchar(text_area.value) === '+' 
    || lastchar(text_area.value) === '-' 
    || lastchar(text_area.value) === '*' 
    || lastchar(text_area.value) === '/' 
    || lastchar(text_area.value) === '.' )) {
        repeat = true;
    }
    if (num === '/' && (lastchar(text_area.value) === '+' 
    || lastchar(text_area.value) === '-' 
    || lastchar(text_area.value) === '*' 
    || lastchar(text_area.value) === '/' 
    || lastchar(text_area.value) === '.' )) {
        repeat = true;
    }
    if (num === '.' && (lastchar(text_area.value) === '+' 
    || lastchar(text_area.value) === '-' 
    || lastchar(text_area.value) === '*' 
    || lastchar(text_area.value) === '/' 
    || lastchar(text_area.value) === '.' )) {
        repeat = true;
    }
    
    if (!repeat && !prevRes) {
        text_area.value = text_area.value + num;
    }
    
    if(prevRes) {
        if(num != '+' && num != '*' && num != '-' && num != '/' && num != '.' && num != '^') {
            text_area.value = num;
        }
        else {
            if (!repeat) {
                text_area.value = text_area.value + num;
            }
        }
        prevRes = false;
        
    }
}

function back() {
    const str = text_area.value;
    const str2 = str.substring(0, str.length - 1);
    text_area.value = str2;
}


function factorial() {
    let res = text_area.value;
    if (res) {
        try { 
            let resres2 = spl(res);
            let resres = resres2.filter(element => element !== '');
            let temp = resres[resres.length - 1];
            let temp2 = resres[resres.length - 1]; 
            //resres[resres.length - 1] = Number(resres[resres.length - 1]) / 100;
            for (let i = Number(temp) - 1; i > 0; i--) {
                temp *= i;
            }
            //console.log(temp);
            let str2;
            if (res[res.length -1] != '-'
            && res[res.length -1] != '+'
            && res[res.length -1] != '*'
            && res[res.length -1] != '='
            && res[res.length -1] != '('
            && res[res.length -1] != ')'
            && res[res.length -1] != '.') {
                for (let i = 0; i < String(temp2).length; i++) {
                    str2 = res.substring(0, res.length - 1);
                    res = str2;
                }
                //console.log(str2 + resres[resres.length - 1]);
                text_area.value = str2 + temp;
                mem.innerText = str2 + temp;
            }
            
        }
        catch (e) {
            text_area.value = "error";
        }
       
    }
}

function mx_sqrt() {
    let res = text_area.value;
    if (res) {
        try { 
            let resres2 = spl(res);
            let resres = resres2.filter(element => element !== '');
            let temp = resres[resres.length - 1];
            resres[resres.length - 1] = Math.sqrt(Number(resres[resres.length - 1]));

           
            let str2;
            //console.log(res);
            if (res[res.length -1] != '-'
            && res[res.length -1] != '+'
            && res[res.length -1] != '*'
            && res[res.length -1] != '='
            && res[res.length -1] != '('
            && res[res.length -1] != ')'
            && res[res.length -1] != '.') {
                for (let i = 0; i < temp.length; i++) {
                    str2 = res.substring(0, res.length - 1);
                    res = str2;
                }
                text_area.value = str2 + resres[resres.length - 1];
                mem.innerText = str2 + resres[resres.length - 1];
                
            }
            
        }
        catch (e) {
            text_area.value = "error";
        }
       
    }
}

function plusminus() {
    let res = text_area.value;
    if (res && res != '0') {
        if (res[0] != '-') {
            text_area.value = '-' + res;
        }
        else {
            text_area.value = res.slice(1);
        }
    }
}

function persent() {
    let res = text_area.value;
    if (res) {
        try { 
            let resres2 = spl(res);
            let resres = resres2.filter(element => element !== '');
            let temp = resres[resres.length - 1];
            resres[resres.length - 1] = Number(resres[resres.length - 1]) / 100;

           
            let str2;
            if (res[res.length -1] != '-'
            && res[res.length -1] != '+'
            && res[res.length -1] != '*'
            && res[res.length -1] != '='
            && res[res.length -1] != '('
            && res[res.length -1] != ')'
            && res[res.length -1] != '.') {
                for (let i = 0; i < temp.length; i++) {
                    str2 = res.substring(0, res.length - 1);
                    res = str2;
                }
                //console.log(str2 + resres[resres.length - 1]);
                text_area.value = str2 + resres[resres.length - 1];
                mem.innerText = str2 + resres[resres.length - 1];
            }
            
        }
        catch (e) {
            text_area.value = "error";
        }
       
    }
}

let pow_flag = false;

function power_build() {
    pow_flag = true;
    let res = text_area.value;
    if (res) {
        try { 
           
           
            
            if (res[res.length -1] != '-'
            && res[res.length -1] != '+'
            && res[res.length -1] != '*'
            && res[res.length -1] != '='
            && res[res.length -1] != '('
            && res[res.length -1] != ')'
            && res[res.length -1] != '.'
            && res[res.length -1] != '^') {
                text_area.value += '^';
            }
            
            
        }
        catch (e) {
            text_area.value = "error";
        }
       
    }
}

function pow_parce(str) {
    let arr = str.split('^');
    //console.log(arr);
    let temp = arr[0];
    for (let i = 1; i < arr.length; i++) {
        temp = Math.pow(temp, arr[i]);
    }
    return temp;

}

function mr() {
    if(mem.innerText != '...') {
        text_area.value = mem.innerText;
    }
    
}

function mc() {
    mem.innerText = '...';
}

function mplus() {
    if(mem.innerText != '...') {
        text_area.value = eval(text_area.value + '+' + mem.innerText);
    }
}

function mminus() {
    if(mem.innerText != '...') {
        if(Number(mem.innerText) < 0) {
            //console.log(text_area.value + '+' + mem.innerText.slice(1));
            text_area.value = eval(text_area.value + '+' + mem.innerText.slice(1));
        }
        else {
            text_area.value = eval(text_area.value + '-' + mem.innerText);
        }
        
    }
}


let plusminus_flag = false;
function result() {
    let res = text_area.value;
    if(res && !pow_flag) {
        try { 
            text_area.value = eval(res);
            mem.innerText = eval(res);
            prevRes = true;
        }
        catch (e) {
            text_area.value = "error";
        }
    }
    if (pow_flag) {
        let resres;
        let resres2;
        let resresRev2;
        let resresRev;
        if (text_area.value[0] == '-') {
            plusminus_flag = true;
            resres2 = spl(text_area.value.slice(1));
            resres = resres2.filter(element => element !== '');
            console.log(resres);
    
            resresRev2 = splrev(text_area.value.slice(1));
            resresRev = resresRev2.filter(element => element !== '');
            console.log(resresRev);
        }
        else {
            resres2 = spl(text_area.value);
            resres = resres2.filter(element => element !== '');
            console.log(resres);

            resresRev2 = splrev(text_area.value);
            resresRev = resresRev2.filter(element => element !== '');
            console.log(resresRev);
        }
        

        for (let i = 0; i < resres.length; i++) {
            if ((resres[i].match(/\^/g) || []).length != 0) {
                resres[i] = String(pow_parce(resres[i]));
            }
        }   
        console.log(resres);

        let ttt = '';
        for (let i = 0; i < resresRev.length; i++) {
            ttt += resres[i] + resresRev[i];
        }
        mem.innerText = eval(ttt + resres[resres.length - 1]);
        text_area.value = eval(ttt + resres[resres.length - 1]);
        
        prevRes = true;
        pow_flag = false;
        plusminus_flag = false;
    }
}

function clean() {
    pow_flag = false;
    text_area.value = '0';
}

let cont = document.getElementsByClassName("container");
let kg_cont = document.getElementsByClassName("kg_container");
let kg = document.getElementsByClassName("item");


function show_calc() {
    if (cont[0].style.display == 'none') {
        cont[0].style.display = 'block';
        kg_cont[0].style.display = 'none';
        kg[0].style.backgroundColor = "#1e2435";
        kg[0].style.color = "#fff";
    }
    else {
        cont[0].style.display = 'none';
        kg_cont[0].style.display = 'block';
        kg[0].style.backgroundColor = "#fff";
        kg[0].style.color = "#000";
    }
    
}
let text_area2 = document.getElementById("input2");
let text_area3 = document.getElementById("input3");
let sel1 = 0;
let sel2 = 0;

function fun1() {
    sel1=document.getElementById('qqq').selectedIndex;
    sel2=document.getElementById('aaa').selectedIndex;
    console.log(sel1);
    console.log(sel2);
}

function clickkg(num) {
    if (text_area2.value === '0') {
        text_area2.value = '';
    }
    text_area2.value = text_area2.value + num;
}

function clearkg() {
    text_area2.value = '0';
    text_area3.value = '0';
}

function conv() {
    
    if (sel1 == 0 && sel2 == 0) {
        text_area3.value = String(Number(text_area2.value) * 1000);
    }
    else if(sel1 == 0 && sel2 == 1) {
        text_area3.value = text_area2.value;
    }
    else if(sel1 == 0 && sel2 == 2) {
        text_area3.value = String(Number(text_area2.value) * 1000000);
    }
    else if(sel1 == 0 && sel2 == 3) {
        text_area3.value = String(Number(text_area2.value) / 1000);
    }



    else if(sel1 == 1 && sel2 == 0) {
        text_area3.value = text_area2.value;
    }
    else if(sel1 == 1 && sel2 == 1) {
        text_area3.value = String(Number(text_area2.value) / 1000);
    }
    else if(sel1 == 1 && sel2 == 2) {
        text_area3.value = String(Number(text_area2.value) * 1000);
    }
    else if(sel1 == 1 && sel2 == 3) {
        text_area3.value = String(Number(text_area2.value) / 1000000);
    }
//////////////
    else if(sel1 == 2 && sel2 == 0) {
        text_area3.value = String(Number(text_area2.value) / 1000);
    }
    else if(sel1 == 2 && sel2 == 1) {
        text_area3.value = String(Number(text_area2.value) / 1000000);
    }
    else if(sel1 == 2 && sel2 == 2) {
        text_area3.value = text_area2.value;
    }
    else if(sel1 == 2 && sel2 == 3) {
        text_area3.value = String(Number(text_area2.value) / 100000000);
    }
///////////////
    else if(sel1 == 3 && sel2 == 0) {
        text_area3.value = String(Number(text_area2.value) * 1000000);
    }
    else if(sel1 == 3 && sel2 == 1) {
        text_area3.value = String(Number(text_area2.value) * 1000);
    }
    else if(sel1 == 3 && sel2 == 2) {
        text_area3.value = String(Number(text_area2.value) * 100000000);;
    }
    else if(sel1 == 3 && sel2 == 3) {
        text_area3.value = text_area2.value;
    }




}
