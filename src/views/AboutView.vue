<template>
  <div class="lg:min-h-screen lg:flex lg:items-center lg:justify-center">
    <h1>This is an about page</h1>
  </div>
</template>

<style>
/* Center the about page content on large screens */
@media (min-width: 1136) {
  .lg:flex {
    display: flex;
  }
  .lg:items-center {
    align-items: center;
  }
  .lg:justify-center {
    justify-content: center;
  }
}
h1 {
  text-align: center;
}
</style>
