class Body extends React.Component {
  constructor() {
    super();
    this.state = { skills: [] };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    $.getJSON('/api/v1/skills.json', (response) => { this.setState({ skills: response }) });
  }

  handleDelete(id) {
    $.ajax({
      url: `/api/v1/skills/${id}`,
      type: 'DELETE',
      success: () => {
        this.removeSkillfromDOM(id);
      }
    });
  }

  removeSkillfromDOM(id) {
    let newSkills = this.state.skills.filter((skill) => {
      return skill.id !== id;
    });

    this.setState({ skills: newSkills });
  }

  handleSubmit(skill) {
    let newState = this.state.skills.concat(skill);
    this.setState({ skills: newState });
  }

  render() {
    return (
      <div>
        <NewSkill handleSubmit={this.handleSubmit} />
        <AllSkills skills={this.state.skills} handleDelete={this.handleDelete} />
      </div>
    )
  }
}
