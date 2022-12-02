import * as styles from "react-syntax-highlighter/dist/esm/styles/hljs"


const format = (str) => {
    let out = ""
    for (const c of str)
        if (c.toUpperCase() === c && isNaN(c))
            out += ` ${c.toLowerCase()}`
        else
            out += c

    return out
}


const all_styles = {}
for (const s of Object.keys(styles))
    all_styles[format(s)] = styles[s]

    
export default all_styles
