<template>
    <section class="container">
        <ul>
            <li class="select-list" v-for="(selectorItem, index) in selectorItems">
                <span>{{ selectorItem }}</span>
            </li>
        </ul>

        <button type="button" @click="selectorActive()" id="click">click</button>
        <p class="half">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic temporibus et soluta laboriosam quaerat impedit beatae eius, assumenda consequatur, voluptatibus quia! Iste aliquam iure blanditiis fugiat quibusdam nisi explicabo adipisci.</p>
      </section>
</template>
  
<script>
export default {
  name: 'aboutPage',
  data() {
    return {
      selectorIndex: 0,
      selectorItems: [
        'select1',
        'select2',
        'select3',
        'select4',
        'select5',
      ],
    }
  },

  methods: {
    selectorActive(index) {
        const random = Math.floor((Math.random() * 5))
        let selectItem = document.getElementsByClassName('select-list')[random]
        console.log(random)
        selectItem.classList.add('active')
        document.getElementById('click').disabled = true
    }
  },

}
</script>

<style lang="scss">
    .container {
        .active {
            background: $secondary;
        }

        button {
            background: $primary;
            padding: 10px 20px;
            color: #fff;
        }

    }
</style>