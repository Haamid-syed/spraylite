import './PillarCard.css';

export default function PillarCard({ icon, title, description }) {
  return (
    <div className="pillar-card">
      <div className="pillar-card__icon">{icon}</div>
      <h3 className="pillar-card__title">{title}</h3>
      <p className="pillar-card__description">{description}</p>
    </div>
  );
}
