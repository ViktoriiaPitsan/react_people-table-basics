import React from 'react';
import { Link } from 'react-router-dom';
import { Person } from '../../types';

interface Props {
  personName: string;
  person: Person | undefined;
}

export const PersonLink: React.FC<Props> = ({ personName, person }) => {
  if (!person) {
    return <>{personName}</>;
  }

  const isWoman = person.sex === 'f';
  const className = isWoman ? 'has-text-danger' : '';

  return (
    <Link to={`/people/${person.slug}`} className={className}>
      {personName}
    </Link>
  );
};
