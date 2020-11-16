import React from 'react';
const Form =(props)=>{
return(
    <div>
        <form onSubmit={props.handler} >
        <input name="city"  type="text" className="location" placeholder="City" autoComplete="off"/><br />
        <button className="button" className="fetch">Get</button>
        </form>
    </div>
)
}

export default Form;