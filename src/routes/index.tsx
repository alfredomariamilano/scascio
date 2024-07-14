import { BigText } from '~/components/BigText'
import { Photos } from '~/components/Photos'

export default function Home() {
  return (
    <main class="min-h-svh w-svw">
      <div class="h-svh w-svw">
        <BigText />
        <Photos />
      </div>
    </main>
  )
}
