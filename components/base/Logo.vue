<template>
  <div class="relative">
    <div class="circle" />
    <div class="circle" />
  </div>
</template>

<style lang="scss" scoped>
.circle {
  height: 15px;
  width: 30px;
  border-radius: 0 0 15px 15px;
  background-color: white;
  position: absolute;
  z-index: 100;
  top: 27px;
  left: 10px;
  margin-bottom: auto;

  &:nth-child(1){
    transform: rotate(70deg);
  }

  &:nth-child(2){
    transform: rotate(-70deg);
    margin-left: 15px;
  }
}

@media screen and (min-width: 768px){
  .circle {
    height: 20px;
    width: 40px;
    border-radius: 0 0 20px 20px;
    top: 40px;
    left: 15px;

    &:nth-child(2){
      margin-left: 20px;
    }
  }
}

</style>
