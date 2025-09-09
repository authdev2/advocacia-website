import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    // Navigation
    home: 'Home',
    about: 'About',
    services: 'Services',
    news: 'News',
    contact: 'Contact',
    login: 'Login',
    admin: 'Admin',
    logout: 'Logout',
    
    // Mainpage
    security: 'Security',
    loyalty: 'Loyalty',
    defendRights: 'We defend your {rights}',
    rights: 'rights',
    mainDescription: "Don't let complex legal issues cause you unnecessary stress. Contact us today for an initial consultation. Your peace of mind is our priority.",
    whatsappButton: 'Talk on WhatsApp!',
    
    // Login
    loginTitle: 'Login',
    email: 'Email',
    password: 'Password',
    loginButton: 'Login',
    loginError: 'Invalid email or password',
    emailRequired: 'Please enter your email',
    passwordRequired: 'Please enter your password',
    validEmail: 'Please enter a valid email',
    
    // Admin
    adminPanel: 'Admin Panel',
    users: 'Users',
    news: 'News',
    addUser: 'Add User',
    deleteUser: 'Delete User',
    updateUser: 'Update User',
    addNews: 'Add News',
    deleteNews: 'Delete News',
    updateNews: 'Update News',
    title: 'Title',
    description: 'Description',
    image: 'Image',
    save: 'Save',
    cancel: 'Cancel',
    delete: 'Delete',
    edit: 'Edit',
    success: 'Success',
    error: 'Error',
    userAdded: 'User added successfully',
    userDeleted: 'User deleted successfully',
    userUpdated: 'User updated successfully',
    newsAdded: 'News added successfully',
    newsDeleted: 'News deleted successfully',
    newsUpdated: 'News updated successfully',
    fillAllFields: 'Please fill in all fields',
    validEmailRequired: 'Please enter a valid email',
    
    // Common
    loading: 'Loading...',
    noPermission: 'You do not have permission to access this page!',
    backToHome: 'Back to home page'
  },
  pt: {
    // Navigation
    home: 'Início',
    about: 'Sobre',
    services: 'Serviços',
    news: 'Notícias',
    contact: 'Contacto',
    login: 'Entrar',
    admin: 'Admin',
    logout: 'Sair',
    
    // Mainpage
    security: 'Segurança',
    loyalty: 'Lealdade',
    defendRights: 'Defendemos os teus {rights}',
    rights: 'direitos',
    mainDescription: 'Não deixes que questões legais complexas te causem stress desnecessário. Contacta-nos hoje mesmo para uma consulta inicial. A tua tranquilidade é a nossa prioridade.',
    whatsappButton: 'Fale no WhatsApp!',
    
    // Login
    loginTitle: 'Entrar',
    email: 'Email',
    password: 'Palavra-passe',
    loginButton: 'Entrar',
    loginError: 'Email ou palavra-passe inválidos',
    emailRequired: 'Por favor, insira o seu email',
    passwordRequired: 'Por favor, insira a sua palavra-passe',
    validEmail: 'Por favor, insira um email válido',
    
    // Admin
    adminPanel: 'Painel de Administração',
    users: 'Utilizadores',
    news: 'Notícias',
    addUser: 'Adicionar Utilizador',
    deleteUser: 'Eliminar Utilizador',
    updateUser: 'Atualizar Utilizador',
    addNews: 'Adicionar Notícia',
    deleteNews: 'Eliminar Notícia',
    updateNews: 'Atualizar Notícia',
    title: 'Título',
    description: 'Descrição',
    image: 'Imagem',
    save: 'Guardar',
    cancel: 'Cancelar',
    delete: 'Eliminar',
    edit: 'Editar',
    success: 'Sucesso',
    error: 'Erro',
    userAdded: 'Utilizador adicionado com sucesso',
    userDeleted: 'Utilizador eliminado com sucesso',
    userUpdated: 'Utilizador atualizado com sucesso',
    newsAdded: 'Notícia adicionada com sucesso',
    newsDeleted: 'Notícia eliminada com sucesso',
    newsUpdated: 'Notícia atualizada com sucesso',
    fillAllFields: 'Por favor, preencha todos os campos',
    validEmailRequired: 'Por favor, insira um email válido',
    
    // Common
    loading: 'A carregar...',
    noPermission: 'Não tem permissão para acessar esta página!',
    backToHome: 'Voltar para a página inicial'
  }
}

const i18n = createI18n({
  legacy: false, 
  locale: 'pt',  
  fallbackLocale: 'en',
  messages
})

export default i18n
