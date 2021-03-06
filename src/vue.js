var UI = require('sketch/ui')
var dom = require('sketch/dom');
require('@skpm/timers')
import go from './index';
var utils = require('./util');
export default function (){
    // sketch.UI.message("It's alive 🙌vue")
    // COScript.currentCOScript().shouldKeepAround = true;
    // sketch.UI.message("It's alive 🙌react")
    var document = dom.getSelectedDocument();
    document.save()
    // console.log(decodeURI(document.path))
    // return;
    const newPages = JSON.parse(JSON.stringify(document.pages));
    var selectedArtboards=[];
    newPages.forEach((page) => {
      if (page.type === 'Page' && page.selected) {
        page.layers.forEach(layer => {
          if (layer.type === 'Artboard') {
            if (layer.selected) {
              selectedArtboards.push(layer);
            }
          }
        });
      }
    });
    if (selectedArtboards.length === 0 ||selectedArtboards.length>1) {
      UI.alert('Export Code', '请选择一个画板');
      return;
    }
    console.log(selectedArtboards[0].id,document.selectedPage.id)
    utils.isH5=true;
    utils.isVue = true;
    utils.RootFontSize=100;
    go(selectedArtboards[0].id,document.selectedPage.id);
    UI.message("OJBK🙌")
}