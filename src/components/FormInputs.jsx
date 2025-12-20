const FormInputs = ({ input }) => {
  const { inputKey, title, type, placeholder } = input;

  return (
    <div class="mb-[22px]">
      <label htmlFor={inputKey} class="mb-4 block text-sm text-body-color dark:text-dark-6">{title}*</label>
      <input type={type} name={inputKey} placeholder={placeholder}
        class="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-body-color placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-dark-6" />
    </div>
  )
}

export default FormInputs