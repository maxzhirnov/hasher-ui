<script>
    import { createEventDispatcher } from 'svelte';

    let dropZone;
    let selectedFile = null;

    const dispatch = createEventDispatcher();
  
    function handleDragOver(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    function handleDrop(e) {
        e.preventDefault();
        e.stopPropagation();

        let files = e.dataTransfer.files;

        if (files && files.length > 0) {
            const file = files[0];
            selectedFile = file.path;
            dispatch('fileSelected', selectedFile);
        }
    }

    async function handleClick(e) {
        const { ipcRenderer } = require('electron');
    
        const result = await ipcRenderer.invoke('open-file-dialog');

        if (result) {
            selectedFile = result;
            dispatch('fileSelected', selectedFile);
        }
    }
</script>

<div bind:this={dropZone} class="drop-zone" 
    on:drop={handleDrop} 
    on:click={handleClick} 
    on:keypress={handleClick} 
    on:dragover={handleDragOver}>
    Перетащите файл сюда или кликните для выбора
</div>

<style>
.drop-zone {
    border: 2px dashed #aaa;
    padding: 20px;
    text-align: center;
    cursor: pointer;
}
.drop-zone:hover {
    background-color: rgba(255, 255, 255, 0.1);
}
</style>