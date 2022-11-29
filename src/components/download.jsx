import React, { useEffect, createRef } from 'react'
import { useScreenshot, createFileName } from 'use-react-screenshot'

import Highlighter from './highlighter'

const Download = () => {
    const ref = createRef(null)
    const [image, takeScreenShot] = useScreenshot()

    const download = (image, { name = 'img', extension = 'png' } = {}) => {
        const a = document.createElement('a')
        a.href = image
        a.download = createFileName(extension, name)
        a.click()
    }

    const getImage = () => takeScreenShot(ref.current)

    useEffect(() => {
        if (image) {
            download(image, { name: 'snap-code', extension: 'png' })
        }
    }, [image])

    return (
        <>
            <div ref={ref} style={{ width: "450px" }}>
                <Highlighter />
            </div>
            <button onClick={getImage}>Take screenshot</button>
        </>
    )
}

export default Download