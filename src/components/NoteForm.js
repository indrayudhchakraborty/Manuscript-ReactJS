import React, {useState} from 'react'

export default function NoteForm(props) {
    const handleUp = () => {
        setText(text.toUpperCase())
    }

    const handleLow = () => {
        setText(text.toLowerCase())
    }

    const OnChange = (event) => {
        console.log("change");
        setText(event.target.value)
    }
    const handleClear = (event) => {
        setText('')
    }
    const handleCopy = () => {
        let text = document.getElementById("floatingTextarea");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const capOnclick = () =>{       
        let arr1 = text.toString().split(" ");
        let i;
        for(i=0;i<arr1.length;i++){
        
            let vv=arr1[i].charAt(0).toUpperCase() + arr1[i].slice(1);
            arr1[i]=vv;
        }
            let mm=arr1.toString().replace(/,/g," ");
                setText(mm);
    }
    const reversed = () => {
        let splitWord = text.split("");
    
        let reverseWord = splitWord.reverse("");
        let joinedWords = reverseWord.join("");
        let newText = joinedWords
    
        setText(newText);
      };

    const trim = () => {
        let nText = text.split(/[ ]+/);
        setText(nText.join(" "))
    }

    const [text, setText] = useState('')

    return (
        <>
        <div className="form-floating">
            <textarea className={`form-control ${props.colorTxt}`} value={text} onChange={OnChange} placeholder="Make a Note" id="floatingTextarea"></textarea>
            <label htmlFor="floatingTextarea" id="labelfornote">Make a Note</label>
        </div>
        <ul className="text-opers">
            <li className="text-oper">
                <button className="btn btn-manu" onClick={handleUp}>Uppercase</button>
            </li>
            <li className="text-oper">
                <button className="btn btn-manu" onClick={handleLow}>Lowercase</button>
            </li>
            <li className="text-oper">
                <button className="btn btn-manu" onClick={handleClear}>Clear text</button>
            </li>
            <li className="text-oper">
                <button className="btn btn-manu" onClick={handleCopy}>Copy to clipboard</button>
            </li>
            <li className="text-oper">
                <button className="btn btn-manu" onClick={capOnclick}>Camel</button>
            </li>
            <li className="text-oper">
                <button className="btn btn-manu" onClick={reversed}>Reverse</button>
            </li>
            <li className="text-oper">
                <button className="btn btn-manu" onClick={trim}>Trim text</button>
            </li>
        </ul>
        <div className="contain">
            <h1 class={`${props.color}`}>Your Text Summary</h1>
            <p class={`${props.color}`}>{text.split(" ").length} words, {text.length} characters</p>
            <p class={`${props.color}`}>{0.008*text.split(" ").length} mins to read (0.008 mins/word)</p>
            <p style={{color: "grey !important", marginLeft: '50rem'}} className="disabled">by indrayudhchakraborty</p>
        </div>
        </>
    );
}
