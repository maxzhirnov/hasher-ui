<script>
    import { createEventDispatcher } from 'svelte';

    export let text = "Click me"

    const dispatch = createEventDispatcher();

    function handleClick() {
        dispatch('click')
    }

</script>

<button on:click={handleClick}>{text}</button>

<style>
    button {
        display: inline-block;
        padding: 10px 20px;
        font-size: 16px;
        width: 200px;
        font-family: 'Arial', sans-serif;
        text-align: center;
        text-decoration: none;
        color: #ffffff;
        border: none;
        border-radius: 25px;
        background: linear-gradient(45deg, #6C5CE7, #8E44AD);
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
        outline: none;
}

    button:hover {
        transform: translateY(-3px);
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2), 0 5px 10px rgba(0, 0, 0, 0.25);
    }

    button:active {
        transform: translateY(1px);
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2), 0 2px 5px rgba(0, 0, 0, 0.25);
    }
  </style>