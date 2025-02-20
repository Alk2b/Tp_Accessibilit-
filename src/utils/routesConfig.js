import Home from "@/pages/Home";
import Register from "@/pages/Register";
import AccessibilityDeclaration from "@/pages/AccessibilityDeclaration";
import Sitemap from "@/pages/Sitemap";

const routesConfig = [
  { path: "/", name: "Accueil", component: Home },
  { path: "/register", name: "Inscription", component: Register },
  { path: '/accessibility', name: 'Déclaration d\'accessibilité', component: AccessibilityDeclaration},
  { path: "/sitemap", name: "Plan du site", component: Sitemap },
  // Add more routes here as needed
];

export default routesConfig;