import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/Layout';
import { useState } from 'react';
import Dropzone from 'react-dropzone';

export default function Images() {
  // use state for popupflg
  const [popupFlg, setPopupFlg] = useState(false);

  // use state for acceptedFiles
  const [acceptedFiles, setAcceptedFiles] = useState<File[]>([]);

  // use state for loading
  const [loading, setLoading] = useState(false);

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
    setAcceptedFiles([]);
    setPopupFlg(false);
  };

  // add images
  const addImages = () => {
    // check if there are files
    if (acceptedFiles.length == 0) {
      return;
    }

    setLoading(true);
    // sleep 3s
    setTimeout(() => {
      setLoading(false);
      setAcceptedFiles([]);
      hidePopup();
    }, 3000);

    // console.log(acceptedFiles);
    // setAcceptedFiles([]);
    // setPopupFlg(false);
  };

  const imgPopup = (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white w-96 h-96 rounded-lg shadow-lg">
        <div className="flex justify-between items-center p-4">
          <div className="text-xl font-bold">画像を追加</div>
          <button onClick={() => hidePopup()} disabled={loading}>
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
        {/* drop zone */}
        <Dropzone
          onDrop={(acceptedFiles) => setAcceptedFiles(acceptedFiles)}
          disabled={loading}
        >
          {({ getRootProps, getInputProps }) => (
            <section className="flex justify-center items-center">
              <div
                {...getRootProps({ className: 'dropzone' })}
                className="w-80 h-80 border-2 border-gray-300 rounded-lg flex justify-center items-center"
              >
                <input {...getInputProps()} />
                {acceptedFiles && acceptedFiles.length > 0 ? (
                  <div className="flex flex-col justify-center items-center">
                    <div className="text-xl font-bold">
                      {acceptedFiles.length}枚の画像が選択されました
                    </div>
                  </div>
                ) : (
                  <div className="text-gray-400">
                    ここに画像をドラッグ &
                    ドロップするか、クリックして選択してください
                  </div>
                )}
              </div>
            </section>
          )}
        </Dropzone>
        <div className="flex justify-center items-center">
          {loading ? (
            <button className="bg-gray-300 w-32 h-10 rounded-lg mt-4" disabled>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="animate-spin h-5 w-5 text-gray-500 mx-auto"
                viewBox="0 0 24 24"
              >
                <path fill="none" d="M0 0h24v24H0V0z" />
                <path
                  d="M12 2a10 10 0 00-9.95 9h2.02A8 8 0 1112 4a8 8 0 018 8 7.99 7.99 0 01-4.7 7.34l1.42 1.42A10 10 0 0022 12a10 10 0 00-10-10z"
                  opacity=".3"
                />
                <path d="M12 6a8 8 0 00-8 8 7.99 7.99 0 004.7 7.34l1.42-1.42A6 6 0 1112 6z" />
              </svg>
            </button>
          ) : (
            <button
              onClick={() => addImages()}
              className={
                acceptedFiles.length == 0
                  ? 'bg-blue-300 text-white rounded-lg px-4 py-2 mt-4'
                  : 'bg-blue-500 text-white rounded-lg px-4 py-2 mt-4'
              }
              disabled={acceptedFiles.length == 0}
            >
              画像を保存
            </button>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <>
      {popupFlg && imgPopup}
      <Layout title="Images">
        <div className="w-16">
          <button onClick={() => sortDate('', '')} className="my-2">
            <div className="w-16">日付順</div>
          </button>
          <button onClick={() => sortName('', '')} className="my-2">
            <div className="w-16">名前順</div>
          </button>
          <button onClick={() => showPopup()} className="my-2">
            <div className="w-16">追加</div>
          </button>
        </div>
        <div className="w-full p-2 border border-gray-300 rounded-md">
          imgaes
        </div>
      </Layout>
    </>
  );
}
