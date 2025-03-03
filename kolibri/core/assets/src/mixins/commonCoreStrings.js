import { createTranslator } from 'kolibri.utils.i18n';
import notificationStrings from './notificationStrings';

export const coreStrings = createTranslator('CommonCoreStrings', {
  // actions
  cancelAction: {
    message: 'Cancel',
    context:
      'Button to cancel an action and return to the previous page. Usually this is the opposite of the save button which saves some piece of information.',
  },
  cannotUndoActionWarning: 'This action cannot be undone',
  clearAction: {
    message: 'Clear',
    context:
      '\nButton that allows to clear a single *task* from the list in the task manager.\n\n\n',
  },
  closeAction: {
    message: 'Close',
    context: 'Closes some element in Kolibri, like a window.',
  },
  confirmAction: {
    message: 'Confirm',
    context:
      "The 'Confirm' button will display when a user attempts to carry out a specific action in Kolibri that needs confirmation. For example, they will be asked to confirm if they want to assign a coach to a class.",
  },
  continueAction: {
    message: 'Continue',
    context:
      'Used on a button to move to the next step in a process like creating an account, for example.',
  },
  deleteAction: {
    message: 'Delete',
    context:
      'Used to delete an element from Kolibri.\n\nFor example, an admin can delete a user from a facility if they are no longer a user there.',
  },
  editAction: {
    message: 'Edit',
    context:
      "Edit allows users to change some element in Kolbri.\n\nFor example, a coach can use 'Edit' to rename their class or an admin can edit the name of their facility.",
  },
  editDetailsAction: {
    message: 'Edit details',
    context:
      "'Edit details' changes a set of information in Kolibri.\n\nFor example, in a list of users, selecting OPTIONS > 'Edit details' allows a user to edit other users' information like their name, username or type.",
  },
  finishAction: {
    message: 'Finish',
    context:
      "'Finish' in general completes an action that a user may be carrying out in Kolibri.\n\nFor example, when a user creates an account, once they've completed all the information they would select the 'FINISH' button.",
  },
  goBackAction: {
    message: 'Go back',
    context:
      "Indicates going back to a previous step.\n\nFor example, when a user creates a quiz in Kolibri using the quiz builder they can either 'CONTINUE' to the next phase of the builder or 'GO BACK'.\n\nIf you go back you exit the quiz builder and loose the resource selection.",
  },
  registerAction: {
    message: 'Register',
    context: 'Register a facility to the Kolibri Data Portal',
  },
  retryAction: {
    message: 'Retry',
    context:
      'Button which allows a user to retry a an action that may have failed due to an unexpected reason such as a loss of connection.',
  },
  removeAction: {
    message: 'Remove',
    context:
      'Description of a remove task. For example, a coach can remove a user from a class if they are no longer in that class.\n',
  },
  saveAction: {
    message: 'Save',
    context:
      'Button which allows a user to save a specific state in Kolibri.\n\nFor example, if a coach creates a new class they need to enter a name for the class and save that class name to continue.',
  },
  saveChangesAction: {
    message: 'Save changes',
    context:
      'When a user edits an entity en Kolibri that changes some piece of information about it, they need to save those changes.',
  },
  selectAllOnPageAction: {
    message: 'Select all on page',
    context:
      "If admins have imported resources on one Kolibri device, and want to make them available on another computer where Kolibri is installed, they can export them either in full, or make a selection of the resources to be exported.\n\nThe 'Select all on page' option allows admins to export all the resources in bulk that are on that page rather than individually.",
  },
  showAction: {
    message: 'Show',
    context:
      "In the Device > Info tab an admin can view detailed info about the device where Kolibri is running.\n\nThey select the 'Show' link to open the 'Advanced' device info.",
  },
  startOverAction: {
    message: 'Start over',
    context:
      "An action that restarts a learning resource.\n\nFor example, learners might 'start over' a quiz to do it again.",
  },
  syncAction: {
    message: 'Sync',
    context:
      "The 'Sync facility' feature is located in the Device > Facilities dashboard.\n\nBy pressing the 'SYNC' button, an admin can, for example, synchronize facility data (classes, groups, learner progress) with a device from which they previously imported it from.",
  },
  updateAction: {
    message: 'Update',
    context:
      "If a user account has been created prior to version 0.13 of Kolibri, the user will see a notification that they can update their profile to provide their birth year and gender. \n\nThe 'UPDATE' button allows them to provide this new information if they choose to do so.",
  },
  viewAction: {
    message: 'View',
    context:
      'This text appears in several places in Kolibri where users can see some specific information. For example, they can view changes when a public channel is updated, or view a list of notifications about quizzes.',
  },
  viewTasksAction: {
    message: 'View tasks',
    context:
      "In the Kolibri Task Manager dashboard admins can view resource management tasks (import, export, deletion, update, etc.) and observe their progress.\n\nSelecting 'View task' will display more detail about the management task.",
  },

  // labels, phrases, titles, headers...
  adminLabel: {
    message: 'Admin',
    context:
      'Refers to a user with an admin role. This role is marked with a label in a list of users.',
  },
  allClassesLabel: {
    message: 'All classes',
    context:
      'This is an option that takes a user back to view *all the classes* that they have access to in their facility.\n\nYou see this option when you are looking at a specific class and you want to go back to the full list. Only admins see this option.',
  },
  allFacilitiesLabel: {
    message: 'All facilities',
    context:
      'If a user has access to multiple facilities, this option will allow them to view *all* the facilities in the list.',
  },
  allLabel: {
    message: 'All',
    context:
      'Used when users want to filter a list of elements by type. For example, they can filter users by user type, or simply view a list of all users in a facility.',
  },
  allLessonsLabel: {
    message: 'All lessons',
    context:
      'This is an option that takes the user back to view all the reports and class materials for the lessons that they have access to in their class.\n\nThis option shows when a coach is looking at a specific lesson and wants to go back to the *full* list.',
  },
  birthYearLabel: {
    message: 'Birth year',
    context:
      "This label appears in various places and indicates the year in which a user was born. The birth year only displays if this information has been provided when creating or editing the user, as it's an optional field.\n\nA super admin can see the birth year of the users in a facility that they manage, for example, if this information has been provided.",
  },
  channelsLabel: {
    message: 'Channels',
    context:
      'Channels are collections of educational resources (video, audio, document files or interactive apps) prepared and organized by the channel curator for their use in Kolibri. A learner will see a set of channels available to them when they first open Kolibri.',
  },
  classCoachLabel: {
    message: 'Teacher',
    context:
      'When you create a new coach or change the user type to coach for an existing user, you can choose between class coach and facility coach.\n\nA class coach has access to the coach dashboard and permissions to instruct only the learners in the classes they are assigned to.',
  },
  classNameLabel: {
    message: 'Class name',
    context: 'The name that a user gives to a specific class like Grade 7 or English 6B.',
  },
  classesLabel: {
    message: 'Classes',
    context:
      'In the classes section of Kolibri users can view the list of all the classes in their facility, with the number of enrolled users for each class, and the coaches assigned.',
  },
  coachLabel: {
    message: 'Teacher',
    context:
      'A coach is a specific type of user in Kolibri who can manage  classes and learners. A coach can be either a class coach or a facility coach.',
  },
  coachesLabel: {
    message: 'Teachers',
    context:
      "In a list of classes, users can see which coaches manage which specific classes in the 'Coaches' column.",
  },
  completedLabel: {
    message: 'Completed',
    context:
      "A topic is marked as 'Completed' when a learner finishes that specific topic within an educational resource. A topic could be a video, audio, document file or interactive app.",
  },
  deviceNameLabel: {
    message: 'Device name',
    context:
      'The device name indicates the name of the device where Kolibri is running. Accessed in the Device > Info section.',
  },
  devicePermissionsLabel: {
    message: 'Device permissions',
    context:
      'A user can grant permission to another user to manage channels and resources in Kolibri, that is to import, export and delete them from the device used.',
  },
  facilityCoachLabel: {
    message: 'Facility Teacher',
    context:
      'A type of coach account that has permission to view and manage all classes in a facility.',
  },
  facilityLabel: {
    message: 'Facility',
    context: 'A facility is a center of education, such as a school.',
  },
  facilitiesLabel: {
    message: 'Facilities',
    context:
      'Facilities are the centers of education which are managed in Kolibri, such as a school. To manage facilities on a given device, a user must have super admin permissions.',
  },
  facilityName: {
    message: 'Facility name',
    context: 'The name of the facility.',
  },
  facilityNameWithId: {
    message: '{facilityName} ({id})',
    context: 'DO NOT TRANSLATE.',
  },
  facilityDuplicated: {
    message: 'There is already a facility with this name on this device',
    context:
      'This message is displayed if a user tries to name or rename a facility with a name that already exists on the device they are using.',
  },
  fullNameLabel: {
    message: 'Full name',
    context:
      "The full name is the user's complete name. This is usually made up of a user's given and family names (sometimes called first and last names in some cultures).",
  },
  genderLabel: {
    message: 'Gender',
    context:
      "Gender is an option which a user can select in Kolibri when they create another user.\n\nGender can be either 'Female', 'Male' or 'Not specified'.",
  },
  identifierLabel: {
    message: 'Identifier',
    context:
      "An 'Identifier' could be a student ID number or an existing user identification number. This is an optional field in the user create/edit screen.",
  },
  inProgressLabel: 'In progress',
  //Rebranding to Akshar. Keeping the variable name as it is.
  kolibriLabel: {
    message: 'Akshar',
    context:
      'This proper noun is the name of the learning platform, and is pronounced ko-lee-bree (/kolibɹi/). For languages with non-latin scripts, the word should be transcribed phonetically into the target language, similar to a person\'s name. It should not be translated as "hummingbird".',
  },
  learnerLabel: {
    message: 'Student',
    context:
      'Learner is an account type that has limited permissions. Learners can be enrolled in classes, get assigned resources through lessons and quizzes, and navigate channels directly.\n\nWe intentionally did not use the term "student" to be more inclusive of non-formal educational contexts.',
  },
  learnersLabel: {
    message: 'Students',
    context: 'Plural of learner.',
  },
  lessonsLabel: {
    message: 'Lessons',
    context:
      'A lesson is a linear learning pathway defined by a coach. The coach can select resources from any channel, add them to the lesson, define the ordering, and assign the lesson to learners in their class.',
  },
  loadingLabel: {
    message: 'Loading…',
    context: 'Message displayed when a resource is loading indicating that the user should wait.',
  },
  nameLabel: {
    message: 'Name',
    context: 'Might indicate the name of a resource in Kolibri.',
  },
  noUsersExistLabel: {
    message: 'No users exist',
    context: 'Message used to indicate when there are no users in a class, for example.',
  },
  optionsLabel: {
    message: 'Options',
    context:
      'Generally the OPTIONS dropdown menu displays beside a user in a list of users.\n\nIf you select OPTIONS it will display a list of options of actions that you can do with that user. For example, edit their details, reset their password or delete them. ',
  },
  passwordLabel: {
    message: 'Password',
    context: "'Password' is a required field when you create an account as a user on Kolibri.",
  },
  profileLabel: 'Profile',
  progressLabel: {
    message: 'Progress',
    context:
      "A coach can view learner progress in Kolibri.\n\nFor example, in the Coach > Reports section under the 'Progress' column they can see how many learners have started a lesson, or if a learner needs help.\n",
  },
  questionNumberLabel: {
    message: 'Question { questionNumber, number }',
    context: 'Indicates the question number in a quiz that a learner could be taking.',
  },
  quizzesLabel: {
    message: 'Exams',
    context:
      'A quiz is a summative assessment made up of questions taken from exercises. Quizzes are created by coaches and then assigned to learners in a class.\n\nWe intentionally renamed "exam" to "quiz" in order to encourage use as an informal diagnostic tool for teachers.',
  },
  resourcesLabel: {
    message: 'Resources',
    context:
      'A resource is a general term for the videos, exercises, apps, and other materials available in the learning platform.',
  },
  searchLabel: {
    message: 'Search',
    context: 'Test used to indicate the Kolibri search field.',
  },
  showCorrectAnswerLabel: {
    message: 'Show correct answer',
    context:
      "The 'Show correct answer' checkbox allows learners to visualize the answer for the quiz questions that they did not answer correctly.",
  },
  signInLabel: {
    message: 'Sign in',
    context:
      "Users select the 'SIGN IN' button if they already have an account and a username in Kolibri to get access to the platform.",
  },
  superAdminLabel: {
    message: 'Super admin',
    context:
      'A super admin is an account type that can manage devices. Super admin accounts also have permission to do everything that admins, coaches, and learners can do.',
  },
  tasksLabel: {
    message: 'Tasks',
    context:
      "When waiting for a facility to import admins see a 'Tasks' section. This shows the progress of the import.\n\nOnce the task is finished they can clear this information.",
  },
  usageAndPrivacyLabel: {
    message: 'Usage and privacy',
    context:
      'The "Usage and privacy" link displays on the \'Create an account\' screen and on the left navigation bar.\n\nIt contains information about who has access to personal information of users.',
  },
  userTypeLabel: {
    message: 'User type',
    context:
      "'User type' is used to define what kind of permissions the user has in Kolibri.\n\n'User type' can be either Learner, Coach, Admin or Super admin.",
  },
  usernameLabel: {
    message: 'Username',
    context: 'A name that uniquely identifies an account within a facility.',
  },
  usersLabel: {
    message: 'Users',
    context:
      'A user is any person who has access to a facility in Kolibri. There are  four main types of users in Kolibri: Learners, Coaches, Admins and Super admins.',
  },
  viewMoreAction: {
    message: 'View more',
    context:
      'This button appears in Kolibri to indicate to users that there are more results available when they search for resources, for example.',
  },

  // Notifications
  changesSavedNotification: {
    message: 'Changes saved',
    context: 'Message that indicates that some changes that a user made have been saved.',
  },
  changesNotSavedNotification: {
    message: 'Changes not saved',
    context: 'Message that indicates that some changes that a user made have not been saved.',
  },

  // Errors
  requiredFieldError: {
    message: 'This field is required',
    context:
      'Warning message displayed to indicate a field where an input is required. The user cannot skip this field.',
  },
  usernameNotAlphaNumError: {
    message: 'Username can only contain letters, numbers, and underscores',
    context:
      "This is an error message that displays when users enter a username that contains characters other than letters, numbers or underscores.\n\nThis message appears on the 'Create an account' screen if the user enters unaccepted characters when entering a username.",
  },
  invalidCredentialsError: {
    message: 'Incorrect username or password',
    context:
      "Error message a user sees if they've used the wrong username or password when they sign in to Kolibri.",
  },

  // Formatting
  nameWithIdInParens: {
    message: `'{name}' ({id})`,
    context: 'DO NOT TRANSLATE.',
  },
  quotedPhrase: {
    message: `'{phrase}'`,
    context: 'DO NOT TRANSLATE.',
  },
  dashSeparatedPair: {
    message: '{item1} - {item2}',
    context: 'DO NOT TRANSLATE.',
  },
  dashSeparatedTriple: {
    message: '{item1} - {item2} - {item3}',
    context: 'DO NOT TRANSLATE.',
  },
  labelColonThenDetails: {
    message: '{label}: {details}',
    context: 'DO NOT TRANSLATE.',
  },
  commaSeparatedPair: '{item1}, {item2}',

  // Demographic-specific strings
  genderOptionMale: {
    message: 'Male',
    context: "Male is an option in the 'Gender' drop down menu on the 'Create new user' page.",
  },
  genderOptionFemale: {
    message: 'Female',
    context: "Female is an option in the 'Gender' drop down menu on the 'Create new user' page.",
  },
  genderOptionOther: 'Other',
  genderOptionNotSpecified: {
    message: 'Not specified',
    context:
      "Not specified is an option in the 'Gender' drop down menu on the 'Create new user' page.\n\nWhen creating a user you can either select a gender (Male/Female) or select 'Not specified' if you don't want to or can't provide this information.",
  },
  birthYearNotSpecified: {
    message: 'Not specified',
    context:
      "This is an option that appears in the 'Birth year' dropdown menu when you create or edit a user.\n\nWhen creating a user you can either select a birth year or select 'Not specified' if you don't want to or can't provide this information.",
  },
  identifierInputTooltip: {
    message:
      'Examples: a student ID number or an existing user identification number. Avoid using highly sensitive personal information because it might put your users at risk.',

    context:
      "Tooltip with information referring to the optional 'Identifier' field in the 'Create new user' form.\n",
  },
  identifierTooltip: {
    message: 'Examples: a student ID number or an existing user identification number.',
    context:
      "Tooltip with information referring to the optional 'Identifier' field in the 'Create new user' form.",
  },
  identifierAriaLabel: {
    message: 'About providing an identifier or ID number',
    context:
      "\nCould also be translated as \"View information about providing identifier\"\n\nAll 'AriaLabel' type of messages are providing additional context to the screen-reader users. \n\nIn this case the screen-reader will announce the message to the user indicating that they can access more information and examples about the 'Identifier' through the 'i' icon.",
  },

  // Content activity
  notStartedLabel: {
    message: 'Not started',
    context: 'For content that has not been viewed or engaged with yet',
  },
});

export default {
  methods: {
    coreString(key, args) {
      return coreStrings.$tr(key, args);
    },
    showSnackbarNotification(key, args, coreCreateSnackbarArgs) {
      let text = notificationStrings.$tr(key, args || {});
      if (coreCreateSnackbarArgs) {
        this.$store.commit('CORE_CREATE_SNACKBAR', {
          ...coreCreateSnackbarArgs,
          text,
        });
      } else {
        this.$store.dispatch('createSnackbar', text);
      }
    },
  },
};
