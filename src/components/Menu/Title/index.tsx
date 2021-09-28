import { IconButton } from "@material-ui/core"
import { FoldIcon } from "../../../icons"
import menuFold from "../../../util/menuFold"
import './title.css'
const Title = (props: { name: string }) => {
    const handleFold = () => {
        menuFold.emit('menu-fold')
    }
    return (
        <div className="title">
            <span>{props.name}</span>
            <span>
                <IconButton aria-label="fold" onClick={handleFold}>
                    <FoldIcon />
                </IconButton>
            </span>
        </div>
    )
}
export default Title