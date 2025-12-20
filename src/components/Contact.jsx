import { contactDetails } from "../data/contactDetails"
import { inputs } from "../data/inputs"
import ContactDetail from "./ContactDetail"
import FormInputs from "./FormInputs"

const Contact = () => {
  return (
    <section id="contact" class="relative py-20 md:py-[120px]">
      <div class="absolute left-0 top-0 -z-[1] h-full w-full dark:bg-dark"></div>
      <div class="absolute left-0 top-0 -z-[1] h-1/2 w-full bg-[#E9F9FF] dark:bg-dark-700 lg:h-[45%] xl:h-1/2"></div>
      <div class="container px-4">
        <div class="-mx-4 flex flex-wrap items-center">
          <div class="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div class="ud-contact-content-wrapper">
              <div class="ud-contact-title mb-12 lg:mb-[150px]">
                <span class="mb-6 block text-base font-medium text-dark dark:text-white">
                  CONTACT US
                </span>
                <h2 class="max-w-[260px] text-[35px] font-semibold leading-[1.14] text-dark dark:text-white">
                  Let's talk about your problem.
                </h2>
              </div>
              <div class="mb-12 flex flex-wrap justify-between lg:mb-0">
                {contactDetails.map(contact =>
                  <ContactDetail
                    key={contact.id}
                    contact={contact}
                  />
                )}
              </div>
            </div>
          </div>
          <div class="w-full px-4 lg:w-5/12 xl:w-4/12">
            <div
              class=" rounded-lg bg-white px-8 py-10 shadow-testimonial dark:bg-dark-2 dark:shadow-none sm:px-10 sm:py-12 md:p-[60px] lg:p-10 lg:px-10 lg:py-12 2xl:p-[60px]">
              <h3 class="mb-8 text-2xl font-semibold text-dark dark:text-white md:text-[28px] md:leading-[1.42]">
                Send us a Message
              </h3>
              <form>
                {
                  inputs.map(input =>
                    <FormInputs
                      key={input.id}
                      input={input}
                    />
                  )
                }
    
                {/* Textarea */}
                <div class="mb-[30px]">
                  <label for="message" class="mb-4 block text-sm text-body-color dark:text-dark-6">Message*</label>
                  <textarea name="message" rows="1" placeholder="type your message here"
                    class="w-full resize-none border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-body-color placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-dark-6"></textarea>
                </div>
                <div class="mb-0">
                  <button type="submit"
                    class="inline-flex items-center justify-center rounded-md bg-primary px-10 py-3 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-blue-dark">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact