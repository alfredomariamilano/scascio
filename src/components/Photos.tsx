import {
  For,
  // onMount
} from 'solid-js'
// import Masonry from 'masonry-layout'

const NUMBER_OF_PHOTOS = 18
const PHOTOS = Array.from({ length: NUMBER_OF_PHOTOS }, (_, i) => i)

export const Photos = () => {
  let containerRef!: HTMLDivElement

  // onMount(() => {
  //   const masonry = new Masonry(containerRef, {
  //     itemSelector: '.grid-item',
  //     columnWidth: '.grid-item-ghost',
  //     // percentPosition: true,
  //     // gutter: 0,
  //     // fitWidth: true,
  //     // resize: true,
  //   })

  //   containerRef.querySelectorAll('img').forEach(img => {
  //     img.addEventListener('load', () => {
  //       masonry.layout?.()
  //     })
  //   })
  // })

  return (
    <section class="w-full overflow-hidden">
      <div
        ref={containerRef}
        class="grid w-full grid-cols-1 gap-3 overflow-hidden bg-[url('/icons/heart.svg')] p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        {/* <div class="grid-item-ghost" /> */}
        <For each={PHOTOS}>
          {photo => {
            return (
              <div
                class="grid-item relative flex items-center justify-center"
                onClick={e => {
                  const newStyle: Partial<CSSStyleDeclaration> = {
                    position: 'fixed',
                    width: '100dvw',
                    height: '100dvh',
                    background: 'rgba(0, 0, 0, 1)',
                    top: '0',
                    left: '0',
                    right: '0',
                    bottom: '0',
                    zIndex: '9999',
                  }

                  const target = e.currentTarget

                  const targetStyle = target.style as any

                  if (targetStyle.position === newStyle.position) {
                    Object.keys(newStyle).forEach(property => {
                      targetStyle[property] = ''
                    })
                  } else {
                    Object.entries(newStyle).forEach(([name, value]) => {
                      targetStyle[name] = value
                    })
                  }
                }}
              >
                <img
                  // class="h-auto w-full"
                  class="h-fit w-fit opacity-0"
                  src={`/photos/${photo}.jpg`}
                  alt={`Random photo ${photo}`}
                />
                <div
                  class="absolute h-full w-full bg-contain bg-center bg-no-repeat"
                  style={{
                    'background-image': `url('/photos/${photo}.jpg')`,
                  }}
                />
              </div>
            )
          }}
        </For>
      </div>
    </section>
  )
}
