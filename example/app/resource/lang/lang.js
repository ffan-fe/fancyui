export default {
  Install: 'Install',
  Install_Description: '',
  Generate: 'Genertate new project',
  Install_Generator: 'Install ng-start-cli',
  Generate_Init: 'Create project by ng-start-cli, can input projectName yourself',
  Generate_Start: 'CD to your project folder and run gulp to start project',
  GenerateStartDesc:'Open the url http://localhost:3000/#/start, (ng-start-cli will add the start router when init) ',
  Install_FancyUI: 'Install fancyui',
  Inject_Module: 'Inject module',
  Basic_Usage: 'Basic usage',
  Badage_Description: '',
  Badage_Description1: '',
  Count_Description: 'count number, will hide when 0',
  Max_Description: 'max value, will display max+ when over the value',
  Dot_Description: 'show red dot when true',
  Project_file: 'Project files',
  GenerateModule: 'Generate component',
  GenerateModuleDescription: '',
  ParamName: '--name：Ensure to no duplicate name, because this operation will cover old folder if name is duplicated ',
  ParamParent: '--parent: To change the default parent folder, the default parent folder is client/app/components/',
  CreateDetail: 'As below:',
  RouterSetting: 'Setting router',
  RouterFile: "Router file:",
  RouterDesc: 'Unified configuration, support page tracking, code splitting etc.',
  ProxySetting: 'Proxy Setting',
  ProxySettingDes: 'Convenient for debug API in development environment, see custom.env.config.js for detail.',
  ApiFilter: 'Config path here, then will proxy to server',
  TargetDomain: 'target Api host.',
  Cookie: 'Some Api need to user authentication, set cookie here',
  PackDes: "To run 'gulp webpack', will generate the bundle file into distPath(custom.env.config.js)",
  ButtonDes: '',
  IconDes: "icon's value is same as bootstrap's glyphicon",
  IconDes1: '',
  GridLayout: 'Grid layout',
  StepsDes: '',
  TableDes: '',
  CustomTableDes: 'To customize column.',
  IsCustomTable: 'if customize column',
  Operations: 'Setting operations such as Add, Delete etc.',
  TableData: 'table data',
  TableEventDesc: 'Will trigger on page change',
  TableEventParams: 'Te new page number',
  FormDes: '',
  PanelDes: '',
  SwitchDes: 'Switch is used for switching between two opposing states.',
  SwitchWorld: 'Customize world',
  SwitchEventDes: 'Will trigger when status change',
  SwitchEventParam: 'new state',
  ProgressDes: 'Progress is used to show the progress of current operation, and inform the user the current status.',
  ProgressLinear: 'Linear progress bar',
  ProgressCircular: 'Circular progress bar',
  ProgressType: 'the type of progress bar',
  ProgressPercent: 'percentage, required',
  ProgerssState: 'the current status of progress bar',
  ProgressWidth: 'the width of progress bar, required',
  ProgressCircularWidth: 'the canvas width of circle progress bar',
  InputDes: 'Input numerical values with a customizable range.',
  StepSetting: 'Steps setting',
  CurrentValue: 'current value',
  Disabled: 'whether the component is disabled',
  RateDes: 'Used for rating',
  WithColor: 'Different color',
  WithText: 'With Text',
  RateCount: 'rate max value',
  RateColors: 'color array for icons. It should have 3 elements, each of which corresponds with a score level.',
  LowThreshold: 'threshold value between low and medium level. The value itself will be included in low level.',
  HightThreshold: 'threshold value between medium and high level. The value itself will be included in high level.',
  TextArray: 'text array.',
  DefaultCalendar: 'Date and time.',
  RangeCalendar: 'Date and time Range.',
  RangeCalendarDes: 'endDate must later than beginDate.',
  CalendarTypeDesc: 'single calendar or range calendar.',
  SliderInputDesc: 'Drag the slider within a fixed range.',
  PopConfirmDesc: 'A simple and compact dialog used for asking an user confirmation.',
  PopConfirmUse: 'this function return a promise, resolve means ok, reject means cancel',
  HintDesc: 'Displays a global notification message at the upper right corner of the page.',
  menu: 'Menu',
  MenuDesc: 'Menu list of Navigation',
  MenuApiDecTheme: 'color of the theme',
  MenuApiDecMode: 'type of the menu; vertical, horizontal, and inline modes are supported',
  MenuApiDecDefaultSelectedKeys: 'array with the keys of default selected menu items',
  MenuApiDecDefaultOpenKeys: 'array with the keys of default opened sub menus',
  MenuApiDisabled: 'disabled or not',
  MenuApiDecKey: 'unique id of the menu item',
  MenuApiDecSubMenuTitle: 'title of the sub menu',
  MenuApiDecItemGroupTitle: 'title of the group',
  MenuApiDecOnSelect: 'callback of the selected item',
  Upload: 'Upload',
  UploadDesc: 'Upload file by selecting or dragging',
  UploadApiDecName: 'The name of uploading file',
  UploadApiDecDefaultFileList: 'Default list of files that have been uploaded.',
  UploadApiDecFileList: 'List of files that have been uploaded ',
  UploadApiDecAction: 'Required. Uploading URL',
  UploadApiDecData: 'Uploading params or function which can return uploading params.',
  UploadApiDecHeaders: 'Set request headers, valid above IE10.',
  UploadApiDecMultiple: 'Whether to support selected multiple file. IE10+ supported. You can select multiple files with CTRL holding down while multiple is set to be true',
  UploadApiDecAccept: 'File types/size/width/height that can be accepted',
  UploadApiDecBeforeUpload: 'Hook function which will be executed before uploading. Uploading will be stopped with false or a rejected Promise returned.',
  UploadApiDecCustomRequest: 'override for the default xhr behavior allowing for additional customization and ability to implement your own XMLHttpRequest',
  UploadApiDecOnSuccess: 'callback function when uploading is successful',
  UploadApiDecOnFail: 'callback function when uploading is failed',
  UploadApiDecOnChange: 'A callback function, can be executed when uploading state is changing.',
  UploadApiDecListType: 'Built-in stylesheets, support for two types: text or picture',
  UploadApiDecOnRemove: 'A callback function, will be executed when removing file button is clicked',
  UploadApiDecDisabled: 'disable upload button',
  UploadApiDecWithCredentials: 'ajax upload with cookie sent',
  SelectDesc:'When there are plenty of options, use a drop-down menu to display and select desired ones.',
  SelectModel:'data model in non-isMultiple, is single-way binding, set value to change view',
  SelectModels:'data model in isMultiple, is two-way binding.',
  DisabledOption:'Disabled option',
  DisabledSelect:"Disabled select",
  DisabledSelectDesc:'Disable the whole component',
  Clearable:'Clearable single select',
  ClearableDesc:'You can clear Select using a clear icon.',
  BasicMultiple:'Basic multiple select',
  BasicMultipleDesc:'Multiple select uses tags to display selected options.',
  CreateTag:'Create new items',
  RemoteSearch:'Remote Search',
  RemoteSearchDesc:'Enter keywords and search data from server.',
  IsRemoteDesc:'whether options are loaded from server',
  RemoteMethodDesc:'custom remote search method',
  IsGroupDesc:'is group render.',
  IsDisabledDesc:'is whole component disabled',
  IsMultipleDesc:'is multiple render',
  AllowCreateDesc:'whether creating new items is allowed. To use this, is-multiple must be true',
  OnItemSelected:'item selected trigger handler',
  LoadingDesc:'a loading effect',
  TargetDesc:'the DOM node Loading needs to cover. Accepts a DOM object or a string. If it is a string, it will be passed to document.querySelector to get the corresponding DOM node',
  LoadingText:'loading text that displays under the spinner',
  CalendarBeforeRender:'will call this function before rendering a new view, passing in data about the view.',
  OnSetTime:'will call this function passing in the selected value and previous value.',
  SeeBelow:'see below',
  StartView:'the view that the datetimepicker should show when it is opened.',
  MinView:'the lowest view that the calendar should show.',
  MinuteStep:'minute step',
  ModelType:'specifies the data type to use when storing the selected date in the model.',
  Feature1:'Command line tools for init project & create component',
  Feature2:'Lots of components',
  Feature3:'Finishing one page within 3min by adapting to rest API',
  Feature4:'Modular management',
  Feature5:'ES6 syntax + gulp + webpack',
  FeatureDesc:"FancyUI is an AngularJs(1.5.X) component's lib,It's aimed to be useful on building backend admin managment systems, features:",
  MessageService: 'Message',
  MessageDesc: 'Display global messages as feedbacks to user operations.',
  MessageApiDecContent: 'content of the message',
  MessageApiDecduration: 'time before auto-dismiss,in seconds',
  navMenuDesc: 'render menu from tree-like data;automatically open and highlight menu according to location.href ',
  NavMenuApiDecMenuData: 'data source',
  NavMenuApiDecConfig: 'specific the field of id, children & parent filed',
  NavMenuApiDecOnSelect: 'the callback function while clicking menu',
  NavMenuApiDecChildrenAttr: 'specific the children field',
  NavMenuApiDecIdAttr: 'specific the id field',
  NavMenuApiDecParentAttr: 'specific the parent field',
  NavMenuApiDecHrefAttr: 'specific the href field',
  NavMenuApiDecTextAttr: 'specific the text field',
  NavMenuApiDecIconAttr: 'specific the icon field',
  NavMenuApiDecMatchCurrentUrl: 'specific the function which determine if current url is matched',
  OmniTableDesc: 'a table display list data. when to use: to generate a simple list page; need a multi-select form for a collection of list data',
}
