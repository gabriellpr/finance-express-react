import Cadastro from "../../pages/Cadastro";

function Header() {
  return (
    <div className="title">
      <h1>Finance Express</h1>
      <ul>
        <li>
          <a href={Cadastro} className="cadastro">
            Criar conta
          </a>
        </li>
        <li>
          <a>Login</a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
