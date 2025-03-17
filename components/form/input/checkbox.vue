<template>
    <Field v-slot="{ field }" :name="inputName" type="checkbox" :value="true" :unchecked-value="false">
        <label :class="[defaultClass, addedClass]">
            <input :name="inputName" type="checkbox" v-bind="field" :value="true" :unchecked-value="false"/>
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
        default: 'input-checkbox',
    },
    addedClass: {
        type: String,
        default: '',
    },
    inputName: {
        type: String,
        default: 'text',
    },
    modelValue: {
        type: String,
        default: '',
    },
});

const emit = defineEmits(['update:modelValue']);

const updateValue = (value) => {
  emit('update:modelValue', value); // v-model의 업데이트 이벤트
};
</script>