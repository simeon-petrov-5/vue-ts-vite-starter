<script setup lang="ts">
import { Card } from "../../types/card";
const props = defineProps<{ item: Card }>();
const { item } = toRefs(props);

const emit = defineEmits<{ (e: "click", id: string): void }>();

const count = computed(() =>
  Math.min(item.value.tapped + item.value.untapped, 5)
);
</script>

<template>
  <div class="item" @click="emit('click', item.id)">
    <div class="cards">
      <img
        v-for="idx in count"
        :key="`${item.name}-${idx}`"
        :class="`card x${idx}`"
        :src="item.imgUrl"
        :alt="item.name"
        loading="lazy"
      />
    </div>
    <h2 class="name">{{ item.name }}</h2>
    <p class="info">
      <img class="icon untap" src="../../assets/card.svg" />
      {{ item.untapped }} /
      <img class="icon tap" src="../../assets/card.svg" />{{ item.tapped }}
    </p>
  </div>
</template>

<style lang="scss" scoped>
.item {
  text-align: center;
  font-weight: bold;
  .name {
    font-size: 1rem;
    margin-bottom: 0;
    text-transform: uppercase;
  }
  .info {
    text-align: center;
    .icon {
      width: 1.75rem;

      &.tap {
        transform: rotate(90deg);
        margin-right: 0.25rem;
      }
    }
  }
}
.cards {
  --ratio: 5 / 7;
  --cardInset: 8px;
  aspect-ratio: var(--ratio);
  position: relative;
  .card {
    position: absolute;
    top: 0;
    left: 0;
    padding: 0;
    border-radius: 1rem;
    overflow: hidden;
    display: inline-block;
    box-shadow: var(--card-box-shadow);
    aspect-ratio: var(--ratio);
    width: calc(100% - (v-bind(count) * var(--cardInset)));

    $num-items: 5;
    @for $i from 1 through $num-items {
      &.x#{$i} {
        left: calc(($i - 1) * var(--cardInset));
        top: calc(($i - 1) * (var(--cardInset)));
        z-index: 10 - $i;
      }
    }
  }
}
</style>
