<template>
    <template v-if="!detail">
        <ui-button
            width="51px"
            background-color="rgba(255, 255, 255, 0.6)"
            color="rgb(20, 21, 26)"
            v-if="isLoggedIn && id > 0"
            @click="toggleFavorite(id, favorite)"
          >
            <template v-if="isFavorite(getCurrentUser.favorites, id)">
                <img
                    src="/svg/favorite-active.svg"
                    width="16"
                    height="16"
                />
            </template>
            <template v-else>
                <img
                    src="/svg/favorite.svg"
                    width="16"
                    height="16"
                />
            </template>
        </ui-button>
    </template>
    <template v-else>
        <ui-button
            v-if="isLoggedIn && id > 0"
            item="big"
            @click="toggleFavorite(id, favorite)"
          >
            <template v-if="isFavorite(getCurrentUser.favorites, id)">
                <img
                    src="/svg/favorite-white-active.svg"
                    width="16"
                    height="16"
                />
            </template>
            <template v-else>
                <img
                    src="/svg/favorite-white.svg"
                    width="16"
                    height="16"
                />
            </template>
        </ui-button>
    </template>
</template>

<script setup lang="ts">
import { isFavorite } from "~/utils/catalogHandler"
const { toggleFavorite } = useCatalog()
const { isLoggedIn, getCurrentUser } = useAuthStore()

withDefaults(defineProps<{
    id?: number,
    detail?: boolean,
    favorite?: boolean
}>(), {
    id: 0,
    detail: false,
    favorite: false
})

</script>