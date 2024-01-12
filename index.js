let nums = Array(64).fill(1);
let count = 0;
let contents = Array();

function Display(){
    let div = document.getElementById("content");
    div.innerHTML = ""
    for(let i=0;i<contents.length;++i){
        let tmp=document.createElement("div");
        tmp.innerHTML = contents[i];
        div.appendChild(tmp);
    }
}
function onClick(key){
    if(nums[parseInt(key)] === 1){
        nums[parseInt(key)] = 0;
        document.getElementById(key).style.background = "red";
    }else{
        nums[parseInt(key)] = 1;
        document.getElementById(key).style.background = "black";
    }
}
function Clear(){
    count = 0;
    for(let i = 0;i<64;++i){
        document.getElementById(i.toString()).style.background = "black";
        nums[i] = 1;
    }
    contents.length = 0;
    Display();
}

function Enter(){
    let output = "";
    for(let i=0;i<62;i=i+4){
        let num = nums[i] + nums[i+1]*2 + nums[i+2]*4 + nums[i+3]*8
        output += num.toString(16).toUpperCase();
    }
    let content = "LED_DATA["+count+"] = 64'h"+output+";";
    contents.push(content);
    count += 1;
    Display();
}
function Delete(){
    if(count === 0)
        count =0;
    else
        count -= 1;
    contents.pop();
    Display();
}
