import {  useNavigate } from "react-router-dom";

const header = ["Home","Login","ContactUs","Notices"]
const NavBar = () => {
    const navigate = useNavigate();

    const handleNavigate = (path) =>{
        navigate(`/${path.toLowerCase()}`)
    }
    return (
        <div className = "mainNavBar" style = {{display:"flex",flexDirection:"row",backgroundColor:"black",justifyContent:"space-between",alignItems:"center", padding:"15px"}}>
             <div className="logo" style={{ color: "white", fontSize:"20px", fontWeight:"bold" }}>
                Global Trust Bank
            </div>
            <div className = "navHeader" style={{display:"flex",flexDirection:"row",padding:"4px 5px",color:"white",gap:"15px", cursor:"pointer", paddingRight:"20px"}}>
            {header.map((h) => (
                <div className="header" onClick={()=>handleNavigate(h)}>
                    {h}
                </div>
            ))
            }
            </div>
        </div>
    );
};

export default NavBar;
