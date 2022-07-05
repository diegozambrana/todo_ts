import React from 'react';

type MyProps = { message: string; };
type MyState = { contador: number;};

class ClassComponente extends React.Component<MyProps, MyState>{
  state: MyState = {contador: 0}

  execute = () =>  {
    this.setState({contador: this.state.contador + 1})
  }

  render() {
    return (
      <div>
        {this.props.message}
        <button onClick={this.execute}>
          contador {this.state.contador}
        </button>
      </div>
    );
  }
}

export default ClassComponente;