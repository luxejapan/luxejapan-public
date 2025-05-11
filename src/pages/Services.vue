<template>
  <main id="main-content" tabindex="-1">
    <SectionContainer>
      <SectionTitle>
        <template #main>{{ $t('services.title') }}</template>
        <template #sub>{{ $t('services.subtitle') }}</template>
      </SectionTitle>
      <ServiceCards />
    </SectionContainer>
  </main>
</template>

<script setup>
import ServiceCards from '@/components/ServiceCards.vue';
import SectionContainer from '@/components/SectionContainer.vue';
import SectionTitle from '@/components/SectionTitle.vue';
</script> 