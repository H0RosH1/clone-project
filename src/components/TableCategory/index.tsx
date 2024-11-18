'use client'

import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { createCategory, deleteCategory, fetchCategory, upDateCategory } from '@/redux/slices/categorySlice';
import { RootState } from '@/redux/store';
import ModelDelete from '../ModelDelete';
import ModelActionCategory from '../ModelActionCategory';

export default function TableCegory() {
  const { categorys } = useAppSelector((state: RootState) => state.category);
  const dispatch = useAppDispatch();

  const [openModelDel, setIsOpenModelDel] = useState<boolean>(false)
  const [openModelAction, setIsOpenModelAction] = useState<boolean>(false)
  const [id, setId] = useState<string>("")
  // const [data, setData] = useState<{ name: string, detail: string }>({ name: "", detail: "" })
  const [name, setName] = useState("")
  const [detail, setDetail] = useState("")

  useEffect(() => {
    dispatch(fetchCategory());
  }, [dispatch]);

  const handleDelete = async () => {
    dispatch(deleteCategory(id))
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

  const handleOpenModelAction = (id: string = "", name: string = "", detail: string = "") => {
    setIsOpenModelAction(true)
    setId(id)
    setName(name)
    setDetail(detail)
  }

  const handleCloseModelAction = () => {
    setIsOpenModelAction(false)
    setName("")
    setDetail("")
  }

  const handleAction = () => {
    console.log("name", name);
    console.log("detail", detail);
    if (id) {
      console.log("id", id);
      dispatch(upDateCategory({ id, name, detail }))
    } else {
      dispatch(createCategory({ name, detail }))
    }
    handleCloseModelAction()
  }

  return (
    <div>
      <div className="w-full flex justify-end py-4">
        <button onClick={() => handleOpenModelAction()} className="font-medium text-blue-600 border border-blue-600 py-1 rounded-md px-2 hover:bg-blue-100 duration-300">เพื่ม Category</button>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg overflow-auto h-80">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                Category Id
              </th>
              <th scope="col" className="px-6 py-3">
                Name
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
            {categorys?.map((category) => (
              <tr key={category.id} className="bg-white border-b hover:bg-gray-50">
                <th scope="row" className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap">
                  {category.id}
                </th>
                <th scope="row" className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap">
                  {category.name}
                </th>
                <th scope="row" className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap">
                  {category.detail ? category.detail : "-"}
                </th>
                <td className="px-6 py-2 justify-end flex gap-2">
                  <button onClick={() => handleOpenModelAction(String(category.id), category.name, category.detail)} className="font-medium text-blue-600 py-1 rounded-md px-2 hover:bg-blue-100 duration-300">Edit</button>
                  <button onClick={() => handleOpenModelDel(String(category.id))} className="font-medium text-red-600 py-1 rounded-md px-2 hover:bg-red-100 duration-300">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ModelDelete title={`คุณต้องการลบ category หรือไม่?`} open={openModelDel} onClose={handleCloseModelDel} onAction={handleDelete} />
      <ModelActionCategory
        open={openModelAction}
        onClose={handleCloseModelAction}
        onAction={handleAction}
        id={id}
        name={name}
        detail={detail}
        setName={setName}
        setDetail={setDetail} />
    </div>
  )
}
