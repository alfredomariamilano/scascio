import { BigText } from '~/components/BigText'
import { Photos } from '~/components/Photos'

export default function Home() {
  return (
    <main class="min-h-screen w-full">
      <div class="h-screen w-full">
        <BigText />
      </div>

      <Photos />
    </main>
  )
}
