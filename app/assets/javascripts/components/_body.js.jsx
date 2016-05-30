class Body extends React.Component {
  constructor() {
    super();
    this.state = { skills: [] };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    $.getJSON('/api/v1/skills.json', (response) => { this.setState({ skills: response }) });
  }

  handleSubmit(skill) {
    let newState = this.state.skills.concat(skill);
    this.setState({ skills: newState });
  }

  render() {
    return (
      <div>
        <NewSkill handleSubmit={this.handleSubmit} />
        <AllSkills skills={this.state.skills} />
      </div>
    )
  }
}
