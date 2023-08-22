import React from 'react';
import { useParams } from 'react-router-dom';
import { useAppContext } from './Context';
import { useEffect } from 'react';
import { useState } from 'react';

const EditProduct = ({ p, color }) => {
    const [price, setPrice] = useState(0)
    const [editColor, setColorEdit] = useState(false)
    const [editQ, setQ] = useState(false)
    const [editDisc, setDisc] = useState(false)
    const [editRecvdDate, setRcvdDate] = useState(false)
    // alert(color)
    // const [selectedOption,setOption] = useState('')
    useEffect(() => {
        const disc = typeof (p.discount) === 'number' ? p.discount : 0
        const price = p.oldPrice - (p.oldPrice * disc) / 100
        setPrice(price)
    }, [p])
    const showColorEdit = () => {
        // setOption(e.target.value)
        setColorEdit(!editColor)
    }
    const showQEdit = () => {
        setQ(!editQ)
    }
    const showDiscEdit = () => {
        setDisc(!editDisc)
    }
    const showDateEdit = () => {
        setRcvdDate(!editRecvdDate)
    }
    const Warn = () => {
        window.my_modal_2.showModal()
    }
    return (
        <div>
            <div>
                <div className='myCard'>
                    <div className='cardId relative'>
                        <small className='absolute top-[-15px]'>product id: {p?.id}</small>
                        <span>
                            {p?.category + "-->"}{p?.subCategory}
                        </span>
                    </div>
                    <div>
                        <h1 className='cardHeading'><span>
                            {p?.name}
                        </span>
                        </h1>
                        <p className='Card-details'>
                            <span>
                                <span className='font-extrabold'>Description:</span> {p?.description}
                            </span>
                        </p>
                    </div>
                    <div className='selectiondiv'>
                        <div className='flex gap-1'>
                            Color: {!editColor && color.map((clr, index) => (
                                <span key={index} className='flex-col mr-3'>{clr},</span>
                            ))}
                            {!editColor && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5" onClick={showColorEdit}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                            </svg>}
                            {editColor && <select>
                                {color.map((every, id) => <option key={id}>
                                    {every}
                                </option>)}
                            </select>}
                            {editColor && <select onChange={showColorEdit}>
                                <option value="delete">out of stock</option>
                                <option value="soon">available soon..</option>
                                <option value="available">available now</option>
                            </select>}
                            {editColor && <span className='btn-xs btn-primary cursor-pointer' onClick={showColorEdit}>save</span>}
                        </div>
                        <div className='flex gap-2'>
                            Stock Quantity: {!editQ && <span className='w-[50px] selectNo'> {p?.quantity}</span>}
                            <div className='flex flex-col gap-2'>
                                {editQ && <>
                                    <input className='w-[50px] focus:outline-none' type="number" name="numberQ" id="numberQ" placeholder={p?.quantity} />
                                </>}
                                {!editQ && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5" onClick={showQEdit}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                </svg>}
                            </div>
                            {editQ && <span className='btn-xs btn-primary cursor-pointer selectNo' onClick={showQEdit}>save</span>}
                        </div>
                        <div>
                            Sold Amount: {p?.sold}
                        </div>
                    </div>
                    <div className='card-footer'>
                        <span className='flex gap-2'>
                            Old price: <span className='line-through'>{p?.oldPrice}</span>
                            <span className='flex gap-2'>
                                Discount: {!editDisc && <span className='w-[50px]'> {p?.discount}</span>}
                                <div className='flex gap-2'>
                                    {
                                        editDisc && <>
                                            <input className='w-[50px] focus:outline-none' type="number" name="editDisc" id="discount" placeholder={p?.discount} />
                                        </>
                                    }
                                    {!editDisc && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5" onClick={showDiscEdit}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                    </svg>}
                                </div>
                                {editDisc && <span className='btn-xs btn-primary cursor-pointer selectNo' onClick={showDiscEdit}>save</span>}

                            </span>
                        </span>
                        <span>
                            Price: {parseFloat(price)}
                        </span>
                    </div>
                    <div className='card-footer'>
                        <span>
                            <span className='flex gap-2'>
                                Rechived Date: {!editRecvdDate && <span className='w-[150px]'> {p?.rechivedDate}</span>}
                                <div className='flex gap-2'>
                                    {
                                        editRecvdDate && <>
                                            <input className='w-[150px] focus:outline-none' type="date" name="editRecvdDate" id="discount" placeholder={p?.rechivedDate} />
                                        </>
                                    }
                                    {!editRecvdDate && <>
                                        <span></span>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5" onClick={Warn}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                        </svg>
                                    </>}
                                </div>
                                {editRecvdDate && <span className='btn-xs btn-primary cursor-pointer selectNo' onClick={showDateEdit}>save</span>}

                            </span>
                        </span>
                        <span>
                            Supplier: {p?.supplier}
                        </span>
                    </div>
                    <div className='card-footer'>
                        <span title='order form supplier that on pending'>
                            Backorder(status): {p?.upcoming}
                        </span>
                    </div>
                    <span className='card-footer'>
                        Comments: {p?.notes}
                    </span>
                </div>
            </div>
            <dialog id="my_modal_2" className="modal">
                <form method="dialog" className="modal-box">
                    <h3 className="font-bold text-lg text-warning">Warning!</h3>
                    <p className="py-4 text-red-500">The Date was automatically recorded on product entry! it's not recomended to change it. will you still want to change?</p>
                    <button className='btn btn-sm btn-warning' onClick={showDateEdit}>I know!</button>
                </form>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </div>
    );
};

export default EditProduct;