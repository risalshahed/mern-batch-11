const EachFeature = ({ feature }) => {
  const { icon: Icon, title, description } = feature;

  return (
    <div class="w-full px-4 md:w-1/2 lg:w-1/4">
      <div class=" group mb-12">
        <div
          class="relative z-10 mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-[14px] bg-primary">
          <span
            class="absolute left-0 top-0 -z-[1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-[14px] bg-primary bg-opacity-20 duration-300 group-hover:rotate-45">  
          </span>
          <Icon />
        </div>
        <h4 class="mb-3 text-xl font-bold text-dark dark:text-white">
          {title}
        </h4>
        <p class="mb-8 text-body-color dark:text-dark-6 lg:mb-9">
          {description}
        </p>
        <a href="javascript:void(0)"
          class="text-base font-medium text-dark hover:text-primary dark:text-white dark:hover:text-primary">
          Learn More
        </a>
      </div>
    </div>
  )
}

export default EachFeature;