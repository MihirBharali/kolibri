<template>

  <KPageContainer>
    <p>
      <BackLink
        v-if="classListPageEnabled"
        :to="classListLink"
        :text="$tr('allClassesLabel')"
      />
    </p>

    <h1>
      <KLabeledIcon icon="classes" :label="$store.state.classSummary.name" />
    </h1>
    <HeaderTable>
      <HeaderTableRow>
        <template #key>
          <KLabeledIcon
            icon="coach"
            :label="$tr('coach', { count: coachNames.length })"
          />
        </template>
        <template #value>
          <TruncatedItemList :items="coachNames" />
        </template>
      </HeaderTableRow>
      <HeaderTableRow>
        <template #key>
          <KLabeledIcon
            icon="people"
            :label="$tr('learner', { count: learnerNames.length })"
          />
        </template>
        <template #value>
          {{ $formatNumber(learnerNames.length) }}
        </template>
      </HeaderTableRow>
      <HeaderTableRow v-if="learnerNames.length > 0">
        <template #key>
        </template>
        <template #value>
          <KRouterLink
            :text="$tr('viewLearners')"
            appearance="raised-button"
            :to="classLearnersListRoute"
          />
        </template>
      </HeaderTableRow>
    </HeaderTable>
  </KPageContainer>

</template>


<script>

  import { mapGetters } from 'vuex';
  import pickBy from 'lodash/pickBy';
  import { ClassesPageNames } from '../../../../../../learn/assets/src/constants';
  import commonCoach from '../../common';
  import { LastPages } from '../../../constants/lastPagesConstants';

  export default {
    name: 'OverviewBlock',
    mixins: [commonCoach],
    computed: {
      ...mapGetters(['classListPageEnabled']),
      coachNames() {
        return this.coaches.map(coach => coach.name);
      },
      learnerNames() {
        return this.learners.map(learner => learner.name);
      },
      classListLink() {
        let facility_id;
        if (this.$store.getters.userIsMultiFacilityAdmin) {
          facility_id = this.$store.state.classSummary.facility_id;
        }
        return this.$router.getRoute('CoachClassListPage', {}, { facility_id });
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
              last: LastPages.HOME_PAGE,
            }),
          },
        };
        return route;
      },
    },
    $trs: {
      allClassesLabel: {
        message: 'All classes',
        context: "Link to take coach back to the 'Classes' section.",
      },
      coach: {
        message: '{count, plural, one {Teacher} other {Teachers}}',
        context: 'Refers to the coach or coaches who have been assigned to a class. ',
      },
      learner: {
        message: '{count, plural, one {Student} other {Students}}',
        context: 'Refers to the learner or learners who are in a class.',
      },
      viewLearners: 'View students',
    },
  };

</script>


<style lang="scss" scoped></style>
