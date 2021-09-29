import menuFold from "../../../helpers/util/menu-fold";
// import { IconButton } from "@material-ui/core"
import './title.css'
const Title = (props: { name: string, onClick: () => void }) => {
    const handleFold = () => {
        props.onClick()
        menuFold.removeAllListeners('menu-fold');
    }
    return (
        <div className="title">
            <span>{props.name}</span>
            {/* <IconButton sx={{padding: 0}} aria-label="fold" onClick={handleFold}>
                
            </IconButton> */}
            <i className="icon-ic_arrow_l" onClick={handleFold}></i>
        </div>
    )
}
export default Title