<template>
    <div class="select-character-container">
        <h2 class="mt-5">Cast heroes and relive history</h2>
        <div v-if="characters.length && !minting" class="character-grid">
            <div
                class="character-item cursor-pointer mt-10"
                :key="character.name"
                v-for="(character, index) in characters"
                @click="mintCharacterNFTAction(index)"
            >
                <div class="name-container">
                    <p>{{ character.name }}</p>
                </div>
                <img :src="character.imageURI" :alt="character.name" />
                <button type="button" class="character-mint-button">
                    {{ `casting ${character.name}` }}
                </button>
            </div>
        </div>
        <div class="loading" v-else>
            <div class="indicator">
                <loading-indicator />
                <p>Heroes in the making...</p>
            </div>
        </div>
    </div>
</template>

<script>
import LoadingIndicator from "./LoadingIndicator.vue";
export default {
    data() {
        return {
            minting: false,
        };
    },
    components: {
        LoadingIndicator,
    },
    methods: {
        async mintCharacterNFTAction(index) {
            if (this.minting) return;
            this.minting = true;
            await this.$store.dispatch("mintCharacterNFT", index);
            this.minting = false;
        },
    },
    async mounted() {
        this.minting = true;
        await this.$store.dispatch("getCharacters");
        this.minting = false;
    },
    computed: {
        characters() {
            return this.$store.getters.characters;
        },
    },
};
</script>
