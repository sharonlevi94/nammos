<template>
  <div class="drawing" id="loading">
    <div class="loading-dot"></div>
  </div>
</template>

<script>
export default {
  name: "Loader"
}
</script>

<style lang="scss" scoped>
//body{
//  margin: 0;
//  overflow: hidden;
//}

.drawing{
  // width: 100vw;
  // height: 100vh;
  position: absolute;
  top: 50%;
  left: 50%;
  display: block;
  z-index: 999;
  background-color: unset;
  // background-color: #3a3a3a;
}
/* -- Loading thingy --*/
.loading-dot {
  border-radius:100%;
  height:10px;
  width:10px;
  background-color: $primary;
  position:absolute;
  left:0;
  right:0;
  margin:auto;
  top:0;
  bottom:0;
  box-shadow: 0px 40px 0px 0px $primary,0px -40px 0px 0px $primary,40px 0px 0px 0px $primary,-40px 0px 0px 0px $primary,
  40px 40px 0px 0px $primary,-40px -40px 0px 0px $primary,40px -40px 0px 0px $primary,-40px 40px 0px 0px $primary;
  -webkit-animation: load 3s infinite linear;
  -moz-animation: load 3s infinite linear;
  -o-animation: load 3s infinite linear;
  animation:load 3s infinite linear;
}


@-webkit-keyframes load {
  0%   {
    -webkit-transform: translate(0px,0px),rotate(0deg);
    box-shadow: 0px 40px 0px 0px $primary,0px -40px 0px 0px $primary,40px 0px 0px 0px $primary,-40px 0px 0px 0px $primary,
    40px 40px 0px 0px $primary,-40px -40px 0px 0px $primary,40px -40px 0px 0px $primary,-40px 40px 0px 0px $primary;
  }

  25%{
    box-shadow: 0px 40px 0px 0px $primary,0px -40px 0px 0px $primary,40px 0px 0px 0px $primary,-40px 0px 0px 0px $primary,
    -40px -40px 0px 0px $primary,40px 40px 0px 0px $primary,-40px 40px 0px 0px $primary,40px -40px 0px 0px $primary;
  }

  50%{
    box-shadow: 0px -40px 0px 0px $primary,0px 40px 0px 0px $primary,-40px 0px 0px 0px $primary,40px 0px 0px 0px $primary,
    -40px -40px 0px 0px $primary,40px 40px 0px 0px $primary,-40px 40px 0px 0px $primary,40px -40px 0px 0px $primary;
  }

  70%{
    box-shadow: 0px 0px 0px 0px $primary,0px 0px 0px 0px $primary,0px 0px 0px 0px $primary,0px 0px 0px 0px $primary,
    0px 0px 0px 0px $primary,0px 0px 0px 0px $primary,0px 0px 0px 0px $primary,0px 0px 0px 0px $primary;
  }

  75%{
    box-shadow: 0px 0px 0px 0px $primary,0px 0px 0px 0px $primary,0px 0px 0px 0px $primary,0px 0px 0px 0px $primary,
    0px 0px 0px 0px $primary,0px 0px 0px 0px $primary,0px 0px 0px 0px $primary,0px 0px 0px 0px $primary;
    height:10px;
    width:10px;
  }

  80%{
    -webkit-transform: translate(0px,0px) rotate(360deg);
    box-shadow: 0px 0px 0px 0px $primary,0px 0px 0px 0px $primary,0px 0px 0px 0px $primary,0px 0px 0px 0px $primary,
    0px 0px 0px 0px $primary,0px 0px 0px 0px $primary,0px 0px 0px 0px $primary,0px 0px 0px 0px $primary;
    background-color: $primary;
    height:40px;
    width:40px;
  }

  85%{
    -webkit-transform: translate(0px,0px) rotate(360deg);
    box-shadow: 0px 0px 0px 0px $primary,0px 0px 0px 0px $primary,0px 0px 0px 0px $primary,0px 0px 0px 0px $primary,
    0px 0px 0px 0px $primary,0px 0px 0px 0px $primary,0px 0px 0px 0px $primary,0px 0px 0px 0px $primary;
    background-color: $primary;
    height:40px;
    width:40px;
  }

  90%{
    -webkit-transform: translate(0px,0px) rotate(360deg);
    box-shadow: 0px 0px 0px 0px $primary,0px 0px 0px 0px $primary,0px 0px 0px 0px $primary,0px 0px 0px 0px $primary,
    0px 0px 0px 0px $primary,0px 0px 0px 0px $primary,0px 0px 0px 0px $primary,0px 0px 0px 0px $primary;
    background-color: $primary;
    height:10px;
    width:10px;
  }

  95%{
    box-shadow: 0px 40px 0px 0px $primary,0px -40px 0px 0px $primary,40px 0px 0px 0px $primary,-40px 0px 0px 0px $primary,
    40px 40px 0px 0px $primary,-40px -40px 0px 0px $primary,40px -40px 0px 0px $primary,-40px 40px 0px 0px $primary;
  }

  100%{
    -webkit-transform: rotate(360deg);
    box-shadow: 0px 40px 0px 0px $primary,0px -40px 0px 0px $primary,40px 0px 0px 0px $primary,-40px 0px 0px 0px $primary,
    40px 40px 0px 0px $primary,-40px -40px 0px 0px $primary,40px -40px 0px 0px $primary,-40px 40px 0px 0px $primary;
  }

}

