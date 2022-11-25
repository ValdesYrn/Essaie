import React from 'react'
import Contact from '../../components/Contacts'

export default function Creche() {
  return (
    <section className="mt-5">
      <div className="bg-light container-fluid">
        <div className=" col-2 p-2 w-100 h-100">
          <h2 className="text-uppercase w-100 p-2 text-center fw-bold fs-2 text-decoration-underline">
            Crèche
          </h2>
        </div>
        <div className="d-flex flex-lg-row flex-column-reverse align-items-center">
          <div className="col-12 col-lg  ">
            <div className=" h-100">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
                pariatur totam similique reiciendis at provident numquam odio
                distinctio, esse veritatis voluptate! Voluptatum asperiores
                minima corrupti natus, ipsa nobis recusandae tempore.Lorem ipsum
                dolor, sit amet consectetur adipisicing elit. Aut tenetur libero
                veritatis. Alias provident perferendis sunt aperiam aspernatur
                expedita ipsa, fugit laboriosam neque et nostrum voluptate ut
                culpa eveniet facere! Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Velit impedit sequi, aspernatur reprehenderit
                assumenda minima voluptates culpa autem animi ullam quam dolor
                quod laboriosam perspiciatis delectus maiores omnis commodi
                quo.Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Quas pariatur totam similique reiciendis at provident numquam
                odio distinctio, esse veritatis voluptate! Voluptatum asperiores
                minima corrupti natus, ipsa nobis recusandae tempore.Lorem ipsum
                dolor, sit amet consectetur adipisicing elit. Aut tenetur libero
                veritatis. Alias provident perferendis sunt aperiam aspernatur
                expedita ipsa, fugit laboriosam neque et nostrum voluptate ut
                culpa eveniet facere! Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Velit impedit sequi, aspernatur reprehenderit
                assumenda minima voluptates culpa autem animi ullam quam dolor
                quod laboriosam perspiciatis delectus maiores omnis commodi quo.
              </p>
            </div>
          </div>
          <div className="col-12 col-lg ">
            <div className="p-2 h-100">
              <img
                src={
                  'https://img.passeportsante.net/1200x675/2021-05-03/i103079-creche-entreprise.webp'
                }
                alt="images creche"
                className="w-100"
              />
            </div>
          </div>
        </div>
      </div>
      <Contact />
    </section>
  )
}
