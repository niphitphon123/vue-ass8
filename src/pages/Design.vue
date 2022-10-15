<template>
 <div>
    <navbar />
    <section class="home">
        <h1 class="heading">Design ตัวละครที่ชอบ</h1>
<div>
  <div class="image">
    <img src="images/Raiden.jpg" alt="50px">
    <img src="images/Yae.jpg" alt="50px">
    <img src="images/Hutao.jpg" alt="45px">

  </div>

  <div class="image">
    <img src="images/ayaka.jpg" alt="50px">
    <img src="images/yoi.jpg" alt="25px">
    <img src="images/eula.jpg" alt="100px">

  </div>
</div>

</section>
 </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
export default {
    components: { Navbar }
}
</script>

<style>

</style>