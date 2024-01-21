import React, {useState} from 'react';



export default function TextForm(props) {
  const handleOnChange = (event) => {
    // console.log("On change");
     setText(event.target.value);
   }

  const handleUpclick = () => {
    //console.log("Uppercase was Clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert('Converted to UpperCase!', "success");
  }

  const handleLoclick = () => {
    //console.log("LowerCase was Clicked" + text);
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert('Converted to LowerCase!', "success");
  }
  
  const handleClearclick = () => {
    //console.log("LowerCase was Clicked" + text);
    let newText = ''
    setText(newText)
    props.showAlert('Text Cleared!', "success");
  }
  
  

  /*const handleCopy = () => {
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
   }*/

   const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert('Extra Spaces Removed!', "success");
  }

  const [text, setText] = useState('');
  // text ="new text"; wromg way of setting
  // setText = 'new text'; correct way of setting
  return (
    <>
    <div className='container' style= {{color: props.mode ==='dark'?'white':'black'}}>
        <h1>{props.heading}  </h1>
        <div className="mb-3">
        
        <textarea className="form-control "  value ={text} onChange={handleOnChange} 
        style = {{backgroundColor: props.mode ==='dark'?'grey':'white', color: props.mode ==='dark'?'white':'black'}} id="mybox" rows="10"></textarea>
        </div>
         <button className="btn btn-primary mx-2"onClick={handleUpclick} 
            >Convert to UpperCase </button>
         <button className="btn btn-primary mx-2"onClick={handleLoclick} 
            >Convert to LowerCase </button>
         <button className="btn btn-primary mx-2"onClick={handleClearclick} 
            >ClearText</button>
         {/*<button className="btn btn-primary mx-2"onClick={handleCopy} 
            >Copy Text </button>*/}
          <button className="btn btn-primary mx-2"onClick={ handleExtraSpaces} 
            >Remove Extra Spaces </button> 
        </div>

        <div  className='container my-5' style= {{color: props.mode ==='dark'?'white':'black'}}>
          <h1>Your Summary</h1>
          <p> Words: {text.split(" ").length}   and    Characters: {text.length} </p>
          <p> Minutes read: {0.008 * text.split(/\s+/).filter((word) => word.length > 0)} </p>
          <h2>Your Preview </h2>
          <p>{text.length >0?text:'Enter Your Text in the Textbox above to Preview it!!'}</p>
          
        
       
          
          </div>

        </>
  )
}
    
        
  