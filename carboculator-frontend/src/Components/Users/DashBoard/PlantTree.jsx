import { TextField, MenuItem } from '@mui/material';
import { useEffect, useState } from "react";
import axios from 'axios';
import tree from "../../../assets/tree.png"
import leaf from "../../../assets/leaf.png"
import leaves from "../../../assets/leaves.png"
import leaf2 from "../../../assets/leaf2.png"


const PlantTree = () => {
    // State to hold the fetched emission data
    const token = localStorage.getItem('token');
    const [emissionData, setEmissionData] = useState({
        totalMachineEmission: 0,
        totalTransportEmission: 0,
        totalElectricityEmission: 0,
    });
    // State for the calculations and species selection
    const [land, setLand] = useState("0");
    const [noOfTrees, setNoOfTrees] = useState("0");
    const [species, setSpecies] = useState("Neem");
    // State for loading and errors
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // useEffect to fetch data on component mount
    useEffect(() => {
        const fetchEmissionData = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api/emission", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
                setEmissionData(response.data);
                setLoading(false);
            } catch (err) {
                console.error("Failed to fetch emission data:", err);
                if (err.response && err.response.status === 401) {
                    setError("You are not authorized. Please log in.");
                } else {
                    setError("Failed to fetch data. Please try again later.");
                }
                setLoading(false);
            }
        };

        fetchEmissionData();
    }, []); // Empty dependency array ensures this runs only once

    // useEffect to perform calculations whenever emissionData or species changes
    useEffect(() => {
        let treeAbsorptionRate = 0;
        let landPerTree = 0;

        switch (species) {
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

        const totalEmission =
            (Number(emissionData.totalMachineEmission) || 0) +
            (Number(emissionData.totalTransportEmission) || 0) +
            (Number(emissionData.totalElectricityEmission) || 0);

        if (totalEmission > 0) {
            const numberOfTrees = Math.ceil(totalEmission / treeAbsorptionRate);
            const landRequired = numberOfTrees * landPerTree;

            setNoOfTrees(numberOfTrees.toString());
            setLand(landRequired.toFixed(2).toString());
        } else {
            setNoOfTrees("0");
            setLand("0");
        }
    }, [species, emissionData]); // Recalculate when species or fetched data changes

    if (loading) {
        return <div style={{ textAlign: "center", padding: "20px" }}>Loading data...</div>;
    }

    // if (error) {
    //     return <div style={{ textAlign: "center", padding: "20px", color: "red" }}>{error}</div>;
    // }

    return (
        <div style={{ height: "100vh", width: '85%', margin: 0, display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
            <div style={{ width: "50%", height: "100%", padding: "5% 1%", boxSizing: "border-box", display: "flex", flexDirection: "column" }}>

                <img src={leaf} width="30px" height="30px" style={{ marginLeft: "7%", marginBottom: 0, overflow: "hidden" }} />
                <h1 style={{ fontSize: "60px", color: "rgba(67, 99, 58, 1)", marginLeft: "7%", marginBottom: 0, marginTop: 0, fontWeight: "bold", }}>Plant A Tree For</h1>
                <h1 style={{ fontSize: "60px", color: "rgba(67, 99, 58, 1)", marginLeft: "7%", marginBottom: 0, marginTop: 0, fontWeight: "bold", }}>Better Life</h1>
                <p style={{ width: "90%", marginLeft: "7%", marginTop: 0, padding: "2% 0% 0% 0%" }}>The Plant a Tree feature helps users calculate the number of trees needed to offset their carbon emissions. an actionable tree-planting goal. It's an easy way to promote sustainability and achieve carbon neutrality.</p>
                <div style={{ width: "65%", margin: 0, padding: 0 }}>
                    <img src={leaf2} width="30px" height="30px" style={{ marginLeft: "100%", marginBottom: 0 }} />
                </div>
                <div style={{ display: "flex", flexDirection: "column", width: "65%", border: "1px solid ", marginLeft: "7%", padding: "1%", marginTop: 0, borderRadius: "5px" }}>
                    <div style={{ display: "flex", width: "94%", padding: "3%" }}>
                        <div style={{ width: "35%" }}>Area of Land Required</div>
                        <div style={{ width: "70%", height: "79%", border: "1px solid grey", borderRadius: "5px", display: "flex", justifyContent: "center", alignItems: "center" }}>{land} Meter Square</div>
                    </div>
                    <div style={{ display: "flex", width: "94%", padding: "3%" }}>
                        <div style={{ width: "35%" }}>No of trees to be planted</div>
                        <div style={{ width: "70%", height: "79%", border: "1px solid grey", borderRadius: "5px", display: "flex", justifyContent: "center", alignItems: "center" }}>{noOfTrees}</div>
                    </div>
                    <div style={{ display: "flex", width: "94%", padding: "3%" }}>
                        <div style={{ width: "35%" }}>Species of the tree</div>
                        <div style={{ width: "70%", height: "60%", textAlign: "center" }}>
                            <TextField select size="small" style={{ width: "100%" }} value={species} onChange={(e) => setSpecies(e.target.value)} required>
                                <MenuItem value="Neem">Neem</MenuItem>
                                <MenuItem value="Peepal">Peepal</MenuItem>
                                <MenuItem value="Banyan">Banyan</MenuItem>
                                <MenuItem value="Mango">Mango</MenuItem>
                            </TextField>

                        </div>
                    </div>
                </div>

            </div>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%", width: "50%", overflow: "hidden" }}>
                
                <img src={tree} width="80%" height="80%" />
            </div>
        </div>
    )
}

export default PlantTree;