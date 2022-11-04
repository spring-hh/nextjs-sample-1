import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import { useState } from 'react'

export default function Images() {
  // use state for popupflg
  const [popupFlg, setPopupFlg] = useState(false)

  // sort by date
  const sortDate = (a: any, b: any) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  };

  // sort by name
  const sortName = (a: any, b: any) => {
    if (a.name < b.name) {
      return -1;
    } else {
      return 1;
    }
  };

  // show popup for add images
  const showPopup = () => {
    setPopupFlg(true);
  };

  // hide popup for add images
  const hidePopup = () => {
    setPopupFlg(false);
  };

  // add images
  const addImages = () => {
    // add images
    console.log('add images');
  };

  const imgPopup = (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white w-96 h-96 rounded-lg shadow-lg">
        <div className="flex justify-between items-center p-4">
          <div className="text-xl font-bold">画像を追加</div>
          <button onClick={() => hidePopup()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-80 h-80 border-2 border-gray-300 rounded-lg flex justify-center items-center">
            <div className="text-gray-400">ここに画像をドラッグ</div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button
            onClick={() => addImages()}
            className="bg-blue-500 text-white rounded-lg px-4 py-2 mt-4"
          >
            画像を追加
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
    {popupFlg && imgPopup}
    <Layout title='Images'>
      <div className='w-16'>
        <button onClick={() => sortDate("","")} className="my-2">
          <div className='w-16'>日付順</div>
        </button>
        <button onClick={() => sortName("","")} className="my-2">
          <div className='w-16'>名前順</div>
        </button>
        <button onClick={() => showPopup()} className="my-2">
          <div className='w-16'>追加</div>
        </button>
      </div>
      <div className='w-full p-2 border border-gray-300 rounded-md'>
          imgaes
      </div>
    </Layout>
    </>
  )
}
