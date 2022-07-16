import React from 'react';

class Typer extends React.Component {

    static defaultProps = {
      heading: '',
      dataText: []
    }
  
    constructor(props) {
      super(props);
  
      this.state = {
        text: '',
        loopNum: 0,
        typingSpeed: 150,
        isDeleting: false,
      }
    }
  
    componentDidMount() {
      this.handleType();
    }
  
    handleType = () => {
      const { dataText } = this.props;
      const { isDeleting, loopNum, text, typingSpeed } = this.state;
      const i = loopNum % dataText.length;
      const fullText = dataText[i];
  
      this.setState({
        typingSpeed: isDeleting ? 100 : 150,
        text: fullText.substring(0, isDeleting ? text.length - 1 : text.length + 1)
      });
  
      if (!isDeleting && text === fullText) {
        
        setTimeout(() => this.setState({ isDeleting: true }), 500);
        
      } else if (isDeleting && text === '') {
        
        this.setState({
          isDeleting: false,
          loopNum: loopNum + 1
        });
        
      }
  
      setTimeout(this.handleType, typingSpeed);
    };
  
    render() {    
      return (
        <h4>{ this.props.heading }&nbsp;
          <span>{ this.state.text }</span>
          <span id="cursor"/>
        </h4>
      );
      
    }
  }
  export default Typer;