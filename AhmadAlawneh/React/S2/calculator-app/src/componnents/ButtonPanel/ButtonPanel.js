import React,{Component} from 'react';
import Button from '../Button/Button';

class ButtonPanel extends Component {
buttons = [
    ['AC', '+/-', '%', '/'],
    ['7', '8', '9', 'x'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '='],
];

render() {
    const { clickHandler } = this.props;

    return (
    <div className="button-panel">
        <div className="display-row">
            <Button name="AC" clickHandler={clickHandler} />
            <Button name="+/-" clickHandler={clickHandler} />
            <Button name="%" clickHandler={clickHandler} />
            <Button name="/" orangeColor clickHandler={clickHandler} />
        </div>
        {this.buttons.slice(1).map((row, rowIndex) => (
            <div key={rowIndex} className="button-row">
            {row.map((name, index) => (
                <Button
                key={index}
                name={name}
                orangeColor={['/', 'x', '-', '+', '='].includes(name)}
                wide={name === '0'}
                clickHandler={clickHandler}
            />
            ))}
        </div>
        ))}
    </div>
    );
}
}

export default ButtonPanel;