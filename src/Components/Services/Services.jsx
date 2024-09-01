import React from 'react'
import './Services.css'
import { assets } from '../../../Data'

const Services = () => {
  return (
    <div className='services'>
        <div className="serv-head">
            <h1>Services</h1>
        </div>
        <div className="serv-container">
            <div className="serv-card">
                <div className="serv-left">
                    <img src={assets.Tools} alt="" className='serv-img' />
                </div>
                <div className="serv-right">
                    <h1>Construction Material</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore rem reiciendis voluptates architecto, consectetur consequuntur alias sunt odio quasi hic blanditiis repellendus incidunt facilis inventore atque quidem, ex ab illo molestias? Odio necessitatibus nostrum, odit, ex in amet molestias quia cumque impedit et vitae sunt ut officia aspernatur porro ipsa voluptatum recusandae quaerat suscipit! Impedit eius sunt at excepturi? Harum corporis soluta laborum.
                    </p>
                    <button>Buy Items</button>
                </div>
            </div>
            <div className="serv-card">
                <div className="serv-left">
                    <img src={assets.welding2} alt="" className='serv-img' />
                </div>
                <div className="serv-right">
                    <h1>welding</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore rem reiciendis voluptates architecto, consectetur consequuntur alias sunt odio quasi hic blanditiis repellendus incidunt facilis inventore atque quidem, ex ab illo molestias? Odio necessitatibus nostrum, odit, ex in amet molestias quia cumque impedit et vitae sunt ut officia aspernatur porro ipsa voluptatum recusandae quaerat suscipit! Impedit eius sunt at excepturi? Harum corporis soluta laborum.
                    </p>
                    <button>Book now</button>
                </div>
            </div>
            <div className="serv-card">
                <div className="serv-left">
                    <img src={assets.workers} alt="" className='serv-img' />
                </div>
                <div className="serv-right">
                    <h1>Finding Workers</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore rem reiciendis voluptates architecto, consectetur consequuntur alias sunt odio quasi hic blanditiis repellendus incidunt facilis inventore atque quidem, ex ab illo molestias? Odio necessitatibus nostrum, odit, ex in amet molestias quia cumque impedit et vitae sunt ut officia aspernatur porro ipsa voluptatum recusandae quaerat suscipit! Impedit eius sunt at excepturi? Harum corporis soluta laborum.
                    </p>
                    <button>Book Now</button>
                </div>
            </div>
            <div className="serv-card">
                <div className="serv-left">
                    <img src={assets.advisory} alt="" className='serv-img' />
                </div>
                <div className="serv-right">
                    <h1>Advisory Services</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore rem reiciendis voluptates architecto, consectetur consequuntur alias sunt odio quasi hic blanditiis repellendus incidunt facilis inventore atque quidem, ex ab illo molestias? Odio necessitatibus nostrum, odit, ex in amet molestias quia cumque impedit et vitae sunt ut officia aspernatur porro ipsa voluptatum recusandae quaerat suscipit! Impedit eius sunt at excepturi? Harum corporis soluta laborum.
                    </p>
                    <button>Book Now</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services