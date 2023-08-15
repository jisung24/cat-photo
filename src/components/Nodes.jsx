import React, { useState } from 'react'
import Image from './Image'

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
    <div>
      <ul>
        {breadcrumbsLength !== 1 && (
          <li
            onClick={() => {
              goPrev()
            }}
          >
            <img
              src="https://cdn.roto.codes/images/prev.png"
              alt="뒤로가기 사진"
            />
          </li>
        )}
        {fileData.map(({ id, type, name, filePath, parent }) => (
          <li
            key={id}
            onClick={() => {
              if (type === 'DIRECTORY') {
                directoryClick(id, name)
              } else if (type === 'FILE') {
                fileClick(filePath)
              }
            }}
          >
            <h2>filename : {name}</h2>
            <p>file or dic : {type}</p>
            <p>부모 id : {parent && parent.id}</p>
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
    </div>
  )
}
