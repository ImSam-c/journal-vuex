<template>
  <div
    @click="$router.push({ name: 'entry', params: { id: 10 } })"
    class="entry-container mb-3 pointer p-2"
  >
    <div class="entry-title d-flex">
      <span class="text-success fs-5 fw-bold">30</span>
      <span class="mx-1 fs-5">Noviembre</span>
      <span class="fw-light">2022, miércoles</span>
    </div>
    <div class="entry-description">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima
      dignissimos ut beatae eos enim iste tenetur pariatur officia voluptas
      aliquid dicta suscipit harum, quos at! Exercitationem, repellendus.
      Tempora, animi placeat?
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.entry-container {
  border-bottom: 1px solid #2c3e50;
  transition: 0.2s all ease-in;

  &:hover {
    background-color: lighten($color: grey, $amount: 45);
    transition: 0.2s all ease-in;
  }
  .entry-description {
    font-size: 14px;
  }
}
</style>
