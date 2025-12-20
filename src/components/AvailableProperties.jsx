import { properties } from "../data/propeties"
import EachProperty from "./EachProperty"

const AvailableProperties = () => {
  return (
    <section>
      <div class="container">
        <div class="mx-auto mb-12 max-w-[485px] text-center lg:mb-[70px]">
          <span class="mb-2 block text-lg font-semibold text-primary">
            Properties
          </span>
          <h2 class="mb-3 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">
            Grab your Dream Property
          </h2>
          <p class="text-base text-body-color dark:text-dark-6">
            There are many variations of passages of Lorem Ipsum available
            but the majority have suffered alteration in some form.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {
            properties.map(property =>
              <EachProperty
                key={property.id}
                property={property}
              />
            )
          }
    
        </div>
      </div>

    </section>
  )
}

export default AvailableProperties