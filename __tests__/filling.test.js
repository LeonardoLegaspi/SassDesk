var sass = require('node-sass');

describe('-----FILLING TEST', ()=>{
    test('Filling snapshot', async () => {
  
        var result = sass.renderSync({
          data: `
          @import './4_components/filling-button.scss';
          `,
          outputStyle: 'nested'
        });
        
        expect(result.css.toString()).toMatchSnapshot();
      });
  })