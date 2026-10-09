function OrganizationCard({
  number,
  type,
  title,
  description,
  button,
  color,
  link = "#"
}) {
  return (
    <article
      className={`organization-card ${color}`}
    >

      <div className="organization-number">
        {number}
      </div>

      <div className="organization-type">
        {type}
      </div>

      <h3>
        {title}
      </h3>

      <p>
        {description}
      </p>

      <a
        href={link}
        className="organization-link"
      >
        {button} →
      </a>

    </article>
  );
}

export default OrganizationCard;