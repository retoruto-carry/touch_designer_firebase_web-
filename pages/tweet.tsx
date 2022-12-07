import { Box } from '@chakra-ui/react'
import { useCallback, useEffect, useState } from 'react'
import { database } from '../firebase'
import { onChildAdded, ref } from 'firebase/database'
import gsap from 'gsap'

const dbRef = ref(database, 'comments')

const addText = async (text: string) => {}

export default function TweetPage() {
  useEffect(() => {
    document.body.style.backgroundColor = 'green'
  }, [])

  const [count, setCount] = useState(0)

  const addText = useCallback(
    async (text: string) => {
      let div_text = document.createElement('div')
      const id = `text${count}`
      div_text.id = id
      setCount((x) => x + 1)
      div_text.style.position = 'fixed'
      div_text.style.whiteSpace = 'nowrap'
      div_text.style.fontWeight = 'bold'
      div_text.style.fontFamily = 'DotGothic16'
      div_text.style.fontSize = '3em'
      div_text.style.textShadow =
        '4px 4px 0 #000,\n' +
        '-4px 4px 0 #000,\n' +
        '4px -4px 0 #000,\n' +
        '-4px -4px 0 #000;'
      div_text.style.left = document.documentElement.clientWidth + 'px'
      const random = Math.round(
        Math.random() * document.documentElement.clientHeight
      )
      div_text.style.top = random + 'px'
      div_text.appendChild(document.createTextNode(text))
      document.body.appendChild(div_text)
      await gsap.to(`#${id}`, {
        duration: 30,
        x:
          -1 *
          (document.documentElement.clientWidth + div_text.clientWidth + 5000),
        ease: 'linear',
      })
      div_text?.parentNode?.removeChild(div_text)
    },
    [count]
  )

  useEffect(() => {
    const dt = Date.now()

    const unsubscribe = onChildAdded(dbRef, (snapshot) => {
      const val = snapshot.val()
      if (dt > val.time) {
        return
      }

      if (!val.text) return
      console.log('comments added', val.text)
      addText(val.text)
    })
    return () => unsubscribe()
  }, [])

  return <Box></Box>
}
