const td=document.getElementById("td");
const far=document.getElementById("far");
const cel=document.getElementById("cel");
const result=document.getElementById("result");
let temp;


function convert(){
    if(far.checked){
        temp=Number(td.value);
        temp=temp*9/5+32;
        result.textContent=temp+"°F";
    }
    else if(cel.checked){
        temp=Number(td.value);
        temp=(temp-32)*(5/9);
        result.textContent=temp+"°C";
    }
    else{
        result.textContent="Select a unit";
    }
}