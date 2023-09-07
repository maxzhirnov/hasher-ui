<script>
    import AppHeader from "./AppHeader.svelte";
</script>

<style>
    main {
      background-color: #282522;
      height: 100vh;
    }
    .content {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 90%;
    }
    
</style>

<main>
  <AppHeader/>
  <section class="content">
    <slot></slot> <!-- это место для содержимого компонента или страницы -->
  </section>
</main>
