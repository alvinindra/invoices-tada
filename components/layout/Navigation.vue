<template>
  <header>
    <nav class="z-10 hidden md:block shadow fixed ml-0 min-h-screen w-24 rounded-r-2xl bg-white dark:bg-black-primary">
      <!-- top left icon logo -->
      <NuxtLink to="/">
        <div class="h-24 w-24 rounded-r-2xl bg-primary-400 relative">
          <BaseLogo />
          <div class="z-10 bottom-0 absolute h-12 w-24 rounded-br-2xl rounded-tl-2xl bg-primary-300" />
        </div>
      </NuxtLink>
      <!-- bottom left section -->
      <div class="flex flex-col bottom-0 absolute">
        <div class="text-center my-6">
          <BaseDarkModeToggle />
        </div>
        <div class="flex w-24 h-24 border-t border-gray-300 dark:border-gray-500">
          <img class="h-[41px] w-[41px] rounded-full m-auto" src="/profile-picture.png" alt="Profile Picture">
        </div>
      </div>
    </nav>
  </header>
</template>
