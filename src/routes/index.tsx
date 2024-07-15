import { BigText } from '~/components/BigText'
import { Photos } from '~/components/Photos'

export default function Home() {
  return (
    <main class="min-h-vh w-full">
      <div class="h-vh w-full">
        <BigText />
      </div>

      <Photos />
    </main>
  )
}