@-moz-keyframes load {
  0%   {
    -moz-transform: translate(0px,0px),rotate(0deg);
    box-shadow: 0px 40px 0px 0px $primary,0px -40px 0px 0px $primary,40px 0px 0px 0px $primary,-40px 0px 0px 0px $primary,
    40px 40px 0px 0px $primary,-40px -40px 0px 0px $primary,40px -40px 0px 0px $primary,-40px 40px 0px 0px $primary;
  }

  25%{
    box-shadow: 0px 40px 0px 0px $primary,0px -40px 0px 0px $primary,40px 0px 0px 0px $primary,-40px 0px 0px 0px $primary,
    -40px -40px 0px 0px $primary,40px 40px 0px 0px $primary,-40px 40px 0px 0px $primary,40px -40px 0px 0px $primary;
  }

  50%{
    box-shadow: 0px -40px 0px 0px $primary,0px 40px 0px 0px $primary,-40px 0px 0px 0px $primary,40px 0px 0px 0px $primary,
    -40px -40px 0px 0px $primary,40px 40px 0px 0px $primary,-40px 40px 0px 0px $primary,40px -40px 0px 0px $primary;
  }

  70%{
    box-shadow: 0px 0px 0px 0px $primary,0px 0px 0px 0px $primary,0px 0px 0px 0px $primary,0px 0px 0px 0px $primary,
    0px 0px 0px 0px $primary,0px 0px 0px 0px $primary,0px 0px 0px 0px $primary,0px 0px 0px 0px $primary;
  }

  75%{
    box-shadow: 0px 0px 0px 0px $primary,0px 0px 0px 0px $primary,0px 0px 0px 0px $primary,0px 0px 0px 0px $primary,
    0px 0px 0px 0px $primary,0px 0px 0px 0px $primary,0px 0px 0px 0px $primary,0px 0px 0px 0px $primary;
    height:10px;
    width:10px;
  }

  80%{
    -moz-transform: translate(0px,0px) rotate(360deg);
    box-shadow: 0px 0px 0px 0px $primary,0px 0px 0px 0px $primary,0px 0px 0px 0px $primary,0px 0px 0px 0px $primary,
    0px 0px 0px 0px $primary,0px 0px 0px 0px $primary,0px 0px 0px 0px $primary,0px 0px 0px 0px $primary;
    background-color: $primary;
    height:40px;
    width:40px;
  }

  85%{
    -moz-transform: translate(0px,0px) rotate(360deg);
    box-shadow: 0px 0px 0px 0px $primary,0px 0px 0px 0px $primary,0px 0px 0px 0px $primary,0px 0px 0px 0px $primary,
    0px 0px 0px 0px $primary,0px 0px 0px 0px $primary,0px 0px 0px 0px $primary,0px 0px 0px 0px $primary;
    background-color: $primary;
    height:40px;
    width:40px;
  }

  90%{
    -moz-transform: translate(0px,0px) rotate(360deg);
    box-shadow: 0px 0px 0px 0px $primary,0px 0px 0px 0px $primary,0px 0px 0px 0px $primary,0px 0px 0px 0px $primary,
    0px 0px 0px 0px $primary,0px 0px 0px 0px $primary,0px 0px 0px 0px $primary,0px 0px 0px 0px $primary;
    background-color: $primary;
    height:10px;
    width:10px;
  }

  95%{
    box-shadow: 0px 40px 0px 0px $primary,0px -40px 0px 0px $primary,40px 0px 0px 0px $primary,-40px 0px 0px 0px $primary,
    40px 40px 0px 0px $primary,-40px -40px 0px 0px $primary,40px -40px 0px 0px $primary,-40px 40px 0px 0px $primary;
  }

  100%{
    -moz-transform: rotate(360deg);
    box-shadow: 0px 40px 0px 0px $primary,0px -40px 0px 0px $primary,40px 0px 0px 0px $primary,-40px 0px 0px 0px $primary,
    40px 40px 0px 0px $primary,-40px -40px 0px 0px $primary,40px -40px 0px 0px $primary,-40px 40px 0px 0px $primary;
  }

}

