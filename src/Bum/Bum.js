import React from 'react';
import './Bum.css';   //import css here, webpack


const burgerbum = (props) => {
return (
    <div className='block'>
        <h1 onClick={props.change}>My name is {props.name}, and I'm a {props.career} to change</h1>
        {/* onClick above: pass method as props, so we click it will change too ???????????????????????????????????? */}
        <h1>{props.age}</h1>
        <div className="Lan">{props.children}</div> 
        <input type="text" onChange={props.changed} value={props.name}></input>
    </div> //use div to show those are into one component
    //props.children show props contents 
    //props show parameters
)
};

//this is stateless / dumb components

// class Cmp extends Component {
//      render () { return <div>some JSX</div> 
//     } 
// } 

export default burgerbum;