import React, { useEffect, createRef } from 'react'
import { useScreenshot, createFileName } from 'use-react-screenshot'

import Highlighter from './highlighter'
import cls from "../index.module.css"



const Download = () => {
    const ref = createRef(null)
    const [image, takeScreenShot] = useScreenshot()

    const getImage = () => takeScreenShot(ref.current)

    const download = (image, { name = 'img', extension = 'png' } = {}) => {
        const a = document.createElement('a')
        a.href = image
        a.download = createFileName(extension, name)
        a.click()
    }

    useEffect(() => {
        if (image)
            download(image, { name: 'snap-code', extension: 'png' })
    }, [image])

    return (
        <div className={cls.main}>
            <Highlighter ref={ref} />
            <button className={cls.download_button} onClick={getImage}>Take screenshot</button>
        </div>
    )
}

export default Download