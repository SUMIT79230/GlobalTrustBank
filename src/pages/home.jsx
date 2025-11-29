import { useState } from "react";  
import NavBar from "../components/navBar";
import "./home.css"
import personalloan from "../assets/personalloan.png";
import homeloan from "../assets/homeloan.png";
import businessloan from "../assets/businessloan.png";
import healthloan from "../assets/healthloan.png";
import educationloan from "../assets/educationloan.png";

const headline = "Service Provided by Global Trust Bank";
const subHeadline = "Global Trust Bank offers secure digital banking, personalized financial services, loans, investments, and business solutions designed to support growth, convenience, and long-term success.";
const loanData = [
  { title: "Personal Loan", img: personalloan },
  { title: "Business Loan", img: businessloan },
  { title: "Home Loan", img: homeloan },
  { title: "Health Loan", img: healthloan },
  { title: "Education Loan", img: educationloan },
];


const Home = () =>{
    
    const [currentIndex, setCurrentIndex] = useState(0); 
    const handlePrev = () => {
        setCurrentIndex((start) => start === 0 ? loanData.length - 1 : start - 1);
    };

    const handleNext = () => {
        setCurrentIndex((end) => end === loanData.length - 1 ? 0 : end + 1);
    };

    const currentLoan = loanData[currentIndex];
    return (
        <div className = "main-home">
            <NavBar />
            <div style={{display:"flex",flex:"row",justifyContent:"space-around"}}>
                <div className="descriptionMain" style={{display: "flex",flexDirection: "column",alignItems: "center",justifyContent: "center",textAlign: "center",marginTop: "22vh",padding: "0 20px",color: "black",gap: "15px",maxWidth:"450px"}}>
                    <div className="descriptionHeading" style={{ fontSize: "40px", fontWeight: "bold", letterSpacing: "1px" }}>
                        {headline}
                    </div>
                    <div className="descriptionData typewriter" style={{ fontSize: "16px", maxWidth: "450px", opacity: "0.9" }}>
                        {subHeadline}
                    </div>
                </div>
                <div className="slider-container">
                    <button className="slider-btn left" onClick={handlePrev}>
                        ‹
                    </button>
                    <div className="slider-card">
                        <img
                        src={currentLoan.img}
                        alt={currentLoan.title}
                        className="slider-img"
                        />
                        <h3>{currentLoan.title}</h3>
                    </div>
                    <button className="slider-btn right" onClick={handleNext}>
                        ›
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Home;