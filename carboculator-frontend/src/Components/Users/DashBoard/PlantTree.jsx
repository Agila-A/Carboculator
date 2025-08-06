import tree from "../../../assets/tree.png"
import leaf from "../../../assets/leaf.png"
import leaves from "../../../assets/leaves.png"
import leaf2 from "../../../assets/leaf2.png"
import { TextField, MenuItem } from '@mui/material';
import { useEffect, useState } from "react";
import { useEmission } from '../Context/EmmissionContext';

const PlantTree = () => {
    
    const {emission, transportEmission}=useEmission();
    const totalEmission = (Number(emission) || 0) + (Number(transportEmission) || 0);

    const [land,setLand]=useState("0");
    const [noOfTrees,setNoOfTrees]=useState("0");
    const [species,setSpecies]=useState("Neem");

    useEffect(() => {
        let treeAbsorptionRate = 0;
        let landPerTree = 0;

       
        switch(species) {
            case 'Neem':
                treeAbsorptionRate = 30;  
                landPerTree = 4;       
                break;
            case 'Peepal':
                treeAbsorptionRate = 35;
                landPerTree = 5;
                break;
            case 'Banyan':
                treeAbsorptionRate = 40;
                landPerTree = 6;
                break;
            case 'Mango':
                treeAbsorptionRate = 25;
                landPerTree = 3.5;
                break;
            default:
                treeAbsorptionRate = 30;
                landPerTree = 4;
        }

        if (totalEmission > 0) {
            const numberOfTrees = Math.ceil(totalEmission / treeAbsorptionRate);
            const landRequired = numberOfTrees * landPerTree;

            setNoOfTrees(numberOfTrees.toString());
            setLand(landRequired.toFixed(2).toString());
        } else {
            setNoOfTrees("0");
            setLand("0");
        }
    }, [species, totalEmission]); 

  return (
    <div style={{height:"100vh",width: '85%',margin:0,display:"flex",justifyContent:"flex-end",alignItems:"center"}}>
            <div style={{width:"50%",height:"100%",padding:"5% 1%",boxSizing: "border-box",display:"flex",flexDirection:"column"}}>
               
                <img src={leaf} width="30px" height="30px" style={{marginLeft:"7%",marginBottom:0,overflow:"hidden"}}/>
                <h1 style={{fontSize:"60px",color:"rgba(67, 99, 58, 1)",marginLeft:"7%",marginBottom:0,marginTop:0,fontWeight:"bold",}}>Plant A Tree For</h1>
                <h1 style={{fontSize:"60px",color:"rgba(67, 99, 58, 1)",marginLeft:"7%",marginBottom:0,marginTop:0,fontWeight:"bold",}}>Better Life</h1>
                <p style={{width:"90%" ,marginLeft:"7%",marginTop:0,padding:"2% 0% 0% 0%"}}>The Plant a Tree feature helps users calculate the number of trees needed to offset their carbon emissions. an actionable tree-planting goal. It's an easy way to promote sustainability and achieve carbon neutrality.</p>
                <div style={{width:"65%",margin:0,padding:0}}>
                    <img src={leaf2} width="30px" height="30px" style={{marginLeft:"100%",marginBottom:0}}/>
                </div>
                <div style={{display:"flex",flexDirection:"column",width:"65%",border:"1px solid ",marginLeft:"7%",padding:"1%",marginTop:0,borderRadius:"5px"}}>
                    <div style={{display:"flex",width:"94%",padding:"3%"}}>
                        <div style={{width:"35%"}}>Area of Land Required</div>
                        <div style={{width:"70%",height:"79%",border:"1px solid grey",borderRadius:"5px",display:"flex",justifyContent:"center",alignItems:"center"}}>{land} Meter Square</div>
                    </div>
                    <div style={{display:"flex",width:"94%",padding:"3%"}}>
                        <div style={{width:"35%"}}>No of trees to be planted</div>
                        <div style={{width:"70%",height:"79%",border:"1px solid grey",borderRadius:"5px",display:"flex",justifyContent:"center",alignItems:"center"}}>{noOfTrees}</div>
                    </div>
                    <div style={{display:"flex",width:"94%",padding:"3%"}}>
                        <div style={{width:"35%"}}>Species of the tree</div>
                        <div style={{width:"70%",height:"60%",textAlign:"center"}}>
                        <TextField select size="small" style={{width:"100%"}} value={species} onChange={(e) => setSpecies(e.target.value)} required>
                            <MenuItem value="Neem">Neem</MenuItem>
                            <MenuItem value="Peepal">Peepal</MenuItem>
                            <MenuItem value="Banyan">Banyan</MenuItem>
                            <MenuItem value="Mango">Mango</MenuItem>
                        </TextField>
                        
                        </div>
                    </div>
                </div>

            </div>
            <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",width:"50%",overflow:"hidden"}}>
                <img src={tree} width="80%" height="80%" />
            </div>
    </div>
  )
}

export default PlantTree;
