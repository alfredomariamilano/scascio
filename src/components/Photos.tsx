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
        class="grid w-full grid-cols-1 overflow-hidden bg-[url('/icons/heart.svg')] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        {/* <div class="grid-item-ghost" /> */}
        <For each={PHOTOS}>
          {photo => {
            return (
              <div
                class="grid-item relative flex items-center justify-center"
                onClick={e => {
                  const style: Partial<CSSStyleDeclaration> = {
                    position: 'fixed',
                    width: '100svw',
                    height: '100svh',
                    background: 'rgba(0, 0, 0, 1)',
                    top: '0',
                    left: '0',
                    right: '0',
                    bottom: '0',
                    zIndex: '9999',
                  }

                  const currentTargetStyle = e.currentTarget.style as any

                  if (e.currentTarget.style.position === style.position) {
                    Object.keys(style).forEach(property => {
                      currentTargetStyle[property] = ''
                    })
                  } else {
                    Object.entries(style).forEach(([name, value]) => {
                      currentTargetStyle[name] = value
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
