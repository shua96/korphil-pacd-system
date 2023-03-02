<template>
    <div class="custom-select">
        <div class="selected" @click="toggleDropdown">
            <div class="label">{{ selectedOption }}</div>
            <div class="arrow">
                <span class="material-icons">
                    {{ dropdownOpen ? 'keyboard_arrow_up' : 'keyboard_arrow_down' }}
                </span>
            </div>
        </div>
        <div class="options" v-show="dropdownOpen">
            <div class="option" v-for="(option, index) in options" :key="index" @click="selectOption(option)">
                {{ option }}
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    props: {
        options: {
            type: Array,
            required: true,
        },
        value: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            dropdownOpen: false,
            selectedOption: this.value,
        };
    },
    methods: {
        toggleDropdown() {
            this.dropdownOpen = !this.dropdownOpen;
        },
        selectOption(option) {
            this.selectedOption = option;
            this.$emit('input', option);
            this.dropdownOpen = false;
        },
    },
    watch: {
        value(newVal) {
            this.selectedOption = newVal;
        },
    },
};
</script>
  
<style scoped>
.custom-select {
    position: relative;
    display: inline-block;
}

.selected {
    display: flex;
    align-items: center;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    cursor: pointer;
}

.selected:hover {
    background-color: #f7f7f7;
}

.label {
    flex: 1;
}

.arrow {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
}

.options {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    max-height: 200px;
    overflow-y: auto;
    z-index: 10;
}

.option {
    padding: 8px;
    cursor: pointer;
}

.option:hover {
    background-color: #f7f7f7;
}
</style>
  