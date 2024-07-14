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
  //     columnWidth: '.grid-item',
  //     percentPosition: true,
  //   })

  //   containerRef.querySelectorAll('img').forEach(img => {
  //     img.addEventListener('load', () => {
  //       masonry.layout?.()
  //     })
  //   })
  // })

  return (
    <section class="w-full overflow-hidden">
      <div ref={containerRef} class="grid w-full flex-wrap justify-center overflow-hidden">
        <For each={PHOTOS}>
          {photo => {
            return (
              <img
                class="grid-item col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4"
                src={`/images/${photo}.JPG`}
                alt={`Random photo ${photo}`}
              />
            )
          }}
        </For>
      </div>
    </section>
  )
}
