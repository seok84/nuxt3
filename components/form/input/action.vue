<template>
    <div :class="['form-line', addedClass]">
        <p :class="['form-title', { 'accent': showRequired }]" v-if="inputTitle">{{ inputTitle }}</p>
        <div class="flex">
            <Field :type="inputType" :name="inputName" :id="inputName" :rules="inputName" v-slot="{ field, value }">
                <input :type="inputType" :name="inputName" v-bind="field" :placeholder="placeholder"
                    :class="['form-basic']" :readonly="readonlyStatus">
                <button type="button" :class="['btn btn-black m-w-98', btnCustomClass]" @click="emitMethods(value)">{{
                    content }}</button>
            </Field>
            <span class="time-limit" v-show="authTimer > 0">{{ authTimer }}초</span>
        </div>
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
    readonlyStatus: {
        type: Boolean,
        default: false,
    },
    content: {
        type: String,
        default: '인증요청',
    },
    btnCustomClass: {
        type: String,
        default: '',
    },
    authTimer: {
        type: String,
        default: ''
    }
});

const emit = defineEmits(['emitMethods']);

// const updateValue = (value) => {
//   emit('update:modelValue', value); // v-model의 업데이트 이벤트
// };

const emitMethods = (value) => {
    emit('emitMethods', value);
}


</script>