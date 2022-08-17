<template>
  <header>
    <nav
      class="z-10 flex flex-row md:block shadow fixed ml-0 h-16 justify-center
    md:min-h-screen w-full md:w-24 md:rounded-r-2xl bg-white dark:bg-black-primary"
    >
      <NuxtLink class="mr-auto" to="/">
        <div class="h-16 w-16 md:h-24 md:w-24 rounded-r-2xl bg-primary-400 relative">
          <BaseLogo />
          <div class="z-10 bottom-0 absolute h-8 w-16 md:h-12 md:w-24 rounded-br-2xl rounded-tl-2xl bg-primary-300" />
        </div>
      </NuxtLink>
      <div class="flex flex-row md:flex-col ml-auto relative md:bottom-0 md:absolute">
        <div class="text-center flex justify-center px-6 md:px-0 my-auto md:my-6">
          <BaseDarkModeToggle class="my-auto" />
        </div>
        <div class="flex px-6 h-full md:w-24 md:h-24 border-l md:border-l-0 md:border-t my-auto border-gray-300 dark:border-gray-500">
          <img class="w-8 h-8 md:h-[41px] md:w-[41px] rounded-full m-auto" src="/profile-picture.png" alt="Profile Picture">
        </div>
      </div>
    </nav>
  </header>
</template>
