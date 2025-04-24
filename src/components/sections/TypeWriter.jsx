import { useEffect, useState } from "react"

const TypewriterLoop = ({ words, typingSpeed = 100, pauseTime = 1500, deletingSpeed = 50, className="" }) => {
  const [text, setText] = useState("")
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = words[wordIndex % words.length]

    const timeout = setTimeout(() => {
      setText((prev) => {
        if (isDeleting) {
          return currentWord.substring(0, prev.length - 1)
        } else {
          return currentWord.substring(0, prev.length + 1)
        }
      })

      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), pauseTime)
      }

      if (isDeleting && text === "") {
        setIsDeleting(false)
        setWordIndex((prev) => (prev + 1) % words.length)
      }
    }, isDeleting ? deletingSpeed : typingSpeed)

    return () => clearTimeout(timeout)
  }, [text, isDeleting, wordIndex, words, typingSpeed, pauseTime, deletingSpeed])

  return (
    <span className={`font-mono ${className}`}>
      {text}
      <span className="animate-blink">|</span>
    </span>
  )
}

export default TypewriterLoop
