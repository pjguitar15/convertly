import { Zoomies } from 'ldrs/react'
import 'ldrs/react/Zoomies.css'

export default function Loading() {
  return (
    <div className='min-h-screen'>
      <Zoomies size='80' stroke='5' bgOpacity='0.1' speed='0.8' color='black' />
    </div>
  )
}
