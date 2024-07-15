export const findOverflows = () => {
  const documentWidth = document.documentElement.offsetWidth

  document.querySelectorAll('*').forEach(element => {
    const box = element.getBoundingClientRect()

    if (box.left < 0 || box.right > documentWidth) {
      console.log(element)
      ;(element as HTMLElement).style.border = '1px solid red'
    }
  })
}

// Execute findOverflows to find overflows on the page.
// findOverflows();
