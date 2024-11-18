'use client';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import ShopBox from '@/components/ShopBox';
import { useEffect, useState } from 'react';

import { RootState } from '@/redux/store';
import { fetchProducts } from '@/redux/slices/productSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { fetchCategory } from '@/redux/slices/categorySlice';

export default function HomePage() {
  const [itemProduct, setItemProduct] = useState<typeof products>([])
  const { products } = useAppSelector((state: RootState) => state.product);
  const { categorys } = useAppSelector((state: RootState) => state.category);
  const dispatch = useAppDispatch();

  const [selected, setSelected] = useState(1);

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategory());
  }, [dispatch]);

  useEffect(()=>{
    const fitterPro = products.filter((item) => item.categoryId === selected);
    if (fitterPro){
      setItemProduct(fitterPro)
    }
    console.log(itemProduct);
    {/* eslint-disable-next-line react-hooks/exhaustive-deps */ }
  }, [products, selected])

  return (
    <div className='space-y-8 py-8'>
      <div className="flex gap-5 items-center">

        <h1 className='text-2xl font-bold text-nowrap'>ไปส่งที่: </h1>
        <div className="flex w-full items-center justify-between gap-8 rounded-sm border bg-[#f2f4f7] p-3 cursor-pointer">
          <div className="flex max-w-full flex-nowrap items-center gap-x-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
            <div className="relative line-clamp-1 flex grow text-left text-title-md-medium">เลือกที่อยู่สำหรับจัดส่ง</div>
          </div>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[14px]">
            <g id="drop-down-triangle">
              <path id="Vector" d="M5.83398 7.9165L10.0007 12.0832L14.1673 7.9165H5.83398Z" fill="#787878">
              </path>
            </g>
          </svg>
        </div>
      </div>

      <div className="w-full">
        <Swiper
          // spaceBetween={50}
          slidesPerView={1}
          navigation
        >
          <SwiperSlide className='rounded-xl'>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://www.swensens1112.com/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fswensens-production.appspot.com%2Fo%2Fbanner%252Fsw-banner.jpg%3Falt%3Dmedia&w=2048&q=75"
              alt="Promotion 1"
              className="w-full rounded-3xl"
            />
          </SwiperSlide>
          <div className="h-3 w-3 bg-red-600 rounded-full mx-auto mt-5"></div>
        </Swiper>
      </div>

      <div className='text-4xl font-bold text-nowrap'>โปรโมชัน</div>
      <div className='grid h-fit w-full grid-cols-2 gap-6 lg:gap-8 md:grid-cols-3 lg:grid-cols-4'>
        {products?.map((product) => {
          if (product.name === "ไอศกรีม 2 มินิ" || product.name === "ไอศกรีม 2 ควอท") {
            return (
              <ShopBox key={product.id} urlIamge={product.urlImage} detail={product.detail} price={product.price} alt={product.name} promotion={product.promotion} />
            )
          }
        })}
      </div>

      <div className='text-4xl font-bold text-nowrap'>เมนูจัดส่ง</div>
      <div className="flex flex-wrap gap-3">
        {categorys.map((category) => (
          <button
            key={category.id}
            className={`px-4 py-2 rounded-xl border text-sm font-semibold ${selected === category.id
              ? "border-[#d1001f] text-[#d1001f] bg-red-100"
              : "border-gray-300 text-gray-600 hover:bg-gray-300 hover:text-white"
              } duration-200 transition-all`}
            onClick={() => setSelected(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>
      <div className='grid h-fit w-full grid-cols-2 gap-6 lg:gap-8 md:grid-cols-3 lg:grid-cols-4'>
        {itemProduct?.map((product) =>
          <ShopBox key={product.id} urlIamge={product.urlImage} detail={product.detail} price={product.price} alt={product.name} promotion={product.promotion} />
        )}
      </div>
    </div>
  );
}