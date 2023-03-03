import { useState, useEffect } from 'react'

export default function Profile() {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch('https://stoicquotesapi.com/v1/api/quotes/random')
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                setLoading(false)
            })
    }, [])

    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No profile data</p>

    return (
        <figure className='text-md pt-5 pb-2 text-gray-800 md:text-xl shadow-lg rounded-md'>
            <blockquote className='leading-5 py-3' cite="https://stoicquotesapi.com/">
                {data.body}
            </blockquote>
            <figcaption className=''>
                - {data.author}
            </figcaption>
        </figure>
    )
}