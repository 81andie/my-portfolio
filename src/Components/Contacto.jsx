import React from 'react'

export const Contacto = () => {



  return (

    <>
      <form class="mb-20 mr-2 ml-2 mt-32">
        <div class="flex flex-col  lg:flex-row md:flex-row">
          <div class="md:w-2/5 lg:w-2/5 h-96 opacity-65 ">
            <img src="https://images.pexels.com/photos/4792728/pexels-photo-4792728.jpeg?auto=compress&cs=tinysrgb&w=600" class="h-96 w-full object-cover rounded-lg"></img>
          </div>

          <div class="md:w-4/5 lg:w-4/5 h-96 md:ml-4 lg:ml-10">
          <h2 class="mb-4 text-2xl tracking-tight font-extrabold text-center text-zinc-700 font-mono">Contacto</h2>
          <p class="mb-8 lg:mb-10 font-light text-center text-gray-500 dark:text-gray-400 sm:text-base">Quieres accesoramiento, consejo o quieres transmitirme tu idea para tu web, ponte en contacto conmigo</p>
          <div class="flex flex-row gap-2">
          <div class="flex flex-col w-full ">
              <label for="email" class="block mb-1 text-xs font-medium text-gray-900 ">Your email</label>
              <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block  p-2.5 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light " placeholder="example@gmail.com" required/>
          </div>
          <div class="flex flex-col w-full">
          <label for="name" class="block mb-1 text-xs font-medium text-gray-900 ">Tu nombre</label>
          <input type="text" id="text" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block  p-2.5 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light " placeholder="tu nombre y apellidos" required/>
          </div>

          </div>
          <div class="w-full ">
          <textarea id="message" rows="4" class="mt-4  block p-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500   dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Que quieres consultarme..."></textarea>
          <button type="submit" class=" bg-zinc-900 text-white p-1 rounded-sm mt-2 w-28 h-10">Enviar</button>
          </div>
         
         
         
          </div>

        </div>

      </form>







    </>
  )
}
