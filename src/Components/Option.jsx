import React, {useState} from 'react';

function Option(props) {
    const [click, setClick] = useState(false)

    const handleClick = (id) => {
        if(id === props.id) {
            setClick(prevClick => !prevClick);
        }else {
            setClick(false);
        }
    } 
    

    const styles = {
        backgroundColor: click ? 'blue' : '',
    }

    return (
        <div className="option--wrapper">
            <a className="option">{props.options.option1}</a>
            <a className="option">{props.options.option2}</a>
            <a className="option">{props.options.option3}</a>
            <a className="option">{props.options.option4}</a>
        </div>
    )
}

export default Option;