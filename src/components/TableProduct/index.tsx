'use client'

import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { RootState } from '@/redux/store';
import ModelDelete from '../ModelDelete';
import { createProduct, deleteProduct, fetchProducts, upDateProduct } from '@/redux/slices/productSlice';
import ModelActionProduct from '../ModelActionProduct';

export default function TableProduct() {
  const { products } = useAppSelector((state: RootState) => state.product);

  const dispatch = useAppDispatch();

  const [openModelDel, setIsOpenModelDel] = useState<boolean>(false)
  const [openModelAction, setIsOpenModelAction] = useState<boolean>(false)
  const [id, setId] = useState<string>("")
  const [name, setName] = useState<string>("")
  const [detail, setDetail] = useState<string>("")
  const [urlImage, setUrlImage] = useState<string>("")
  const [price, setPrice] = useState<number>(0)
  const [quantity, setQuantity] = useState<number>(0)
  const [promotion, setPromotion] = useState<boolean>(false)
  const [categoryId, setCategoryId] = useState<number>(0)

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleDelete = async () => {
    dispatch(deleteProduct(id))
    handleCloseModelDel()
    setId("")
  }

  const handleOpenModelDel = (id: string) => {
    setIsOpenModelDel(true)
    setId(id)
  }

  const handleCloseModelDel = () => {
    setIsOpenModelDel(false)
  }

  const handleOpenModelAction = (id: string = "", name: string = "", detail: string = "", urlImage: string = "", price: number = 0, quantity: number = 0, promotion: boolean = false, categoryId: number = 0) => {
    setIsOpenModelAction(true)
    setId(id)
    setName(name)
    setDetail(detail)
    setUrlImage(urlImage)
    setPrice(price)
    setQuantity(quantity)
    setPromotion(promotion)
    setCategoryId(categoryId)
  }

  const handleCloseModelAction = () => {
    setIsOpenModelAction(false)
    setName("")
    setDetail("")
  }

  const handleAction = () => {
    console.log("name", name);
    console.log("detail", detail);
    console.log("urlImage", urlImage);
    console.log("price", price);
    console.log("quantity", quantity);
    console.log("promotion", promotion);
    console.log("categoryId", categoryId);
    if (id) {
      console.log("id", id);
      dispatch(upDateProduct({ id: Number(id), name, detail, urlImage, price, quantity, promotion, categoryId }))
    } else {
      dispatch(createProduct({ name, detail, urlImage, price, quantity, promotion, categoryId }))
    }
    handleCloseModelAction()
  }

  return (
    <div>
      <div className="w-full flex justify-end py-4">
        <button
          onClick={() => handleOpenModelAction()}
          className="font-medium text-blue-600 border border-blue-600 py-1 rounded-md px-2 hover:bg-blue-100 duration-300">
          เพื่ม Product
        </button>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg overflow-auto h-80">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                Id
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                urlImage
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                price
              </th>
              <th scope="col" className="px-6 py-3">
                detail
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product) => (
              <tr key={product.id} className="bg-white border-b hover:bg-gray-50">
                <th scope="row" className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap">
                  {product.id}
                </th>
                <th scope="row" className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap max-w-32 text-ellipsis overflow-hidden">
                  {product.name}
                </th>
                <th scope="row" className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap max-w-10 overflow-hidden text-ellipsis">
                  {product.urlImage}
                </th>
                <th scope="row" className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap max-w-fit overflow-hidden text-ellipsis">
                  {product.Category?.name ? product.Category?.name : "-"}
                </th>
                <th scope="row" className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap">
                  {product.price}
                </th>
                <th scope="row" className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap">
                  {product.detail ? product.detail : "-"}
                </th>
                <td className="px-6 py-2 justify-end flex gap-2">
                  <button onClick={() => handleOpenModelAction(String(product.id), product.name, product.detail, product.urlImage, product.price, product.quantity, product.promotion, product.categoryId)} className="font-medium text-blue-600 py-1 rounded-md px-2 hover:bg-blue-100 duration-300">Edit</button>
                  <button onClick={() => handleOpenModelDel(String(product.id))} className="font-medium text-red-600 py-1 rounded-md px-2 hover:bg-red-100 duration-300">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ModelDelete title={`คุณต้องการลบ product หรือไม่?`} open={openModelDel} onClose={handleCloseModelDel} onAction={handleDelete} />
      <ModelActionProduct
        open={openModelAction}
        onClose={handleCloseModelAction}
        onAction={handleAction}
        id={id}
        name={name}
        detail={detail}
        urlImage={urlImage}
        price={price}
        quantity={quantity}
        promotion={promotion}
        categoryId={categoryId}
        setName={setName}
        setDetail={setDetail}
        setUrlImage={setUrlImage}
        setPrice={setPrice}
        setQuantity={setQuantity}
        setPromotion={setPromotion}
        setCategoryId={setCategoryId}
      />
    </div>
  )
}
