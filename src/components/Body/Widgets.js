import React from 'react'
import "./Widgets.css";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';


function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className = "widgets__article">
            <div className = "widgets__articleLeft">
            <FiberManualRecordIcon/>
            </div>
    
            <div className = "widgets__articleRight">
            <h4>{heading}</h4>
            <p>{subtitle}</p>
            </div>
        </div>
    );



  return (
    <div className="widgets">
      <div className = "widgets__header">
        <h2>Linkedin News</h2>
      <InfoOutlinedIcon/>
      </div>

      {newsArticle("TechCrunch", "Google announces new AI research center in Paris")}
      {newsArticle("VentureBeat", "Tesla starts production of its Cybertruck pickup truck")}
      {newsArticle("Wired", "Microsoft acquires Activision Blizzard in $68.7 billion deal")}
      {newsArticle("Digital Trends", "Samsung Galaxy S23 Ultra to feature a 200MP camera")}
      {newsArticle("The Information", "Amazon is working on a self-driving car")}
      {newsArticle("Mashable", "TikTok launches new feature for creators to make money")}
      
    </div>
  )
}

export default Widgets
