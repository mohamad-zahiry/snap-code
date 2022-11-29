import { useState } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs'

import AllStyls from "../styles/hljs"


let AllStylesKeys = Object.keys(AllStyls)

const codeString =
    `import math
import sys

def root(x):
print(math.sqrt(x))

if __name__ == "__main__":
root(sys.argvp=[1])
`

const Highlighter = () => {
    const [style, setStyle] = useState(dracula)

    const style_changer = (_style) => {
        const style_select = document.getElementById("style")
        style_select.value = _style
        setStyle(AllStyls[_style])
    }

    return (
        <>
            <div style={{ width: "450px" }}>
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