<script lang="ts">
  import { loadRemoteModule } from "@softarc/native-federation";
  
  let remoteAppTarget: any;
  (async () => {
    console.log('loading remote module')
    const app = await loadRemoteModule('remote', './Counter');
    console.log('app', app);
    new app.default({ target: remoteAppTarget });
  })();
</script>

<div class="mt-10 text-3xl mx-auto max-w-6xl">
  <div>Name: host</div>
  <div bind:this={remoteAppTarget}></div>
</div>