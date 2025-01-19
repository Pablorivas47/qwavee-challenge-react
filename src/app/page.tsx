
import HomePage from "./home/page";
import LoginPage from "./login/page";  // Importa el componente Login


 export default function Home() {
  return (
    <div>
      <LoginPage />  {/* Aquí renderizas el componente Login */}
    </div>
  );
}
