import React from 'react'
import Container from '../Utilities/Container.jsx'
import { useState } from "react";
import { FiX } from "react-icons/fi";
import { FaPen } from "react-icons/fa6";
import { BsPlusCircleFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { LiaDollySolid } from "react-icons/lia";
import { FaCreditCard } from "react-icons/fa6";
import { Link } from 'react-router';

const Address = () => {
    const [addresses, setAddresses] = useState([
        {
            id: 1,
            title: "2118 Thornridge",
            type: "HOME",
            address: "2118 Thornridge Cir, Syracuse, Connecticut 35624",
            phone: "(209) 555-0104",
        },
        {
            id: 2,
            title: "Headoffice",
            type: "OFFICE",
            address: "2715 Ash Dr. San Jose, South Dakota 83475",
            phone: "(704) 555-0127",
        },
    ]);

    const [selectedId, setSelectedId] = useState(1);
    const [modalOpen, setModalOpen] = useState(false);
    const [editing, setEditing] = useState(null);

    const emptyForm = {
        title: "",
        type: "HOME",
        address: "",
        phone: "",
    };

    const [form, setForm] = useState(emptyForm);

    const openAdd = () => {
        setEditing(null);
        setForm(emptyForm);
        setModalOpen(true);
    };

    const openEdit = (item) => {
        setEditing(item.id);
        setForm(item);
        setModalOpen(true);
    };

    const saveAddress = () => {
        if (editing) {
            setAddresses((prev) =>
                prev.map((a) => (a.id === editing ? { ...form, id: editing } : a))
            );
        } else {
            setAddresses((prev) => [
                ...prev,
                { ...form, id: Date.now() },
            ]);
        }
        setModalOpen(false);
    };

    const removeAddress = (id) => {
        setAddresses((prev) => prev.filter((a) => a.id !== id));
        if (selectedId === id) setSelectedId(null);
    };

    return (

        <Container>
            <div className="px-6 py-10">
                <div className="flex items-center gap-6 text-sm mb-12">
                    <div className="flex items-center gap-2 font-medium">
                        <span className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-xs">
                            <FaLocationDot />
                        </span>
                        <div className="div">
                            <h4 className='font-popins font-medium text-[14px] leading-4'>Step 1</h4>
                            <h3 className='font-popins font-medium text-[19px] leading-6'>Address</h3>
                        </div>
                    </div>
                    <div className="flex-1 border-t border-dashed" />
                    <div className="flex items-center gap-2 text-gray-400">
                        <span className="w-6 h-6 rounded-full border text-xs flex items-center justify-center">
                            <LiaDollySolid />
                        </span>
                        <div className="div">
                            <h4 className='font-popins font-medium text-[14px] leading-4'>Step 2</h4>
                            <h3 className='font-popins font-medium text-[19px] leading-6'>Shipping</h3>
                        </div>
                    </div>
                    <div className="flex-1 border-t border-dashed" />
                    <div className="flex items-center gap-2 text-gray-400">
                        <span className="w-6 h-6 rounded-full border text-xs flex items-center justify-center">
                            <FaCreditCard />
                        </span>
                        <div>
                            <h4 className='font-popins font-medium text-[14px] leading-4'>Step 3</h4>
                            <h3 className='font-popins font-medium text-[19px] leading-6'>Payment</h3>
                        </div>
                    </div>
                </div>
                <h3 className="font-semibold font-popins text-[20px] leading-6 text-black mb-8">Select Address</h3>

                {addresses.map((item) => (

                    <div
                        key={item.id}
                        onClick={() => setSelectedId(item.id)}
                        className='flex gap-4 p-5 rounded-md cursor-pointer mb-4 bg-[#F6F6F6]'
                    >
                        <input
                            type="radio"
                            checked={selectedId === item.id}
                            onChange={() => setSelectedId(item.id)}
                            className="accent-black cursor-pointer mt-1 w-6 h-6"
                        />

                        <div className="flex-1">
                            <div className="flex items-center gap-2 font-medium font-popins text-[18px] leading-6">
                                {item.title}
                                <span className="text-xs bg-black text-white px-2 py-1 rounded-sm">
                                    {item.type}
                                </span>
                            </div>
                            <p className="text-[16px] leading-6 text-[#17183B] font-popins font-normal mt-1">{item.address}</p>
                            <p className="text-[16px] leading-6 text-[#17183B] font-popins font-normal">{item.phone}</p>
                        </div>
                        <div className="flex gap-6 items-center">
                            <FaPen onClick={(e) => { e.stopPropagation(); openEdit(item); }} className='text-black text-[20px]' />
                            <FiX onClick={(e) => { e.stopPropagation(); removeAddress(item.id); }} className='text-black text-2xl' />
                        </div>
                    </div>
                ))}

                <div className="mt-15 mb-25 flex items-center gap-4 relative">
                    <div className="flex-1 border-t border-dashed" />
                    <button
                        onClick={openAdd}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[28%] flex flex-col items-center gap-1 text-sm font-medium cursor-pointer"
                    >
                        <BsPlusCircleFill size={24} />
                        <span className='font-popins font-normal text-[14px] leading-4 text-black'>Add New Address</span>
                    </button>
                    <div className="flex-1 border-t border-dashed" />
                </div>

                {modalOpen && (
                    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
                        <div className="bg-white w-full max-w-md p-6 rounded-lg">
                            <h4 className="font-semibold mb-4">
                                {editing ? "Edit Address" : "Add New Address"}
                            </h4>

                            <div className="space-y-3">
                                <input
                                    placeholder="Title"
                                    value={form.title}
                                    onChange={(e) => setForm({ ...form, title: e.target.value })}
                                    className="w-full border p-2 rounded"
                                />

                                <select
                                    value={form.type}
                                    onChange={(e) => setForm({ ...form, type: e.target.value })}
                                    className="w-full border p-2 rounded"
                                >
                                    <option>HOME</option>
                                    <option>OFFICE</option>
                                </select>

                                <textarea
                                    placeholder="Full Address"
                                    value={form.address}
                                    onChange={(e) => setForm({ ...form, address: e.target.value })}
                                    className="w-full border p-2 rounded"
                                />

                                <input
                                    placeholder="Phone"
                                    value={form.phone}
                                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                                    className="w-full border p-2 rounded"
                                />
                            </div>

                            <div className="flex justify-end gap-3 mt-6">
                                <button
                                    onClick={() => setModalOpen(false)}
                                    className="px-6 py-2 border rounded"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={saveAddress}
                                    className="px-6 py-2 bg-black text-white rounded"
                                >
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                )}
                <div className="flex justify-end gap-6">
                    <button className="px-21.5 py-6 border rounded-md text-[16px] leading-4 font-popins font-medium text-black">
                        Back
                    </button>
                    <Link to="/shipping" className="px-21.5 py-6 bg-black text-white rounded-md text-[16px] leading-4 font-popins font-medium">
                        Next
                    </Link>
                </div>
            </div>
        </Container>
    );
}


export default Address

