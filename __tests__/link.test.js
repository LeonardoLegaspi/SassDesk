var sass = require('node-sass');

describe('-----LINK TEST', ()=>{
    test('Links snapshot', async () => {
  
        var result = sass.renderSync({
          data: `
          @import './3_elements/link';
          `,
          outputStyle: 'nested'
        });
        
        expect(result.css.toString()).toMatchSnapshot();
      });
  })