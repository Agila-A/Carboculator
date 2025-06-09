import tree from "../../assets/tree.png"
import leaf from "../../assets/leaf.png"
import leaves from "../../assets/leaves.png"
import leaf2 from "../../assets/leaf2.png"
import SideBar from "./SideBar"

const PlantTree = () => {
  return (
    <div style={{display:"flex"}}>
    <SideBar />
    <div style={{height:"100vh",width: '85%',margin:0,display:"flex",justifyContent:"flex-end",alignItems:"center"}}>
            <div style={{width:"50%",height:"100vh",padding:"5% 1%",boxSizing: "border-box"}}>
               
                <img src={leaf} width="30px" height="30px" style={{marginLeft:"7%",marginBottom:0,overflow:"hidden"}}/>
                <h1 style={{fontSize:"60px",width:"85%",color:"rgba(67, 99, 58, 1)",marginLeft:"7%",marginBottom:0,marginTop:0}}>Plant A Tree For Better Life</h1>
                <p style={{width:"90%",marginLeft:"7%",marginTop:0}}>The Plant a Tree feature helps users calculate the number of trees needed to offset their carbon emissions. an actionable tree-planting goal. It's an easy way to promote sustainability and achieve carbon neutrality.</p>
                <div style={{width:"65%",margin:0,padding:0}}>
                    <img src={leaf2} width="30px" height="30px" style={{marginLeft:"100%",marginBottom:0}}/>
                </div>
                <div style={{display:"flex",flexDirection:"column",width:"65%",border:"1px solid ",marginLeft:"7%",padding:"1%",marginTop:0,borderRadius:"5px"}}>
                    <div style={{display:"flex",width:"94%",padding:"3%"}}>
                        <div style={{width:"35%"}}>Area of Land Required</div>
                        <div style={{width:"70%",height:"50%",border:"1px solid grey",borderRadius:"5px",textAlign:"center"}}>0</div>
                    </div>
                    <div style={{display:"flex",width:"94%",padding:"3%"}}>
                        <div style={{width:"35%"}}>No of trees to be planted</div>
                        <div style={{width:"70%",height:"50%",border:"1px solid grey",borderRadius:"5px",textAlign:"center"}}>0</div>
                    </div>
                    <div style={{display:"flex",width:"94%",padding:"3%"}}>
                        <div style={{width:"35%"}}>Species of the tree</div>
                        <div style={{width:"70%",height:"50%",border:"1px solid grey",borderRadius:"5px",textAlign:"center"}}>0</div>
                    </div>
                </div>

            </div>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",width:"50%",overflow:"hidden"}}>
                <img src={tree} width="80%" height="80%" />
            </div>
    </div>
    
    
    </div>
  )
}

export default PlantTree