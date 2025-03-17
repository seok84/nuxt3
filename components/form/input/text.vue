<template>
    <div :class="['form-line', addedClass]">
        <p :class="['form-title', { 'accent': showRequired }]" v-if="inputTitle">{{ inputTitle }}</p>
        <Field :class="['form-basic']" :type="inputType" :name="inputName"
            :id="inputName" :placeholder="placeholder" :rules="inputName" :value="modelValue"
            @input="updateValue($event.target.value)" />
        <ErrorMessage :name="inputName" class="feedback invalid" as="span" />
    </div>
</template>
<script setup>
import { Field, ErrorMessage} from 'vee-validate'; 

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
        default: 'text',
    },
    inputName: {
        type: String,
        default: 'text',
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
/**
 *   change: (id: number) => {
        // `true` 또는 `false` 값을 반환하여
        // 유효성 검사 통과/실패 여부를 알려줌
    },
    update: (value: string) => {
        // `true` 또는 `false` 값을 반환하여
        // 유효성 검사 통과/실패 여부를 알려줌
    }
*/

const updateValue = (value) => {
  emit('update:modelValue', value); // v-model의 업데이트 이벤트
};
</script>