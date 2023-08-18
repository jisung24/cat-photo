import React, { useState } from 'react'
import Image from './Image'
import prevImage from '../assets/image/prev.png'
import fileImage from '../assets/image/file.png'
import directoryImage from '../assets/image/directory.png'
export default function Nodes({
  fileData,
  directoryClick,
  breadcrumbsLength,
  goPrev,
  // trailing comma : 배열, obj등 콤마를 이용한 항목의 나열에서
  // 마지막 항목에도 콤마를 붙여주는 행위
}) {
  const [imageAction, setImageAction] = useState(false)
  const [filePath, setFilePath] = useState('')
  const fileClick = (filePath) => {
    setImageAction((prev) => true) // 무조건 열리는! => 계속 누르면 닫힐 수 있음 !prev로 해놓으면!
    setFilePath((prev) => filePath)
  }
  return (
    <ul className="nodeList">
      {breadcrumbsLength !== 1 && (
        <li
          className="nodeList__prev"
          onClick={() => {
            goPrev()
          }}
        >
          <img
            src={prevImage}
            alt="뒤로가기 사진"
            className="nodeList__prev__img"
            style={{ width: '100px', height: '100px' }}
          />
        </li>
      )}
      {fileData.map(({ id, type, name, filePath, parent }) => (
        <li
          className="nodeList__item nodeList__item--focused"
          key={id}
          onClick={() => {
            if (type === 'DIRECTORY') {
              directoryClick(id, name)
            } else if (type === 'FILE') {
              fileClick(filePath)
            }
          }}
        >
          <img
            src={type === 'DIRECTORY' ? directoryImage : fileImage}
            alt=""
            style={{ width: '150px', height: '150px', cursor: 'pointer' }}
          />
          <p className="nodeList__item__fileName">{name}</p>
          <p className="nodeList__item__fileType">file or dic : {type}</p>
          {filePath === 'FILE' && <p>{filePath}</p>}
        </li>
      ))}
      {imageAction && (
        <Image
          onClick={() => setImageAction((prev) => false)}
          filePath={filePath}
        />
      )}
    </ul>
  )
}
