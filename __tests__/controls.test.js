var sass = require('node-sass');

describe('-----CONTROL TEST', ()=>{
    test('Control snapshot', async () => {
  
        var result = sass.renderSync({
          data: `
          @import './2_base/controls.scss';
          `,
          outputStyle: 'nested'
        });
        
        expect(result.css.toString()).toMatchSnapshot();
      });
  })