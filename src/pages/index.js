import stacks from "../data/stacks.json"
import Link from 'next/link/'
import Image from 'next/image'
export default function Home() {

  const renderStacks = () => {
    return Object.keys(stacks).map((stackKey) => {
      const stack = stacks[stackKey]
      return (
        <Link key={stack.href} href={stack.href} className={`${stack.hoverClass} w-20 h-20 relative border-2 border-solid m-2 rounded-xl`}>
          <Image src={stack.logo} fill alt='' className='object-cover  p-2' />
        </Link>
      )
    })
  }

  return (
    <div className='h-full flex justify-center items-center flex-col'>
      <div>What do you want to learn?</div>
      <div className='flex gap-5'>
        {renderStacks()}
      </div>
    </div>
  )
}
