<script lang="ts">
  import("remote/Counter").then((module) => {
    console.log('module', module);
    // fixme: loading remote component is not yet working
  });
</script>

<div class="mt-10 text-3xl mx-auto max-w-6xl">
  <div>Name: host</div>
  <!-- <div bind:this={remoteAppTarget}></div> -->
</div>