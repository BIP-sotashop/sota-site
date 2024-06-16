/**
 *
 * Checkbox
 *
 */

import React from 'react';

class Radio extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      size: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      size: event.target.value
    });
    this.props.handleChangeSubmit(event.target.name,event.target.value);
  }

  render() {
    return (
      <div>
        <ul>
          <li>
            <label>
              <input
                name="sorting"
                type="radio"
                value="Сначала новые"
                checked={this.state.size === "Сначала новые"}
                onChange={this.handleChange}
              />
              Сначала новые
            </label>
          </li>

          <li>
            <label>
              <input
                name="sorting"
                type="radio"
                value="Цена от высокой к низкой"
                checked={this.state.size === "Цена от высокой к низкой"}
                onChange={this.handleChange}
              />
              Цена от высокой к низкой
            </label>
          </li>

          <li>
            <label>
              <input
                name="sorting"
                type="radio"
                value="Цена от низкой к высокой"
                checked={this.state.size === "Цена от низкой к высокой"}
                onChange={this.handleChange}
              />
              Цена от низкой к высокой
            </label>
          </li>
        </ul>
      </div>
    );
  }
}

export default Radio;
