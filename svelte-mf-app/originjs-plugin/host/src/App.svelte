<script lang="ts">
  import { onMount } from "svelte";

  let el;
  let Component;
  let Module;

  onMount(async () => {
    Module = (await import("remote/Counter")).default;
    Component = new Module({ target: el, props: $$props });
  });

  $: {
    if (Component) {
      Component.$set($$props);
    }
  }
</script>

<div class="mt-10 text-3xl mx-auto max-w-6xl">
  <div>Name: host</div>
  <div bind:this={el}></div>
</div>
