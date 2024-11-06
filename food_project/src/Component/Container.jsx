
const Container=(props)=>{
    return(
        <>
        <div className="editcontainer-wrapper ">
        <div className="editcontainer ">
        {props.children}
        </div>
        </div>
        </>
    )
}
export default Container