var sass = require('node-sass');

describe('-----MIXIINS TEST', ()=>{
    test('Mixins snapshot', async () => {
  
        var result = sass.renderSync({
          data: `
          @import './1_helpers/mixins';
          `,
          outputStyle: 'nested'
        });
        
        expect(result.css.toString()).toMatchSnapshot();
      });
  })