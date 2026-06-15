import React, { JSX } from 'react'
import "./Card.css";

interface Props {
  companyName: string;
  ticker: string;
  price: number;
}

const Card: React.FC<Props>= ({ companyName , ticker, price }: Props) : JSX.Element => {
  return (
    <div className = "card">
        <img src="https://cdn.britannica.com/79/232779-050-6B0411D7/German-Shepherd-dog-Alsatian.jpg"
        alt="dogImage"/>

        <div className="details">
            <h2>{companyName} - {ticker}</h2>
            <p>{price}</p>
        </div>
        <p className="info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque alias nobis inventore, aspernatur maxime deleniti, iusto temporibus id delectus, quia blanditiis illo accusamus vel aliquid ipsum eum necessitatibus doloremque quisquam.
        </p>
    </div>
  );
}
export default Card