import { useEffect, useState } from "react";
import "../../app.css"
import { useAppContext } from "./Context";
import ActiveLinkBLue from "../../ActiveLinkBlue";
import { useNavigate } from "react-router-dom";
import EditProduct from "./EditProduct";
const Post = () => {
    const { products } = useAppContext()
    const navigate = useNavigate()
    const [satatus, setStatus] = useState('')
    const [arrayId, setArrayId] = useState(null)
    const [productId, setId] = useState(null)
    const [SelectedProduct, setProduct] = useState([])
    const [SelectedColor, setColor] = useState([])
    const [selectedRow, setRow] = useState(new Array(products.length).fill(false))
    const newArray = [...selectedRow]
    const [price, setPrice] = useState(0)
    useEffect(() => {
        
    }, [])
    const toggleEdit = (id) => {
        newArray[id] = !newArray[id]
        setRow(newArray)
    }
    const handleStatusChange = (e, pid, id) => {
        setId(pid)
        setArrayId(id)
        const newStatus = e.target.value;
        setStatus(newStatus);
        if (newStatus === 'edit') {
            setId(pid)
            const theProduct = products.find(p => p.id === pid)
            setProduct(theProduct)
            window.my_modal_1.showModal()
            setColor(theProduct.color)
        }
        if (newStatus === 'delete') {
            // TODO: fetch and patch
        }
        if (newStatus === 'note') {
            // TODO: fetch and patch
        }
    };
    // console.log(SelectedProduct.color)
    const handleSave = (id) => {
        // navigate(`/edit/:${id}`)
        // fetch('somewhere.com')
        newArray[arrayId] = !newArray[arrayId]
        setRow(newArray)
    }
    return (
        <div className="w-full relative">
            <div className="w-full flex justify-center relative">
                <div className="myTable-container w-[80%] sticky top-0">
                    <div className="myTable-title sticky top-[-5%]" title="scroll on the row to see hidden text">my table tile</div>
                    <hr className="my-1 sticky top-0" />
                    <div className="myTable relative">
                        <div className="myTable-header sticky top-0">
                            {/* <div className="myTable-row gap-5">
                                <div className="myTable-cell" title="serial no">serial</div>
                                <div className="myTable-cell" title="Product id">P.Id</div>
                                <div className="myTable-cell" title="product name">title/name</div>
                                <div className="myTable-cell" title="product colors">color</div>
                                <div className="myTable-cell" title="counting of total available products for sale or delivery">Stock</div>
                                <div className="myTable-cell" title="buyer name or from whome the product was bought">Supplier</div>
                                <div className="myTable-cell" title="a discount will be deducted to the product from the price">discount</div>
                                <div className="myTable-cell" title="present price per product will be sold without discounted price">Price</div>
                                <div className="myTable-cell" title="present price per product will be sold without discounted price">note</div>

                                <div className="myTable-cell" title="edit">edit
                                    <span></span></div>
                            </div> */}
                            <div className="myTable-row gap-5">
                                <div className="myTable-cell">
                                    serial
                                </div>
                                <div className="myTable-cell">
                                    P.Id
                                </div>
                                <div className="myTable-cell">
                                    Title
                                </div>
                                <div className="myTable-cell">
                                    color
                                </div>
                                <div className="myTable-cell">
                                    quantity
                                </div>
                                <div className="myTable-cell">
                                    supplier
                                </div>
                                <div className="myTable-cell">
                                    discount
                                </div>
                                <div className="myTable-cell">
                                    Price
                                </div>
                                <div className="myTable-cell">
                                    Notes
                                </div>
                                <div className="myTable-cell">
                                    Edit
                                </div>
                            </div>
                        </div>
                        <div className="myTable-body sticky top-16">
                            {
                                products.map((product, id) => {
                                    const discountedPrice = product.oldPrice - (product.oldPrice * (product.discount / 100));
                                    return <div key={id} className="myTable-row gap-5">
                                        <div className="myTable-cell text-center">{id + 1}</div>
                                        <div className="myTable-cell">{product?.id}</div>
                                        <div className="myTable-cell">{product?.name}</div>
                                        <div className="myTable-cell">{product?.color.map((e, id) => <span className="mr-1">{e},</span>)}</div>
                                        <div className="myTable-cell">{product?.quantity}</div>
                                        <div className="myTable-cell">{product?.supplier}</div>
                                        <div className="myTable-cell">{product?.discount}</div>
                                        <div className="myTable-cell">{discountedPrice === NaN? 0:discountedPrice}</div>
                                        <div className="myTable-cell">{product.notes}</div>
                                        <div className="myTable-cell flex justify-center">

                                            <span>

                                                {!selectedRow[id] && <svg onClick={() => toggleEdit(id)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                                </svg>}
                                                {selectedRow[id] &&
                                                    <select className=""
                                                        onChange={(e) => handleStatusChange(e, product.id, id)}
                                                    // onClick={openModal}
                                                    >
                                                        <option value="boost">Boost!
                                                        </option>
                                                        <option value="edit">edit
                                                        </option>
                                                        <option value="delete">Delete</option>
                                                        <option value="note">Note</option>
                                                    </select>
                                                }
                                            </span>
                                        </div>
                                        {selectedRow[id] && <button onClick={() => handleSave(product.id)}>save</button>}
                                    </div>
})
                            }
                        </div>
                    </div>
                </div>
            </div>
            <dialog id="my_modal_1" className="modal">
                <form method="dialog" className="modalBox">
                    <div className="py-4">
                        <EditProduct p={SelectedProduct} color={SelectedColor} />
                    </div>
                    <div className="modal-action">
                        <button className="btn btn-success" onClick={() => handleSave(productId)}>Save</button>
                    </div>
                    <div className="modal-action">
                        <button className="btn btn-warning" onClick={() => handleSave(productId)}>Cancel</button>                    </div>
                </form>
            </dialog>
        </div>
    );
};

export default Post;