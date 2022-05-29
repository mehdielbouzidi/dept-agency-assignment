import React from 'react'
import clientsData from '../../data/clients.json';

const clientsItems = clientsData;

const ClientsImages = () => {
    return (
        clientsItems.map((item, index) => {
            return (
                <div className='clients__image' key={index}>
                    <img src={item.img.path} alt={item.img.alt}/>
                </div>
            )
        })
    )
}

const Clients = () => {
  return (
    <div className='clients flex items-center'>
        <div className='container ptb-5'>
            <h2>Clients</h2>
            <p className='clients__introduction'>
                We value a great working relationship with our clients above all else. It’s why they often come to our parties. It’s also why we’re able to challenge and inspire them to reach for the stars.
            </p>
            <div className='pt-5 clients__grid'>
                <ClientsImages/>
            </div>
        </div>
    </div>
  )
}

export default Clients