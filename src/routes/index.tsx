import { debounce, throttle } from 'lodash-es'
import { onCleanup, onMount } from 'solid-js'
import { HeartIcon } from '~/components/HeartIcon'

export default function Home() {
  let containerRef!: HTMLHeadingElement
  const initialFontSize = 100

  onMount(() => {
    let calculateFontSizeAnimationFrame = 0
    const fixFontSizeAnimationFrame = 0

    const calculateFontSize = debounce(() => {
      const lines = Array.from(containerRef.children) as HTMLElement[]

      lines.forEach(line => {
        line.style.fontSize = '1em'
      })

      // const fixFontSize = () => {
      //   const fontSize = parseFloat(containerRef.style.fontSize)

      //   containerRef.style.fontSize = `${fontSize - 1}px`

      //   fixFontSizeAnimationFrame = requestAnimationFrame(() => {
      //     if (
      //       containerRef.scrollWidth >= containerRef.clientWidth ||
      //       containerRef.scrollHeight >= containerRef.clientHeight
      //     ) {
      //       fixFontSize()
      //     } else {
      //       containerRef.style.opacity = '1'
      //     }
      //   })
      // }

      calculateFontSizeAnimationFrame = requestAnimationFrame(() => {
        let widestLine = lines[0]

        lines.forEach(line => {
          if (line.clientWidth > widestLine.clientWidth) {
            widestLine = line
          }
        })

        let contentHeight = 0

        lines.forEach(line => {
          line.style.fontSize = `${widestLine.clientWidth / line.clientWidth}em`
          contentHeight += line.clientHeight
        })

        const contentWidth = widestLine.clientWidth
        // const contentHeight = lines.reduce((acc, line) => acc + line.clientHeight, 0)

        const containerWidth = containerRef.clientWidth
        const containerHeight = containerRef.clientHeight

        const scale = Math.min(containerWidth / contentWidth, containerHeight / contentHeight) - 0.1

        containerRef.style.fontSize = `${scale * parseFloat(containerRef.style.fontSize)}px`

        // fixFontSize()
        containerRef.style.opacity = '1'
      })
    }, 100)

    const prepareContainer = () => {
      cancelAnimationFrame(fixFontSizeAnimationFrame)
      cancelAnimationFrame(calculateFontSizeAnimationFrame)

      containerRef.style.fontSize = `${initialFontSize}px`
      containerRef.style.opacity = '0'
    }

    let onResizeAnimationFrame = 0

    const onResize = throttle(() => {
      cancelAnimationFrame(onResizeAnimationFrame)

      prepareContainer()

      onResizeAnimationFrame = requestAnimationFrame(() => {
        calculateFontSize()
      })
    }, 50)

    onResize()

    const resizeObserver = new ResizeObserver(onResize)

    resizeObserver.observe(containerRef)

    // window.addEventListener('resize', onResize)

    onCleanup(() => {
      resizeObserver.disconnect()

      // window.removeEventListener('resize', onResize)
    })
  })

  return (
    <main class="min-h-svh w-svw">
      <div class="h-svh w-svw">
        <h1
          ref={containerRef}
          style={{
            'font-size': `${initialFontSize}px`,
            'font-family': '"Josefin Sans", sans-serif',
            'font-optical-sizing': 'auto',
            'font-weight': '700',
            'font-style': 'normal',
          }}
          class="m-0 flex h-full max-h-full min-h-full w-full min-w-full max-w-full flex-col items-center justify-center whitespace-nowrap text-center leading-none opacity-0 transition-[font-size,opacity]"
        >
          {/* <span>{'I ❤'}</span> */}
          <span class="flex flex-nowrap items-center justify-center">
            {'I'}
            &nbsp;
            <HeartIcon width="0.9em" height="0.9em" />
          </span>
          <span>{'SCASCIO'}</span>
          <span>{'20th anniversary'}</span>
          {/* <span style={{ 'max-height': '66.66%' }}>{'I heart'}</span>
          <span style={{ 'max-height': '66.66%' }}>{'I ❤'}</span>
          <span style={{ 'max-height': '33.33%' }}>{'SCASCIO'}</span> */}
        </h1>
      </div>
    </main>
  )
}