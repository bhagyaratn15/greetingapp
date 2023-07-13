import React from 'react';

let currDate=new Date();
currDate=currDate.getHours();
let greeting=" "
const cssStyle={}
function Heading(){
    if (currDate>=1 && currDate<12){
        greeting="Good Morning";
        cssStyle.color="Green";
       
    }else if (currDate>=12 && currDate<19){
        greeting="Good Afternoon";
        cssStyle.color="Orange";
        
    }else{
        greeting="Good Night";
        cssStyle.color="Blue";
        
    }
    return(
        <h1>Hello everyone, <span style={cssStyle}> {greeting}</span></h1>
    )
}
export default Heading;