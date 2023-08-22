import { useState } from "react";
import "../../app.css"
import { useAppContext } from "./Context";
const Post = () => {
    const { products } = useAppContext()
    const [show, setShow] = useState(new Array(products.length).fill(false)) //create a new array with the length of products array in my case it's 32 length maybe. now we got a new array named show that inside has 32 empty value. i mean has nothing but got 32 value's space. now with .fill() i mean with fill method we are filling the empty length with the value (false) we can add any value but in this case we need to set a false value to show our edit option exactly where we want. remember now our show var has an array of 32 false value

    const toggleEdit = (index) => {

        // let's create a new array . cause we don't wanna mess with the original array of state (show)
        const newArray = [...show]
        // now that we have a duplicate of show array we can do whatever . in this case we gonna change a value as in the exact index position at where we are gonna click the edit button.
        newArray[index] = !newArray[index] // new array[2] = !newArray[2] makes the 2th index of array false.
        // now time to set the new array value
        setShow(newArray)
        // now we have setted the new array of our show array with the exact index position udated true/false value. and it will do it's work whenever we click the edit button
    }
    return (
        <div className="h-[87vh] overflow-y-scroll">

            <div>
                <div className="relative">
                    <div className="text-center bg-[white] text-2xl font-mono font-semibold z-[55] sticky top-[-0px] my-5">
                        <span className="pb-5">All products Available for sale!</span>

                        <hr className="mb-5 my-2" />
                    </div>
                    <div className="myTable">
                        <div className="myTableHeader sticky top-8" >
                            <div className="myTr">
                                <div className="myTd" tooltips="serial no">serial</div>
                                <div className="myTd" tooltips="product name">title/name</div>
                                <div className="myTd" tooltips="product colors">color</div>
                                <div className="myTd" tooltips="total product quantity + new added">Total Q</div>
                                <div className="myTd" tooltips="Total soled products quantity">Sold Q</div>
                                <div className="myTd" tooltips="Total products are on Returning status">Return pending</div>
                                <div className="myTd" tooltips="total orders and product on in delivery status">On Delivery</div>
                                <div className="myTd" tooltips="counting of total available products for sale or delivery">Stock</div>
                                <div className="myTd" tooltips="buyer name or from whome the product was bought">Supplier</div>
                                <div className="myTd" tooltips="a discount will be deducted to the product from the price">discount</div>
                                <div className="myTd" tooltips="present price per product will be sold without discounted price">Price</div>
                                <div className="myTd" tooltips="further notes">Notes/Comments</div>
                                <div className="myTd justify-end" tooltips="edit">edit</div>
                            </div>
                        </div>
                        <div className="w-full relative">

                            <div className="myTableBody sticky">
                                {
                                    products.map((product, id) => <div key={id}>

                                        <div className="myTr" id={`myId${id}`}>
                                            <div className="myTd">serial</div>
                                            <div className="myTd">title/name</div>
                                            <div className="myTd">color</div>
                                            <div className="myTd">Total Q</div>
                                            <div className="myTd">Sold Q</div>
                                            <div className="myTd">Return pending</div>
                                            <div className="myTd">On Delivery</div>
                                            <div className="myTd">Stock</div>
                                            <div className="myTd">Supplier</div>
                                            <div className="myTd">discount</div>
                                            <div className="myTd">Price</div>
                                            <div className="myTd">Notes/Comments</div>
                                            <div onClick={()=>toggleEdit(id)} className="myTd justify-end z-[1] relative">
                                                edit
                                                {show[id] && (
                                                <div className="absolute overflow-y-scroll w-[30px] bg-white border p-2 mt-2">
                                                    {/* Edit menu options */}
                                                    <div>Edit Option 1</div>
                                                    <div>Edit Option 2</div>
                                                    <div>Edit Option 3</div>
                                                </div>
                                            )}
                                            </div>
                                        </div>
                                        
                                    </div>)
                                
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;