import React from "react";
import "../assets/style/footer.css";

export default function Footer() {


  return (
    <>
    <div className="bg-blue" >
		<div className="footer-container">
			<div className="row">
				<div className="col-md-7 color-white">
					<p>Fastshopping is an Indian e-commerce company, headquartered in Bangalore, and incorporated in Singapore as a private limited company. The company initially focused on online book sales before expanding into other product categories such as consumer electronics, fashion, home essentials, groceries, and lifestyle products.The service competes primarily with Amazon's Indian subsidiary and domestic rival Snapdeal.As of March 2017, Fastshopping held a 39.5% market share of India's e-commerce industry</p>
				</div>
				<div className="col-md-5" style={{margin:"0"}} >
					<div className="row">
						<h5 className="color-red" style={{textAlign:"center"}}>Brands that we cover</h5>
						<div className="col-md-3">
							<img alt="apple_logo" style={{width:"50%",margin:"0 25% 0 25%"}} src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"/>
						</div>
						<div className="col-md-3">
						<img alt="samsung_logo" style={{width:"80%",margin:"20% 25% 0 25%"}} src="https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg"/>
						</div>
						<div className="col-md-3">
						<img alt="asus_logo" style={{width:"80%",margin:"20% 25% 0 25%"}} src="https://upload.wikimedia.org/wikipedia/commons/2/2e/ASUS_Logo.svg"/>
						</div>
						<div className="col-md-3">
						<img alt="acer_logo" style={{width:"80%",margin:"20% 25% 0 25%"}} src="https://upload.wikimedia.org/wikipedia/commons/a/a1/Acer_Logo.svg"/>
						</div>
					</div>
				</div>
			</div>
		</div>
    </div>
    </>
  );

}
