import React, { useState } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs'

import AllStyles from "../styles/hljs"
import languges from 'react-syntax-highlighter/src/languages/hljs/supported-languages'

import cls from "../index.module.css"


const AllStylesKeys = Object.keys(AllStyles)

const default_code_string = `const download = (image, { name = 'img', extension = 'png' } = {}) => {
    const a = document.createElement('a')
    a.href = image
    a.download = createFileName(extension, name)
    a.click()
}`

const handleDropdown = (id) => {
    const dropdown = document.getElementById(id).children

    const caret = dropdown[0].children[1]
    const menu = dropdown[1]
    const select = dropdown[0]

    if (!caret.classList.contains(cls.caret_rotate)) {
        caret.classList.add(cls.caret_rotate)
        menu.classList.add(cls.menu_open)
        select.classList.add(cls.select_clicked)
    }
    else {
        caret.classList.remove(cls.caret_rotate)
        menu.classList.remove(cls.menu_open)
        select.classList.remove(cls.select_clicked)
    }
}


const Highlighter = React.forwardRef((props, ref) => {
    const [codeString, setCodeString] = useState(default_code_string)

    const [style, setStyle] = useState(dracula)
    const [selectedStyle, setSelectedStyle] = useState(AllStylesKeys[0])
    const [selectedLanguage, setSelectedLanguage] = useState("javascript")
    const [showLineNumber, setShowLineNumber] = useState(true)

    const handleCodeString = (e) => {
        setCodeString(e.target.value)
    }

    const styleChanger = (_style) => {
        setSelectedStyle(_style)
        setStyle(AllStyles[_style])
    }

    return (<>
        <div className={cls.main_head}>
            <div id="style_dropdown" className={cls.dropdown} onClick={e => handleDropdown("style_dropdown")}>
                <div className={cls.select}>
                    <span>{selectedStyle}</span>
                    <div className={cls.caret}></div>
                </div>
                <ul className={cls.menu}>
                    {AllStylesKeys.map((s) => <li
                        key={s}
                        onClick={e => styleChanger(e.target.innerHTML)}>
                        {s}
                    </li>)}
                </ul>
            </div>

            <div id="language_dropdown" className={cls.dropdown} onClick={e => handleDropdown("language_dropdown")}>
                <div className={cls.select}>
                    <span>{selectedLanguage}</span>
                    <div className={cls.caret}></div>
                </div>
                <ul className={cls.menu}>
                    {languges.map((l) => <li
                        key={l}
                        onClick={e => setSelectedLanguage(e.target.innerHTML)}>
                        {l}
                    </li>)}
                </ul>
            </div>

            <div className={cls.show_line_number}>
                <input type="checkbox" name="ali" id="ali"
                    onChange={e => { setShowLineNumber(!showLineNumber) }}
                    checked={showLineNumber} />
                <label htmlFor="ali">&nbsp;Line Number</label>
            </div>
        </div>

        <div>
            <textarea
                className={cls.code_string} placeholder="paste your code here"
                name="code_string" id="code_string"
                cols="60" rows="10" value={codeString}
                onChange={handleCodeString}>
            </textarea>
        </div>

        <div className={cls.syntax_highlighter} ref={ref}>
            <SyntaxHighlighter language={selectedLanguage} style={style} showLineNumbers={showLineNumber} >
                {codeString}
            </SyntaxHighlighter>
        </div>
    </>)
})

export default Highlighter