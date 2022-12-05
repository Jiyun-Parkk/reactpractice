import { auth, db } from 'firebase-config'
import { collection, getDocs } from 'firebase/firestore'
import { onAuthStateChanged } from 'firebase/auth'
import { useCallback, useEffect, useState } from 'react'

export const Momemtum = () => {
  const [username, setUsername] = useState('user')

  return <>Welcome! {username}</>
}
