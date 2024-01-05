import React, { useState, useCallback, useEffect } from 'react'

export function useWindowScroll() {
  const [y, setY] = useState(0)

  useEffect(() => {
    const scrollHandler = () => {
      const h = document.documentElement.scrollTop
      setY(h)
    }

    window.addEventListener('scroll', scrollHandler)

    return () => window.removeEventListener('scroll', scrollHandler)
  })

  return [y]
}

export function useLocalStorage(key, defaultValue) {
  const [message, setMessage] = useState(defaultValue)

  useEffect(() => {
    window.localStorage.setItem(key, message)
  }, [message, key])

  return [message, setMessage]
}
