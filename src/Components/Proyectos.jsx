import React from 'react'

export const Proyectos = () => {
  return (
    
<>
<div class="flex flex-col md:flex-row lg:flex-row gap-4 p-3">
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt=""/>
        </div>
       
       
    </div>
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt=""/>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt=""/>
        </div>
       
    </div>

    <div>
      <p class="text-xl font-mono">Titulo:</p>
      <p class="text-3xl p-2 mt-2 mb-2">Harry Potter App</p>

      <div className="flex flex-col">
      <p class="text-xl font-mono">Lenguages y frameworks:</p>
      <div class="flex flex-row">
       <img src="https://miro.medium.com/v2/resize:fit:1200/1*lhfGTouqSQ-fx7PRXaFI-Q.png" className="h-10 w-auto"></img>
       <img src="https://picperf.io/https://laravelnews.s3.amazonaws.com/images/tailwindcss-1633184775.jpg" className="h-10 w-auto"></img>
       <img src="https://www.primetek.com.tr/img/primeng.jpg" className="h-10 w-auto"></img>
      </div>

      <div class="">
        <p class="w-96">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
      </div>
     
     
    </div>
  
     
    </div>

   
   
</div>
</>
  )
}
