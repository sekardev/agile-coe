import React from 'react'
import HeaderContainer from './containers/HeaderContainer';
import FooterPage from './components/common/FooterPage';

class App extends React.Component
{
    render()
    {
        return (
            <div>
               <HeaderContainer />
               
               
               {this.props.children}
               <br/>
               <FooterPage />
                </div>
        )
    }
}

// App.propTypes = {
//     children : PropTypes.Object.isRequired
// };

export default App;