import React from 'react'

export const Contacto = () => {



  return (


    <>
      <form class="mb-20 mr-2 ml-2 mt-32">
        <div class="flex flex-row">
          <div class="w-2/5 h-96 opacity-65 ">
            
            <img src="https://images.pexels.com/photos/4792728/pexels-photo-4792728.jpeg?auto=compress&cs=tinysrgb&w=600" class="h-96 w-full object-cover rounded-lg"></img>
          </div>

          <div class="w-4/5 h-96">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-zinc-700 font-mono">Contacto</h2>
          <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Quieres accesoramiento, consejo o quieres transmitirme tu idea para tu web, ponte en contacto conmigo</p>
          <div class="flex flex-row ">
          <div class="flex flex-col w-full">
              <label for="email" class="block mb-1 text-xs font-medium text-gray-900 ">Your email</label>
              <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block  p-2.5 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light " placeholder="name@flowbite.com" required/>
          </div>
          <div class="flex flex-col w-full">
          <label for="name" class="block mb-1 text-xs font-medium text-gray-900 ">Tu nombre</label>
          <input type="text" id="text" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block  p-2.5 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light " placeholder="tu nombre y apellidos" required/>
          </div>

          </div>
          
         
         
          </div>

        </div>

      </form>







    </>
  )
}
