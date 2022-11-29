import { useRef, useState } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs'

import AllStyls from "../styles/hljs"


let AllStylesKeys = Object.keys(AllStyls)


const Highlighter = () => {
    const [style, setStyle] = useState(dracula)
    const [codeString, setCodeString] = useState("")

    const handleCodeString = (e) => {
        setCodeString(e.target.value)
    }

    const style_changer = (_style) => {
        const style_select = document.getElementById("style")
        style_select.value = _style
        setStyle(AllStyls[_style])
    }

    return (
        <>
            <div>
                <textarea
                    name="code_string" id="code_string"
                    cols="30" rows="10" value={codeString}
                    onChange={handleCodeString}
                ></textarea>
            </div>
            <div>
                <SyntaxHighlighter language="python" style={style} showLineNumbers={true} >
                    {codeString}
                </SyntaxHighlighter>
            </div>

            <div>
                <select id="style" onChange={(e) => { style_changer(e.target.value) }}>
                    {AllStylesKeys.map((l) => <option key={l} value={l}>{l}</option>)}
                </select>
            </div>

        </>
    )
}

export default Highlighter