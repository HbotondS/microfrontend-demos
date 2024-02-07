import { initFederation } from '@softarc/native-federation'

(async () => {
  await initFederation({
    'remote': 'http://localhost:5173/remoteEntry.json'
  });

  await import('./bootstrap');
})();