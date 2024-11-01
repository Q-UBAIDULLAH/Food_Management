import { useNavigate } from "react-router-dom"


const CardComponent=(props)=>{
    const{strCategoryDescription,strCategoryThumb,strCategory,idCategory,Price}=props.item
    let discription=strCategoryDescription.slice(0,70)
    const navigate=useNavigate()
    const gotodetail=()=>{
navigate(`/detail/${idCategory}`)
    }
    return(
        <>

<div className="col subcard" onClick={gotodetail}>

    <div className="card pio">
      <img  src={strCategoryThumb} className="card-img-top   img-wi " alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{strCategory}</h5>
        <p className="card-text">{discription}</p>
        <p>RS:{Price}</p>
      </div>
    </div>
  </div>

        </>
    )
}
export default CardComponent