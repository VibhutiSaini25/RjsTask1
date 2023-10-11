import {useState,useRef} from 'react';
function Textform (props){
    const textAreaRef = useRef();
    const [wordCount,setWordCount] = useState(0);

    const countWords = (e) =>
     {
      const text = textAreaRef.current.value;
      setWordCount(text.split(" ").length);
      
      
    }

    return (
        <>
        
          <textarea ref={textAreaRef} onChange={countWords} /><br />
          
          <p>words:{wordCount} </p>
        </>
    )
}
export default Textform;

/*const initialState="";
const reducer = (state,action) =>{
    if(action.type==='WORDS'){
        state=action.value;
    }
    return state;
}
const  Textform=()=>{
    const [state,dispatchstate]=useReducer(reducer,initialState);
    const onchangehandler= (event)=>{
        dispatchstate({type:"WORDS",value:event.target.value})
    };
    return(
        <>
        <div>
            <h1>Responsive Word counter</h1>
            <div className='input-group'>
                <textarea className='form-control' aria-label='with texture' rows={8} value={state} onChange={onchangehandler} id='text_input'></textarea>
            </div>
        </div>
        <div className='col-md-6'>
            <h2>Word Count: </h2>
            <p>
                { (state.split(" ").length )|| (state.length)}
            </p>
        </div>
        </>
        
    );
}*/

/*{
    const handleOnchange=(event)=>{
        console.assertlog("On change");
        setText(event.target.value);
    }

    const [text,setText]=useState('Hi All');
    return(
        <>
        <div className="container ">
            <h1>{props.heading}</h1>
            <div className='mb-3'>
                <textarea className='form-control' value={text} onChange={handleOnchange} id="myBox" row="8"></textarea>
            </div>
        </div>
        <div className="container my-3">
            <h2>Word Count:{!text.length===0 && text.split("").length || text.length} words</h2>
            

        </div>
        </>
    )*/
