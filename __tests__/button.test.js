var sass = require('node-sass');

describe('-----BUTTON TEST', ()=>{
    test('Buttons snapshot', async () => {
  
        var result = sass.renderSync({
          data: `
          @import './3_elements/button';
          `,
          outputStyle: 'nested'
        });
        
        expect(result.css.toString()).toMatchSnapshot();
      });
  })