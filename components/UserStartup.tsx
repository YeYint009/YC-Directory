import { client } from '@/sanity/lib/client'
import { STARTUP_BY_AUTHOR_QUERY } from '@/sanity/lib/queries'
import React from 'react'
import StartUpCard, { StartupTypeCard } from './StartUpCard';

const UserStartup = async({id} : {id: string}) => {
  const startups = await client.fetch(STARTUP_BY_AUTHOR_QUERY, { id })
  return (
    <>
      {startups.length > 0 ? startups.map((startup: StartupTypeCard) => <StartUpCard key={startup._id} post={startup}/>): (<p className='no-result'> No Post yet</p>)}
    </>
  )
}

export default UserStartup 