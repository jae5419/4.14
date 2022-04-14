<template>
    <div>
        <p>{{ $store.state.letters[$route.params.id-1].title }}</p>
        <p>{{ $store.state.letters[$route.params.id-1].main }}</p>
    </div>
</template>