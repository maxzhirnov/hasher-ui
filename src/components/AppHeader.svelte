<script>

  function closeWindow() {
    const { ipcRenderer } = require('electron');
    ipcRenderer.send('close-window');
  }

  function minimizeWindow() {
    const { ipcRenderer } = require('electron');
    ipcRenderer.send('minimize-window');
  }
</script>

<section class="custom-header">
    <div class="buttons">
      <button class="button-close" on:click={closeWindow}>x</button>
      <button class="button-minimize" on:click={minimizeWindow}>-</button>
    </div>
    <div>hasher app</div>
  </section>

  <style>
    .custom-header {
    -webkit-app-region: drag;
    color: #ffffff;
    font-family: 'Courier New', Courier, monospace;
    display: flex;
    padding: 7px;
    display: flex;
    justify-content: space-between;
    -webkit-app-region: drag;
    }

    .button-close, .button-minimize {
    -webkit-app-region: no-drag;
  }

  button {
    width: 15px;
    height: 15px;
    border-radius: 50%;   /* Делает кнопку круглой */
    display: flex;        /* Используется для выравнивания иконок по центру */
    align-items: center;
    justify-content: center;
    background-color: #6C5CE7;
    color: #ffffff;
    border: none;
    cursor: pointer;
    outline: none;
    transition: background-color 0.15s;
    font-size: 12px;      /* Размер иконок */
    margin-right: 5px;    /* Отступ между кнопками */
}

.buttons {
  display: flex;
}

button:hover {
    background-color: #8E44AD; /* Плавный эффект при наведении */
}

</style>