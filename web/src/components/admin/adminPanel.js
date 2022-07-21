import React, { useEffect } from "react";
import {  useDispatch, useSelector } from "react-redux";
import { loadAdminProducts } from "../../action/productaction";

import "../../assets/style/adminPanel.css";
import "../../assets/style/home.css";
import Productcard from "./productCard";


export default function Adminpanel() {
	let dispatch = useDispatch();

	const { products } = useSelector((state) => state.product);
	useEffect(() => {
		dispatch(loadAdminProducts());
	}, []);

	return (
		<div className="product card">
			{products && products.map((product) => {
					return <Productcard props={product} />;
			})}
		</div>
	);
}