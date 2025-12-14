'use client';

import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  FiPlus,
  FiSearch,
  FiEdit,
  FiTrash2,
  FiMoreVertical,
  FiX,
  FiDollarSign,
  FiType,
  FiFileText,
  FiPackage,
  FiShoppingBag,
} from 'react-icons/fi';
import { useCreateProductMutation, useDeleteProductMutation, useGetProductsQuery, useUpdateProductMutation } from '@/redux/feature/productApi';
import { baseUriBackend } from '@/utils/url';


const ProductManager = () => {
  // Pagination and search states
  const [page, setPage] = useState(1);
  const [limit] = useState(6);
  const [search, setSearch] = useState('');

  // RTK Query hooks
  const { data, isLoading, refetch } = useGetProductsQuery({ page, limit, search });
  const [createProduct] = useCreateProductMutation();
  const [updateProduct] = useUpdateProductMutation();
  const [deleteProduct] = useDeleteProductMutation();

  // Form and UI states
  const [formData, setFormData] = useState({
    productName: '',
    file: null,
    imagePreview: '',
    price: '',
    tittle: '',
    description: '',
  });

  //   this is change

  const [editingId, setEditingId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [menuOpenId, setMenuOpenId] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle file input
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast.error('Image size should be less than 5MB');
        return;
      }
      setFormData({
        ...formData,
        file,
        imagePreview: URL.createObjectURL(file),
      });
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = new FormData();
    form.append('productName', formData.productName);
    form.append('price', formData.price);
    form.append('tittle', formData.tittle);
    form.append('description', formData.description);
    if (formData.file) form.append('image', formData.file);

    try {
      if (editingId) {
        await updateProduct({ id: editingId, data: form }).unwrap();
        toast.success('Product updated successfully! 🎉');
      } else {
        await createProduct(form).unwrap();
        toast.success('Product created successfully! ✨');
      }

      setFormData({
        productName: '',
        file: null,
        imagePreview: '',
        price: '',
        tittle: '',
        description: '',
      });
      setEditingId(null);
      setShowForm(false);
      refetch();
    } catch (err) {
      console.error(err);
      toast.error(`Failed to ${editingId ? 'update' : 'create'} product. Please try again.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle edit
  const handleEdit = (product) => {
    setFormData({
      productName: product.productName,
      file: null,
      imagePreview: product.image.startsWith('http')
        ? product.image
        : `${baseUriBackend}${product.image}`,
      price: product.price,
      tittle: product.tittle,
      description: product.description,
    });
    setEditingId(product._id);
    setShowForm(true);
    setMenuOpenId(null);
  };

  // Handle delete
  const handleDelete = async (id) => {
    if (
      window.confirm('Are you sure you want to delete this product? This action cannot be undone.')
    ) {
      try {
        await deleteProduct(id).unwrap();
        toast.success('Product deleted successfully! 🗑️');
        refetch();
      } catch (err) {
        console.error(err);
        toast.error('Failed to delete product. Please try again.');
      }
      setMenuOpenId(null);
    }
  };

  // Reset form
  const resetForm = () => {
    setFormData({
      productName: '',
      file: null,
      imagePreview: '',
      price: '',
      tittle: '',
      description: '',
    });
    setEditingId(null);
    setShowForm(false);
  };

  // Loading skeleton
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br to-gray-100 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-300 rounded w-1/4 mb-6"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-white rounded-xl shadow-sm p-4">
                  <div className="h-40 bg-gray-300 rounded-lg mb-4"></div>
                  <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
                  <div className="h-3 bg-gray-300 rounded w-1/2 mb-2"></div>
                  <div className="h-3 bg-gray-300 rounded w-full mb-2"></div>
                  <div className="h-3 bg-gray-300 rounded w-2/3"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br to-gray-100 p-4">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-2">Product Manager</h1>
              <p className="text-gray-600">Manage your products and inventory in one place</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              {/* Search Bar */}
              <div className="relative flex-1 sm:flex-none">
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setPage(1);
                  }}
                  className="pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-500 focus:border-transparent w-full sm:w-64 transition-all duration-200"
                />
              </div>

              {/* Add Product Button */}
              <button
                onClick={() => setShowForm(!showForm)}
                className="bg-gradient-to-r from-gray-600 to-gray-600 hover:from-gray-700 hover:to-gray-700 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                {showForm ? <FiX size={18} /> : <FiPlus size={18} />}
                {showForm ? 'Close Form' : 'Add Product'}
              </button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Products</p>
                  <p className="text-2xl font-bold text-gray-800">
                    {/* {data?.pagination?.totalPages ? data.pagination.totalPages * limit : 0} */}
                    {data?.data?.length}
                  </p>
                </div>
                <div className="p-3 bg-gray-100 rounded-lg">
                  <FiPackage className="text-gray-600" size={24} />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Current Page</p>
                  <p className="text-2xl font-bold text-gray-800">{data?.pagination?.page || 1}</p>
                </div>
                <div className="p-3 bg-green-100 rounded-lg">
                  <FiFileText className="text-green-600" size={24} />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Pages</p>
                  <p className="text-2xl font-bold text-gray-800">
                    {data?.pagination?.totalPages || 1}
                  </p>
                </div>
                <div className="p-3 bg-purple-100 rounded-lg">
                  <FiShoppingBag className="text-purple-600" size={24} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Form */}
        {showForm && (
          <div className="bg-white rounded-2xl shadow-xl p-6 mb-8 border border-gray-200 transform transition-all duration-300">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">
                {editingId ? 'Update Product' : 'Create New Product'}
              </h2>
              <button
                onClick={resetForm}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
              >
                <FiX size={20} className="text-gray-500" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Product Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Product Name *
                  </label>
                  <input
                    name="productName"
                    placeholder="Enter product name"
                    value={formData.productName}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-200"
                    required
                  />
                </div>

                {/* Price */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Price *</label>
                  <div className="relative">
                    <FiDollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      name="price"
                      type="number"
                      placeholder="0.00"
                      value={formData.price}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-200"
                      required
                      min="0"
                      step="0.01"
                    />
                  </div>
                </div>

                {/* Title */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Title *</label>
                  <input
                    name="tittle"
                    placeholder="Enter product title"
                    value={formData.tittle}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-500 focus:border-transparent transition-all duration-200"
                    required
                  />
                </div>

                {/* Image Upload */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Product Image *
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-500 focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gray-50 file:text-gray-700 hover:file:bg-gray-100 transition-all duration-200"
                    required={!editingId}
                  />
                </div>

                {/* Description */}
                <div className="lg:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description *
                  </label>
                  <textarea
                    name="description"
                    placeholder="Enter product description"
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gray-500 focus:border-transparent resize-none transition-all duration-200"
                    rows={4}
                    required
                  />
                </div>
              </div>

              {/* Image Preview */}
              {formData.imagePreview && (
                <div className="flex flex-col items-center">
                  <p className="text-sm font-medium text-gray-700 mb-2">Image Preview</p>
                  <img
                    src={formData.imagePreview}
                    alt="Preview"
                    className="w-48 h-32 object-cover rounded-xl shadow-md border border-gray-200"
                  />
                </div>
              )}

              {/* Submit Button */}
              <div className="flex gap-3 pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-gray-600 to-gray-600 hover:from-gray-700 hover:to-gray-700 disabled:from-gray-400 disabled:to-gray-500 text-white px-8 py-3 rounded-xl font-semibold flex items-center gap-2 transition-all duration-200 shadow-lg hover:shadow-xl disabled:shadow-none"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                      {editingId ? 'Updating...' : 'Creating...'}
                    </>
                  ) : (
                    <>{editingId ? 'Update Product' : 'Create Product'}</>
                  )}
                </button>

                <button
                  type="button"
                  onClick={resetForm}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-200"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {data?.data?.map((product) => (
            <div
              key={product._id}
              className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img
                  src={`${baseUriBackend}${product.image}`}
                  alt={product.productName}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-3 right-3">
                  {/* Action Menu */}
                  <div className="relative">
                    <button
                      onClick={() => setMenuOpenId(menuOpenId === product._id ? null : product._id)}
                      className="p-2 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg hover:bg-white transition-all duration-200 opacity-0 group-hover:opacity-100"
                    >
                      <FiMoreVertical className="text-gray-600" />
                    </button>

                    {menuOpenId === product._id && (
                      <>
                        <div className="fixed inset-0 z-10" onClick={() => setMenuOpenId(null)} />
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-2xl border border-gray-200 z-20 py-2">
                          <button
                            onClick={() => handleEdit(product)}
                            className="w-full px-4 py-3 text-left text-gray-700 hover:bg-gray-50 flex items-center gap-3 transition-colors duration-200"
                          >
                            <FiEdit className="text-gray-600" />
                            Update Product
                          </button>
                          <button
                            onClick={() => handleDelete(product._id)}
                            className="w-full px-4 py-3 text-left text-red-600 hover:bg-red-50 flex items-center gap-3 transition-colors duration-200"
                          >
                            <FiTrash2 className="text-red-600" />
                            Delete Product
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* Price Badge */}
                <div className="absolute bottom-3 left-3">
                  <span className="bg-gradient-to-r from-gray-500 to-gray-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                    ${product.price}
                  </span>
                </div>

                {/* Created Date */}
                <div className="absolute bottom-3 right-3">
                  <span className="bg-black/70 text-white px-2 py-1 rounded text-xs backdrop-blur-sm">
                    {new Date(product.createdAt).toLocaleDateString()}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-1">
                  {product.productName}
                </h3>
                <p className="text-gray-600 font-medium text-sm mb-3 line-clamp-1">
                  {product.tittle}
                </p>
                <p className="text-gray-500 text-sm line-clamp-2 mb-3">{product.description}</p>

                {/* Last Updated */}
                <div className="flex justify-between items-center text-xs text-gray-400 border-t border-gray-100 pt-3">
                  <span>Updated: {new Date(product.updatedAt).toLocaleDateString()}</span>
                  <span>ID: {product._id.slice(-6)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {!data?.data?.length && (
          <div className="text-center py-12">
            <div className="bg-white rounded-2xl p-8 max-w-md mx-auto shadow-sm border border-gray-100">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiPackage className="text-gray-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">No products found</h3>
              <p className="text-gray-600 mb-6">
                {search
                  ? 'Try adjusting your search terms'
                  : 'Get started by creating your first product'}
              </p>
              <button
                onClick={() => setShowForm(true)}
                className="bg-gradient-to-r from-gray-600 to-gray-600 hover:from-gray-700 hover:to-gray-700 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 transition-all duration-200 shadow-lg hover:shadow-xl mx-auto"
              >
                <FiPlus size={18} />
                Add Your First Product
              </button>
            </div>
          </div>
        )}

        {/* Pagination */}
        {data?.pagination?.totalPages > 1 && (
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 py-6 border-t border-gray-200">
            <p className="text-gray-600 text-sm">
              Showing {(data.pagination.page - 1) * limit + 1} to{' '}
              {Math.min(data.pagination.page * limit, data.pagination.totalPages * limit)} of{' '}
              {data.pagination.totalPages * limit} products
            </p>

            <div className="flex items-center gap-2">
              <button
                disabled={page === 1}
                onClick={() => setPage(page - 1)}
                className="px-4 py-2 border border-gray-300 rounded-xl font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center gap-2"
              >
                Previous
              </button>

              <div className="flex items-center gap-1">
                {[...Array(Math.min(5, data.pagination.totalPages))].map((_, i) => {
                  const pageNumber = i + 1;
                  return (
                    <button
                      key={pageNumber}
                      onClick={() => setPage(pageNumber)}
                      className={`w-10 h-10 rounded-xl font-medium transition-all duration-200 ${
                        page === pageNumber
                          ? 'bg-gray-600 text-white shadow-lg'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {pageNumber}
                    </button>
                  );
                })}
              </div>

              <button
                disabled={page === data.pagination.totalPages}
                onClick={() => setPage(page + 1)}
                className="px-4 py-2 border border-gray-300 rounded-xl font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center gap-2"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductManager;
