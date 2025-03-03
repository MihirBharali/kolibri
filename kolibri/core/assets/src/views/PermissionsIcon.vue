<template>

  <span class="pos-rel">
    <span ref="icon">
      <KIcon
        v-if="hasSuperAdminPermission"
        class="icon super-admin"
        :style="iconStyle"
        icon="permission"
      />

      <KIcon
        v-else-if="hasLimitedPermissions"
        class="icon some-permissions"
        :style="iconStyle"
        icon="permission"
      />
    </span>
    <KTooltip
      reference="icon"
      :refs="$refs"
    >
      <UserTypeDisplay
        v-if="hasSuperAdminPermission"
        :userType="UserKinds.SUPERUSER"
      />
      <template v-else-if="hasLimitedPermissions">
        {{ $tr('limitedPermissionsTooltip') }}
      </template>
    </KTooltip>
  </span>

</template>


<script>

  import { PermissionTypes, UserKinds } from 'kolibri.coreVue.vuex.constants';
  import UserTypeDisplay from 'kolibri.coreVue.components.UserTypeDisplay';

  export default {
    name: 'PermissionsIcon',
    components: {
      UserTypeDisplay,
    },
    props: {
      permissionType: {
        type: String,
        required: true,
        validator(value) {
          return [PermissionTypes.SUPERUSER, PermissionTypes.LIMITED_PERMISSIONS].includes(value);
        },
      },
      lightIcon: {
        type: Boolean,
        default: false,
      },
    },
    computed: {
      UserKinds() {
        return UserKinds;
      },
      hasSuperAdminPermission() {
        return this.permissionType === PermissionTypes.SUPERUSER;
      },
      hasLimitedPermissions() {
        return this.permissionType === PermissionTypes.LIMITED_PERMISSIONS;
      },
      iconStyle() {
        if (this.hasSuperAdminPermission) {
          return {
            fill: this.lightIcon ? this.$themePalette.amber.v_100 : this.$themeTokens.superAdmin,
          };
        } else {
          return {
            fill: this.lightIcon ? this.$themeTokens.disabled : this.$themeTokens.text,
          };
        }
      },
    },
    $trs: {
      limitedPermissionsTooltip: {
        message: 'Limited permissions',
        context:
          "This string appears on the user 'Details' screen if the user has limited device permissions.",
      },
    },
  };

</script>


<style lang="scss" scoped>

  .pos-rel {
    position: relative;
  }

  // from KIcon
  svg {
    position: relative;
    top: 0.125em;
    width: 1.125em;
    height: 1.125em;
  }

</style>
