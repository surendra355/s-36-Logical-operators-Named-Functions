import React, { useRef } from 'react'

function TenthMarks() {

let firstNameInputRef = useRef();
let lastNameInputRef = useRef ();
let engInputRef = useRef ();
let telInputRef = useRef ();
let hinInputRef = useRef ();
let matInputRef = useRef ();
let sciInputRef = useRef ();
let socInputRef = useRef ();
let resultLabelRef = useRef ();

let calculateBtnRef = useRef ();

let firstNameSpanResultRef = useRef ();
let lastNameSpanResultRef = useRef ();
let engSpanResultRef = useRef ();
let telSpanResultRef = useRef ();
let hinSpanResultRef = useRef ();
let matSpanResultRef = useRef ();
let sciSpanResultRef = useRef ();
let socSpanResultRef = useRef ();

let result;

let calculateResult = ()=>{
    let firstName = firstNameInputRef.current.value;
                let lastName = lastNameInputRef.current.value;
                let engMarks = Number(engInputRef.current.value);
                let telMarks = Number(telInputRef.current.value);
                let hinMarks = Number(hinInputRef.current.value);
                let matMarks = Number(matInputRef.current.value);
                let sciMarks = Number(sciInputRef.current.value);
                let socMarks = Number(socInputRef.current.value);

            let totalMarks = engMarks+telMarks+hinMarks+matMarks+sciMarks+socMarks;

            // if(engMarks <35 || telMarks <35 || hinMarks <35 || 
            //     matMarks <35 || sciMarks <35 || socMarks <35
            // ){result ="Failed"}else{result="Passed"}
               if(engMarks>=35 && telMarks>=35 && hinMarks>=35 && 
                matMarks>=35 && sciMarks>=35 && socMarks>=35
            ){result ="Passed"

            }
            else{result="Failed"

            }

            resultLabelRef.current.innerHTML = `${firstName} ${lastName} 
            ${result} In Tenth And Got Total Of ${totalMarks} Marks`;    

           
}
let firstNameOnfocus =()=>{
firstNameInputRef.current.style.backgroundColor ="#FEFF9F"
}
let firstNameOnBlur =()=>{firstNameInputRef.current.style.backgroundColor =""    
}
let lastNameOnFocus =()=>{lastNameInputRef.current.style.backgroundColor ="#FEFF9F";
}
let lastNameOnBlur =()=>{lastNameInputRef.current.style.backgroundColor ="";
}
let engOnFocus =()=>{engInputRef.current.style.backgroundColor ="#FEFF9F";
}
let engOnBlur =()=>{engInputRef.current.style.backgroundColor ="";
}
let engOnChange =()=>{let marks = engInputRef.current.value;
    

    if(marks>=0 && marks<=100){

        if(marks >=35){engSpanResultRef.current.innerHTML ="📗Pass";}
        else{engSpanResultRef.current.innerHTML ="📕Fail"}
        calculateBtnRef.current.style.display ="inline-block"
    }else{
        engSpanResultRef.current.innerHTML ="⚠️Invalid";
        calculateBtnRef.current.style.display ="none"
        
    }}
let telOnFocus =()=>{telInputRef.current.style.backgroundColor ="#FEFF9F"}
let telOnBlur =()=>{telInputRef.current.style.backgroundColor =""}
let telOnChange =()=>{let marks = telInputRef.current.value;
    if(marks >=0 && marks <= 100){
        if(marks >=35){telSpanResultRef.current.innerHTML ="📗Pass"}
        else{telSpanResultRef.current.innerHTML ="📕Fail"}
        calculateBtnRef.current.style.display ="inline-block"
    }
        else{
            telSpanResultRef.current.innerHTML ="⚠️Invalid"
            calculateBtnRef.current.style.display ="none"
        }}    

let hinOnFocus =()=>{hinInputRef.current.style.backgroundColor ="#FEFF9F";}
let hinOnBlur =()=>{hinInputRef.current.style.backgroundColor ="";}
let hinOnChange =()=>{let marks = hinInputRef.current.value;
    if(marks >=0 && marks <=100){
    
        if(marks>=35){hinSpanResultRef.current.innerHTML = "📗Pass"}
        else{hinSpanResultRef.current.innerHTML = "📕Fail"}
        calculateBtnRef.current.style.display ="inline-block"
    }else{
          hinSpanResultRef.current.innerHTML = "⚠️Invalid"
          calculateBtnRef.current.style.display ="none"
    }}

let matOnFocus =()=>{matInputRef.current.style.backgroundColor ="#FEFF9F";}
let matOnBlur =()=>{matInputRef.current.style.backgroundColor ="";}
let matOnChange =()=>{ let marks = matInputRef.current.value;
    if(marks >=0 && marks <=100){
     if(marks >=35){matSpanResultRef.current.innerHTML = "📗Pass"}
    else{matSpanResultRef.current.innerHTML = "📕Fail"}
    calculateBtnRef.current.style.display ="inline-block"

    }else{
     matSpanResultRef.current.innerHTML = "⚠️Invalid"
     calculateBtnRef.current.style.display ="none"
    }}

let sciOnFocus =()=>{sciInputRef.current.style.backgroundColor ="#FEFF9F";}
let sciOnBlur =()=>{sciInputRef.current.style.backgroundColor ="";}
let sciOnChange =()=>{let marks = sciInputRef.current.value;
    if(marks >=0 && marks <=100){
        if(marks >= 35){sciSpanResultRef.current.innerHTML = "📗Pass"}
    else{sciSpanResultRef.current.innerHTML = "📕Fail"}
    calculateBtnRef.current.style.display ="inline-block"
    }
    else{
         sciSpanResultRef.current.innerHTML = "⚠️Invalid"
         calculateBtnRef.current.style.display ="none"
    }}

let socOnFocus =()=>{socInputRef.current.style.backgroundColor ="#FEFF9F";}
let socOnBlur =()=>{socInputRef.current.style.backgroundColor ="";}
let socOnChange =()=>{let marks = socInputRef.current.value;
    if(marks >=0 && marks <=100){
        
    if(marks >= 35){socSpanResultRef.current.innerHTML = "📗Pass"}
    else{socSpanResultRef.current.innerHTML = "📕Fail"}
    calculateBtnRef.current.style.display ="inline-block"

    }else{
        socSpanResultRef.current.innerHTML = "⚠️Invalid"
        calculateBtnRef.current.style.display ="none"
    }}

  return (
    
      <div>
      <form>
      <fieldset> <legend className='legendTitle'>Tenth Marks Sheet</legend>
                
            <div>
            <label>First Name</label>
            <input type='text' placeholder='First Name' ref={firstNameInputRef}
            onFocus={()=>{firstNameOnfocus();}}
            onBlur={()=>{firstNameOnBlur();}}
            ></input>
            <span ref={firstNameSpanResultRef}></span>
        </div>
        <div>
            <label>Last Name</label>
            <input type='text' placeholder='Last Name' ref={lastNameInputRef}
            onFocus={()=>{lastNameOnFocus();}}
            onBlur={()=>{lastNameOnBlur();}}
            ></input>
            <span ref={lastNameSpanResultRef}></span>
        </div>
        <div>
            <label>English</label>
            <input type='number' placeholder='Enter Marks' ref={engInputRef}
            onFocus={()=>{engOnFocus();}}
            onBlur={()=>{engOnBlur();}}
            onChange={()=>{engOnChange();}}
            ></input>
            <span ref={engSpanResultRef}></span>
        </div>
        <div>
            <label>Telugu</label>
            <input type='number' placeholder='Enter Marks' ref={telInputRef} 
             onFocus={()=>{telOnFocus();}}
             onBlur={()=>{telOnBlur();}}
             onChange={()=>{telOnChange();}}

            ></input>
            <span ref={telSpanResultRef}></span>
        </div>
        <div>
            <label>Hindi</label>
            <input type='number' placeholder='Enter Marks' ref={hinInputRef}
             onFocus={()=>{hinOnFocus();}}
             onBlur={()=>{hinOnBlur();}}
             onChange={()=>{hinOnChange();}}
            ></input>
            <span ref={hinSpanResultRef}
            
            ></span>
        </div>
        <div>
            <label>Maths</label>
            <input type='number' placeholder='Enter Marks' ref={matInputRef}
             onFocus={()=>{matOnFocus();}}
             onBlur={()=>{matOnBlur();}}
             onChange={()=>{matOnChange();}}
            ></input>
            <span ref={matSpanResultRef}></span>
        </div>
        <div>
            <label>Science</label>
            <input type='number' placeholder='Enter Marks' ref={sciInputRef}
             onFocus={()=>{sciOnFocus();}}
             onBlur={()=>{sciOnBlur();}}
             onChange={()=>{sciOnChange();}}
            ></input>
            <span ref={sciSpanResultRef}></span>
        </div>
        <div>
            <label>Social</label>
            <input type='number' placeholder='Enter Marks' ref={socInputRef}
             onFocus={()=>{socOnFocus();}}
             onBlur={()=>{socOnBlur();}}
             onChange={()=>{socOnChange();}}
            ></input>
            <span ref={socSpanResultRef}></span>
        </div>
        <div>
            <button ref={calculateBtnRef} type='button' className='myButton' onClick={()=>{
                calculateResult();
                 }}>Calculate</button>
        </div>
        <label className='resultLabel' ref={resultLabelRef}>Result Here</label>
        
        </fieldset>
      </form>

      </div>
    
  )
}

export default TenthMarks
