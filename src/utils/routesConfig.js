import Home from "@/pages/Home";
import Register from "@/pages/Register";
import AccessibilityDeclaration from "@/pages/AccessibilityDeclaration";

const routesConfig = [
  { path: "/", name: "Accueil", component: Home },
  { path: "/register", name: "Inscription", component: Register },
  { path: '/accessibility', name: 'Déclaration d\'accessibilité', component: AccessibilityDeclaration},
  // Add more routes here as needed
];

export default routesConfig;