class AllSkills extends React.Component {
  constructor() {
    super();
  }

  handleDelete(id) {
    this.props.handleDelete(id);
  }

  onUpdate(skill) {
    this.props.handleUpdate(skill);
  }

  render() {
    let skills = this.props.skills.map((skill) => {
      return (
        <div key={skill.id}>
          <Skill skill={skill}
            handleDelete={this.handleDelete.bind(this, skill.id)}
            handleUpdate={this.onUpdate.bind(this)} />
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
