<script>
  let count = 0;

  function increment() {
    count += 1;
  }
</script>

<div class="w-fit border-2 border-red-500 border-dashed rounded-lg p-2">
  <div>count = {count}</div>
  <button class="rounded-full bg-green-500 text-white p-2" on:click={increment}>add one</button>
</div>
