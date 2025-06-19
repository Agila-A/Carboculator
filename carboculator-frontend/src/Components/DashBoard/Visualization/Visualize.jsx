
import EmissionBarChart from "./EmissionBarChart"
import EmissionDonutChart from "./EmissionDonutChart"
import MultiLineChart from "./MultiLineChart"


const Visualize = () => {
  return (
    <div style={{display:"flex",flexDirection:"column",width:"85%",height:"100vh"}}>
        <div style={{display:"flex",width:"100%",height:"50vh",}}>
            <div style={{width:"50%",height:"41vh",boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",margin:"3% 1.5% 3% 3%"}}>
                <h3 style={{textAlign:"center"}}>Total Carbon Emitted each Year</h3>
                <EmissionBarChart />
            </div>
            <div style={{width:"50%",height:"41vh",boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",margin:"3% 3% 3% 1.5%"}}>
                <h3 style={{ fontSize: '20px',textAlign:"center"}}>Emission Based on Sources</h3>
                <EmissionDonutChart />
            </div>
            
        </div>
        <div style={{width:"94%",height:"50vh",margin:"0% 3% 3% 3%",padding:0,boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",}}>
            <h3 style={{textAlign:"center",margin:0,padding:"1.5%",}}>Total  Carbon Credits each Year</h3>
            <MultiLineChart />
        </div>
    </div>
  )
}

export default Visualize