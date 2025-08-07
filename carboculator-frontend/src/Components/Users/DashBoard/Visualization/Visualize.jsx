
import EmissionBarChart from "./EmissionBarChart"
import EmissionDonutChart from "./EmissionDonutChart"
import MultiLineChart from "./MultiLineChart"


const Visualize = () => {
  return (
    <div style={{display:"flex",flexDirection:"column",width:"100%",height:"100vh"}}>
        <div style={{display:"flex",width:"100%",height:"50vh",}}>
            <div style={{width:"45%",height:"41vh",boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",margin:"3% 1.5% 3% 1.5%",border: '2px solid #ddd',borderRadius:"1rem"}} className="hover:scale-[1.02] hover:border-[black] hover:shadow-[0_8px_20px_rgba(0,0,0,0.1)]  transition-transform duration-200 ease-in-out">
                <h3 style={{ fontSize: '18px',textAlign:"center",padding:"2% 0% 3.5% 0%",fontWeight:"600"}}>Emission Based on Sources</h3>
                <EmissionDonutChart />
            </div>
            <div style={{width:"55%",height:"41vh",boxShadow: "0px 1px 10px rgba(0, 0, 0, 0.1)",margin:"3% 1.5% 3% 3%",border: '2px solid #ddd' ,borderRadius:"1rem"}} className="hover:scale-[1.02] hover:border-[to-black] hover:shadow-[0_8px_20px_rgba(0,0,0,0.1)] transition-transform duration-200 ease-in-out">
                <h3 style={{textAlign:"center",padding:"3% 0% 3% 0%",fontWeight:"600"}}>Total Carbon Emitted each Year</h3>
                <EmissionBarChart />
            </div>
            
            
        </div>
        <div style={{width:"97%",height:"50vh",margin:"2.5% 3% 3% 1.5%",padding:0,boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",border: '2px solid #ddd', borderRadius:"1rem"}} className="hover:scale-[1.02] hover:border-[black] hover:shadow-[0_8px_20px_rgba(0,0,0,0.1)] transition-transform duration-200 ease-in-out" >
            <h3 style={{textAlign:"center",margin:0,padding:"1.5%",fontWeight:"600"}}>Total  Carbon Credits each Year</h3>
            <MultiLineChart />
        </div>
    </div>
  )
}

export default Visualize