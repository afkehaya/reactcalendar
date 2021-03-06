var AppointmentForm = React.createClass({
  handleChange: function(e) {
    var name = e.target.name;
    obj = {};
    obj[name] = e.target.value;
    this.props.onUserInput(obj);
  },

  handleSubmit: function(e) {
    e.preventDefault();
    this.props.onFormSubmit();
  },

  setAppointmentTime: function(e) {
    var name = 'appointment_time';
    var obj = {};
    if(obj[name] = e.toDate()) {
      this.props.onUserInput(obj);
    }
  },

  render: function() {
    var inputProps = {
      name: 'appointment_time'
    };

    return (
      <div>
        <h2>Make a new appointment</h2>
        <form onSubmit={this.handleSubmit}>
            <input name='title' placeholder='Meet at Handlebar'
              value={this.props.title}
              onChange={this.handleChange} className="form-control"/>

          <Datetime input={false} open={true} inputProps={inputProps}
            value={this.props.appointment_time}
            onChange={this.setAppointmentTime}/>
          <br/>
          <input type='submit' value='Make Appointment' className="submit-button" />
        </form>
      </div>
    )
  }
});
