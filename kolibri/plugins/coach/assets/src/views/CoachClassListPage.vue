<template>

  <CoreBase
    :immersivePage="false"
    :appBarTitle="appBarTitle"
    :authorized="userIsAuthorized"
    authorizedRole="adminOrCoach"
    :showSubNav="false"
  >

    <template #sub-nav>
      <TopNavbar />
    </template>

    <KPageContainer>

      <p>
        <KRouterLink
          v-if="userIsMultiFacilityAdmin"
          :to="{ name: 'AllFacilitiesPage' }"
          :text="coreString('allFacilitiesLabel')"
          icon="back"
        />
      </p>
      <h1>{{ coreString('classesLabel') }}</h1>
      <p>{{ $tr('classPageSubheader') }}</p>

      <p v-if="classList.length === 0">
        <KExternalLink
          v-if="isAdmin && createClassUrl"
          :text="$tr('noClassesDetailsForAdmin')"
          :href="createClassUrl"
        />
        <span v-else>
          {{ emptyStateDetails }}
        </span>
      </p>

      <CoreTable v-else>
        <template #headers>
          <th>{{ coreString('classNameLabel') }}</th>
          <th>{{ coreString('coachesLabel') }}</th>
          <th>{{ coreString('learnersLabel') }}</th>
        </template>
        <template #tbody>
          <transition-group tag="tbody" name="list">
            <tr v-for="classObj in classList" :key="classObj.id">
              <td>
                <KRouterLink
                  :text="classObj.name"
                  :to="$router.getRoute('HomePage', { classId: classObj.id })"
                  icon="classes"
                />
              </td>
              <td>
                <TruncatedItemList :items="classObj.coaches.map(c => c.full_name)" />
              </td>
              <td>
                {{ $formatNumber(classObj.learner_count) }}
              </td>
            </tr>
          </transition-group>
        </template>
      </CoreTable>
    </KPageContainer>

  </CoreBase>

</template>


<script>

  import { mapGetters, mapState } from 'vuex';
  import find from 'lodash/find';
  import commonCoreStrings from 'kolibri.coreVue.mixins.commonCoreStrings';
  import urls from 'kolibri.urls';
  import commonCoach from './common';

  export default {
    name: 'CoachClassListPage',
    mixins: [commonCoach, commonCoreStrings],
    computed: {
      ...mapGetters(['isAdmin', 'isClassCoach', 'isFacilityCoach', 'userIsMultiFacilityAdmin']),
      ...mapState(['classList']),
      // Message that shows up when state.classList is empty
      emptyStateDetails() {
        if (this.isClassCoach) {
          return this.$tr('noAssignedClassesDetails');
        }
        if (this.isAdmin) {
          return this.$tr('noClassesDetailsForAdmin');
        }
        if (this.isFacilityCoach) {
          return this.$tr('noClassesDetailsForFacilityCoach');
        }

        return '';
      },
      createClassUrl() {
        const facilityUrl = urls['kolibri:kolibri.plugins.facility:facility_management'];
        if (facilityUrl) {
          if (this.userIsMultiFacilityAdmin) {
            return `${facilityUrl()}#/${this.$route.query.facility_id}/classes`;
          }
          return facilityUrl();
        }

        return '';
      },
      appBarTitle() {
        let facilityName;
        const { facility_id } = this.$route.query;
        if (facility_id) {
          const match = find(this.$store.state.core.facilities, { id: facility_id }) || {};
          facilityName = match.name;
        }
        if (facilityName) {
          return this.coachString('coachLabelWithOneName', { name: facilityName });
        } else {
          return this.coachString('coachLabel');
        }
      },
    },
    $trs: {
      classPageSubheader: {
        message: 'View student progress and class performance',
        context:
          'Subtitle of the Coach > Classes section which describes what the coach can see in this section.',
      },
      noAssignedClassesDetails: {
        message: 'Please consult your Akshar administrator to be assigned to a class',
        context:
          'Coach accounts in Kolibri are created by admins. If the coach has no classes assigned to them by the admin, this message displays in the Coach > Classes section. ',
      },
      noClassesDetailsForAdmin: {
        message: 'Create a class and enroll students',
        context:
          "This message displays if there are no classes in the 'Classes' section. Admins can create classes and enroll learners to them. ",
      },
      noClassesDetailsForFacilityCoach: {
        message: 'Please consult your Akshar administrator',
        context:
          'If the coach has no classes assigned to them by the admin, or if they are not themselves an admin themselves, this message displays in the Coach > Classes section.',
      },
    },
  };

</script>


<style lang="scss" scoped></style>
