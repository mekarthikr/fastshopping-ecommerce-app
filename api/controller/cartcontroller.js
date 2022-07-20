const Cart = require("../model/cartmodel");

const addToCart = async (req, res) => {
	try{
		const userid=req.body.userid
		const productid=req.body.productid
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
	catch(error){
		res.send("error:",error)
	}

};


const removeFromCart = async (req, res) => {
	try{
		const userid=req.body.userid
		const productid=req.body.productid
		const data = await Cart.findOne({userid:userid,productid:productid})
		if(data.quantity > 1)
		{
			await Cart.findByIdAndUpdate(data._id,{$inc:{quantity:-1}})
			const cart = await data.save();
			res.send(cart)
		}
		else
		{
		await Cart.findByIdAndDelete(data.id)
		res.send("product deleted")
		}
	}
	catch{

	}
};

const getCartProducts = async (req, res) => {
	const id = req.params.id;
	try{
		const data = await Cart.find({userid:id}).populate("productid")
		res.json({cart:data});
	}
	catch{

	}
};

const clearUserCart = async (req, res) => {
	const id = req.params.id;
	try{
		const data = await Cart.deleteMany({userid:id})
		res.send("Successfully cart deleted");
	}
	catch{

	}
};

module.exports = {
    addToCart,
	removeFromCart,
	getCartProducts,
	clearUserCart
};
