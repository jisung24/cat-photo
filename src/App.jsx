import React, { useCallback, useEffect, useState } from 'react'
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
  const enterNode = useCallback((id, name) => {
    setCurrentFile((prev) => id)
    setBreadcrumbs((prev) => [...prev, { id, name }]) // 추가!
  }, [])

  const moveToSelectedBreadcrumb = useCallback(
    (id) => {
      setCurrentFile((prev) => id) // 경로 바꿔주고...!
      const findIndex = breadcrumbs.findIndex((bread) => bread.id === id)
      setBreadcrumbs((prev) => [...prev].slice(0, findIndex + 1))
    },
    [breadcrumbs],
  )

  const goPrev = useCallback(
    (id = '') => {
      const moveId = breadcrumbs[breadcrumbs.length - 2].id
      setCurrentFile((prev) => moveId)
      setBreadcrumbs((prev) => {
        prev.pop()
        return prev
      })
    },
    [breadcrumbs],
  )
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
