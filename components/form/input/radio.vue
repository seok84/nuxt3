<template>
    <Field :name="inputName" type="radio" :unchecked-value="false">
        <label :class="defaultClass">
            <input type="radio" :name="inputName" :value="modelValue" :checked="modelValue === radioValue"
                @input="updateValue(radioValue)" />
            <i></i>
            <span>
                {{ labelTitle }}
            </span>
        </label>
    </Field>
</template>
<script setup>
import { Field } from 'vee-validate'; 

const props = defineProps({
    labelTitle: {
        type: String,
        default: '',
    },
    defaultClass: {
        type: String,
        default: 'input-radio',
    },
    inputName: {
        type: String,
        default: 'text',
    },
    modelValue: {
        type: Boolean,
        default: false
    },
    radioValue: {
        type: Boolean,
        default: true
    },
});

const emit = defineEmits(['update:modelValue']);

const updateValue = (value) => {
    emit('update:modelValue', value); // v-model의 업데이트 이벤트
};
</script>