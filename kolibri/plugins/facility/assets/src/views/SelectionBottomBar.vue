<template>

  <BottomAppBar>
    <span class="message">{{ selectedMessage }}</span>
    <KButton
      :disabled="$attrs.disabled || buttonsDisabled"
      :text="coreString('confirmAction')"
      :primary="true"
      @click="$emit('click-confirm')"
    />
  </BottomAppBar>

</template>


<script>

  import commonCoreStrings from 'kolibri.coreVue.mixins.commonCoreStrings';
  import BottomAppBar from 'kolibri.coreVue.components.BottomAppBar';

  export default {
    name: 'SelectionBottomBar',
    components: {
      BottomAppBar,
    },
    mixins: [commonCoreStrings],
    props: {
      count: {
        type: Number,
        required: true,
      },
      type: {
        type: String,
        required: true,
        validator(value) {
          return value === 'learners' || value === 'coaches';
        },
      },
    },
    computed: {
      buttonsDisabled() {
        return this.count === 0;
      },
      selectedMessage() {
        return this.type === 'learners'
          ? this.$tr('learnersSelectedMessage', { count: this.count })
          : this.$tr('coachesSelectedMessage', { count: this.count });
      },
    },
    $trs: {
      coachesSelectedMessage:
        '{count, number} {count, plural, one {teacher} other {teachers}} selected',
      learnersSelectedMessage:
        '{count, number} {count, plural, one {student} other {students}} selected',
    },
  };

</script>


<style lang="scss" scoped>

  .message {
    display: inline-block;
    margin-right: 16px;
  }

</style>