@keyframes load {
  0%   {
    transform: translate(0px,0px),rotate(0deg);
    box-shadow: 0px 40px 0px 0px $primary,0px -40px 0px 0px $primary,40px 0px 0px 0px $primary,-40px 0px 0px 0px $primary,
    40px 40px 0px 0px $primary,-40px -40px 0px 0px $primary,40px -40px 0px 0px $primary,-40px 40px 0px 0px $primary;
  }

  25%{
    box-shadow: 0px 40px 0px 0px $primary,0px -40px 0px 0px $primary,40px 0px 0px 0px $primary,-40px 0px 0px 0px $primary,
    -40px -40px 0px 0px $primary,40px 40px 0px 0px $primary,-40px 40px 0px 0px $primary,40px -40px 0px 0px $primary;
  }

  50%{
    box-shadow: 0px -40px 0px 0px $primary,0px 40px 0px 0px $primary,-40px 0px 0px 0px $primary,40px 0px 0px 0px $primary,
    -40px -40px 0px 0px $primary,40px 40px 0px 0px $primary,-40px 40px 0px 0px $primary,40px -40px 0px 0px $primary;
  }

  70%{
    box-shadow: 0px 0px 0px 0px $primary,0px 0px 0px 0px $primary,0px 0px 0px 0px $primary,0px 0px 0px 0px $primary,
    0px 0px 0px 0px $primary,0px 0px 0px 0px $primary,0px 0px 0px 0px $primary,0px 0px 0px 0px $primary;
  }

  75%{
    box-shadow: 0px 0px 0px 0px $primary,0px 0px 0px 0px $primary,0px 0px 0px 0px $primary,0px 0px 0px 0px $primary,
    0px 0px 0px 0px $primary,0px 0px 0px 0px $primary,0px 0px 0px 0px $primary,0px 0px 0px 0px $primary;
    height:10px;
    width:10px;
  }

  80%{
    transform: translate(0px,0px) rotate(360deg);
    box-shadow: 0px 0px 0px 0px $primary,0px 0px 0px 0px $primary,0px 0px 0px 0px $primary,0px 0px 0px 0px $primary,
    0px 0px 0px 0px $primary,0px 0px 0px 0px $primary,0px 0px 0px 0px $primary,0px 0px 0px 0px $primary;
    background-color: $primary;
    height:40px;
    width:40px;
  }

  85%{
    transform: translate(0px,0px) rotate(360deg);
    box-shadow: 0px 0px 0px 0px $primary,0px 0px 0px 0px $primary,0px 0px 0px 0px $primary,0px 0px 0px 0px $primary,
    0px 0px 0px 0px $primary,0px 0px 0px 0px $primary,0px 0px 0px 0px $primary,0px 0px 0px 0px $primary;
    background-color: $primary;
    height:40px;
    width:40px;
  }

  90%{
    transform: translate(0px,0px) rotate(360deg);
    box-shadow: 0px 0px 0px 0px $primary,0px 0px 0px 0px $primary,0px 0px 0px 0px $primary,0px 0px 0px 0px $primary,
    0px 0px 0px 0px $primary,0px 0px 0px 0px $primary,0px 0px 0px 0px $primary,0px 0px 0px 0px $primary;
    background-color: $primary;
    height:10px;
    width:10px;
  }

  95%{
    box-shadow: 0px 40px 0px 0px $primary,0px -40px 0px 0px $primary,40px 0px 0px 0px $primary,-40px 0px 0px 0px $primary,
    40px 40px 0px 0px $primary,-40px -40px 0px 0px $primary,40px -40px 0px 0px $primary,-40px 40px 0px 0px $primary;
  }

  100%{
    transform: rotate(360deg);
    box-shadow: 0px 40px 0px 0px $primary,0px -40px 0px 0px $primary,40px 0px 0px 0px $primary,-40px 0px 0px 0px $primary,
    40px 40px 0px 0px $primary,-40px -40px 0px 0px $primary,40px -40px 0px 0px $primary,-40px 40px 0px 0px $primary;
  }

}
@-o-keyframes load {
  0%   {
    -o-transforms: translate(0px,0px),rotate(0deg);
    box-shadow: 0px 40px 0px 0px $primary,0px -40px 0px 0px $primary,40px 0px 0px 0px $primary,-40px 0px 0px 0px $primary,
    40px 40px 0px 0px $primary,-40px -40px 0px 0px $primary,40px -40px 0px 0px $primary,-40px 40px 0px 0px $primary;
  }

  25%{
    box-shadow: 0px 40px 0px 0px $primary,0px -40px 0px 0px $primary,40px 0px 0px 0px $primary,-40px 0px 0px 0px $primary,
    -40px -40px 0px 0px $primary,40px 40px 0px 0px $primary,-40px 40px 0px 0px $primary,40px -40px 0px 0px $primary;
  }

  50%{
    box-shadow: 0px -40px 0px 0px $primary,0px 40px 0px 0px $primary,-40px 0px 0px 0px $primary,40px 0px 0px 0px $primary,
    -40px -40px 0px 0px $primary,40px 40px 0px 0px $primary,-40px 40px 0px 0px $primary,40px -40px 0px 0px $primary;
  }

  70%{
    box-shadow: 0px 0px 0px 0px $primary,0px 0px 0px 0px $primary,0px 0px 0px 0px $primary,0px 0px 0px 0px $primary,
    0px 0px 0px 0px $primary,0px 0px 0px 0px $primary,0px 0px 0px 0px $primary,0px 0px 0px 0px $primary;
  }

  75%{
    box-shadow: 0px 0px 0px 0px $primary,0px 0px 0px 0px $primary,0px 0px 0px 0px $primary,0px 0px 0px 0px $primary,
    0px 0px 0px 0px $primary,0px 0px 0px 0px $primary,0px 0px 0px 0px $primary,0px 0px 0px 0px $primary;
    height:10px;
    width:10px;
  }

  80%{
    -o-transforms: translate(0px,0px) rotate(360deg);
    box-shadow: 0px 0px 0px 0px $primary,0px 0px 0px 0px $primary,0px 0px 0px 0px $primary,0px 0px 0px 0px $primary,
    0px 0px 0px 0px $primary,0px 0px 0px 0px $primary,0px 0px 0px 0px $primary,0px 0px 0px 0px $primary;
    background-color: $primary;
    height:40px;
    width:40px;
  }

  85%{
    -o-transforms: translate(0px,0px) rotate(360deg);
    box-shadow: 0px 0px 0px 0px $primary,0px 0px 0px 0px $primary,0px 0px 0px 0px $primary,0px 0px 0px 0px $primary,
    0px 0px 0px 0px $primary,0px 0px 0px 0px $primary,0px 0px 0px 0px $primary,0px 0px 0px 0px $primary;
    background-color: $primary;
    height:40px;
    width:40px;
  }

  90%{
    -o-transforms: translate(0px,0px) rotate(360deg);
    box-shadow: 0px 0px 0px 0px $primary,0px 0px 0px 0px $primary,0px 0px 0px 0px $primary,0px 0px 0px 0px $primary,
    0px 0px 0px 0px $primary,0px 0px 0px 0px $primary,0px 0px 0px 0px $primary,0px 0px 0px 0px $primary;
    background-color: $primary;
    height:10px;
    width:10px;
  }

  95%{
    box-shadow: 0px 40px 0px 0px $primary,0px -40px 0px 0px $primary,40px 0px 0px 0px $primary,-40px 0px 0px 0px $primary,
    40px 40px 0px 0px $primary,-40px -40px 0px 0px $primary,40px -40px 0px 0px $primary,-40px 40px 0px 0px $primary;
  }

  100%{
    -o-transforms: rotate(360deg);
    box-shadow: 0px 40px 0px 0px $primary,0px -40px 0px 0px $primary,40px 0px 0px 0px $primary,-40px 0px 0px 0px $primary,
    40px 40px 0px 0px $primary,-40px -40px 0px 0px $primary,40px -40px 0px 0px $primary,-40px 40px 0px 0px $primary;
  }

}
</style>
