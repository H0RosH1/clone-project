"use client"
import { Link } from '@/i18n/navigation'

export default function Footer() {
  return (
    <footer className='bg-[#101828] p-5 px-10 '>
      <div className='block xl:flex xl:items-center space-y-3 xl:space-y-0'>
        <div className='flex justify-center'>
          <svg width="144" height="35" viewBox="0 0 144 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M140.501 27.6387H141.552C141.7 27.6338 141.848 27.6612 141.984 27.7187C142.087 27.7592 142.174 27.8306 142.232 27.9223C142.29 28.0141 142.316 28.1213 142.305 28.2281C142.308 28.3361 142.279 28.4427 142.223 28.536C142.166 28.6293 142.083 28.7056 141.984 28.7564C142.061 28.7819 142.13 28.8254 142.185 28.883C142.237 28.9718 142.261 29.0726 142.257 29.174L142.278 29.452C142.278 29.5129 142.283 29.5737 142.292 29.6339C142.293 29.664 142.303 29.6931 142.32 29.7185C142.336 29.744 142.36 29.765 142.387 29.7795V29.8231H142.016C142.004 29.8026 141.995 29.7805 141.99 29.7576C141.978 29.6982 141.972 29.6377 141.972 29.5772L141.957 29.2235C141.961 29.1644 141.947 29.1055 141.917 29.0538C141.887 29.0021 141.841 28.96 141.787 28.9324C141.74 28.9069 141.688 28.8901 141.635 28.883H140.81V29.8187H140.507V27.6357L140.501 27.6387ZM141.531 28.6457C141.645 28.6323 141.757 28.6014 141.861 28.5541C141.908 28.5213 141.945 28.4769 141.968 28.4257C141.99 28.3744 141.998 28.3182 141.99 28.263C141.99 28.1058 141.934 27.9967 141.814 27.9574C141.768 27.9312 141.716 27.9144 141.662 27.9079H140.804V28.6428L141.531 28.6457Z" fill="white"></path><path d="M141.456 30.8781C141.014 30.8787 140.582 30.7534 140.214 30.5181C139.847 30.2828 139.56 29.948 139.391 29.5562C139.221 29.1644 139.177 28.7332 139.263 28.3171C139.349 27.9011 139.562 27.5189 139.874 27.2189C140.187 26.9189 140.585 26.7147 141.018 26.6321C141.452 26.5495 141.901 26.5922 142.309 26.7548C142.717 26.9174 143.066 27.1926 143.311 27.5455C143.556 27.8985 143.687 28.3133 143.686 28.7375C143.684 29.3047 143.448 29.848 143.031 30.2491C142.613 30.6501 142.047 30.8762 141.456 30.8781ZM141.456 26.9985C141.098 26.9968 140.747 27.0971 140.448 27.2868C140.149 27.4766 139.916 27.7471 139.777 28.0643C139.638 28.3815 139.6 28.731 139.669 29.0687C139.737 29.4064 139.908 29.7171 140.16 29.9615C140.412 30.2058 140.734 30.3729 141.086 30.4415C141.437 30.5102 141.801 30.4773 142.133 30.347C142.465 30.2168 142.748 29.995 142.949 29.7098C143.149 29.4246 143.257 29.0888 143.258 28.7448C143.258 28.2844 143.069 27.8427 142.732 27.5156C142.394 27.1886 141.936 27.0027 141.456 26.9985Z" fill="white"></path><path d="M118.494 4.59953C118.136 4.46615 117.83 4.22899 117.619 3.921C117.407 3.61302 117.301 3.24949 117.315 2.88091C117.362 1.69782 118.199 1.15356 119.223 1.15356C120.163 1.15356 121.042 1.82442 121.042 2.98423C121.012 4.38561 119.895 6.43311 117.376 6.18572C117.5 6.07367 117.935 5.79281 118.205 5.40572C118.375 5.16535 118.479 4.88752 118.508 4.59807L118.494 4.59953Z" fill="white"></path><path d="M133.745 1.548C134.334 1.87106 134.334 1.548 134.926 0.922253C135.519 0.296508 136.004 0.0287471 136.18 0.922253C136.356 1.81576 137.014 6.69657 137.185 7.58426C137.356 8.47194 136.592 9.185 135.83 8.23328C135.067 7.28157 133.83 5.17732 132.759 3.73083C131.687 2.28434 129.068 1.548 127.809 2.37456C126.56 3.16911 125.558 4.02915 126.219 6.29493C126.873 8.5287 132.219 10.4059 135.921 12.7357C141.023 15.9372 140.943 21.6388 139.525 25.9026C138.111 30.1431 133 32 128.893 32C124.787 32 120.448 29.9059 118.593 26.2169C116.738 22.5279 118.197 19.4661 119.53 17.8538C120.862 16.2414 123.785 15.7539 125.387 16.9806C126.989 18.2074 127.393 20.6638 124.967 22.5847C122.542 24.5347 122.129 26.2882 123.785 28.3168C125.461 30.309 130.324 31.2665 133.503 29.1899C136.659 27.0973 137.605 23.5553 136.003 20.5052C134.516 17.666 129.069 15.5196 126.139 13.8504C123.201 12.1566 121.368 9.82384 121.537 6.53068C121.705 3.23751 123.436 0.759268 127.483 0.114605C129.995 -0.285581 132.134 0.666134 133.747 1.548H133.745Z" fill="white"></path><path d="M15.584 1.51166L17.2015 0.493H24.5716C25.5508 0.493 25.6539 1.1755 25.2037 1.60624C24.7535 2.03699 23.9501 2.98871 23.9501 2.98871C23.9501 2.98871 26.6392 12.7387 26.9045 13.686C27.1697 14.6334 27.5396 14.9797 27.9049 14.1939C28.2702 13.4081 30.3303 6.35172 30.5107 5.579C30.6911 4.80628 30.4197 4.27803 30.1469 3.59408C29.874 2.91012 29.0691 2.20434 28.631 1.78524C28.1929 1.36613 28.534 0.746208 29.4299 0.746208C30.3257 0.746208 34.0108 0.661806 34.649 0.746208C35.2871 0.830611 35.278 1.69792 34.464 2.20143C33.65 2.70494 33.9259 2.88975 34.0093 3.32195C34.0926 3.75415 35.9026 10.4031 36.1679 11.1802C36.4331 11.9572 36.9758 12.1231 37.2441 11.4348C37.5124 10.7465 39.6695 2.54777 39.6695 2.54777C39.6695 2.54777 39.4921 2.46774 39.0465 1.94095C38.9484 1.8391 38.8859 1.71034 38.8678 1.57271C38.8497 1.43508 38.8769 1.29546 38.9455 1.1734C39.0142 1.05134 39.1209 0.95295 39.2507 0.892005C39.3805 0.83106 39.527 0.810612 39.6695 0.833522C40.2955 0.913559 52.8786 0.737477 53.5972 0.833522C54.3157 0.929566 54.678 1.25117 54.8568 1.77651C55.0357 2.30184 56.1984 6.6093 56.1984 6.6093L55.398 6.76355C55.398 6.76355 54.8568 5.7318 53.5972 4.35079C52.3375 2.96979 51.2582 2.88393 50.0955 2.38188C48.9298 1.84781 47.6702 2.38188 47.6702 3.31613V7.80549C47.6702 8.33956 48.1173 9.02642 48.6585 9.10646C49.1997 9.1865 49.8212 9.02497 50.2653 9.02497C50.7095 9.02497 51.1612 8.3381 51.1612 8.00631V6.52781C51.1612 5.3127 52.7877 5.74053 52.7877 6.52781C52.7877 7.31508 52.6134 12.404 52.6952 13.1723C52.7771 13.9407 51.0778 14.191 50.9944 13.3426C50.9111 12.4942 50.8019 11.5279 50.8019 11.1889C50.8019 10.8498 50.5382 10.7421 50.091 10.7421C49.6438 10.7421 48.9177 10.7421 48.4705 10.8353C48.279 10.8603 48.0995 10.9396 47.9551 11.063C47.8107 11.1863 47.7078 11.3482 47.6596 11.5279C47.5686 11.867 47.6596 16.6212 47.6596 16.9778C47.6596 17.3037 47.3928 17.4784 48.2007 17.7447C49.0087 18.011 51.7948 17.1291 52.8741 16.0944C53.9534 15.0598 54.4885 12.7474 54.4885 12.7474L55.4753 12.6572C55.4753 12.6572 55.2146 15.6681 55.1267 16.7929C55.0387 17.9178 54.4885 18.6061 53.5017 18.7691C52.5164 18.9583 43.6213 20.5038 42.9922 20.5038C42.3632 20.5038 42.0009 20.0672 42.3677 19.5404C42.7315 19.0413 43.6031 17.7796 43.6031 17.7796C43.6031 17.7796 43.6213 4.36244 43.6213 3.08184C43.6213 1.80124 42.633 1.78815 42.3677 2.55942C42.1024 3.33068 36.6939 20.5853 36.3437 21.7087C35.9935 22.8321 35.3614 23.0097 35.0916 21.8819C34.94 21.2663 31.5763 10.5806 31.5763 10.5806L26.8984 24.5507C26.8984 24.5507 26.1859 26.1122 25.8252 24.8112C25.7206 24.395 20.0331 4.9387 19.5389 3.50676C18.8143 1.44035 18.0231 2.19706 18.0988 2.89121C18.161 3.32777 18.2504 6.15527 18.3793 7.30635C18.5536 9.02497 17.3818 8.59859 17.015 8.00049C16.6103 7.31363 15.9388 6.27023 14.9504 4.62001C13.9621 2.96979 12.8843 2.30475 11.7232 1.94968C10.562 1.5946 8.00931 1.33266 7.31657 4.62146C6.69203 7.64105 11.5534 9.27818 16.5815 12.0431C20.1634 14.0266 23.4028 17.3037 21.7005 24.3004C20.124 30.734 9.68585 34.4652 3.54663 29.4708C-2.38188 24.6424 0.496729 18.3384 2.37791 16.8832C3.95288 15.6448 6.69203 15.5735 7.6834 16.7915C8.67477 18.0095 9.30234 19.993 6.86939 21.796C4.43644 23.599 4.00139 24.5522 5.44145 27.2152C6.88152 29.8783 11.0168 30.5841 14.7776 28.7694C18.5384 26.9548 21.3352 19.8926 12.807 16.0901C4.27879 12.2876 2.47644 9.08754 3.00547 5.579C3.54663 2.02535 5.88257 0.402776 9.30234 0.0462467C12.7221 -0.310283 15.584 1.51166 15.584 1.51166Z" fill="white"></path><path d="M58.0869 16.186V3.15599C57.6341 2.72482 57.1531 2.32188 56.6468 1.94961C56.1117 1.60763 56.1117 1.08521 57.2774 1.08521H62.1282C62.6708 1.08521 63.0286 1.34569 63.2075 1.85938C63.3863 2.37308 68.419 9.0249 68.419 9.0249V2.98864C68.419 2.98864 67.9779 2.56808 67.608 2.20427C66.8895 1.51159 67.3412 1.25983 68.0552 1.25983H71.9282C72.4648 1.25983 72.6406 2.02528 72.2814 2.20427C71.9221 2.38326 70.8398 2.98864 70.8398 2.98864V18.2685C70.8398 19.3846 69.765 19.1198 69.3239 18.2685C68.8692 17.3953 60.6062 5.84233 60.6062 5.84233V15.9285C60.6162 16.2082 60.7307 16.4751 60.9289 16.6804C61.1271 16.8856 61.3957 17.0155 61.6855 17.0461C62.3086 17.1319 63.0392 18.0036 62.1312 18.0909C61.2232 18.1782 57.0122 18.51 56.5589 18.4198C56.1057 18.3296 55.9238 18.1637 56.3831 17.7475C56.8378 17.3109 58.093 16.189 58.093 16.189L58.0869 16.186Z" fill="white"></path><path d="M81.9744 2.07651C81.9744 2.07651 82.3276 1.74326 82.7884 1.3489C83.3478 0.84539 83.7904 0.94289 83.9253 1.48423C84.0603 2.02557 84.7439 5.50646 84.8712 6.23699C84.9986 6.96751 84.3058 7.28911 83.6904 6.5484C83.0749 5.8077 81.5045 4.22005 80.9224 3.68453C80.3388 3.12863 79.5976 2.34572 77.9741 2.5349C76.3506 2.72408 76.1369 4.90546 77.2162 5.6418C78.2955 6.37814 80.4995 7.91049 81.5379 8.62355C83.2447 9.75717 87.195 12.7593 84.7409 16.668C82.1215 20.7979 75.6548 17.9777 75.6548 17.9777C75.6548 17.9777 75.0227 18.7621 74.7923 19.0502C74.5543 19.3122 73.8479 19.1957 73.7539 18.6791C73.66 18.1625 72.8823 13.4854 72.8005 12.8088C72.7186 12.1321 73.4538 11.7072 73.9844 12.7069C74.5149 13.7066 75.0545 15.255 76.8326 16.3857C78.6107 17.5164 80.5874 17.4116 81.362 16.2707C82.1366 15.1298 81.268 13.6615 80.5874 13.174C79.9068 12.6865 76.5507 10.2534 76.1369 9.98127C75.723 9.70915 73.0279 8.05747 73.1249 5.36385C73.2219 2.67024 74.8469 1.21502 77.6421 0.988001C80.4374 0.760987 81.9744 2.07651 81.9744 2.07651Z" fill="white"></path><path d="M86.4373 0.75202C86.8208 0.711274 97.5758 0.781125 98.12 0.781125C98.6642 0.781125 98.8506 1.71829 98.8976 2.09082C98.9446 2.46336 99.4767 6.56126 99.5282 7.02839C99.5798 7.49552 99.1008 7.54208 98.7627 6.8916C98.4247 6.24112 97.55 4.56325 96.4283 3.7294C95.3066 2.89556 93.1768 2.08064 92.4871 2.08064C91.7974 2.08064 91.9141 2.49829 91.8641 2.7253C91.8141 2.95232 91.758 8.01358 91.758 8.4254C91.758 8.83723 92.0035 9.12391 92.4416 9.12391H94.0984C94.4759 9.12391 94.7139 8.99585 94.7139 8.6626C94.7139 8.32936 94.8837 7.15936 94.823 6.64858C94.6714 5.44511 96.5647 5.67503 96.5147 6.6122C96.4647 7.54936 96.4207 11.9834 96.3737 13.1112C96.3268 14.239 94.6199 14.0833 94.5865 13.1112C94.5532 12.1391 94.6714 12.2381 94.5335 11.8161C94.3956 11.3941 94.1894 11.1787 93.7104 11.119C93.2238 11.0914 92.8266 11.0288 92.3931 10.9735C91.9596 10.9182 91.808 11.119 91.758 11.6662C91.7079 12.2133 91.5685 15.4861 91.523 16.3404C91.473 17.1611 91.861 17.6952 92.5841 17.7854C93.3072 17.8756 94.7654 17.9789 95.3005 17.9789C95.5551 17.9808 95.8066 17.9256 96.035 17.8177C96.2634 17.7099 96.4625 17.5523 96.6163 17.3576C97.1923 16.7056 98.314 14.6843 98.7006 13.916C99.0871 13.1476 100.107 13.5449 99.8072 14.6159C99.507 15.687 98.9355 18.9074 98.7006 19.6335C98.4596 20.3917 98.1655 20.3509 97.5834 20.2942C97.0013 20.2374 87.6894 18.9525 86.5753 18.8026C85.4611 18.6527 85.7461 18.0124 86.2721 17.5962C86.7981 17.18 87.0997 17.2266 87.2862 16.9545C87.4726 16.6823 87.5272 16.531 87.5272 16.1017C87.5272 15.6724 87.6333 3.60425 87.6333 3.26373C87.6333 2.9494 87.6818 2.66709 87.0997 2.35422C86.7719 2.17445 86.4615 1.96699 86.172 1.73429C85.7385 1.41124 86.0205 0.805863 86.4206 0.74911L86.4373 0.75202Z" fill="white"></path><path d="M101.754 3.57798C101.754 3.57798 100.996 1.72258 100.658 1.44172C100.32 1.16086 100.464 0.639893 101.034 0.639893C101.604 0.639893 105.205 0.698101 105.505 0.740303C105.806 0.782504 105.742 0.740303 105.836 0.926571C105.93 1.11284 112.313 12.4985 112.313 12.4985L112.384 2.3847C112.384 2.3847 111.475 1.68474 111.029 1.39806C110.584 1.11138 110.746 0.639893 111.228 0.639893C111.71 0.639893 115.451 0.666087 115.983 0.711198C116.515 0.75631 116.855 1.06918 116.517 1.39806C116.179 1.72694 115.098 2.78489 115.098 2.78489C115.098 2.78489 115.02 23.6702 115.02 24.5201C115.02 25.7134 113.994 25.8138 113.529 24.8926C112.9 23.6324 105.364 9.91256 105.098 9.39887C104.872 8.88227 104.491 8.99141 104.491 9.39887V19.9143C104.491 19.9143 105.604 21.1338 105.842 21.3695C106.08 21.6053 105.69 22.0724 104.913 21.8745C104.135 21.6766 100.559 20.8951 100.121 20.8034C99.6831 20.7118 99.4814 20.2927 100.024 20.0162C100.567 19.7397 101.713 18.8462 101.713 18.8462L101.748 3.57798H101.754Z" fill="white"></path>
          </svg>
        </div>
        <div className=" text-white flex flex-wrap items-center gap-2 xl:grow sm:justify-center xl:justify-evenly xl:gap-0">
          <div className="pt-0">
            <Link className="px-4 py-8 text-title-sm-medium text-text-invert sm:py-0" href="#">เกี่ยวกับเรา</Link>
          </div>
          <div className="pt-0">
            <Link className="px-4 py-8 text-title-sm-medium text-text-invert sm:py-0" href="#">สินค้าของเรา</Link>
          </div>
          <div className="pt-0">
            <Link className="px-4 py-8 text-title-sm-medium text-text-invert sm:py-0" href="#">บัตรของขวัญ</Link>
          </div>
          <div className="pt-0">
            <Link className="px-4 py-8 text-title-sm-medium text-text-invert sm:py-0" href="#">คำถามที่พบบ่อย</Link>
          </div>
          <div className="pt-0">
            <Link className="px-4 py-8 text-title-sm-medium text-text-invert sm:py-0" href="#">ข้อกำหนดในการใช้งาน</Link>
          </div>
          <div className="pt-0">
            <Link className="px-4 py-8 text-title-sm-medium text-text-invert sm:py-0" href="#">นโยบายความเป็นส่วนตัว</Link>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 px-3 xl:grow sm:justify-center xl:justify-evenly xl:gap-0">
          <div>
            <a href="https://www.facebook.com/weloveswensens/?locale=th_TH" target="_blank">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="facebook-icon" loading="lazy" width="32" height="32" decoding="async" data-nimg="1" className="shrink-0" src="https://www.swensens1112.com/images/facebook-icon.svg" />
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/we_love_swensens?igsh=MWxjZGtmaXI0NzdjYQ==" target="_blank">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="instagram-icon" loading="lazy" width="32" height="32" decoding="async" data-nimg="1" className="shrink-0" src="https://www.swensens1112.com/images/instagram-icon.svg" />
            </a>
          </div>
          <div>
            <a href="https://liff.line.me/1645278921-kWRPP32q/?accountId=qic0396o" target="_blank">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="line-icon" loading="lazy" width="32" height="32" decoding="async" data-nimg="1" className="shrink-0" src="https://www.swensens1112.com/images/line-icon.svg" />
            </a>
          </div>
          <div>
            <a href="https://www.tiktok.com/@we_love_swensens?_t=8mmJ5PBRfSk&amp;_r=1" target="_blank">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="tiktok-icon" loading="lazy" width="32" height="32" decoding="async" data-nimg="1" className="shrink-0" src="https://www.swensens1112.com/images/tiktok-icon.svg" />
            </a>
          </div>
          <div>
            <a href="#">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="appstore download button" src='https://www.swensens1112.com/_next/image?url=%2Fimages%2Fapp-store.png&w=256&q=75' loading="lazy" width="108" height="32" decoding="async" data-nimg="1" />
            </a>
          </div>
          <div>
            <a href="#">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img alt="google play download button" src='https://www.swensens1112.com/_next/image?url=%2Fimages%2Fgoogle-play.png&w=256&q=75' loading="lazy" width="108" height="32" decoding="async" data-nimg="1" className="flex-wrap" />
            </a>
          </div>
        </div>

      </div>
      <div className="text-body-sm-regular text-text-invert text-sm text-center text-white mt-5">Copyright © Swensen1112.com. All rights reserved.</div>
    </footer >
  )
}