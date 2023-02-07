import '../styles/admin.css';
import Header from './Header';

const Admin = () => {
    return (
        <div>
            <Header />
            <h1 class="h1-admin">Administrateur</h1>
            <div class="block-admin">
                <div>
                    <h2 class="h2-admin">Gestions des permissions</h2>
                </div>
                <div>
                    <form>
                        <label>Gestion des droits des utilisateurs : </label>
                        {/* Ajouter les différentes permisions */}
                        <select>
                            <option value="admin">Admin</option>
                        </select>
                        <input type="submit" value="Soumettre" id="button" />
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Admin;