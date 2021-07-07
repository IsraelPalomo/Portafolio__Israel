<template>
  <nav>
      <img class="nav__logo" src="..\assets\Logotipo__Blog.svg" alt="" >
      <div class="nav__icono--menu"></div>
  </nav>
</template>

<script>
export default {

}
</script>

<style lang="scss">
nav{
 display: flex;
 justify-content: space-between;
 align-items: center;
background-color: #161616;
box-shadow:
  0 1px 5.3px rgba(0, 0, 0, 0.013),
  0 2.1px 10.7px rgba(0, 0, 0, 0.026),
  0 3.5px 16px rgba(0, 0, 0, 0.039),
  0 5.3px 21.3px rgba(0, 0, 0, 0.051),
  0 7.6px 26.5px rgba(0, 0, 0, 0.064),
  0 10.8px 31.6px rgba(0, 0, 0, 0.076),
  0 15.3px 36.5px rgba(0, 0, 0, 0.088),
  0 22.3px 40.9px rgba(0, 0, 0, 0.099),
  0 34.3px 44.3px rgba(0, 0, 0, 0.107),
  0 61px 29px rgba(0, 0, 0, 0.07)
;
height: 6rem;
width: 100%;
.nav__logo{
    height: 5rem;
    width: auto;
}
.nav__icono--menu{
    height: 2rem;
    width: 2rem;
    background-image: url('../assets/Icono__Menu--Open.svg');
    background-size: cover;
    background-position: center;
    margin-right: 2rem;
}



}

</style>