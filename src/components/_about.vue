<template>
  <div id="app" class="flex min-h-screen text-white p-20 max-h">
    <!-- Sidebar -->
    <aside class="flex flex-col bg-sky-100 dark:bg-gray-800 w-64 rounded-3xl">
      <!-- Sidebar content -->
      <div class="flex items-center justify-center h-20 rounded-t-3xl bg-gradient-to-r from-gray-800 via-gray-500 to-gray-800 dark:from-gray-900 dark:via-gray-800 dark:to-gray-800 ">
        <h1 class="text-2xl font-bold">About CFC</h1>
      </div>
      <nav class="flex-1">
        <ul class="py-4">
          <li class="px-6 py-2 hover:bg-sky-800  text-sky-900 dark:text-green-500 hover:text-sky-200 ">
           <a class="block" href="#farming">Farming</a>       
          </li>
          <li class="px-6 py-2 hover:bg-sky-800  text-sky-900 dark:text-green-500 hover:text-sky-200">
            <a href="#cows" class="block">Cows</a>
          </li>
          
          <li class="px-6 py-2 hover:bg-sky-800  text-sky-900 dark:text-green-500 hover:text-sky-200">
            <a href="#bulls" class="block">Bulls
              
            </a>
          </li>
          <li class="px-6 py-2 hover:bg-sky-800  text-sky-900 dark:text-green-500 hover:text-sky-200">
            <a href="#family" class="block">The Ziegler Family</a>
          </li>
        </ul>
      </nav>
      <!-- Contact Info -->
      <div class="flex items-center justify-center h-16 bg-gradient-to-r from-gray-800 via-gray-500 to-gray-800 dark:from-gray-900 dark:via-gray-800 dark:to-gray-800  rounded-b-3xl p-8 ">
        <p class="text-sm">Contact: robert_ziegler@hotmail.com</p>
      </div>
    </aside>
   
    <!-- Main Content -->
    <main class="flex-1">
      <div class=" hidden sm:block flex-col items-center justify-center p-8">
      <div class="z-10 backdrop-blur-md rounded-lg border-2 p-8  border-sky-900 dark:border-white shadow-md  space-y-6 text-center bg-white dark:bg-gray-900 flex flex-col items-center justify-center">
        <h1 class="text-4xl font-extrabold text-sky-900 dark:text-green-500 mb-4">About Code For Christ</h1>
        <p class="text-base  text-sky-900 dark:text-green-500 mb-4 leading-relaxed">
        Code for Christ is a web development company that seeks to work for small christian companies to help them grow. 
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <!-- Gallery of Images -->
          <img src="https://i.ibb.co/LdmK6NN/306-CBBD3-5608-41-A1-9-B6-D-A01-CA2985-B64.jpg" alt="" class="gallery-image">
          <img src="https://i.ibb.co/Dbkx4Jv/275-FD28-C-1523-490-D-BCE6-F51000-E66-FD8.jpg" alt="" class="gallery-image">
          <img src="https://i.ibb.co/JsnsxCS/38-DF599-B-4129-40-D4-808-C-7-F08-BE2-E7451.jpg" alt="" class="gallery-image">
        </div>
        <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJNvwDlPSxPqSgTCBjXwNPzCXXznPZlDfhGcDWVvxqjPqCdqcKrmKCCtjZNlDRnKvRLtBrL" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline-blue bg-gradient-to-r from-green-700 via-green-700  to-green-800 transition duration-300 mt-4">Contact</a>
      </div>
      </div>
    </main> 
  </div>

</template>

<style scoped>
.gallery-image {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 10px; /* Add border-radius to images for a nicer look */
}
</style>
