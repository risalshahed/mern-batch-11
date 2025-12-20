const ContactDetail = ({ contact }) => {
  const { icon: Icon, title, address } = contact

  return (
    <div class="mb-8 flex w-[330px] max-w-full">
      <div class="mr-6 text-[32px] text-primary">
        <Icon />
      </div>
      <div>
        <h5 class="mb-[18px] text-lg font-semibold text-dark dark:text-white">
          {title}
        </h5>
        {
          address.map(each =>
            <p class="text-base text-body-color dark:text-dark-6" key={each.id}>
              {each.detailsAddress}
            </p>
          )
        }
      </div>
    </div>
  )
}

export default ContactDetail;