/* eslint-disable */
import React from 'react';

type MyProps = { message: string };
type MyState = { contador: number };

class ClassComponente extends React.Component<MyProps, MyState> {
  state: MyState = { contador: 0 };

  execute = () => {
    this.setState({ contador: this.state.contador + 1 });
  };

  componentDidMount() {
    console.log(`Se ejecuta al momento de montarse`);
  }

  componentWillUpdate() {
    console.log(`el componente se va a actualizar`, this.state.contador);
  }

  componentDidUpdate() {
    console.log(`se ha actualizado el componente`, this.state.contador);
  }

  componentWillUnmount() {
    console.log(`el coponente se va ha desmontar`);
  }

  render() {
    return (
      <div>
        {this.props.message}
        <button onClick={this.execute} style={{ backgroundColor: 'red' }}>
          contador {this.state.contador}
        </button>
      </div>
    );
  }
}

export default ClassComponente;
