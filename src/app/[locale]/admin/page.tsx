import TableCegory from '@/components/TableCategory'
import TableProduct from '@/components/TableProduct'
import React from 'react'

export default function AdminPage() {
  return (
    <div className='py-8'>
      <TableCegory />
      <TableProduct />
    </div>
  )
}
