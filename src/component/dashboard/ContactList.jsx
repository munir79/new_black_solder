
"use client";
import React, { useState } from "react";
import { Trash2, Mail, User, Eye, X, RefreshCw } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDeleteContactMutation, useGetContactQuery } from "@/redux/feature/contactApi";

const ContactList = () => {
  const { data, isLoading, refetch } = useGetContactQuery();
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  const [selectedContact, setSelectedContact] = useState(null);

  const handleDelete = async (e, id) => {
    e.stopPropagation();
    if (window.confirm("Delete this message?")) {
      try {
        await deleteContact(id).unwrap();
        toast.success("Deleted");
        if (selectedContact?._id === id) setSelectedContact(null);
      } catch (err) {
        toast.error("Error deleting");
      }
    }
  };

  const contacts = data?.data || [];

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-white">
        <p className="text-black font-bold">Loading...</p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-white min-h-screen">
      <ToastContainer position="top-right" />
      
      <div className="max-w-6xl mx-auto">
        {/* Simple Header */}
        <div className="flex justify-between items-center mb-8 border-b border-black pb-4">
          <h1 className="text-2xl font-bold text-black">Messages ({contacts.length})</h1>
          <button onClick={() => refetch()} className="p-2 border border-black hover:bg-gray-100 transition-colors">
             <RefreshCw className="w-5 h-5 text-black" />
          </button>
        </div>

        {/* Simple Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {contacts.map((contact) => (
            <div 
              key={contact._id} 
              onClick={() => setSelectedContact(contact)}
              className="bg-white border border-gray-300 p-5 hover:border-black transition-all cursor-pointer flex flex-col shadow-sm"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="bg-black text-white w-10 h-10 flex items-center justify-center font-bold">
                  {contact.name.charAt(0).toUpperCase()}
                </div>
                <span className="text-xs font-bold text-black border border-black px-2 py-1">
                  {new Date(contact.createdAt).toLocaleDateString()}
                </span>
              </div>

              <h2 className="text-lg font-bold text-black mb-1 capitalize truncate">
                {contact.name}
              </h2>
              
              <p className="text-black text-sm mb-6 line-clamp-3">
                {contact.message}
              </p>

              <div className="mt-auto flex justify-between items-center pt-4 border-t border-gray-200">
                <span className="text-xs font-bold text-black flex items-center gap-1">
                  <Eye className="w-4 h-4" /> VIEW
                </span>
                <button
                  onClick={(e) => handleDelete(e, contact._id)}
                  disabled={isDeleting}
                  className="p-2 text-black hover:text-red-600 transition-colors"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Simple Modal */}
      {selectedContact && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
          <div className="bg-white w-full max-w-lg p-8 border-2 border-black shadow-xl">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-2xl font-bold text-black">{selectedContact.name}</h2>
                <p className="text-black font-medium">{selectedContact.email}</p>
              </div>
              <button onClick={() => setSelectedContact(null)} className="p-1 border border-black">
                <X className="w-6 h-6 text-black" />
              </button>
            </div>

            <div className="mb-8 p-4 bg-gray-50 border border-gray-200 text-black">
              <p className="font-bold text-xs uppercase mb-2">Message:</p>
              <p className="text-base leading-relaxed">{selectedContact.message}</p>
            </div>

            <div className="flex gap-4">
              <button 
                 onClick={() => setSelectedContact(null)}
                 className="flex-1 py-3 bg-black text-white font-bold hover:bg-gray-800 transition-colors"
              >
                CLOSE
              </button>
              <button 
                onClick={(e) => handleDelete(e, selectedContact._id)}
                className="px-6 py-3 border border-black text-black font-bold hover:bg-red-50 transition-colors"
              >
                DELETE
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactList;