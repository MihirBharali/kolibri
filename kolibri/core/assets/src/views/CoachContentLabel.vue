<template>

  <KLabeledIcon
    v-if="value > 0"
    ref="something"
    :style="{ color: $themeTokens.coachContent }"
  >
    <template #icon>
      <KIcon
        icon="coach"
        :color="$themeTokens.coachContent"
      />
    </template>
    <span v-if="isTopic" class="counter">
      {{ $formatNumber(value) }}
    </span>

    <KTooltip
      reference="something"
      placement="top"
      style="position: relative;"
      :refs="$refs"
    >
      {{ titleText }}
    </KTooltip>
  </KLabeledIcon>

</template>


<script>

  export default {
    name: 'CoachContentLabel',
    props: {
      value: {
        type: Number,
        default: 0,
      },
      // Show number next to label if a topic
      isTopic: {
        type: Boolean,
        default: false,
      },
    },
    computed: {
      titleText() {
        if (this.isTopic) {
          return this.$tr('topicTitle', { count: this.value });
        }
        return this.$tr('coachResourceLabel');
      },
    },
    $trs: {
      coachResourceLabel: {
        message: 'Teacher resource',
        context:
          'Coach resource materials can be lesson plans, professional development readings, training materials, etc. only viewable by coaches and not learners.',
      },
      topicTitle: {
        message:
          'Contains {count, number, integer} {count, plural, one {coach resource} other {coach resources}}',
        context: "You only need to translate the word 'Contains' here.",
      },
    },
  };

</script>


<style lang="scss" scoped>

  .counter {
    position: relative;
    left: -4px;
    font-size: 11px;
  }

  .coach-mat-icon.ui-icon {
    font-size: 16px;
  }

</style>
