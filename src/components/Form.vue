<template>
    <div>
        <div>
            <label for="">Name: </label>
            <input 
            type="text" 
            v-model.lazy="name"
            name="name" 
            placeholder="Enter your name"
            @input="handleInput"
            >
            <h2>Your entered Input {{ name }}</h2>
        </div>

        <div>
            <label for="">Address: </label>
            <textarea name="address" v-model="address" id="" cols="30" rows="5"
            placeholder="add multiple line"
            >

            </textarea>
            <h2 style="white-space: pre-line;">Your entered Input {{ address }}</h2>
        </div>

        <div>
            <label for="">Are You Allowed: </label>
            <input type="checkbox" name="checkbox" v-model="isAllowed">
            <h2 style="white-space: pre-line;">Your entered Input {{ isAllowed }}</h2>
        </div>

        <div>
            <label for="">Read Checkbox: </label>
            <input type="checkbox" name="checkbox" v-model="permissions" value="read">
            <label for="">Write Checkbox</label>
            <input type="checkbox" name="checkbox" v-model="permissions" value="write">
            <h2 style="white-space: pre-line;">Your entered Input {{ permissions }}</h2>
        </div>

        <div>
            <label for="">Male: </label>
            <input type="radio" name="radio" v-model="gender" value="male">

            <label for="">FeMale: </label>
            <input type="radio" name="radio" v-model="gender" value="female">
            <h2 style="white-space: pre-line;">Your entered Input {{ gender }}</h2>
        </div>

        <div>
            <label for="">Select Your Favourite: </label>
            <select name="favorite" v-model="favorite">
                <option value="">Select Your Favorite</option>
                <option value="first">first</option>
                <option value="second">second</option>
            </select>
            <h2 style="white-space: pre-line;">Your entered Input {{ favorite }}</h2>
        </div>

        <div>
            <label for="">Multiple Select Your Favourite: </label>
            <select name="favorite" v-model="multipleFavorite" multiple>
                <option value="">Select Your Favorite</option>
                <option value="first">first</option>
                <option value="second">second</option>
                <option value="third">third</option>
            </select>
            <h2 style="white-space: pre-line;">Your entered Input {{ multipleFavorite }}</h2>
        </div>

        <div>
            <label for="">Fixed Checkbox Value: </label>
            <input type="checkbox" name="checkbox" v-model="isAllowedFixedValue"
            true-value="yes"
            false-value="no">
            <h2 style="white-space: pre-line;">Your entered Input {{ isAllowedFixedValue }}</h2>
        </div>


        <div>
            <label for="">Select Box With Object Value: </label>
            <select name="favorite" v-model="valueBindingForSelect">
                <option value="">Select Your Favorite</option>
                <option :value="{number: 1}">first</option>
                <option :value="{number: 2}">second</option>
                <option :value="{number: 3}">third</option>
            </select>
            <h2 style="white-space: pre-line;">Your entered Input {{ valueBindingForSelect }}</h2>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

    const name = ref('');
    const address = ref('');
    const isAllowed = ref(false);
    const permissions = ref([]);
    const gender = ref();
    const favorite = ref("");
    const multipleFavorite = ref([]);
    const isAllowedFixedValue = ref("yes");
    const valueBindingForSelect = ref();
</script>

<style lang="scss" scoped>

</style>