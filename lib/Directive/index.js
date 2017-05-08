import dateModelFormat from './dateModelFormat.js'
import dateViewFormat from './dateViewFormat.js'
import fEnter from './f-enter.js'
import fBindHtml from './f-bind-html.js'

let bpDirectives = angular.module('bp.directives', [])
  .directive('dateModelFormat', ()=>dateModelFormat)
  .directive('dateViewFormat', ()=>dateViewFormat)
  .directive('fEnter', () => fEnter)
  .directive('fBindHtml', () => fBindHtml)

export default bpDirectives;
