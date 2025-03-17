<template>
    <ul class="photo-list">
        <li v-for="(photo, index) in photos" :key="index" class="photo-item">
            <img :src="photo" alt="업로드된 이미지">
            <button type="button" class="btn-delete" @click="removePhoto(index)">삭제하기</button>
        </li>
        <li v-if="photos.length < 4" class="add-photo"><!-- photo-item이 4개 이상이면 display:none-->
            <label for="upload-file">
                <input type="file" name="upload-file" id="upload-file" accept=".gif,.png,.jpg,.jpeg" multiple
                    @change="handleUpload" />
            </label>
        </li>
    </ul>
</template>
<script setup>
    import { ref  } from 'vue';

    const photos = ref([]);
    const emit = defineEmits(['update:photos']);

    //[참고]https://velog.io/@keynene/JavaScript-%ED%8C%8C%EC%9D%BC-%EC%9E%85%EC%B6%9C%EB%A0%A5-FileReader
    const handleUpload = (event) => {
        const files = event.target.files;

        for(let i = 0; i < files.length; i++){
            if(photos.value.length >= 4) break;

            const reader = new FileReader(); 
            reader.onload = (e) => {
                console.log(e.target)
                photos.value.push(e.target.result);
                emit('update:photos', photos.value);
            };
            reader.readAsDataURL(files[i]);
        }
    };

    const removePhoto = (index) => {
        photos.value.splice(index,1);
        emit('update:photos', photos.value);
    }

</script>