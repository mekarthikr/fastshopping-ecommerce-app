const Cart = require("../model/cartmodel");

const addToCart = async (req, res) => {
	console.log("came")
	try{
		const userid=req.body.userid
		const productid=req.body.productid
		console.log(req.body)
		let data = await Cart.findOne({userid:userid,productid:productid})
		if(data)
		{
			data = await Cart.findByIdAndUpdate(data._id,{$inc:{quantity:1}})
			const cart = await data.save();
			res.send(cart)
		}
		else
		{

		let cart = new Cart({
			userid:req.body.userid,
			productid:req.body.productid
			
		})
		let data = await cart.save()
		res.send(data)
		}
	}
	catch{

	}

};


const removeFromCart = async (req, res) => {
	try{
		const userid=req.body.userid
		const productid=req.body.productid
		let data = await Cart.findOne({userid:userid,productid:productid})
		if(data.quantity > 1)
		{
			data = await Cart.findByIdAndUpdate(data._id,{$inc:{quantity:-1}})
			const cart = await data.save();
			res.send(cart)
		}
		else
		{

		// let cart = new Cart({
		// 	userid:req.body.userid,
		// 	productid:req.body.productid
			
		// })
		let data = await Cart.findByIdAndDelete(data._id)
		res.send("product deleted")
		}
	}
	catch{

	}

};

const getCartProducts = async (req, res) => {
	const id = req.params.id;
	try{
		console.log(id)
		const data = await Cart.find({userid:id}).populate("productid")
		res.json({cart:data});
		// const userid=req.body.userid
		// const productid=req.body.productid
		// let data = await Cart.findOne({userid:userid,productid:productid})
		// if(data)
		// {
		// 	data = await Cart.findByIdAndUpdate(data._id,{$inc:{quantity:1}})
		// 	const cart = await data.save();
		// 	res.send(cart)
		// }
		// else
		// {

		// let cart = new Cart({
		// 	userid:req.body.userid,
		// 	productid:req.body.productid
			
		// })
		// let data = await cart.save()
		// res.send(data)
		// }
	}
	catch{

	}

};


module.exports = {
    addToCart,
	removeFromCart,
	getCartProducts
};
