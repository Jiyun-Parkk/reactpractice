//Fetch custom hook 만들기

import { useEffect, useState } from 'react'

export default function usePromise(promiseCreator, deps) {
  // 대기중 완료, 실패에 대한 상태관리
  const [loading, setLoading] = useState(false) // 로딩
  const [resolved, setResolved] = useState(null) // 완료
  const [error, setError] = useState(null) // 실패

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const resolved = await promiseCreator() // axios 함수
        setResolved(resolved)
      } catch (e) {
        setError(e)
      }
      setLoading(false)
    }
    fetchData()
  }, deps) // deps는 참조할 데이터

  return [loading, resolved, error]
}
