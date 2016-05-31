class Body extends React.Component {
  constructor() {
    super();
    this.state = { skills: [] };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
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

  handleUpdate(skill) {
    $.ajax({
      url: `/api/v1/skills/${skill.id}`,
      type: 'PUT',
      data: { skill: skill },
      success: () => {
        this.updateSkills(skill);
      }
    });
  }

  updateSkills(skill) {
    let skills = this.state.skills.filter((s) => { return s.id !== skill.id });
    skills.push(skill);

    this.setState({ skills: skills });
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
        <AllSkills skills={this.state.skills}
                   handleDelete={this.handleDelete}
                   handleUpdate={this.handleUpdate}/>
      </div>
    )
  }
}
