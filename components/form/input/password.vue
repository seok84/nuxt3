<template>
    <div :class="['form-line', addedClass]">
        <p :class="['form-title', { 'accent': showRequired }]" v-if="inputTitle">{{ inputTitle }}</p>
        <div class="flex">
            <Field :class="['form-basic']" :type="inputType" :name="inputName" :id="inputName"
                :placeholder="placeholder" :rules="inputName" :value="modelValue"
                @input="updateValue($event.target.value)" />
            <button type="button" class="show-password-btn" @click=$togglePasswordType($event)>비밀번호 보기</button>
        </div>
        <ErrorMessage :name="inputName" class="feedback invalid" as="span" />
    </div>
</template>

<script setup>
import { Field, ErrorMessage} from 'vee-validate'; 
const {$togglePasswordType} = useNuxtApp();

const props = defineProps({
    inputTitle: {
        type: String,
        default: '',
    },
    showRequired: {
        type: Boolean,
        default: true,
    },
    addedClass: {
        type: String,
        default: '',
    },
    inputType: {
        type: String,
        default: 'password',
    },
    inputName: {
        type: String,
        default: ''
    },
    placeholder: {
        type: String,
        default: '',
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