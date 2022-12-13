import Download from "./components/download"
import cls from "./index.module.css"


const Main = () => {

    return (
        <div className={[cls.body, cls.font_ubuntu].join(" ")}>
            <h2 className={cls.title}>Snap Code</h2>
            <p className={cls.description}>Create beautiful colored source code</p>
            <Download />
        </div>
    )
}

export default Main