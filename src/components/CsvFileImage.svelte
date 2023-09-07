<script>
    export let filename = "file.csv"
</script>

<div class="file-img">
    <div>
        <img src="../assets/csv-file.png" alt="csv file"/>
    </div>
    <span>{filename}</span>
</div>


<style>
    .file-img {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    img {
        object-fit: contain;
        width: 50px;
    }
</style>