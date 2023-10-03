<template>
  <section class="article__demo">
    <section class="cube-container">
      <div id="cube" class="show-1">
        <figure class="face01">1</figure>
        <figure class="face02">2</figure>
        <figure class="face03">3</figure>
        <figure class="face04">4</figure>
        <figure class="face05">5</figure>
        <figure class="face06">6</figure>
        <figure class="face07">7</figure>
        <figure class="face08">8</figure>
        <figure class="face09">9</figure>
        <figure class="face10">10</figure>
        <figure class="face11">11</figure>
        <figure class="face12">12</figure>
        <figure class="face13">13</figure>
        <figure class="face14">14</figure>
        <figure class="face15">15</figure>
        <figure class="face16">16</figure>
        <figure class="face17">17</figure>
        <figure class="face18">18</figure>
        <figure class="face19">19</figure>
        <figure class="face20">20</figure>
      </div>
    </section>

    <section id="buttons">
      <!-- <input type="button" name="roll" value="Roll it!" id="roll" /> -->
      <button type="button" name="roll" id="roll" class="small mx-auto">
        Roll it!
      </button>
    </section>

    <section id="outcome">
      <div id="text">fill me up</div>
    </section>
  </section>
</template>

<script>
export default {
  mounted() {
    const jsLink = document.createElement("script");
    jsLink.setAttribute(
      "src",
      "https://matthewlein.com/content/experiments/00-20-sided-die/script.js"
    );
    document.head.appendChild(jsLink);
  },
};
</script>

<style>
.article__demo {
  margin: 0;
  height: 350px;
}
#outcome {
  visibility: hidden;
}
#cube figure {
  overflow: hidden;
}
</style>
