import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className=" my-5">
      <div className=" bg-light my-5">
        <div className="my-5 container">
          <div className="py-5">
            <h2 className="text-center">
              Oups .!!! Cette page est introuvable.{'  '}
              <Link to="/">Retourner sur la page d'acceuil.</Link>
            </h2>
          </div>
        </div>
      </div>
    </section>
  )
}
