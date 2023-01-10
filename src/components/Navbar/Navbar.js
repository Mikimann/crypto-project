import Button from 'constants/styled-components/Button';
import { useAuth } from 'providers/useAuth';
import './Navbar.css';

function Navbar() {
  const auth = useAuth();
  const handleLogout = () => {
    auth.logout();
  };
  return (
    <div className="container mx-auto flex flex-col items-center bg-gray-100 p-4">
      <div>
        <nav>
          <ul>
            <li>
              <Button className="logout-button" onClick={handleLogout}>
                Log out
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
