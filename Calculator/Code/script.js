if(window.innerWidth>=960){
    window.location="home.html";
    console.log(window.innerWidth);
const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');

buttons.forEach((item)=>{
    item.onclick=()=>{
        if(item.id=="clear"){
            display.innerText='';
        }
        else if(item.id=='del')
        {
            let string =display.innerText.toString();
            display.innerText=string.substr(0,string.length-1);
        }
        else if(display.innerText!='' && item.id=='ans')
        {
            if(((display.innerText=='-')&&(item.id=="ans"))||((display.innerText=='+')&&(item.id=="ans"))||((display.innerText=='*')&&(item.id=="ans"))||((display.innerText=='/')&&(item.id=="ans"))||((display.innerText=='%')&&(item.id=="ans"))||((display.innerText=='√')&&(item.id=="ans"))||((display.innerText=='mod')&&(item.id=="ans"))||((display.innerText=='^')&&(item.id=="ans")))
            {
                display.innerText='Invaild Input !!!';
                alert("Invaild Input !!!\nTry again...!");
                setTimeout(()=>(display.innerText=''),5000);
            
            }else
            {
            let string =display.innerText.toString();
            var s1=-1,opt='',temp='';
            for(let i=0;i<string.length;i++)
            {
               if(isNaN(string[i])==true)
               {
                s1=i;
                opt=string[i];
               }
               else
               {
                temp+=string[i];
               }
            }
            var a=Number(temp.substring(0,s1));
            var b=Number(temp.substring(s1,a.length));
           
            if(string[0]=='√')
            {
                display.innerText=string + "\n\n" +Math.sqrt(string.substr(1,string.length));
            }
            else if(opt=='%')
            {
                display.innerText=string + "\n\n" +((a/100)*b);
            }
            else if(opt=='M')
            {
                display.innerText=string + "\n\n" +a%b;
            }
            else
            {
                try{
            display.innerText=string + "\n\n" +eval(display.innerText);
            setTimeout(()=>(display.innerText=''),2000);
                }
                catch(e)
                {
                    alert("Erro massage : "+e+"\nInvaild ! Input formate\n Try again....!!!");
                    display.innerText="";
                }
            }
        }
        }
        else if(((display.innerText=='')&&(item.id=="ans")))
        {
            display.innerText='Empty Input !!!';
            alert("Empty Input !!!\nPlease ! Enter vaild input...!!!");
            setTimeout(()=>(display.innerText=''),2000);
        }
        else if(item.id=='dot')
        {
            display.innerText+='.';
        }
        else if(item.id=='m')
        {
            display.innerText+='M';
        }
        else if(item.id=='plus-minus')
        {
            let string =display.innerText.toString();
           if(string[0]!='-')
           {
            display.innerText='-'+string;
           }
           else{
            display.innerText=string.substring(1,string.length);  
           }
        }
        else
        {
            display.innerText+=item.id;
        }
    }
})

const themeToggleBtn=document.querySelector('.theme-toggler');
const calculator=document.querySelector('.calculator');
let isDark=false;

themeToggleBtn.addEventListener('click',()=>{
    if(isDark)
    {
    calculator.style.backgroundColor="#fff";
    themeToggleBtn.style.backgroundColor="#000";
    document.getElementById("display").style.color="#000";
    console.log("1 isdark"+isDark);
    isDark=!isDark;
    }
    else
    {
    calculator.style.backgroundColor="#000";
    themeToggleBtn.style.backgroundColor="#fff";
    document.getElementById("display").style.color="#fff";
    console.log("2 isdark"+isDark);
    isDark=!isDark;
    }
})

}
else
{
    window.location="nohome.html";
    console.log(window.innerWidth);

}