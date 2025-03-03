<template>

  <div v-show="!$isPrint" class="report-controls">
    <slot></slot>
    <div class="report-controls-buttons">
      <KRouterLink
        v-if="isQuizTab"
        :text="$tr('viewLearners')"
        appearance="basic-link"
        :to="classLearnersListRoute"
      />
      <KIconButton
        ref="printButton"
        icon="print"
        :aria-label="coachString('printReportAction')"
        @click.prevent="$print()"
      />
      <KTooltip
        reference="printButton"
        :refs="$refs"
      >
        {{ coachString('printReportAction') }}
      </KTooltip>

      <KIconButton
        v-if="!exportDisabled"
        ref="exportButton"
        icon="download"
        :aria-label="coachString('exportCSVAction')"
        @click.prevent="$emit('export')"
      />
      <KTooltip
        reference="exportButton"
        :refs="$refs"
      >
        {{ coachString('exportCSVAction') }}
      </KTooltip>
    </div>
  </div>

</template>


<script>

  import { isEmbeddedWebView } from 'kolibri.utils.browserInfo';
  import pickBy from 'lodash/pickBy';
  import commonCoach from '../common';
  import { ClassesPageNames } from '../../../../../learn/assets/src/constants';
  import { LastPages } from '../../constants/lastPagesConstants';

  export default {
    name: 'ReportsControls',
    mixins: [commonCoach],
    props: {
      disableExport: {
        type: Boolean,
        default: false,
      },
    },
    computed: {
      exportDisabled() {
        // Always disable in app mode until we add the ability to download files.
        return isEmbeddedWebView || this.disableExport;
      },
      isQuizTab() {
        return this.$route.name === 'ReportsQuizListPage';
      },
      classLearnersListRoute() {
        const { query } = this.$route;
        const route = {
          name: ClassesPageNames.CLASS_LEARNERS_LIST_VIEWER,
          params: {
            id: this.classId,
          },
          query: {
            ...query,
            ...pickBy({
              last: LastPages.RESOURCE_LEARNER_LIST_BY_GROUPS,
            }),
          },
        };
        return route;
      },
    },
    $trs: {
      viewLearners: 'View student devices',
    },
  };

</script>


<style lang="scss" scoped>

  .report-controls {
    position: relative;
    min-height: 40px;
    padding-right: 80px;
  }

  .report-controls-buttons {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
  }

  .learner-device-link {
    margin-right: 10px;
    font-size: 14px;
  }

</style>
