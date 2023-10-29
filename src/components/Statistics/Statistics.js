import {
  StatSection,
  StatTitle,
  StatList,
  StatItem,
  StatLabel,
  StatPercentage,
} from './Statistics.styled';
import { bgColorGenerator } from '../Utils/BgColoкGenerator';

export const Statistics = ({ title, stats }) => {
  return (
    <StatSection>
      {title && <StatTitle>{title}</StatTitle>}

      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <StatItem
            key={id}
            style={{ backgroundColor: `${bgColorGenerator()}` }}
          >
            <StatLabel>{label}</StatLabel>
            <StatPercentage>{percentage}%</StatPercentage>
          </StatItem>
        ))}
      </StatList>
    </StatSection>
  );
};
