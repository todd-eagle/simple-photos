import {useState, useEffect} from 'react'

const useKeyPress = () => {

    const [isWindowOpen, setIsWindowOpen] = useState(false)

    useEffect(() => {
        const handleEsc = (event) => {
           if (event.keyCode === 27) {
            setIsWindowOpen(false)
          }
        }
        window.addEventListener('keydown', handleEsc);
    
        return () => {
          window.removeEventListener('keydown', handleEsc);
        }
      }, [])

      const windowToggle = () => {
        setIsWindowOpen(!isWindowOpen)
    }

      return {
                isWindowOpen,
                windowToggle
            }

}

export default useKeyPress