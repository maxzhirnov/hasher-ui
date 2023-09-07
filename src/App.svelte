<script>
    import Layout from './components/Layout.svelte';
    import FileSelector from './components/FileSelector.svelte';
    import Button from './components/Button.svelte';
    import CsvFileImage from './components/CsvFileImage.svelte';
    import DragAndDrop from './components/DragAndDrop.svelte';

    let chosenFile = "";

    $: lastSlashIndex = chosenFile.lastIndexOf('/');
    $: directory = chosenFile.substring(0, lastSlashIndex + 1);
    $: filename = chosenFile.substring(lastSlashIndex + 1);
  
    function handleFileSelection(event) {
      chosenFile = event.detail;
    }

    function handleButtonHash() {
      const { ipcRenderer } = require('electron');
      ipcRenderer.send('selected-file', chosenFile);
      chosenFile = ""
      
      alert("Done")
    }
</script>

<Layout>
  <div class="content">
    <DragAndDrop on:fileSelected={handleFileSelection}/>
    {#if chosenFile}
      <CsvFileImage filename={filename}/>
      <div>at: {directory}</div>
      <Button text="Hash" on:click={handleButtonHash}/>
    {/if}
  </div>
  
</Layout>

<style>
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    color: #ffffff;
    font-family: 'Courier New', Courier, monospace;
  }
</style>