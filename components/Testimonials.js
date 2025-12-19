'use client'

import Image from 'next/image'
import './Testimonials.css'

export default function Testimonials() {
  const testimonials = [
    {
      metric: "+120%",
      quote: "Growth in 3 months thanks to SoundCheck Capital.",
      attribution: "— Music Promoter, NYC",
      image: "/images/concert1.png"
    },
    {
      metric: "$75K",
      quote: "Advance helped us book our biggest festival lineup yet.",
      attribution: "— Festival Director, LA",
      image: "/images/concert2.png"
    },
    {
      metric: "48hrs",
      quote: "From application to funding in less than two days.",
      attribution: "— Venue Owner, Chicago",
      image: "/images/concert3.png"
    }
  ]

  return (
    <section className="testimonials">
      <div className="testimonials-container">
        <h2 className="testimonials-title">Success Stories</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-image">
                <Image 
                  src={testimonial.image} 
                  alt={testimonial.attribution}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="testimonial-content">
                <h3 className="testimonial-metric">{testimonial.metric}</h3>
                <p className="testimonial-quote">{testimonial.quote}</p>
                <p className="testimonial-attribution">{testimonial.attribution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
