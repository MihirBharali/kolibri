<template>

  <div :style="{ backgroundColor: $themeTokens.surface }">
    <h3 class="header" :style="iconStyle">
      {{ $tr('answerHistoryLabel') }}
    </h3>

    <ul
      ref="attemptList"
      class="history-list"
      role="listbox"
      @keydown.home="setSelectedAttemptLog(0)"
      @keydown.end="setSelectedAttemptLog(attemptLogs.length - 1)"
      @keydown.up.prevent="setSelectedAttemptLog(previousQuestion(selectedQuestionNumber))"
      @keydown.left.prevent="setSelectedAttemptLog(previousQuestion(selectedQuestionNumber))"
      @keydown.down.prevent="setSelectedAttemptLog(nextQuestion(selectedQuestionNumber))"
      @keydown.right.prevent="setSelectedAttemptLog(nextQuestion(selectedQuestionNumber))"
    >
      <template v-for="(attemptLog, index) in attemptLogs">
        <li
          :key="index"
          class="attempt-item"
          :style="{
            backgroundColor: isSelected(index) ? $themePalette.grey.v_100 : '',
          }"
        >
          <a
            ref="attemptListOption"
            role="option"
            :aria-selected="isSelected(index).toString()"
            :tabindex="isSelected(index) ? 0 : -1"
            :style="iconStyle"
            @click.prevent="setSelectedAttemptLog(index)"
            @keydown.enter="setSelectedAttemptLog(index)"
            @keydown.space.prevent="setSelectedAttemptLog(index)"
          >
            <KIcon
              v-if="attemptLog.noattempt"
              class="item svg-item"
              icon="notStarted"
            />
            <KIcon
              v-else-if="attemptLog.correct"
              class="item svg-item"
              :style="{ fill: $themeTokens.correct }"
              icon="correct"
            />
            <KIcon
              v-else-if="attemptLog.error"
              class="svg-item"
              :style=" { fill: $themeTokens.annotation }"
              icon="helpNeeded"
            />
            <KIcon
              v-else-if="!attemptLog.correct"
              class="item svg-item"
              :style="{ fill: $themeTokens.incorrect }"
              icon="incorrect"
            />
            <KIcon
              v-else-if="attemptLog.hinted"
              class="item svg-item"
              :style=" { fill: $themeTokens.annotation }"
              icon="hint"
            />
            <p class="item">
              {{
                windowIsLarge ?
                  coreString(
                    'questionNumberLabel',
                    { questionNumber: attemptLog.questionNumber }
                  )
                  :
                  // Add non-breaking space to preserve vertical centering
                  "&nbsp;"
              }}
            </p>
            <CoachContentLabel
              v-if="windowIsLarge"
              class="coach-content-label"
              :value="attemptLog.num_coach_contents || 0"
              :isTopic="false"
            />
          </a>
        </li>
      </template>
    </ul>
  </div>

</template>


<script>

  import commonCoreStrings from 'kolibri.coreVue.mixins.commonCoreStrings';
  import CoachContentLabel from 'kolibri.coreVue.components.CoachContentLabel';
  import responsiveWindowMixin from 'kolibri.coreVue.mixins.responsiveWindowMixin';

  export default {
    name: 'AttemptLogList',
    components: {
      CoachContentLabel,
    },
    mixins: [commonCoreStrings, responsiveWindowMixin],
    props: {
      attemptLogs: {
        type: Array,
        required: true,
      },
      selectedQuestionNumber: {
        type: Number,
        required: true,
      },
    },
    computed: {
      iconStyle() {
        if (this.windowIsLarge) {
          return {};
        } else {
          return {
            textAlign: 'center',
            padding: 0,
          };
        }
      },
    },
    mounted() {
      this.$nextTick(() => {
        this.scrollToSelectedAttemptLog(this.selectedQuestionNumber);
      });
    },
    methods: {
      setSelectedAttemptLog(questionNumber) {
        const listOption = this.$refs.attemptListOption[questionNumber];
        listOption.focus();

        this.$emit('select', questionNumber);
        this.scrollToSelectedAttemptLog(questionNumber);
      },
      isSelected(questionNumber) {
        return Number(this.selectedQuestionNumber) === questionNumber;
      },
      scrollToSelectedAttemptLog(questionNumber) {
        const selectedElement = this.$refs.attemptList.children[questionNumber];
        if (selectedElement) {
          const parent = this.$el.parentElement;
          parent.scrollTop =
            selectedElement.offsetHeight * (questionNumber + 1) - parent.offsetHeight / 2;
        }
      },
      previousQuestion(questionNumber) {
        return questionNumber - 1 >= 0 ? questionNumber - 1 : this.attemptLogs.length - 1;
      },
      nextQuestion(questionNumber) {
        return questionNumber + 1 < this.attemptLogs.length ? questionNumber + 1 : 0;
      },
    },
    $trs: {
      answerHistoryLabel: {
        message: 'Answer history',
        context:
          'Indicates to a record of answers that a learner has responded to questions in a quiz, for example.',
      },
    },
  };

</script>


<style lang="scss" scoped>

  .coach-content-label {
    display: inline-block;
    margin-top: -4px;
    margin-left: 8px;
    vertical-align: middle;
  }

  .header {
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 20px;
    margin: 0;
  }

  .history-list {
    max-height: inherit;
    padding-left: 0;
    margin: 0;
    list-style-type: none;
  }

  .item {
    display: inline-block;
    height: 24px;
  }

  .svg-item {
    margin-right: 12px;
    margin-bottom: -4px;
    font-size: 24px;
  }

  .attempt-item {
    display: block;
    min-width: 120px;
    clear: both;
  }

  .attempt-item > a {
    display: block;
    padding-left: 20px;
    cursor: pointer;
  }

</style>
