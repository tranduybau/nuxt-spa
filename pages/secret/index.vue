<template>
  <div>
    <h1 class="m-3 text-purple">
      {{ $t('secret-text') }}
    </h1>
  </div>
</template>
<script>
export default {
  middleware: 'authRequired'
}
</script>
