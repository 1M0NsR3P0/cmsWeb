import JoditEditor from 'jodit-react';
import React, { useRef, useState } from 'react';

const AddProducts = () => {
    const editor = useRef(null);
    const [text, setText] = useState('');
    const [isChecked, setChecked] = useState(false);
    const handleProductAdd = (e) => {
        e.preventDefault()
        const form = e.target;
        const pid = form.PID.value;
        const title = form.title.value;
        const subCategories = form.subCategories.value;
        const categories = form.categories.value;
        const color = form.color.value;
        const description = text;
        const onDelivery = form.onDelivery.value;
        const returnPending = form.returnPending.value;
        const stock = form.stock.value;
        const sold = form.sold.value;
        const supplier = form.supplier.value;
        const oldPrice = form.oldPrice.value;
        const newPrice = form.newPrice.value;
        const discount = form.discount.value;
        const upcoming = form.upcoming.value;
        const note = form.note.value;
        const date = isChecked ? Date().slice(0, 16) : form.date.value;
        const newProduct = {
            pid: pid,
            title: title,
            subCategories: subCategories,
            categories: categories,
            color: color,
            description: description,
            onDelivery: onDelivery,
            returnPending: returnPending,
            stock: stock,
            sold: sold,
            supplier: supplier,
            oldPrice: oldPrice,
            newPrice: newPrice,
            discount: discount,
            upcoming: upcoming,
            note: note,
            date: date,
        }
        // alert(JSON.stringify(newProduct))
    }
    const checked = () => {
        setChecked(!isChecked)
    }
    return (
        <div>
            <div className='w-full flex flex-col items-center'>
                <div className='h2 text-center myForm'>Add a product  </div>
                <form onSubmit={handleProductAdd} className='flex flex-col justify-start items-start gap-10 border shadow-lg p-5'>
                    <div className='flex flex-col items-start  gap-6'>
                        <span className='flex gap-2 items-center'><input type="text" name="PID" id="PID" className='' /> : Product Id / barcode</span>
                        <span className='flex gap-2 items-center'><input type="text" name="title" id="title" className='w-[450px] h-[50px]' /> : Product Title</span>
                        <span className='flex gap-2'>
                            <select name="subCategories" id="sub_categories">
                                <option value="Watch">Watch</option>
                                <option value="Gas Stove">Gas Stove</option>
                                <option value="Furniture">Furniture</option>
                                <option value="Mobile">Mobile</option>
                                <option value="Laptop">Laptop/PC</option>
                            </select> : Select a SubCategory
                        </span>
                        <span className='flex gap-2'>
                            <select name="categories" id="categories">
                                <option value="electronics">Electronics</option>
                                <option value="home_appiliance">Home Appiliance</option>
                                <option value="Decoration">Home Decoration</option>
                            </select> : Select A Category
                        </span>
                        <span className='flex gap-2'>
                            <select name="color" id="color">
                                <option value="red">red</option>
                                <option value="blue">blue</option>
                                <option value="white">white</option>
                                <option value="black">black</option>
                                <option value="orange">orange</option>
                                <option value="gray">gray</option>
                                <option value="green">green</option>
                            </select> : Select a color
                        </span>
                        <div>
                            <JoditEditor
                                ref={editor}
                                onChange={(newContent) => setText(newContent)}
                            />
                        </div>
                    </div>
                    <div className='flex justify-start w-full items-start gap-10'>
                        <div className='flex flex-col gap-5'>
                            <span className='flex gap-2'><input type="number" className='w-[50px]' placeholder='0' name="onDelivery" id="onDelivery" /> : On Delivery</span>
                            <span className='flex gap-2'><input type="number" className='w-[50px]' placeholder='0' name="returnPending" id="returnPending" /> : Return Pending</span>
                            <span className='flex gap-2'><input type="number" className='w-[50px]' placeholder='0' name="stock" id="stock" /> : Stock Quantity</span>
                            <span className='flex gap-2'><input type="number" className='w-[50px]' placeholder='0' name="sold" id="sold" /> : Total sold</span>
                            <span className='flex flex-col gap-2'><span><input type="date" defaultValue={`${isChecked && "25-01-2023"}`} name="date" id="date" /> :  or Add Today? <input type="checkbox" name="today" id="today" onChange={checked} />
                            </span>
                                <span className={`${!isChecked && "invisible"}`}>{Date().slice(0, 16)}</span>
                            </span>
                        </div>
                        <div className='flex flex-col gap-5'>
                            <span className='flex'><input type="text" name="supplier" id="supplier" /> : Name of Supplier</span>
                            <span className='flex'><input type="number" className='w-[50px]' placeholder='0' name="oldPrice" id="oldPrice" /> : Old Price purchased</span>
                            <span className='flex'><input type="number" className='w-[50px]' placeholder='0' name="newPrice" id="newPrice" /> : purchased price</span>
                            <span className='flex'><input type="number" className='w-[50px]' placeholder='0' name="discount" id="discount" /> : Discount..?</span>
                            <span className='flex'><input type="number" className='w-[50px]' placeholder='0' name="upcoming" id="upcoming" /> : Back-Drop Orders</span>
                        </div>
                            <textarea name="note" id="note" cols="30" rows="8" placeholder='enter notes'>Notes</textarea>
                    </div>
                        <button className='btn btn-primary' type='submit'>submit</button>   
                </form>
            </div>
        </div>
    );
};

export default AddProducts;