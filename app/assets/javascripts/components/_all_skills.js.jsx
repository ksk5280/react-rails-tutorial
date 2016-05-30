class AllSkills extends React.Component {
  constructor() {
    super();
  }

  handleDelete(id) {
    this.props.handleDelete(id);
  }

  render() {
    let skills = this.props.skills.map((skill) => {
      return (
        <div key={skill.id}>
          <h3>{skill.name}</h3>
          <p><strong>Level:</strong> {skill.level}</p>
          <p>{skill.details}</p>
          <button onClick={this.handleDelete.bind(this, skill.id)}>Delete</button>
        </div>
      )
    });

    return (
      <div>
        {skills}
      </div>
    )
  }
}
