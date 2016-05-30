class Skill extends React.Component {
  constructor() {
    super();
    this.state = { editable: false };
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleEdit() {
    if (this.state.editable) {
      this.onUpdate();
    }
    this.setState({ editable: !this.state.editable });
  }

  onUpdate() {
    let id = this.props.skill.id
    let name = this.refs.name.value;
    let details = this.refs.details.value;
    let level = this.props.skill.level;
    let skill = { id: id, name: name, details: details, level: level };

    this.props.handleUpdate(skill);
  }

  render() {
    let name = this.state.editable ? <input type='text'
                                            ref='name'
                                            defaultValue={this.props.skill.name} />
                                   : <h3>{this.props.skill.name}</h3>

    let details = this.state.editable ? <textarea type='text'
                                                  ref='details'
                                                  defaultValue={this.props.skill.details}>
                                        </textarea>
                                   : <p>{this.props.skill.details}</p>

    return (
      <div>
        {name}
        <p><strong>Level:</strong> {this.props.skill.level}</p>
        {details}
        <button onClick={this.props.handleDelete}>Delete</button>
        <button onClick={this.handleEdit}>{this.state.editable ? 'Submit' : 'Edit' }</button>
      </div>
    )
  }
}
