import React from 'react';

class LogoComponent extends React.Component {
    render() {
        console.log('LOGO PROPS ===', this.props);
        return <img src={this.props.logo} className="App-logo" alt="logo" />;
    }
}

export default LogoComponent;
