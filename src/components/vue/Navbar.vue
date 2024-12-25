<script setup lang="ts">
    const categories = [
       "business",
			"health",
			"science",
			"sports",
			"technology"
    ];

    import Button from '../ui/button/Button.vue';
</script>

<template>
    <header class=" w-full h-[60px] flex justify-between items-center px-2 fixed top-0 ">
        <div class="text-xl font-bold bg-gradient-to-r from-[#4a90e2] to-[#8e44ad] bg-clip-text text-transparent">
            ambaNews
        </div>
        <Button class=" bg-gradient-to-r from-[#4a90e2] to-[#8e44ad]  rounded text-white" variant="outline"><a href="/business">back</a></Button>
    </header>
    <header class="w-full fixed top-[60px] h-[30px] flex items-center justify-around flex-wrap px-3 gap-3">
        <a v-for="cat,i in categories" :key="i" :href="`/${cat}`" class="text-white " >
            {{  cat  }}
        </a>
    </header>   
    <div class="w-full fixed h-[3px] bg-gradient-to-r from-[#4a90e2] to-[#8e44ad] top-[140px] min-[526px]:top-[100px] " />
</template>