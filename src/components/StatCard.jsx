import './StatCard.css';

export default function StatCard({ value, unit, label }) {
  return (
    <div className="stat-card">
      <div className="stat-card__value">
        {value}
        {unit && <span className="stat-card__unit">{unit}</span>}
      </div>
      <div className="stat-card__label">{label}</div>
    </div>
  );
}
