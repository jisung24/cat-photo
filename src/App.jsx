import React, { useEffect, useState } from 'react'

// css
import './style/App.scss'
import Breadcrumb from './components/Breadcrumb'
import Nodes from './components/Nodes'
import Loading from './components/Loading'
import { catService } from './service/catFileService'

export default function App() {
  const [fileData, setFileData] = useState([])
  const [currentFile, setCurrentFile] = useState('')
  const [breadcrumbs, setBreadcrumbs] = useState([{ id: '', name: 'root' }])
  const [loading, setLoading] = useState(false)

  // 디렉토리 클릭 시
  const enterNode = (id, name) => {
    setCurrentFile((prev) => id)
    setBreadcrumbs((prev) => [...prev, { id, name }]) // 추가!
  }

  // 브래드 크럼브 click시 선택된 경로로 이동
  // ❗️역시 부모에서 받는 이유 => 브래드 크럼브를 click하면 밑에 node state에 변화를 줘야하기 때문이다.
  // state끼리는 독립적이라 외부의 변화를 감지할 수 없다.
  // 즉, node입장에선 breadcrumbs가 변하는 지 알 수 없다는 것! => 그걸 알려주는게 부모가 해줘야 할 일!

  const moveToSelectedBreadcrumb = (id) => {
    setCurrentFile((prev) => id) // 경로 바꿔주고...!
    const findIndex = breadcrumbs.findIndex((bread) => bread.id === id)
    setBreadcrumbs((prev) => [...prev].slice(0, findIndex + 1))
  }

  const goPrev = (id = '') => {
    const moveId = breadcrumbs[breadcrumbs.length - 2].id
    setCurrentFile((prev) => moveId)
    setBreadcrumbs((prev) => {
      prev.pop()
      return prev
    })
  }
  useEffect(() => {
    setLoading((prev) => !prev) // 로딩중을 띄움
    const req = async () => {
      const res = await catService.getNodes(currentFile)
      setLoading((prev) => !prev) // 다 받아오면 로딩중을 없앤다
      setFileData(res)
    }
    req()
  }, [currentFile])
  return (
    <div>
      <header>
        <Breadcrumb
          breadcrumbs={breadcrumbs}
          moveSeclectedPath={moveToSelectedBreadcrumb}
        />
      </header>

      <main>
        {loading && <Loading />}
        <Nodes
          fileData={fileData}
          goPrev={() => {
            goPrev(breadcrumbs[breadcrumbs.length - 1].id)
          }}
          breadcrumbsLength={breadcrumbs.length}
          directoryClick={enterNode}
        />
      </main>
    </div>
  )
}
