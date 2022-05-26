import { RepositoryItemProps } from '../types/types'

export function RepositoryItem(props : RepositoryItemProps) {
  return (
    <li>
      <strong>{props.repository.name }</strong>
      <p>{props.repository.description}</p>
      <a href={props.repository.html_url}>Acessar Repositorio</a>
    </li>
  );
}
