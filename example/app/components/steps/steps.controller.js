/**
 * (description)
 *
 * @author yourname
 */

export default class StepsController {
  constructor($state) {
    'ngInject';
    this.$state = $state;
    this.name = 'steps';

    this.stepsData = [
      {
        title: '总览',
        iconContent: '1'
      },
      {
        title: '设计',
        iconContent: '2'
      },
      {
        title: '施工',
        iconContent: '3'
      },
      {
        title: '验收',
        iconContent: '4'
      },
      {
        title: '发布',
        icon: `<span class="glyphicon glyphicon-play-circle"></span>`
      }
    ];

    this.onClick = (item, index) => {
      console.log(item, index);
    }
  }
}
