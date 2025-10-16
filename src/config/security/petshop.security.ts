import { fullAccess, readOnly } from '../../shared/security/model.right';
import { page } from '../../shared/security/page.right';
import { Role } from '../../shared/security/role';
import { Security } from '../../shared/security/security';

//FIXME: menu.ts has the same information: isAdmin
export function createPetShopSecurity() {
  const petShopSecurity = new Security();
  petShopSecurity.roles = [createPublicRole(), createAdminRole(), createUserRole()];
  return petShopSecurity;
}

function createPublicRole(): Role {
  const publicRole = new Role();
  publicRole.name = 'public';
  publicRole.pageRights = [page('animalsPage')];
  return publicRole;
}

function createAdminRole(): Role {
  const adminRole = new Role();
  adminRole.name = 'admin';
  adminRole.pageRights = [page('dashboard'), page('demo')];
  adminRole.modelRights = [
    fullAccess('adopter'),
    fullAccess('adoptionApplication'),
    fullAccess('adoptionContract'),
    fullAccess('animal'),
    fullAccess('animalHealth'),
    fullAccess('enclosure'),
    fullAccess('shelter'),
  ];
  return adminRole;
}

function createUserRole(): Role {
  const userRole = new Role();
  userRole.name = 'user';
  userRole.pageRights = [page('dashboard')];
  userRole.modelRights = [readOnly('animal')];
  return userRole;
}
