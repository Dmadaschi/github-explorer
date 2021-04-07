const repositoryName = 'unform';

export function RepositoryList(){
  return (
  <selection className='repositoryilist'>
    <h1>Lista de repositórios</h1>
    <ul>
      <li>
        <strong>{repositoryName}</strong>
        <p>Forms in React</p>
        <a href="">
          Acessar repositório 1
        </a>
      </li>
      <li>
        <strong>unform</strong>
        <p>Forms in React</p>
        <a href="">
          Acessar repositório 2
        </a>
      </li>
      <li>
        <strong>unform</strong>
        <p>Forms in React</p>
        <a href="">
          Acessar repositório 3
        </a>
      </li>
    </ul>
  </selection>
  );
}